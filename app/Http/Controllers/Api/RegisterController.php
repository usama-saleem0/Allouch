<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use App\Models\Branddetail;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\RegisterRequest;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;


class RegisterController extends Controller
{
    public function register(RegisterRequest $request)
    {
        // dd($request->all());
        try {
            $user = User::create([
                'user_name' => $request->input('user_name'),
                'contact' => $request->input('contact'),
                'auth_type' => $request->input('auth_type'),

                'email' => $request->input('email'),
                'password' => Hash::make($request->input('password')),
            ]);

            if (config('auth.must_verify_email')) {
                event(new Registered($user));
            }

            return response()->json(['data'=>$user]);
        } catch (\Exception $e) {
            return response([
                'message' => 'Internal error, please try again later.' 
            ], 400);
        }
    }


    public function profile(Request $request){
        // dd($request->facebook);


        $request->validate([
            'bio' => 'required|string',
            

            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048', 
        ]);
    
      
        $filename = $request->file('image')->getClientOriginalName();
        $imagePath =  $request->file('image')->move(public_path('uploads'), $filename);
       
        $product = User::where('id', $request->user_id)->first();
        if($product){

            $product->bio = $request->input('bio');
            $product->facebook = $request->input('facebook') ? $request->input('facebook'):'' ;
            $product->instagram = $request->input('instagram')? $request->input('instagram'):'';
            $product->linkdin = $request->input('linkdin') ? $request->input('linkdin'):'';
            $product->image = $filename; // Save the image path in the database
            $product->save();
        }

        else{
             $data = new User;

             $data->brand = $request->input('bio');
             $data->facebook = $request->input('facebook') ? $request->input('facebook'):'' ;
             $data->instagram = $request->input('instagram')? $request->input('instagram'):'';
             $data->linkdin = $request->input('linkdin') ? $request->input('linkdin'):'';
             $data->image = $filename; // Save the image path in the database
             $data->save();
          
        }
        return response()->json(['data'=>$request->user_id]);
    }

    public function brand_register(Request $request){
        // dd($request->all());

        $data = new Branddetail;
        $data->firstname = $request->first_name;
        $data->lastname = $request->last_name;
        $data->location = $request->location;
        $data->company = $request->company;
        $data->website = $request->website;
        $data->contact = $request->contact;
        $data->user_id = $request->userId;

        $data->save();

        return response()->json(['data'=>$data]);






    }

    public function businesstype(Request $request){

        $data = Branddetail::where('user_id' , $request->userId)->first();
        $data->business_type = $request->businesstype;

        $data->save();

        return response()->json(['data'=>$data]);
    }


    public function country(Request $request){

        $data = Branddetail::where('user_id' , $request->userId)->first();
        $data->country = $request->country;

        $data->save();

        return response()->json(['data'=>$data]);
    }
}
