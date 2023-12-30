<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class ProfileController extends Controller
{
     public function getuser(){
        // dd(auth()->user()->id);

        $data = User::where('id' , auth()->user()->id)->first();
        return response()->json(['data'=> $data]);
     }
}
