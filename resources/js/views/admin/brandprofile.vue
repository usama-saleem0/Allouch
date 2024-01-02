<template>
    <div class="box-2">
           <h2>Brand Profile</h2>
           <div class="row hei">
            <div class="col-7" style="display: flex;
    flex-direction: column;
    justify-content: center">
             <h2 style="color: #000;
    font-family: fantasy;
    font-size: 26px;
    font-style: normal;
    font-weight: 500;
    line-height: normal">{{ model.user_name }}</h2>
             <h6 style="font-size: smaller; color: black;">{{ model.brand.website }}</h6>

             <h6 style="font-size: smaller; color: black;"><i class="fas fa-fw fa-envelope" style="color: #F96;"></i>{{ model.email }}</h6>
             <h6 style="font-size: smaller; color: black;"><i class="fas fa-fw fa-flag" style="color: #F96;"></i>{{ model.brand.country }}</h6>

            </div>
            <div class="col-5">
           <div class="id-box">
             <img src='/images/Characters.png' alt="">
            </div>
        </div>
           
           
        </div>
        <div class="row alps">
            <div class="col-8">
                <span class="spanss">Total Hired Influencers</span>

            </div>
            <div class="col-4 text-center"> 
               <img src="/images/arrow.png"/><span class="spanss">15</span>

            </div>
        </div>
        <br>

        <div class="row alps">
            <div class="col-8">
                <span class="spanss">Total Hired Influencers</span>

            </div>
            <div class="col-4 text-center"> 
               <img src="/images/arrow.png"/><span class="spanss">15</span>

            </div>
        </div>
        <br>

        <div class="row alp">
            <div class="col-8 ">
                

                    <span class="spanss">Total Hired Influencers</span>
               
                
                   
                    
             

            </div>
            <div class="col-4 text-center"> 
               <span class="spanss"><img src="/images/arrow.png"/>15</span>
            
              


            </div>
            <div class="col-7 ">
                

               
           
            
                <span class="spa"><img src="/images/mdi_users.png"/>123 Enrolled Users</span>
                
         

        </div>
        <div class="col-5 text-center"> 
           
        
          <span class="spa"> <img src="/images/ph_chat-fill.png"/>100 Reviews</span>


        </div>
        </div>
        <br>

        <div class="row alp">
            <div class="col-8 ">
                

                    <span class="spanss">My Merchandise</span>
               
                
                   
                    
             

            </div>
            <div class="col-4 text-center"> 
               <span class="spanss"><img src="/images/arrow.png"/>10</span>
            
              


            </div>
            <div class="col-7 ">
                

               
           
            
                <span class="spa"><img src="/images/mdi_graph-line.png"/>123 Total Impressions</span>
                
         

        </div>
        <div class="col-5 text-center"> 
           
        
          <span class="spa"> <img src="/images/ep_sold-out.png"/>100 Sold</span>


        </div>
        </div>
        <br>

 
          
 
           <div class="para-box">
             <p>{{ model.brand.company }}</p>
             
              
             
 
           </div>
         </div>
 </template>
 
 <script>
 import Vue from 'vue'
 
 import { get , byMethod} from '../admin/components/lib/api'
 export default {
     name: 'profile',
 
 
 
     data () {
             return {
                 method:'POST',
                 model:{},
                 model:'',
 
                
                
               
               
               
             }
         },
         created(){
         
         get('/getuser')
               .then((res) => {
                 
                  this.setData(res)
 
               })
           
         }, 
 
         methods:{
             setData(res) {
         
               Vue.set(this.$data, 'model', res.data.data)
               console.log(res.data.data)
               
              
 
             //   console.log(res.data)
           },
 
             profile(){
                 this.$router.push('/admin/dashborad4')
             }
 
         }
 }
 </script>
 
 <style scoped>
 .hei{
    height: 350px
 }
 .aaa{
    display: flex;
    flex-direction: column;
 }
 .alps{
    border-radius: 10px;
background: #FFF;
box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
height: 52px;
    display: flex;
    align-content: center;
 }

 .alp{
    border-radius: 10px;
background: #FFF;
box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
height: 82px;
    display: flex;
    align-content: center;
 }

 .spanss{
    color: #000;

font-family: sans-serif;
font-size: 16px;
font-style: normal;
font-weight:  bold;
line-height: normal;
 }

 .spa{
    color: #000;

font-family: DM Sans;
font-size: 13px;
font-style: normal;
font-weight: 400;
line-height: normal;
 }
 
 .id-box img {
     width: 100%;
     border-radius: 50%;
    
     max-height: 190px;
     min-height: 190px;
     object-fit: contain;
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
     height: 100%;
     flex-shrink: 0;
 }
 .main {
     width: 100%;
     display: flex;
     justify-content: space-between;
   
 }
 
 .box-1 {
     height: 100%;
     background: transparent;
     width: 67%;
     display: flex;
     flex-wrap: wrap;
     align-items: center;
     justify-content: space-between;
     gap: 38px;
 }
 
 .box-2 {
     height: 100% !important;
     flex-shrink: 0;
     border-radius: 20px;
     background: #FFF;
     box-shadow: 0px 10px 54px 0px rgba(0, 0, 0, 0.25);
     width: 30%;
     padding: 30px;
 }
 
 .Sponsorship {
     width: 100%;
     height: 100%;
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
 
 
 
 .pox-3 {
     width: 100%;
     display: flex;
     justify-content: space-between;
     align-items: flex-end;
     padding: 25px 0px 0px 0px;
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
     flex-direction: column;
     align-items: center;
     padding: 70px 0px 120px 0px;
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
 
 .id-box h3 {color: #000;font-family: sans-serif;font-size: 16px;font-style: normal;font-weight: 500;line-height: normal;}
 
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
     white-space: nowrap;
     overflow: hidden;
     text-overflow: ellipsis;
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
     flex-direction: column;
 }
 
 .para-box p {
     color: #000;
     text-align: center;
     font-family: sans-serif;
     font-size: 16px;
     font-style: normal;
     font-weight: 500;
     line-height: 24px; /* 150% */
     margin: 0px;
     padding: 20px 0px 10px 0px;
 }
 
 .para-box button {
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
 
 .para-box button p {
     color: #FFF;
     text-align: center;
     font-family: sans-serif;
     font-size: 16px;
     font-style: normal;
     font-weight: 700;
     line-height: 24px; /* 150% */
     padding: 0px;
 }
 
 .new-1 {
     width: 100%;
     display: flex;
     justify-content: space-between;
 }
 
 .new-2 {
     width: 100%;
     display: flex;
     align-items: center;
     justify-content: space-between;
 }
 
 .new-3 {
     width: 100%;
     display: flex;
     align-items: center;
     justify-content: space-between;
 }
 
 .rol-1 {
     border-radius: 20px;
     background: #FFF;
     box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
     flex-shrink: 0;
     width: 36%;
     padding: 32px;
 }
 
 .rol-1 p {
     color: #000;
     font-family: sans-serif;
     font-size: 16px;
     font-style: normal;
     font-weight: 500;
     line-height: 24px; /* 150% */
     margin: 0px;
     padding-bottom: 12px;
 }
 
 .rol-1 h2 {
     color: #1B1C1D;
     font-family: sans-serif;
     font-size: 66px;
     font-style: normal;
     font-weight: bold;
     line-height: normal;
 }
 
 .new-btn-lid {
     width: 100%;
     display: flex;
     align-items: center;
     justify-content: space-between;
 }
 
 .new-btn-lid  button {
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
 }
 
 .new-btn-lid button p {
     margin: 0px;
     color: #FFF;
     text-align: center;
     font-family: sans-serif;
     font-size: 16px;
     font-style: normal;
     font-weight: 700;
     line-height: 24px;
     margin: 0px;
     padding: 0px;
 }
 
 .rol-3 {
     width: 62%;
     display: flex;
     flex-wrap: wrap;
     align-items: center;
     justify-content: space-between;
     padding-top: 24px;
 }
 
 .rol-3 p {
     margin: 0px;
     color: #000;
     font-family: sans-serif;
     font-size: 16px;
     font-style: normal;
     font-weight: 500;
     line-height: normal;
     width: 100%;
 }
 
 .rol-card {
     width: 48%;
     border-radius: 10px;
     background: #FFF;
     box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
     display: flex;
     align-items: center;
     justify-content: space-between;
     padding: 10px 15px;
     flex-wrap: wrap;
 }
 
 .rol-para h2 {
     color: #000;
     font-family: sans-serif;
     font-size: 16px;
     font-style: normal;
     font-weight: 500;
     line-height: normal;
     margin: 0px;
 }
 
 .rol-para {
     width: 84%;
 }
 
 .rol-para p {
     color: #000;
     font-family: sans-serif;
     font-size: 14px;
     font-style: normal;
     font-weight: 500;
     line-height: normal;
     margin: 0px;
 }
 
 .div-1 {
     width: 100%;
     display: flex;
     align-items: center;
     justify-content: space-around;
 }
 
 .div-1 h2 {
     color: #000;
     font-family: sans-serif;
     font-size: 16px;
     font-style: normal;
     font-weight: bold;
     line-height: normal;
     margin: 0px;
     width: 80%;
 }
 
 .div-1 p {
     width: 20%;
 }
 
 .div-2 {
     width: 100%;
     display: flex;
     align-items: center;
     justify-content: space-between;
     padding-top: 15px;
 }
 
 .Enrolled {
     display: flex;
     align-items: center;
     width: 58%;
 }
 
 .Enrolled {}
 
 .Reviews {
     width: 40%;
     display: flex;
     align-items: center;
 }
 
 .short-card {
     width: 24%;
     border-radius: 20px;
     background: #FFF;
     box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
     padding: 18px 25px;
 }
 
 .short-card p {
     color: #000;
     font-family: sans-serif;
     font-size: 16px;
     font-style: normal;
     font-weight: 500;
     line-height: 24px; /* 150% */
     margin: 0px;
 }
 
 .short-card h2 {
     color: #000;
     font-family: sans-serif;
     font-size: 42px;
     font-style: normal;
     font-weight: 1000;
     line-height: normal;
     margin: 0px;
     padding: 12px 0px 5px 0px;
 }
 
 .short-card h3 {
     color: #000;
     font-family: sans-serif;
     font-size: 16px;
     font-style: normal;
     font-weight: 400;
     line-height: normal;
     margin: 0px;
 }
 .dashbord-card {
     background: #FFF;
     box-shadow: 4px 0px 24px 0px rgba(0, 0, 0, 0.25);
     height: 417px;
     flex-shrink: 0;
     width: 64%;
     border-radius: 20px 0px 0px 20px;
 }
 
 .conting-card {
     height: 417px;
     flex-shrink: 0;
     background: #FFF;
     box-shadow: 4px 0px 24px 0px rgba(0, 0, 0, 0.25);
     width: 35%;
     padding: 42px 40px;
     display: flex;
     flex-wrap: wrap;
     align-items: center;
     justify-content: space-between;
     border-radius: 0px 20px 20px 0px;
 }
 
 .conting-card h2 {
     color: #000;
     font-family: sans-serif;
     font-size: 26px;
     font-style: normal;
     font-weight: 500;
     line-height: 24px; /* 92.308% */
     width: 100%;
     margin: 0px;
 }
 
 .divs {
     width: 48%;
 }
 
 .divs h2 {
     color: #F96;
     font-family: sans-serif;
     font-size: 21px;
     font-style: normal;
     font-weight: bold;
     line-height: 24px; /* 114.286% */
     margin: 0px;
 }
 
 .divs h3 {
     color: #000;
     font-family: sans-serif;
     font-size: 41px;
     font-style: normal;
     font-weight: 700;
     line-height: 24px; /* 58.537% */
     margin: 0px;
     padding-top: 20px;
 }
 @media screen and (max-width: 1600px){
    .hei{
        height: 265px;
    }
   .contanir {
     width: 100%;
     max-width: 1440px;
     margin: 0 auto;
 }
 .dashbord-card {
     background: #FFF;
     box-shadow: 4px 0px 24px 0px rgba(0, 0, 0, 0.25);
     height: 400px;
     flex-shrink: 0;
     width: 64%;
     border-radius: 20px 0px 0px 20px;
 }
 .divs h2 {
     color: #F96;
     font-family: sans-serif;
     font-size: 18px;
     font-style: normal;
     font-weight: bold;
     line-height: 24px;
     margin: 0px;
 }
 .divs h3 {
     color: #000;
     font-family: sans-serif;
     font-size: 38px;
     font-style: normal;
     font-weight: 700;
     line-height: 24px;
     margin: 0px;
     padding-top: 12px;
 }
 .rol-1 h2 {
     color: #1B1C1D;
     font-family: sans-serif;
     font-size: 55px;
     font-style: normal;
     font-weight: 1000;
     line-height: normal;
     text-align: center;
 }
 .new-btn-lid button {
     border-radius: 6px;
     border: 1px solid #000;
     background: #F96;
     box-shadow: 2px 2px 0px 0px #1B1C1D;
     display: flex;
     width: 130px;
     height: 38px;
     padding: 10px 18px;
     justify-content: center;
     align-items: center;
     gap: 7.647px;
     flex-shrink: 0;
 }
 .new-btn-lid button p {
     margin: 0px;
     color: #FFF;
     text-align: center;
     font-family: sans-serif;
     font-size: 12px;
     font-style: normal;
     font-weight: 700;
     line-height: 24px;
     margin: 0px;
     padding: 0px;
 }
 .rol-1 {
     border-radius: 20px;
     background: #FFF;
     box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
     flex-shrink: 0;
     width: 36%;
     padding: 30px;
 }
 .rol-3 {
     width: 62%;
     display: flex;
     flex-wrap: wrap;
     align-items: center;
     justify-content: space-between;
     padding-top: 15px;
 }
 .rol-card svg {
     width: 26px;
     height: 25px;
 }
 
 .rol-3 p {
     margin: 0px;
     color: #000;
     font-family: sans-serif;
     font-size: 14px;
     font-style: normal;
     font-weight: 500;
     line-height: normal;
     width: 100%;
 }
 .rol-para p {
     color: #000;
     font-family: sans-serif;
     font-size: 12px;
     font-style: normal;
     font-weight: 500;
     line-height: normal;
     margin: 0px;
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
 .div-1 p {
     width: 20%;
 }
 .short-card h2 {
     color: #000;
     font-family: sans-serif;
     font-size: 38px;
     font-style: normal;
     font-weight: 1000;
     line-height: normal;
     margin: 0px;
     padding: 5px 0px 0px 0px;
 }
 .conting-card {
     height: 400px;
     flex-shrink: 0;
     background: #FFF;
     box-shadow: 4px 0px 24px 0px rgba(0, 0, 0, 0.25);
     width: 35%;
     padding: 15px 25px;
     display: flex;
     flex-wrap: wrap;
     align-items: center;
     justify-content: space-between;
     border-radius: 0px 20px 20px 0px;
 }
 .id-box {
     width: 100%;
     display: flex;
     flex-direction: column;
     align-items: center;
     padding: 35px 0px 70px 0px;
 }
 .short-card {
     width: 24%;
     border-radius: 20px;
     background: #FFF;
     box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
     padding: 14px 20px;
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
 .para-box button {
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
 
    .hei{
        height: 230px;
    }
     .id-box h3 {
     color: #000;
     font-family: sans-serif;
     font-size: 14px;
     font-style: normal;
     font-weight: 500;
     line-height: normal;
 }
   .contanir {
     width: 100%;
     max-width: 1170px;
     margin: 0 auto;
 }
 .div-1 h2 {
     color: #000;
     font-family: sans-serif;
     font-size: 14px;
     font-style: normal;
     font-weight: bold;
     line-height: normal;
     margin: 0px;
     width: 80%;
 }
 .rol-para h2 {
     color: #000;
     font-family: sans-serif;
     font-size: 12px;
     font-style: normal;
     font-weight: 500;
     line-height: normal;
     margin: 0px;
 }
 
 .rol-3 p {
     margin: 0px;
     color: #000;
     font-family: sans-serif;
     font-size: 13px;
     font-style: normal;
     font-weight: 500;
     line-height: normal;
     width: 100%;
 }
 .rol-1 h2 {
     color: #1B1C1D;
     font-family: sans-serif;
     font-size: 38px;
     font-style: normal;
     font-weight: 1000;
     line-height: normal;
     text-align: center;
 }
 .new-btn-lid button {
     border-radius: 6px;
     border: 1px solid #000;
     background: #F96;
     box-shadow: 2px 2px 0px 0px #1B1C1D;
     display: flex;
     width: 110px;
     height: 34px;
     padding: 10px 0px;
     justify-content: center;
     align-items: center;
     gap: 4px;
     flex-shrink: 0;
 }
 .div-1 svg {
     width: 20px;
     height: 20px;
 }
 .div-1 p {
     width: 20%;
     font-size: 12px;
 }
 .rol-para p {
     color: #000;
     font-family: sans-serif;
     font-size: 10px;
     font-style: normal;
     font-weight: 500;
     line-height: normal;
     margin: 0px;
 }
 .Reviews p {
     font-size: 10px;
 }
 .Enrolled p {
     font-size: 10px;
 }
 .div-2 {
     width: 100%;
     display: flex;
     align-items: center;
     justify-content: space-between;
     padding-top: 3px;
 }
 .short-card p {
     color: #000;
     font-family: sans-serif;
     font-size: 15px;
     font-style: normal;
     font-weight: 500;
     line-height: 24px;
     margin: 0px;
 }
 .short-card h2 {
     color: #000;
     font-family: sans-serif;
     font-size: 25px;
     font-style: normal;
     font-weight: 1000;
     line-height: normal;
     margin: 0px;
     padding: 0px 0px 0px 0px;
 }
 .short-card {
     width: 24%;
     border-radius: 15px;
     background: #FFF;
     box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
     padding: 12px 20px;
 }
 .dashbord-card {
     background: #FFF;
     box-shadow: 4px 0px 24px 0px rgba(0, 0, 0, 0.25);
     height: 350px;
     flex-shrink: 0;
     width: 64%;
     border-radius: 20px 0px 0px 20px;
 }
 .conting-card {
     height: 350px;
     flex-shrink: 0;
     background: #FFF;
     box-shadow: 4px 0px 24px 0px rgba(0, 0, 0, 0.25);
     width: 35%;
     padding: 15px 25px;
     display: flex;
     flex-wrap: wrap;
     align-items: center;
     justify-content: space-between;
     border-radius: 0px 20px 20px 0px;
 }
 .box-1 {
     height: 100%;
     background: transparent;
     width: 67%;
     display: flex;
     flex-wrap: wrap;
     align-items: center;
     justify-content: space-between;
     gap: 30px;
 }
 .divs h2 {
     color: #F96;
     font-family: sans-serif;
     font-size: 16px;
     font-style: normal;
     font-weight: bold;
     line-height: 24px;
     margin: 0px;
 }
 .divs h3 {
     color: #000;
     font-family: sans-serif;
     font-size: 28px;
     font-style: normal;
     font-weight: 700;
     line-height: 24px;
     margin: 0px;
     padding-top: 10px;
 }
 .conting-card {
     height: 350px;
     flex-shrink: 0;
     background: #FFF;
     box-shadow: 4px 0px 24px 0px rgba(0, 0, 0, 0.25);
     width: 35%;
     padding: 12px 15px;
     display: flex;
     flex-wrap: wrap;
     align-items: center;
     justify-content: space-between;
     border-radius: 0px 20px 20px 0px;
 }
 .id-box {
     width: 100%;
     display: flex;
     flex-direction: column;
     align-items: center;
     padding: 40px 0px 65px 0px;
 }
 .rol-1 {
     border-radius: 20px;
     background: #FFF;
     box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
     flex-shrink: 0;
     width: 36%;
     padding: 20px;
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
     height: 100%;
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
     height: 100%;
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
     flex-direction: column;
     align-items: center;
     padding: 50px 0px 80px 0px;
 }
 
 
 .id-box img {
     width: 100%;
     border-radius: 50%;
    
     max-height: 150px;
     min-height: 150px;
     object-fit: contain;
 }
 .id-box h2 {
     color: #000;
     font-family: sans-serif;
     font-size: 24px;
     font-style: normal;
     font-weight: bold;
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
     font-size: 12px;
     font-style: normal;
     font-weight: 400;
     line-height: normal;
     margin: 0px;
 }
 .id-titel p {
     color: #000;
     font-family: sans-serif;
     font-size: 10px;
     font-style: normal;
     font-weight: 500;
     line-height: normal;
     margin: 0px;
     white-space: nowrap;
     overflow: hidden;
     text-overflow: ellipsis;
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
     font-size: 13px;
     font-style: normal;
     font-weight: 500;
     line-height: 24px;
     margin: 0px;
     padding: 20px 0px 10px 0px;
 }
 .para-box button {
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
     height: 100% !important;
     flex-shrink: 0;
     border-radius: 20px;
     background: #FFF;
     box-shadow: 0px 10px 54px 0px rgba(0, 0, 0, 0.25);
     width: 30%;
     padding: 24px;
 }
 }
 @media screen and (max-width: 1024px){
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
   height: 100%;
     background: transparent;
     width: 100%;
 }
 .box-2 {
     height: 100% !important;
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
   .cards {
     border-radius: 16px;
     border: 2px solid #000;
     background: #F96;
     box-shadow: 4px 4px 0px 2px #1B1C1D;
     width: 44%;
     height: 100%;
     flex-shrink: 0;
 }
 .new-1 {
     width: 100%;
     display: flex;
     justify-content: space-between;
     flex-direction: column;
 }
 .rol-1 {
     border-radius: 20px;
     background: #FFF;
     box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
     flex-shrink: 0;
     width: 45%;
     padding: 20px;
 }
 .rol-3 {
     width: 75%;
     display: flex;
     flex-wrap: wrap;
     align-items: center;
     justify-content: space-between;
     padding-top: 15px;
     gap: 15px;
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
     padding: 30px 0px 0px 0px ; 
     flex-direction: column;
     gap: 25px;
 }
 
 .btn-2 {
     display: flex;
     width: 60%;
     justify-content: space-between;
 }
 .box-2 {
     height: 100% !important;
     flex-shrink: 0;
     border-radius: 20px;
     background: #FFF;
     box-shadow: 0px 10px 54px 0px rgba(0, 0, 0, 0.25);
     width: 58%;
     padding: 24px;
 }
 .Sponsorship {
     width: 100%;
     height: 100%;
     flex-shrink: 0;
     border-radius: 20px;
     background: #FFF;
     box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
     padding: 30px 20px;
 }
 }
 @media screen and (max-width: 425px){
     .short-card h3 {
     color: #000;
     font-family: sans-serif;
     font-size: 12px;
     font-style: normal;
     font-weight: 400;
     line-height: normal;
     margin: 0px;
 }
 
 .id-titel p {
     color: #000;
     font-family: sans-serif;
     font-size: 8px;
     font-style: normal;
     font-weight: 500;
     line-height: normal;
     margin: 0px;
     white-space: nowrap;
     overflow: hidden;
     text-overflow: ellipsis;
 }
 .contact p {
     color: #000;
     font-family: sans-serif;
     font-size: 10px;
     font-style: normal;
     font-weight: 400;
     line-height: normal;
     margin: 0px;
 }
 
 .rol-1 p {
     color: #000;
     font-family: sans-serif;
     font-size: 13px;
     font-style: normal;
     font-weight: 500;
     line-height: 24px;
     margin: 0px;
     padding-bottom: 12px;
 }
 
 
   .page-1 {
     width: 100%;
     background-color: #F5F3EA;
     padding: 20px;
 }
 .rol-card svg {
     width: 20px;
     height: 20px;
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
     height: 100%;
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
     height: 100% !important;
     flex-shrink: 0;
     border-radius: 20px;
     background: #FFF;
     box-shadow: 0px 10px 54px 0px rgba(0, 0, 0, 0.25);
     width: 90%;
 }
 .id-box {
     width: 100%;
     display: flex;
     flex-direction: column;
     align-items: center;
     padding: 30px 0px 50px 0px;
 }
 .rol-1 {
     border-radius: 20px;
     background: #FFF;
     box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
     flex-shrink: 0;
     width: 100%;
     padding: 20px;
 }
 .new-btn-lid {
     width: 100%;
     display: flex;
     align-items: center;
     justify-content: center;
     gap: 20px;
 }
 .rol-3 {
     width: 100%;
     display: flex;
     flex-wrap: wrap;
     align-items: center;
     justify-content: space-between;
     padding-top: 15px;
     gap: 10px;
 }
 .rol-card {
     width: 48%;
     border-radius: 10px;
     background: #FFF;
     box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
     display: flex;
     align-items: center;
     justify-content: space-between;
     padding: 12px 10px;
     flex-wrap: wrap;
 }
 .rol-para h2 {
     color: #000;
     font-family: sans-serif;
     font-size: 12px;
     font-style: normal;
     font-weight: 500;
     line-height: normal;
     margin: 0px;
 }
 .rol-para p {
     color: #000;
     font-family: sans-serif;
     font-size: 8px;
     font-style: normal;
     font-weight: 500;
     line-height: normal;
     margin: 0px;
 }
 .div-1 h2 {
     color: #000;
     font-family: sans-serif;
     font-size: 12px;
     font-style: normal;
     font-weight: bold;
     line-height: normal;
     margin: 0px;
     width: 80%;
 }
 .div-1 svg {
     width: 15px;
     height: 15px;
 }
 .Enrolled p {
     font-size: 7px;
 }
 .Reviews p {
     font-size: 7px;
 }
 .Enrolled svg {
     width: 18px;
     height: 18px;
 }
 .Reviews svg {
     width: 18px;
     height: 18px;
 }
 .new-2 {
     width: 100%;
     display: flex;
     align-items: center;
     justify-content: center;
     flex-wrap: wrap;
     gap: 30px;
 }
 .short-card {
     width: 42%;
     background: #FFF;
     box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
     padding: 12px 20px;
 }
 .new-3 {
     width: 100%;
     display: flex;
     justify-content: space-between;
     flex-direction: column;
     align-items: center;
     gap: 28px;
 }
 .dashbord-card {
     background: #FFF;
     box-shadow: 4px 0px 24px 0px rgba(0, 0, 0, 0.25);
     height: 100%;
     flex-shrink: 0;
     width: 90%;
     border-radius: 20px;
 }
 .conting-card {
     height: 350px;
     flex-shrink: 0;
     background: #FFF;
     box-shadow: 4px 0px 24px 0px rgba(0, 0, 0, 0.25);
     width: 76%;
     padding: 12px 15px;
     display: flex;
     flex-wrap: wrap;
     align-items: center;
     justify-content: space-between;
     border-radius: 20px;
 }
 }
 </style>
 