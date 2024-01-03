<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Merchandise;

class MerchandiseController extends Controller
{
   public function addmerchandise(Request $request){
    // dd($request->all());


    if(isset($request->image)){

        $filename = $request->file('image')->getClientOriginalName();
        $imagePath =  $request->file('image')->move(public_path('uploads'), $filename);
     }

    $data = new Merchandise;
    $data->title = $request->title;
    $data->price = $request->price;
    $data->total = $request->quantity;
    $data->image = $filename;
    $data->user_id = auth()->user()->id;

    $data->save();

    return response()->json(['data' => $data]);




   }

}
