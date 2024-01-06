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


   public function getmerchandise(){
      $data = Merchandise::where('user_id' , auth()->user()->id)->limit(3)->get();
      return response()->json(['data' => $data]);
     }


     public function getmerchandises(){
      $data = Merchandise::with('user')->where('user_id' , auth()->user()->id)->get();
      return response()->json(['data' => $data]);
     }


     public function getmerchandises_inf(){
      $data = Merchandise::with('user')->where('assign_to' , auth()->user()->id)->get();
      return response()->json(['data' => $data]);
     }

}
