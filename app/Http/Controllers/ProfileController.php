<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class ProfileController extends Controller
{
     public function getuser(){
        // dd(auth()->user()->id);

        $data = User::with('brand')->where('id' , auth()->user()->id)->first();
        return response()->json(['data'=> $data]);
     }


     public function getinfluencer(){
      // dd(auth()->user());
        if(auth()->user()->auth_type =='Brand'){
       

         $data = User::where('auth_type' , 'Influencer')->get();
      }
      else{
         $data = User::where('auth_type' , 'Brand')->get();

      }
      return response()->json(['influencer' => $data]);
     }


     public function edit_profile(Request $request){
      //  dd($request->image);

      $request->validate([
        
         'image' => 'max:2048', 
     ]);

     if(isset($request->image)){

        $filename = $request->file('image')->getClientOriginalName();
        $imagePath =  $request->file('image')->move(public_path('uploads'), $filename);
     }
        
         $data = User::where('id' , auth()->user()->id)->first();
         $data->bio = $request->bio;
         $data->facebook = $request->facebook;
         $data->instagram = $request->instagram;
         $data->linkdin = $request->linkdin;
         $data->user_name = $request->username;
         if(isset($request->image)){

            $data->image = $filename;
         }
         $data->save();

         return response()->json(['saved' => true]);






     }
}
