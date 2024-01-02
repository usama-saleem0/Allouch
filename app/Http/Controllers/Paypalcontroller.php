<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Srmklive\PayPal\Services\PayPal as PayPalClient;
use App\Models\Order;

class Paypalcontroller extends Controller
{
    public function createTransaction()
    {
        return view('transaction');
    }
    /**
     * process transaction.
     *
     * @return \Illuminate\Http\Response
     */
    public function processTransaction(Request $request)
    {
        // dd($request->all());
        $request->user_id = 25;
        $provider = new PayPalClient;
        $provider->setApiCredentials(config('paypal'));
        $paypalToken = $provider->getAccessToken();
        $response = $provider->createOrder([
            "intent" => "CAPTURE",
            "application_context" => [
                "return_url" => route('successTransaction' , ['user_id' => $request->user_id]),
                "cancel_url" => route('cancelTransaction'),
            ],
            "purchase_units" => [
                0 => [
                    "amount" => [
                        "currency_code" => "USD",
                        "value" => "100.00"
                    ]
                ]
            ]
        ]);
        if (isset($response['id']) && $response['id'] != null) {
            // redirect to approve href
            foreach ($response['links'] as $links) {
                if ($links['rel'] == 'approve') {
                    return response($links['href']);

            //         $token = parse_url($links['href'], PHP_URL_QUERY);
            // return response()->json($token);
                    // return redirect()->away($links['href']);
                }
            }
            return redirect()
                ->route('createTransaction')
                ->with('error', 'Something went wrong.');
        } else {
            return redirect()
                ->route('createTransaction')
                ->with('error', $response['message'] ?? 'Something went wrong.');
        }
    }
    /**
     * success transaction.
     *
     * @return \Illuminate\Http\Response
     */
    public function successTransaction(Request $request)
    {
        // dd('efg');

        $user_id = $request->query('user_id');
        // dd($user_id);
        $provider = new PayPalClient;
        $provider->setApiCredentials(config('paypal'));
        $provider->getAccessToken();
        $response = $provider->capturePaymentOrder($request['token']);
        if (isset($response['status']) && $response['status'] == 'COMPLETED') {
// dd($response['purchase_units'][0]['payments']['captures'][0]['status']);
            $order = new Order();
        $order->payment_id = $response['id']; // Assuming the PayPal payment ID is stored in 'id'
        $order->user_id = $user_id; // Assuming you are using Laravel's authentication
        $order->order_amount = $response['purchase_units'][0]['payments']['captures'][0]['amount']['value'];
        $order->currency = $response['purchase_units'][0]['payments']['captures'][0]['amount']['currency_code'];
        $order->payment_method = 'PayPal';
        $order->payment_status = $response['purchase_units'][0]['payments']['captures'][0]['status'];


        $order->save();
            return redirect()
                ->route('createTransaction')
                ->with('success', 'Transaction complete.');
        } else {
            return redirect()
                ->route('createTransaction')
                ->with('error', $response['message'] ?? 'Something went wrong.');
        }
    }
    /**
     * cancel transaction.
     *
     * @return \Illuminate\Http\Response
     */
    public function cancelTransaction(Request $request)
    {
        return redirect()
            ->route('createTransaction')
            ->with('error', $response['message'] ?? 'You have canceled the transaction.');
    }
}
