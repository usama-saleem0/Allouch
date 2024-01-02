<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Chat;
use App\Models\User;
use Illuminate\Support\Str;

class ChatController extends Controller
{
    public function chats(Request $request){
            // dd($request->all());
        $randomNumber = random_int(1, 10000);
        // dd($randomNumber);
        $message = new Chat;
        $message->text = $request->message;
        $message->sender_id = auth()->user()->id;
        $message->reciever_id = $request->reciever_id;
        $message->reciever_name = $request->reciever_name;
        $message->room_id = $randomNumber;  
       

        $user = User::where('id' , auth()->user()->id)->first();
        
        $counts = $user->chat_count;
        $user->chat_count = $counts +1;
        $user->save();
        



        $message->save();

        return response()->json(['saved' => true]);




    }


    public function getchat(){
        $user = User::where('id' , request('id'))->first();
        
       
        $user->chat_count = 0;
        $user->save();
        // dd(request('id'));
        $data = Chat::where('sender_id' , auth()->user()->id)
        ->where('reciever_id' , request('id'))
        ->orWhere('sender_id' , request('id'))
        ->where('reciever_id' , auth()->user()->id)->get();
        return response()->json(['data' => $data , 'chat_user' => auth()->user()->id]);
    }


    public function getuser(){
        // dd(auth()->user()->id);
        // $data = User::get();
        $data = User::where('auth_type' , 'Influencer')->get();
        return response()->json(['influencer' => $data]);
    }
}
