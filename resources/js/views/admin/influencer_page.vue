<template>
 
   <div class="page-1">
    <div class="contanir" >
       <div class="main">
        <div class="box-1">
            <div class="Sponsorship">
            <h2 class="spon-para"> Influencers</h2>
            <div class="card-box">
                <div class="cards" v-for="item in model" @click="profile_page(item.id)">
                  <div class="poxi-1">
                    <!-- <img src="/images/id2.png" alt=""> -->
                    <img :src="'/uploads/' + item.image" alt="">

                    <div class="poxi-titel" style="overflow:hidden">
                        <h2>{{ item.user_name }}</h2>
                        <p>{{ item.email }}</p>
                    </div>
                  </div>
                  <div class="poxi-2">
                    <div class="poxi2-titel">
                        <h2>$12k</h2>
                        <p>Our Investment</p>
                    </div>
                    <div class="poxi2-titel0">
                        <h2>60%</h2>
                        <p>Profit Generated</p>
                    </div>
                    <div class="poxi2-titel">
                        <h2>$22k</h2>
                        <p>Total Income</p>
                    </div>
                  </div>
                  <div class="poxi-3">
                    <div class="poxi3-box">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M17.417 1.66675H2.58366C2.34054 1.66675 2.10739 1.76333 1.93548 1.93523C1.76357 2.10714 1.66699 2.3403 1.66699 2.58341V17.4167C1.66699 17.6599 1.76357 17.893 1.93548 18.0649C2.10739 18.2368 2.34054 18.3334 2.58366 18.3334H10.567V11.8751H8.40032V9.37508H10.567V7.50008C10.5221 7.05988 10.5741 6.61519 10.7193 6.1972C10.8644 5.7792 11.0993 5.39804 11.4074 5.08042C11.7155 4.76281 12.0893 4.51645 12.5027 4.35861C12.9161 4.20078 13.359 4.13529 13.8003 4.16675C14.4489 4.16276 15.0972 4.19614 15.742 4.26675V6.51675H14.417C13.367 6.51675 13.167 7.01675 13.167 7.74175V9.35008H15.667L15.342 11.8501H13.167V18.3334H17.417C17.5374 18.3334 17.6566 18.3097 17.7678 18.2636C17.879 18.2176 17.9801 18.15 18.0652 18.0649C18.1503 17.9798 18.2178 17.8788 18.2639 17.7675C18.3099 17.6563 18.3337 17.5371 18.3337 17.4167V2.58341C18.3337 2.46304 18.3099 2.34384 18.2639 2.23262C18.2178 2.12141 18.1503 2.02035 18.0652 1.93523C17.9801 1.85011 17.879 1.78259 17.7678 1.73653C17.6566 1.69046 17.5374 1.66675 17.417 1.66675Z" fill="#FF5757"/>
                        </svg>
                     <h3>{{ item.instagram ? item.instagram :'----' }}</h3>
                    </div>
                    <div class="poxi3-box">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M10.8565 1.66675C11.794 1.66925 12.2698 1.67425 12.6807 1.68591L12.8423 1.69175C13.029 1.69841 13.2132 1.70675 13.4357 1.71675C14.3223 1.75841 14.9273 1.89841 15.4582 2.10425C16.0082 2.31591 16.4715 2.60258 16.9348 3.06508C17.3586 3.48166 17.6865 3.98557 17.8957 4.54175C18.1015 5.07258 18.2415 5.67758 18.2832 6.56508C18.2932 6.78675 18.3015 6.97091 18.3082 7.15841L18.3132 7.32008C18.3257 7.73008 18.3307 8.20591 18.3323 9.14341L18.3332 9.76508V10.8567C18.3352 11.4646 18.3288 12.0724 18.314 12.6801L18.309 12.8417C18.3023 13.0292 18.294 13.2134 18.284 13.4351C18.2423 14.3226 18.1007 14.9267 17.8957 15.4584C17.6871 16.0149 17.3591 16.5189 16.9348 16.9351C16.5181 17.3587 16.0143 17.6865 15.4582 17.8959C14.9273 18.1017 14.3223 18.2417 13.4357 18.2834C13.2379 18.2927 13.0401 18.3011 12.8423 18.3084L12.6807 18.3134C12.2698 18.3251 11.794 18.3309 10.8565 18.3326L10.2348 18.3334H9.144C8.53588 18.3355 7.92777 18.3291 7.31983 18.3142L7.15816 18.3092C6.96034 18.3018 6.76256 18.2931 6.56483 18.2834C5.67816 18.2417 5.07316 18.1017 4.5415 17.8959C3.98539 17.6871 3.48168 17.3591 3.06566 16.9351C2.64153 16.5187 2.31335 16.0147 2.104 15.4584C1.89816 14.9276 1.75816 14.3226 1.7165 13.4351C1.70721 13.2373 1.69888 13.0396 1.6915 12.8417L1.68733 12.6801C1.67197 12.0724 1.66503 11.4646 1.6665 10.8567V9.14341C1.66417 8.53558 1.67028 7.92775 1.68483 7.32008L1.69066 7.15841C1.69733 6.97091 1.70566 6.78675 1.71566 6.56508C1.75733 5.67758 1.89733 5.07341 2.10316 4.54175C2.31242 3.985 2.64126 3.48093 3.0665 3.06508C3.48241 2.64131 3.98578 2.3134 4.5415 2.10425C5.07316 1.89841 5.67733 1.75841 6.56483 1.71675C6.7865 1.70675 6.9715 1.69841 7.15816 1.69175L7.31983 1.68675C7.92749 1.67194 8.53533 1.66555 9.14316 1.66758L10.8565 1.66675ZM9.99983 5.83341C8.89476 5.83341 7.83495 6.2724 7.05355 7.0538C6.27215 7.8352 5.83316 8.89501 5.83316 10.0001C5.83316 11.1052 6.27215 12.165 7.05355 12.9464C7.83495 13.7278 8.89476 14.1667 9.99983 14.1667C11.1049 14.1667 12.1647 13.7278 12.9461 12.9464C13.7275 12.165 14.1665 11.1052 14.1665 10.0001C14.1665 8.89501 13.7275 7.8352 12.9461 7.0538C12.1647 6.2724 11.1049 5.83341 9.99983 5.83341ZM9.99983 7.50008C10.3281 7.50003 10.6532 7.56464 10.9566 7.69022C11.2599 7.81581 11.5355 7.99991 11.7677 8.23202C11.9999 8.46413 12.1841 8.7397 12.3098 9.04299C12.4355 9.34628 12.5002 9.67136 12.5002 9.99966C12.5003 10.328 12.4357 10.6531 12.3101 10.9564C12.1845 11.2597 12.0004 11.5354 11.7683 11.7676C11.5362 11.9997 11.2606 12.1839 10.9573 12.3096C10.654 12.4353 10.329 12.5 10.0007 12.5001C9.33762 12.5001 8.70174 12.2367 8.2329 11.7678C7.76406 11.299 7.50066 10.6631 7.50066 10.0001C7.50066 9.33704 7.76406 8.70115 8.2329 8.23231C8.70174 7.76347 9.33762 7.50008 10.0007 7.50008M14.3757 4.58341C14.0994 4.58341 13.8344 4.69316 13.6391 4.88851C13.4437 5.08386 13.334 5.34881 13.334 5.62508C13.334 5.90135 13.4437 6.1663 13.6391 6.36165C13.8344 6.557 14.0994 6.66675 14.3757 6.66675C14.6519 6.66675 14.9169 6.557 15.1122 6.36165C15.3076 6.1663 15.4173 5.90135 15.4173 5.62508C15.4173 5.34881 15.3076 5.08386 15.1122 4.88851C14.9169 4.69316 14.6519 4.58341 14.3757 4.58341Z" fill="#FF5757"/>
                        </svg>
                     <h3>{{ item.facebook ? item.facebook:'----' }}</h3>
                    </div>
                  </div>
                  <div class="poxi-4">
                    <div class="poxi4-box">
                        <p>Tenure</p>
                        <h2>Since 46 days</h2>
                    </div>
                    <div class="poxi42-box">
                        <p>last Paid</p>
                        <h2>29 Feb 2022</h2>
                    </div>
                  </div>
              </div>


             
            </div>

            
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
                method:'POST',
                model:{},
                model:[],

                model:'',

               
               
              
              
              
            }
        },
        created(){
        
        get('/get_all_influencers')
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

          profile_page(e){
            this.$router.push(`/admin/dashborad4/${e}`)

          },

            profile(){
                this.$router.push('/admin/dashborad4')
            }

        }
}
</script>

<style scoped>




.card-box {
   

    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 30px 0px;
}

.cards {
    border-radius: 16px;
    border: 2px solid #000;
    background: #F96;
    box-shadow: 4px 4px 0px 2px #1B1C1D;
    width: 30%;
    height: 369px;
    flex-shrink: 0;
    padding: 30px;
    cursor: pointer;
}

.id-box img {
    width: 47%;
    border-radius: 50%;
   
    max-height: 190px;
    min-height: 190px;
    object-fit: cover;
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


.card-box {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 30px 0px;
}

.cards {
    border-radius: 16px;
    border: 2px solid #000;
    background: #F96;
    box-shadow: 4px 4px 0px 2px #1B1C1D;
    width: 30%;
    height: 100%;
    flex-shrink: 0;
    cursor: pointer;
}
.main {
    width: 100%;
    display: flex;
    justify-content: space-between;
  
}

.box-1 {
    height: 100%;
    background: transparent;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 38px;
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
    height: 100%;
    flex-shrink: 0;
    border-radius: 20px;
   
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



/* .../ */





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
    padding: 32px 0px 44px 0px;
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

.poxi-1 {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 30px;
}

.poxi-2 {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 10px;
}

.poxi-3 {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 45px 0px 21px 0px;
}

.poxi-4 {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.poxi-1 img {
    border-radius: 80px;
    width: 80px;
    height: 80px;
    flex-shrink: 0;
    object-fit: cover;
}

.poxi-titel h2 {
    color: #000;
    font-family: auto;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.poxi-titel h2 {
    color: #000;
    font-family: fantasy;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.poxi-titel p {
    color: #000;
    font-family: sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    padding: 0px;
    margin: 0px;
}

.poxi2-titel {
    width: 28%;
}

.poxi2-titel0 {
    width: 34%;
}

.poxi2-titel h2 {
    color: #000;
    font-family: fantasy;
    font-size: 34px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0px;
}

.poxi2-titel0 h2 {
    color: #000;
    font-family: fantasy;
    font-size: 34px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0px;
    border-left: 1px solid #000;
    border-right: 1px solid #000;
    text-align: center;
}
h2.spon-para {
    color: #000;
    font-family: fantasy;
    font-size: 30px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    padding-bottom: 24px;
}
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

.poxi2-titel p {
    color: #000;
    font-family: fantasy;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0px;
}

.poxi2-titel0 p {
    color: #000;
    font-family: fantasy;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0px;
    text-align: center;
}

.poxi3-box {
    width: 44%;
    display: flex;
    align-items: center;
    gap: 5px;
}

.poxi3-box h3 {
    color: #000;
    font-family: sans-serif;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin: 0px;
    margin: 0px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.poxi4-box {
    width: 60%;
}

.poxi4-box p {
    color: #000;
    font-size: 18px;
    font-family: sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0px;
}

.poxi4-box h2 {
    color: #000;
    font-family: fantasy;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0px;
}
.poxi42-box {
    width: 40%;
}

.poxi42-box p {
    color: #000;
    font-size: 18px;
    font-family: sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0px;
}

.poxi42-box h2 {
    color: #000;
    font-family: fantasy;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0px;
}
@media screen and (max-width: 1600px){
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
.cards {
    border-radius: 15px;
    border: 2px solid #000;
    background: #F96;
    box-shadow: 4px 4px 0px 2px #1B1C1D;
    width: 30%;
    height: 100%;
    flex-shrink: 0;
    padding: 20px;
    cursor: pointer;
}
button.Add {
    border-radius: 6px;
    border: 1px solid #000 !important;
    background: #F5F3EA !important;
    box-shadow: 2px 2px 0px 0px #1B1C1D !important; 
    color: #000 !important;
}
.poxi-1 img {
    border-radius: 80px;
    width: 70px;
    height: 70px;
    flex-shrink: 0;
    object-fit: cover;
}
.poxi-titel h2 {
    color: #000;
    font-family: fantasy;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
.poxi-titel p {
    color: #000;
    font-family: sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    padding: 0px;
    margin: 0px;
}
.poxi-1 {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 15px;
}
.poxi2-titel h2 {
    color: #000;
    font-family: fantasy;
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0px;
}
.poxi2-titel0 h2 {
    color: #000;
    font-family: fantasy;
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0px;
    border-left: 1px solid #000;
    border-right: 1px solid #000;
    text-align: center;
}
.poxi3-box h3 {
    color: #000;
    font-family: sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin: 0px;
    margin: 0px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.poxi3-box {
    width: 44%;
    display: flex;
    align-items: center;
    gap: 3px;
}
.poxi-3 {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 0px 18px 0px;
}
.poxi4-box p {
    color: #000;
    font-size: 16px;
    font-family: sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0px;
}
.poxi4-box h2 {
    color: #000;
    font-family: fantasy;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0px;
}
.poxi42-box p {
    color: #000;
    font-size: 16px;
    font-family: sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0px;
}
.poxi42-box h2 {
    color: #000;
    font-family: fantasy;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0px;
}
}

@media screen and (max-width: 1440px){

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
    width: 100%;
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
    border-radius: 14px;
    border: 2px solid #000;
    background: #F96;
    box-shadow: 4px 4px 0px 2px #1B1C1D;
    width: 32%;
    height: 100%;
    flex-shrink: 0;
    padding: 15px;
    cursor: pointer;
    
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
/* .id-box img {
    width: 40%;
} */

.id-box img {
    width: 50%;
    border-radius: 50%;
   
    max-height: 150px;
    min-height: 150px;
    object-fit: cover;
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
    padding: 25px 0px 25px 0px;
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
    height: 100%;
    flex-shrink: 0;
    border-radius: 20px;
    background: #FFF;
    box-shadow: 0px 10px 54px 0px rgba(0, 0, 0, 0.25);
    width: 30%;
    padding: 24px;
}
.poxi-1 img {
    border-radius: 80px;
    width: 60px;
    height: 60px;
    flex-shrink: 0;
    object-fit: cover;
}
.poxi-titel h2 {
    color: #000;
    font-family: fantasy;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding-bottom: 4px;
}
.poxi-1 {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
}
.poxi2-titel h2 {
    color: #000;
    font-family: fantasy;
    font-size: 23px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0px;
}
.poxi2-titel p {
    color: #000;
    font-family: fantasy;
    font-size: 9px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0px;
}
.poxi2-titel0 h2 {
    color: #000;
    font-family: fantasy;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0px;
    border-left: 1px solid #000;
    border-right: 1px solid #000;
    text-align: center;
}
.poxi2-titel0 p {
    color: #000;
    font-family: fantasy;
    font-size: 8px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0px;
    text-align: center;
}
.poxi3-box {
    width: 48%;
    display: flex;
    align-items: center;
    gap: 3px;
}
h2.spon-para {
    color: #000;
    font-family: fantasy;
    font-size: 30px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    padding-bottom: 15px;
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
    height: 720px;
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
    cursor: pointer;
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


    /* width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 30px 0px; */
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
    height: 720px;
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
    cursor: pointer;
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