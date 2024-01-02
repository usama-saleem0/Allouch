<template>
 
   <div class="page-1">
    <div class="contanir" >
       <div class="main">
        <div class="box-1">
        <div class="col-12 coloum">
          <div class="row cent">
        <div class="col" style="margin-bottom: 10px;margin-top: 10px;">
           
        <img src="/images/Ellipse.png" class="imgs"/>
        <span class="sp">{{ chatname }}</span>
        
        
      </div>
      <div class="col text-right" style="margin-bottom: 10px;margin-top: 10px;"><p style="color: #000;


font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
">See Profile

<img src="/images/basil_settings-solid.png"/>
      </p>
  </div>
      </div>
    <div class="chat-box" id="chat-box">
     
      <div class="col-12" v-for="message in messages" :key="message.id" >
        <div :class="{'dyncols': message.sender_id != chat_user, 'dyncol': message.sender_id == chat_user || message.user }">
          <div :class="{'message': message.sender_id == chat_user , 'messagess': message.sender_id != chat_user && !message.user, 'message':message.text }">
          <strong>{{message.sender_id ? message.sender_id == chat_user ? 'You': chatname:message.user}}:</strong> {{ message.text }}
        </div>
      </div>
        </div>
        
       
    </div>
    <div class="inps">
    <input class="inp"  v-model="newMessage" @keyup.enter="sendMessage" placeholder="Type a message...">
    <button @click="sendMessage" class="buttonsss"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"/></svg></button>
  </div>
</div>
  </div>
        <!-- <div class="box-1">
          <div class="Sponsorship">
       
            

           
          </div>
     
       
        </div> -->
        <div class="box-2">
          <h2>Influencer Profile</h2>
          <div class="row id-box ">
            <div class="col-6 text-center">
                <img v-if="model.auth_type == 'Influencer'" :src="'/uploads/' + model.image" alt="">
            <img v-if="model.auth_type == 'Brand'" src="/images/Characters.png" alt="">
          </div>
          <div class="col-6">
            <h2>{{ model.user_name }}</h2>
            <h3>{{ model.email }}</h3>
            <button class="buttons" @click="profile" v-if="model.auth_type == 'Influencer'">
              <p class="buttonp">Profile</p><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
  <path d="M2.51273 5.45272C3.05053 5.44321 3.5365 5.41563 4.01914 5.49884C4.07002 5.5074 4.12898 5.47935 4.18272 5.46318C4.44757 5.38329 4.71338 5.37236 4.98299 5.44131C5.21742 5.50122 5.4566 5.44986 5.69388 5.46746C6.06002 5.49456 6.42426 5.39566 6.78803 5.4142C7.08427 5.42942 7.38384 5.42466 7.67818 5.47079C7.82749 5.49409 7.96871 5.50217 8.12135 5.46366C8.2873 5.42229 8.45183 5.52167 8.62396 5.52167C8.81322 5.52167 8.99962 5.56922 9.18126 5.62343C9.38478 5.68382 9.43613 5.86831 9.28778 6.0181C9.06143 6.24682 8.76567 6.34715 8.45944 6.39185C8.20599 6.42894 7.94732 6.45033 7.69197 6.46365C7.42188 6.47744 7.14989 6.57064 6.87599 6.48029C6.82892 6.4646 6.77043 6.46127 6.72288 6.47411C6.40429 6.56161 6.07286 6.50264 5.75189 6.56541C5.65299 6.5849 5.54457 6.57825 5.44376 6.56256C5.30396 6.54068 5.16987 6.54449 5.03673 6.58823C4.8665 6.64434 4.69722 6.57302 4.52651 6.57634C4.3539 6.57967 4.18272 6.58585 4.01914 6.62722C3.76189 6.69284 3.50607 6.65623 3.25547 6.6296C3.02913 6.60583 2.81087 6.6258 2.58786 6.6315C2.37721 6.63721 2.15705 6.65528 1.94973 6.61867C1.71435 6.57682 1.61211 6.36189 1.52604 6.1655C1.44901 5.98957 1.55743 5.85975 1.67583 5.73327C1.85034 5.54639 2.05148 5.44653 2.31064 5.46413C2.39528 5.46983 2.48135 5.45414 2.51416 5.45224L2.51273 5.45272Z" fill="white"/>
  <path d="M9.13513 9.8451C8.83651 9.84748 8.60731 9.58072 8.65724 9.27068C8.69005 9.06574 8.76518 8.87411 8.89833 8.70768C9.00056 8.57977 9.10422 8.45091 9.18839 8.31111C9.48177 7.82181 9.80322 7.35391 10.1884 6.93166C10.2221 6.89457 10.2497 6.84654 10.2664 6.79899C10.3657 6.51416 10.565 6.2978 10.7595 6.07907C10.8779 5.94593 10.8883 5.84702 10.7533 5.7291C10.5745 5.57265 10.4347 5.39386 10.3353 5.17798C10.2649 5.02582 10.1166 4.93737 10.0082 4.81612C9.85743 4.64731 9.76043 4.44094 9.65439 4.24646C9.50745 3.97685 9.2949 3.76192 9.12229 3.5156C8.94825 3.26739 8.80227 3.00396 8.69671 2.71913C8.67294 2.65493 8.65629 2.58646 8.64964 2.51846C8.63775 2.39008 8.71573 2.31019 8.81607 2.2479C8.91069 2.18894 8.9958 2.21366 9.07949 2.27595C9.24497 2.39911 9.42043 2.5042 9.54882 2.67728C9.71287 2.89792 9.96299 3.0439 10.1052 3.28736C10.4799 3.50086 10.6601 3.88507 10.9159 4.20414C11.0662 4.39149 11.2497 4.55364 11.4261 4.71817C11.5683 4.85083 11.6843 4.99586 11.7357 5.18654C11.7656 5.29733 11.8322 5.38673 11.894 5.48136C12.0414 5.70722 12.0319 5.93737 11.8874 6.16276C11.6739 6.49562 11.497 6.85225 11.2549 7.16703C11.0039 7.49371 10.8375 7.87982 10.545 8.17844C10.3672 8.36008 10.273 8.59356 10.1632 8.81847C10.0115 9.12898 9.83222 9.4238 9.57782 9.66345C9.43755 9.79517 9.30917 9.84415 9.13656 9.84557L9.13513 9.8451Z" fill="white"/>
</svg>
            </button>
          </div>
          </div>

         

          

          <div class="para-box">
            <p>{{ model.bio }}</p>
             
           

          </div>
        </div>
       </div>
    </div>
   </div>
 
</template>

<script>

import Vue from 'vue'

import { get , byMethod} from '../admin/components/lib/api'
export default {
    name: 'admin',

    data () {
            return {
               
               
              userselect:false,
        form:{},
        chatname:'Christiana Adams',
        model:[],
        model:{},
        method:'POST',
        messages: [],
        chat_user:'',
        // form: [],

        newMessage: '',

              
              
              
            }
        },

        created(){
        
        get('/getuser')
              .then((res) => {
                
                 this.setData(res)

              })
          
        }, 

        methods:{

            profile(){
                this.$router.push('/admin/dashborad4')
            },
            sendMessage() {
          
          if (this.newMessage.trim() !== '') {
            this.messages.push({ user: 'You', text: this.newMessage });
           
            this.scrollChatToBottom();
           
            // this.form.message = this.messages.text

         
          }
          this.form.message = this.newMessage;
          // console.log(this.newMessage)
          // byMethod(this.method, 'chats', this.form)
          //           .then((res) => {
          //             if(res.data && res.data.saved) {
          //               get('/getuserchat')
          //     .then((res) => {
                
          //        this.setData(res)

          //     })
                        
          //             }
          //           })
          //           this.newMessage = '';

          this.newMessage = '';
        },
        scrollChatToBottom() {
          const chatBox = document.getElementById('chat-box');
          chatBox.scrollTop = chatBox.scrollHeight;
        },

        setData(res) {
        
        Vue.set(this.$data, 'model', res.data.data)
        console.log(res.data.data)
        
       

      //   console.log(res.data)
    },

        }
}
</script>

<style scoped>

.cent{
  background-color: #FF9966;
    display: flex;
    align-items: center;
    border-radius: 10px 10px 0px 0px;
}


.dyncols{
  display: flex;
    justify-content: flex-start;
}

.dyncol{
  display: flex;
    justify-content: flex-end;
}
.message {
  max-width: 50%;
    word-wrap: break-word;
    background-color: #FF9966;
    min-height: 50px;
    border-radius: 10px 10px 0px 10px;
    padding: 5px;
    margin-bottom: 10px;
    border: 2px solid #000;
 
    box-shadow: 4px 4px 0px 2px #1B1C1D;
}


.messagess {
 max-width: 50%;
    word-wrap: break-word;
    background-color: rgb(225, 220, 220);
    min-height: 50px;
    border-radius: 10px 10px 0px 10px;
    padding: 5px;
        margin-bottom: 10px;

        border: 2px solid #000;
 
 box-shadow: 4px 4px 0px 2px #1B1C1D;
}



::-webkit-scrollbar {
  width: 1px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey; 
  border-radius: 10px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(20, 20, 20); 
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #1b1b1b; 
}

.hhh{
  color: black;
    font-weight: bold;
}
.sp{
  color: #000;
   
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    
}


.imgs{
  height: 55px;
    /* margin-left: 10px; */
    padding: 0px 10px 0px 10px;
}

.blacktr{
  color: white;
    background-color: #101010;
}

.orangetr{
  color: black;
    
}

.buttonsss{
  
  border: none;
    width: 80px;
    height: 44px;
    border-radius: 10px;
    background-color: #FF9966;
    color: white;
    font-weight: bold;
    bottom: 0;
    margin-bottom: 12px;
    font-size: x-large;
}

.buttonss{
  
  border: none;
    background-color: #e37a00;
    color: white;
    border-radius: 5px;
}


.lefts{
  font-size: x-small;
    margin-left: 10px;
    color: gray;
    padding-bottom: 15px;
}
.rounded_image{
  /* width: 15%; */
   
    margin-left: 10px;
}

    /* #app {
      max-width: 400px;
      margin: 0 auto;
      padding: 20px;
      border: 1px solid #ccc;
    } */
    .chat-box {
      
    height: 500px;
    overflow-y: scroll;
    overflow-x: hidden;
    height: 445px;
    /* overflow-y: scroll; */
    background-color: white;
    color: black;
    /* border-radius: 20px; */
    padding: 10px;
    width: 101%;
    }
    .coloum{
      background-color: white;
    border-radius: 20px;
    margin-bottom: 20px;
    }

    .buttonsss{
      border: none;
    width: 80px;
    height: 44px;
    border-radius: 10px;
    background-color: #FF9966;
    color: white;
    font-weight: bold;
    bottom: 0;
    margin-bottom: 12px;
    }

    .inp{
      width: 88%;
    border-radius: 10px;
    height: 2em;
    background-color: #FF9966;
    border: none;

    color: black;
    }

    .inps{
      /* width: 88%; */
    /* border-radius: 10px; */
    height: 3em;
    background-color: #FF9966;
    border: none;

    color: black;
    border-radius: 16px;
border: 2px solid #000;



box-shadow: 4px 4px 0px 2px #1B1C1D;
    }
    
.page-1 {
    width: 100%;
    background-color: #F5F3EA;
    padding: 30px;
}

.contanir {
    width: 100%;
    max-width: 1600px;
    margin: 0 auto;
}
.Sponsorship h2 {
    color: #000;
    font-family: sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 150% */
    padding-bottom: 25px;
    margin: 0px ;
}

.card-box {
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.cards {
    border-radius: 16px;
    border: 2px solid #000;
    background: #F96;
    box-shadow: 4px 4px 0px 2px #1B1C1D;
    width: 30%;
    height: 369px;
    flex-shrink: 0;
}
.main {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.box-1 {
    /* height: 871px; */
    background: transparent;
    width: 67%;
}

.box-2 {
    height: 100%;
    flex-shrink: 0;
    border-radius: 20px;
    background: #FFF;
    box-shadow: 0px 10px 54px 0px rgba(0, 0, 0, 0.25);
    width: 30%;
    padding: 30px;
}

.Sponsorship {
    width: 100%;
    height: 871px;
    flex-shrink: 0;
    border-radius: 20px;
    background: #FFF;
    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
    padding: 30px 33px ;
}
.btn-box {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px 0px;
}

.btn-2 {
    display: flex;
    width: 46%;
    justify-content: space-between;
}

.btn-1 {
    width: 35%;
    display: flex;
    align-items: center;
    gap: 18px;
}

.Campaign {
    display: flex;
    align-items: center;
    gap: 10px;
    border-radius: 10px;
    background: #FFF;
    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
    padding: 12px 20px;
}

.Campaign h2 {
    padding: 0px;
    color: #000;
    font-family: sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}

.Campaign p {
    color: #000;
    font-family: sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin: 0px;
}

.over-btn {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 50px 0px 0px 0px;
}

.over-btn button {
    border-radius: 6px;
    border: 1px solid #000;
    background: #F96;
    box-shadow: 2px 2px 0px 0px #1B1C1D;
    display: inline-flex;
    padding: 10px 21.25px 10px 20px;
    justify-content: center;
    align-items: center;
    gap: 4.75px;
    color: #FFF;
    text-align: center;
    font-family: sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 150% */
}

.btn-1 button {
    border-radius: 6px;
    border: 1px solid #000;
    background: #F96;
    box-shadow: 2px 2px 0px 0px #1B1C1D;
    display: flex;
    width: 154.75px;
    justify-content: center;
    align-items: center;
    gap: 7.647px;
    flex-shrink: 0;
    padding: 10px;
    color: #FFF;
    text-align: center;
    font-family: sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 150% */
}

button.Add {
    border-radius: 6px;
    border: 1px solid #000;
    background: #F5F3EA;
    box-shadow: 2px 2px 0px 0px #1B1C1D;
    color: #000;
}

.OverView {
    width: 100%;
    padding-top: 75px;
}

.OverView h2 {
    color: #000;
    font-family: sans-serif;
    font-size: 26px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 92.308% */
    margin: 0px;
    padding-bottom: 30px;
}

.over-box {
    width: 100%;
    display: flex;
}

.Over-card h4 {
    color: #FF5757;
    font-family: sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 800;
    line-height: 24px; /* 114.286% */
    margin: 0px;
}

.Over-card h4 span {
    color: #000;
    font-family: sans-serif;
    font-size: 38px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 58.537% */
    padding-left: 5px;
}

.Over-card {
    width: 25%;
}

/* .../ */
.pox-1 {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border-bottom: 1px solid #000;
}

.pox-1 h2 {
    color: #000;
    text-align: center;
    font-family: sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 800;
    line-height: 24px; /* 150% */
    margin: 0px;
    padding: 0px;
}

.top-btn {
    width: 49%;
    display: flex;
    align-items: center;
}

.top-btn button {
    border: none;
    background: transparent;
}

.pox-2 {
    width: 100%;
    padding: 20px;
}

.pox-2 p {
    color: #000;
    font-family: sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.96px;
    margin: 0px;
}

.pox-2 h2 {
    color: #000;
    font-family: sans-serif;
    font-style: normal;
    font-weight: 600;
    line-height: 24px; /* 150% */
    padding: 15px 0px;
}

.pox-box {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 10px 0px;
}

.yes {
    width: 50%;
    display: flex;
    align-items: center;
    gap: 5px;
}

.yes {}

.pox-3 {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 25px 0px;
}

.pox-3 h2 {
    color: #000;
    font-family: sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding: 0px 0px 0px 0px;
}

.pox-3 p {
    color: #000;
    text-align: center;
    font-family: sans-serif;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px; /* 150% */
    width: 40%;
}



.pox-3 h2 span {
    color: #000;
    font-family: sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}


button.llo {
    color: #fff;
}

/* .../ */


.id-box img {
    width: 80%;
    border-radius: 50%;
    max-height: 140px;
    min-height: 140px;

   
    object-fit: cover;

}


.box-2 h2 {
    color: #000;
    font-family: sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}

.id-box {
    width: 100%;
    display: flex;
    /* flex-direction: column; */
    align-items: center;
    padding: 20px 0px 25px 0px;
}

.id-box h2 {
    color: #000;
    font-family: sans-serif;
    font-size: 26px;
    font-style: normal;
    font-weight: bold;
    line-height: normal;
    margin: 0px;
    padding: 20px 0px 4px 0px;
}

.id-box h3 {color: #000;font-family: sans-serif;font-size: 12px;font-style: normal;font-weight: 500;line-height: normal;}

.titel-box {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 20px;
}

.id-titel {
    display: flex;
    align-items: center;
    width: 30%;
    justify-content: space-between;
}

.id-titel p {
    color: #000;
    font-family: sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin: 0px;
}
.contact-box {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-bottom: 40px;
}

.contact {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
}

.contact p {
    color: #000;
    font-family: sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0px;
}

.para-box {
    width: 100%;
    border-top: 1px solid #F96;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}

.para-box p {
    color: #000;
    text-align: center;
    font-family: sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px; /* 150% */
    margin: 0px;
    padding: 20px 0px 0px 0px;
}

.buttons {
    border-radius: 6px;
    border: 1px solid #000;
    background: #F96;
    box-shadow: 2px 2px 0px 0px #1B1C1D;
    display: flex;
    width: 154.75px;
    height: 44px;
    padding: 10px 18px;
    justify-content: center;
    align-items: center;
    gap: 7.647px;
    flex-shrink: 0;
     /* 150% */
}

.buttonp {
    color: #FFF;
    text-align: center;
    font-family: sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; 
    padding-top: 15px;
}
@media screen and (max-width: 1600px){
  .contanir {
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
}
.pox-1 {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
    border-bottom: 1px solid #000;
}
.top-btn button {
    border: none;
    background: transparent;
    padding: 4px;
}
.yes {
    width: 50%;
    display: flex;
    align-items: center;
    gap: 2px;
}
.pox-3 h2 span {
    color: #000;
    font-family: sans-serif;
    font-size: 17px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}
.pox-3 p {
    color: #000;
    text-align: center;
    font-family: sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    width: 40%;
}
.pox-3 h2 {
    color: #000;
    font-family: sans-serif;
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding: 0px 0px 0px 0px;
}
.btn-1 button {
    border-radius: 6px;
    border: 1px solid #000;
    background: #F96;
    box-shadow: 2px 2px 0px 0px #1B1C1D;
    display: flex;
    width: 154.75px;
    justify-content: center;
    align-items: center;
    gap: 7.647px;
    flex-shrink: 0;
    padding: 8px;
    color: #FFF;
    text-align: center;
    font-family: sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
}
.btn-2 {
    display: flex;
    width: 50%;
    justify-content: space-between;
}
.id-titel {
    display: flex;
    align-items: center;
    width: 32%;
    justify-content: space-between;
}
.over-btn button {
    border-radius: 6px;
    border: 1px solid #000;
    background: #F96;
    box-shadow: 2px 2px 0px 0px #1B1C1D;
    display: inline-flex;
    padding: 8px 21.25px 8px 20px;
    justify-content: center;
    align-items: center;
    gap: 4.75px;
    color: #FFF;
    text-align: center;
    font-family: sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
}
.Over-card h4 span {
    color: #000;
    font-family: sans-serif;
    font-size: 35px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    padding-left: 5px;
}
.Over-card h4 {
    color: #FF5757;
    font-family: sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 800;
    line-height: 24px;
    margin: 0px;
}
.buttons {
    border-radius: 6px;
    border: 1px solid #000;
    background: #F96;
    box-shadow: 2px 2px 0px 0px #1B1C1D;
    display: flex;
    width: 154.75px;
    height: 42px;
    padding: 10px 18px;
    justify-content: center;
    align-items: center;
    gap: 7.647px;
    flex-shrink: 0;
}
button.Add {
    border-radius: 6px;
    border: 1px solid #000 !important;
    background: #F5F3EA !important;
    box-shadow: 2px 2px 0px 0px #1B1C1D !important; 
    color: #000 !important;
}
}

@media screen and (max-width: 1440px){

    .id-box h3 {color: #000;font-family: sans-serif;font-size: 10px;font-style: normal;font-weight: 500;line-height: normal;}
  .contanir {
    width: 100%;
    max-width: 1170px;
    margin: 0 auto;
}
.pox-2 h2 {
    color: #000;
    font-family: sans-serif;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
    padding: 12px 0px;
}
.Sponsorship {
    width: 100%;
    height: 720px;
    flex-shrink: 0;
    border-radius: 20px;
    background: #FFF;
    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
    padding: 30px 20px;
}
.OverView {
    width: 100%;
    padding-top: 60px;
}
.OverView h2 {
    color: #000;
    font-family: sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    margin: 0px;
    padding-bottom: 20px;
}
.Over-card h4 {
    color: #FF5757;
    font-family: sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 800;
    line-height: 24px;
    margin: 0px;
}
.Over-card h4 span {
    color: #000;
    font-family: sans-serif;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    padding-left: 0px;
}
.over-btn {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 40px 0px 0px 0px;
}
.over-btn button {
    border-radius: 6px;
    border: 1px solid #000;
    background: #F96;
    box-shadow: 2px 2px 0px 0px #1B1C1D;
    display: inline-flex;
    padding: 7px 16.25px 7px 15px;
    justify-content: center;
    align-items: center;
    gap: 4.75px;
    color: #FFF;
    text-align: center;
    font-family: sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
}
.top-btn button {
    border: none;
    background: transparent;
    padding: 4px;
    display: flex;
    align-items: center;
}
.top-btn button svg {
    width: 15px;
    height: 15px;
}
.top-btn {
    width: 42%;
    display: flex;
    align-items: center;
}
.pox-1 {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
    border-bottom: 1px solid #000;
}
.top-btn button span {
    font-size: 12px;
}
.pox-1 h2 {
    color: #000;
    text-align: center;
    font-family: sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 800;
    line-height: 24px;
    margin: 0px;
    padding: 0px;
}
.pox-2 {
    width: 100%;
    padding: 10px;
}
.pox-2 p {
    color: #000;
    font-family: sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.96px;
    margin: 0px;
}
.pox-3 h2 {
    color: #000;
    font-family: sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding: 0px 0px 0px 0px;
    width: 58%;
}
.pox-3 {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 15px 0px;
}

.pox-box {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 5px 0px;
}
.cards {
    border-radius: 16px;
    border: 2px solid #000;
    background: #F96;
    box-shadow: 4px 4px 0px 2px #1B1C1D;
    width: 30%;
    height: 280px;
    flex-shrink: 0;
}
.yes p {
    font-size: 14px;
}
.pox-3 h2 span {
    color: #000;
    font-family: sans-serif;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}
.pox-3 p {
    color: #000;
    text-align: center;
    font-family: sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    width: 44%;
    margin: 0px;
    padding: 0px;
}
.btn-1 button {
    border-radius: 6px;
    border: 1px solid #000;
    background: #F96;
    box-shadow: 2px 2px 0px 0px #1B1C1D;
    display: flex;
    width: 130.75px;
    justify-content: center;
    align-items: center;
    gap: 7.647px;
    flex-shrink: 0;
    padding: 6px;
    color: #FFF;
    text-align: center;
    font-family: sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
}
.btn-2 {
    display: flex;
    width: 52%;
    justify-content: space-between;
}
.Campaign {
    display: flex;
    align-items: center;
    gap: 8px;
    border-radius: 10px;
    background: #FFF;
    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
    padding: 8px 10px;
}
.Campaign svg {
    width: 30px;
    height: 30px;
}
.id-box {
    width: 100%;
    display: flex;
    /* flex-direction: column; */
    align-items: center;
    padding: 20px 0px 25px 0px;
}
.id-box img {
    width: 100%;
  
    border-radius: 50%;
    max-height: 130px;
    min-height: 130px;

    object-fit: cover;

}
.id-box h2 {
    color: #000;
    font-family: sans-serif;
    font-size: 21px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    margin: 0px;
    padding: 15px 0px 2px 0px;
}
.contact {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5px;
}
.contact p {
    color: #000;
    font-family: sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0px;
}
.id-titel p {
    color: #000;
    font-family: sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin: 0px;
}
.id-titel svg {
    width: 18px;
    height: 18px;
}
.contact-box {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-bottom: 15px;
}
.para-box p {
  color: #000;
    text-align: center;
    font-family: sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
    margin: 0px;
    padding: 20px 0px 0px 0px;
}
.buttons {
    border-radius: 6px;
    border: 1px solid #000;
    background: #F96;
    box-shadow: 2px 2px 0px 0px #1B1C1D;
    display: flex;
    width: 144.75px;
    height: 38px;
    padding: 10px 18px;
    justify-content: center;
    align-items: center;
    gap: 7.647px;
    flex-shrink: 0;
}
.main {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}
.box-2 {
    height:100%;
    flex-shrink: 0;
    border-radius: 20px;
    background: #FFF;
    box-shadow: 0px 10px 54px 0px rgba(0, 0, 0, 0.25);
    width: 30%;
    padding: 24px;
}
}
@media screen and (max-width: 1024px){
    .id-box h3 {color: #000;font-family: sans-serif;font-size: 10px;font-style: normal;font-weight: 500;line-height: normal;}
  .page-1 {
    width: 100%;
    background-color: #F5F3EA;
    padding: 40px;
}
.main {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 55px 0px;
}
.box-1 {
  /* height: 720px; */
    background: transparent;
    width: 100%;
}
.box-2 {
    height: 100%;
    flex-shrink: 0;
    border-radius: 20px;
    background: #FFF;
    box-shadow: 0px 10px 54px 0px rgba(0, 0, 0, 0.25);
    width: 42%;
    padding: 24px;
}
.btn-2 {
    display: flex;
    width: 44%;
    justify-content: space-between;
}
}
@media screen and (max-width: 768px){
    .id-box h3 {color: #000;font-family: sans-serif;font-size: 10px;font-style: normal;font-weight: 500;line-height: normal;}
  .cards {
    border-radius: 16px;
    border: 2px solid #000;
    background: #F96;
    box-shadow: 4px 4px 0px 2px #1B1C1D;
    width: 44%;
    height: 260px;
    flex-shrink: 0;
}
.card-box {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    gap: 31px;
}
.btn-box {
    width: 100%;
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    padding: 30px 0px;
    flex-direction: column;
    gap: 25px;
}

.btn-2 {
    display: flex;
    width: 60%;
    justify-content: space-between;
}
.box-2 {
    height: 100%;
    flex-shrink: 0;
    border-radius: 20px;
    background: #FFF;
    box-shadow: 0px 10px 54px 0px rgba(0, 0, 0, 0.25);
    width: 58%;
    padding: 24px;
}
.Sponsorship {
    width: 100%;
    height: 720px;
    flex-shrink: 0;
    border-radius: 20px;
    background: #FFF;
    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
    padding: 30px 20px;
}
}
@media screen and (max-width: 425px){
    .id-box h3 {color: #000;font-family: sans-serif;font-size: 8px;font-style: normal;font-weight: 500;line-height: normal;}
  .page-1 {
    width: 100%;
    background-color: #F5F3EA;
    padding: 20px;
}
.yes {
    width: 50%;
    display: flex;
    align-items: center;
    gap: 2px;
    justify-content: center;
}
.cards {
    border-radius: 16px;
    border: 2px solid #000;
    background: #F96;
    box-shadow: 4px 4px 0px 2px #1B1C1D;
    width: 85%;
    height: 260px;
    flex-shrink: 0;
}
.btn-box {
    width: 100%;
    display: flex;
    padding: 30px 0px 0px 0px;
    flex-direction: column;
    gap: 25px ;
    align-content: center;
    align-items: center;
}
.btn-1 {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 18px;
    justify-content: center;
}
.btn-2 {
    display: flex;
    width: 60%;
    flex-direction: column;
    gap: 12px;
}
.over-box {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 20px 0px;
}
.Over-card {
    width: 50%;
}
.OverView {
    width: 100%;
    padding-top: 40px;
}
.over-btn button {
    border-radius: 6px;
    border: 1px solid #000;
    background: #F96;
    box-shadow: 2px 2px 0px 0px #1B1C1D;
    display: inline-flex;
    padding: 6px 16.25px 6px 15px;
    justify-content: center;
    align-items: center;
    gap: 4.75px;
    color: #FFF;
    text-align: center;
    font-family: sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
}
.over-btn {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 30px 0px 0px 0px;
}
.box-2 {
    height: 100%;
    flex-shrink: 0;
    border-radius: 20px;
    background: #FFF;
    box-shadow: 0px 10px 54px 0px rgba(0, 0, 0, 0.25);
    width: 90%;
}
.id-box {
    width: 100%;
    display: flex;
    /* flex-direction: column; */
    align-items: center;
    padding: 20px 0px 25px 0px;
}
}
</style>