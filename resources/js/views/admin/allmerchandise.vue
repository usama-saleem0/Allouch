<template>
 
   <div class="page-1">
    <div class="contanir" >
       <div class="main">
        <div class="box-1">
          <div class="Sponsorship">
            <h2 class="main-para">My Merchandise</h2>
            <div class="card-box">


              <div class="cards" v-for="item in model" >
                <div class="pox-1">
                  <h2>{{ item.title }}</h2>
                  <div class="top-btn">
                    <button><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
  <path d="M12.0583 3.23158C12.0757 4.21754 12.1263 5.10849 11.9737 5.99333C11.958 6.08661 12.0095 6.1947 12.0391 6.29322C12.1856 6.77878 12.2056 7.2661 12.0792 7.76039C11.9694 8.19017 12.0635 8.62867 12.0313 9.06369C11.9816 9.73494 12.1629 10.4027 12.1289 11.0696C12.101 11.6127 12.1097 12.1619 12.0252 12.7016C11.9824 12.9753 11.9676 13.2342 12.0382 13.514C12.1141 13.8183 11.9319 14.1199 11.9319 14.4355C11.9319 14.7825 11.8447 15.1242 11.7453 15.4572C11.6346 15.8303 11.2964 15.9245 11.0218 15.6525C10.6024 15.2375 10.4185 14.6953 10.3365 14.1339C10.2685 13.6692 10.2293 13.195 10.2049 12.7268C10.1796 12.2317 10.0088 11.733 10.1744 11.2309C10.2032 11.1446 10.2093 11.0374 10.1857 10.9502C10.0253 10.3661 10.1334 9.75848 10.0184 9.17004C9.98262 8.98872 9.99481 8.78995 10.0236 8.60513C10.0637 8.34883 10.0567 8.103 9.97651 7.85891C9.87365 7.54682 10.0044 7.23647 9.99831 6.92351C9.99221 6.60706 9.98088 6.29323 9.90503 5.99333C9.78473 5.5217 9.85185 5.0527 9.90067 4.59327C9.94425 4.17831 9.90764 3.77817 9.89719 3.36931C9.88672 2.98312 9.85359 2.5795 9.92071 2.19941C9.99743 1.76788 10.3915 1.58045 10.7515 1.42266C11.0741 1.28143 11.3121 1.4802 11.5439 1.69727C11.8866 2.01719 12.0696 2.38595 12.0374 2.86108C12.0269 3.01625 12.0557 3.17405 12.0592 3.2342L12.0583 3.23158Z" fill="#1C1D1E"/>
  <path d="M4.00555 15.3727C4.00118 14.8253 4.49024 14.4051 5.05865 14.4966C5.43437 14.5568 5.7857 14.6945 6.09082 14.9386C6.32532 15.126 6.56156 15.3161 6.81786 15.4704C7.71491 16.0082 8.57273 16.5976 9.34685 17.3037C9.41485 17.3656 9.50291 17.4161 9.59008 17.4467C10.1123 17.6289 10.5089 17.9941 10.9099 18.3507C11.154 18.5678 11.3354 18.5869 11.5515 18.3394C11.8384 18.0116 12.1662 17.7553 12.5619 17.5731C12.8409 17.4441 13.0031 17.1721 13.2253 16.9733C13.5348 16.6969 13.9132 16.5191 14.2697 16.3247C14.764 16.0553 15.158 15.6656 15.6096 15.3492C16.0647 15.0301 16.5476 14.7625 17.0698 14.569C17.1875 14.5254 17.3131 14.4949 17.4377 14.4827C17.6731 14.4609 17.8195 14.6038 17.9337 14.7878C18.0418 14.9613 17.9965 15.1173 17.8823 15.2707C17.6565 15.5741 17.4639 15.8958 17.1466 16.1312C16.742 16.4319 16.4744 16.8905 16.0281 17.1511C15.6367 17.8381 14.9323 18.1685 14.3473 18.6375C14.0038 18.913 13.7066 19.2494 13.4049 19.5728C13.1617 19.8335 12.8958 20.0462 12.5462 20.1404C12.3431 20.1953 12.1792 20.3174 12.0057 20.4307C11.5917 20.7009 11.1697 20.6835 10.7565 20.4186C10.1463 20.0271 9.49244 19.7028 8.91534 19.259C8.31643 18.7988 7.60856 18.4937 7.06109 17.9575C6.72808 17.6315 6.30004 17.4589 5.8877 17.2575C5.31843 16.9794 4.77793 16.6507 4.33857 16.1843C4.09709 15.9272 4.00729 15.6918 4.00469 15.3754L4.00555 15.3727Z" fill="#1C1D1E"/>
</svg><span>110 </span></button>
<button class="llo"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
  <path d="M9.94172 18.7684C9.92428 17.7825 9.87372 16.8915 10.0263 16.0067C10.042 15.9134 9.99054 15.8053 9.96089 15.7068C9.81443 15.2212 9.79439 14.7339 9.9208 14.2396C10.0306 13.8098 9.93647 13.3713 9.96874 12.9363C10.0184 12.2651 9.83711 11.5973 9.8711 10.9304C9.899 10.3873 9.89027 9.83805 9.97485 9.29843C10.0176 9.0247 10.0324 8.76579 9.96177 8.48595C9.88593 8.18171 10.0681 7.88007 10.0681 7.5645C10.0681 7.21752 10.1553 6.87579 10.2547 6.54278C10.3654 6.16966 10.7036 6.07552 10.9782 6.3475C11.3976 6.76247 11.5815 7.3047 11.6635 7.86612C11.7315 8.33078 11.7707 8.80501 11.7951 9.27315C11.8204 9.76832 11.9912 10.267 11.8256 10.7691C11.7968 10.8554 11.7907 10.9626 11.8143 11.0498C11.9747 11.6339 11.8666 12.2415 11.9816 12.83C12.0174 13.0113 12.0052 13.2101 11.9764 13.3949C11.9363 13.6512 11.9433 13.897 12.0235 14.1411C12.1264 14.4532 11.9956 14.7635 12.0017 15.0765C12.0078 15.3929 12.0191 15.7068 12.095 16.0067C12.2153 16.4783 12.1482 16.9473 12.0993 17.4067C12.0558 17.8217 12.0924 18.2218 12.1028 18.6307C12.1133 19.0169 12.1464 19.4205 12.0793 19.8006C12.0026 20.2321 11.6085 20.4196 11.2485 20.5773C10.9259 20.7186 10.6879 20.5198 10.4561 20.3027C10.1134 19.9828 9.93037 19.614 9.96264 19.1389C9.97309 18.9837 9.94432 18.826 9.94084 18.7658L9.94172 18.7684Z" fill="white"/>
  <path d="M17.9945 6.62727C17.9988 7.17474 17.5098 7.59494 16.9413 7.5034C16.5656 7.44325 16.2143 7.30551 15.9092 7.0614C15.6747 6.87398 15.4384 6.68393 15.1821 6.52962C14.2851 5.99176 13.4273 5.40243 12.6531 4.69631C12.5851 4.63441 12.4971 4.58385 12.4099 4.55333C11.8877 4.37113 11.4911 4.00586 11.0901 3.64926C10.846 3.43219 10.6646 3.41312 10.4485 3.66062C10.1616 3.98842 9.83385 4.24474 9.43807 4.42694C9.1591 4.55595 8.99695 4.82794 8.77466 5.02671C8.46517 5.30305 8.08683 5.48088 7.73028 5.67529C7.23599 5.94468 6.84196 6.33436 6.39037 6.65081C5.93532 6.96988 5.45236 7.23751 4.93017 7.43104C4.81247 7.47461 4.68695 7.50514 4.56228 7.51733C4.32692 7.53913 4.18045 7.39617 4.06625 7.21221C3.95816 7.03874 4.00348 6.88271 4.11768 6.72927C4.34347 6.42589 4.53614 6.10422 4.85345 5.86884C5.25796 5.56808 5.52559 5.10952 5.97193 4.84886C6.36335 4.16191 7.06773 3.83152 7.65269 3.36252C7.99617 3.08697 8.29344 2.75055 8.59508 2.42715C8.83829 2.16645 9.10418 1.95379 9.45376 1.85955C9.65687 1.80474 9.82077 1.68264 9.99426 1.56934C10.4083 1.2991 10.8303 1.31652 11.2435 1.58144C11.8537 1.97285 12.5076 2.29717 13.0847 2.74102C13.6836 3.20119 14.3914 3.50626 14.9389 4.04249C15.2719 4.36853 15.7 4.54113 16.1123 4.74251C16.6816 5.02061 17.2221 5.34927 17.6614 5.81567C17.9029 6.07283 17.9927 6.30819 17.9953 6.62464L17.9945 6.62727Z" fill="white"/>
</svg><span>110 </span></button>
                  </div>
                </div>
                 <div class="poxs-2">
                    <!-- <img src="/images/tshairt.png" alt=""> -->
                    <img :src="'/uploads/' + item.image" alt="">

                 </div>
                 <div class="poxs-3">
                    <div class="poxs-box">
                        <p>Total</p>
                        <h2>{{ item.total }} Pieces</h2>
                    </div>
                    <div class="poxs-box">
                        <p>Price</p>
                        <h2>${{ item.price }}</h2>
                    </div>
                 </div>
              </div>


             

            </div>

            <div class="btn-box">
              <div class="btn-1">
                
                <button class="Add" @click="add_new">
                  <span>Add New</span><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
  <path d="M2.51279 5.45272C3.05059 5.44321 3.53656 5.41563 4.0192 5.49884C4.07008 5.5074 4.12904 5.47935 4.18278 5.46318C4.44763 5.38329 4.71344 5.37236 4.98305 5.44131C5.21748 5.50122 5.45666 5.44986 5.69394 5.46746C6.06008 5.49456 6.42432 5.39566 6.78809 5.4142C7.08433 5.42942 7.3839 5.42466 7.67824 5.47079C7.82755 5.49409 7.96877 5.50217 8.12141 5.46366C8.28736 5.42229 8.45189 5.52167 8.62402 5.52167C8.81328 5.52167 8.99968 5.56922 9.18132 5.62343C9.38484 5.68382 9.43619 5.86831 9.28784 6.0181C9.06149 6.24682 8.76573 6.34715 8.4595 6.39185C8.20605 6.42894 7.94738 6.45033 7.69203 6.46365C7.42194 6.47744 7.14995 6.57064 6.87605 6.48029C6.82898 6.4646 6.77049 6.46127 6.72294 6.47411C6.40435 6.56161 6.07292 6.50264 5.75195 6.56541C5.65305 6.5849 5.54463 6.57825 5.44382 6.56256C5.30402 6.54068 5.16993 6.54449 5.03679 6.58823C4.86656 6.64434 4.69728 6.57302 4.52657 6.57634C4.35396 6.57967 4.18278 6.58585 4.0192 6.62722C3.76195 6.69284 3.50613 6.65623 3.25553 6.6296C3.02919 6.60583 2.81093 6.6258 2.58792 6.6315C2.37727 6.63721 2.15711 6.65528 1.94979 6.61867C1.71441 6.57682 1.61217 6.36189 1.52611 6.1655C1.44907 5.98957 1.55749 5.85975 1.67589 5.73327C1.8504 5.54639 2.05154 5.44653 2.3107 5.46413C2.39534 5.46983 2.48141 5.45414 2.51422 5.45224L2.51279 5.45272Z" fill="#1C1D1E"/>
  <path d="M9.13513 9.8451C8.83651 9.84748 8.60731 9.58072 8.65724 9.27068C8.69005 9.06574 8.76518 8.87411 8.89833 8.70768C9.00056 8.57977 9.10422 8.45091 9.18839 8.31111C9.48177 7.82181 9.80322 7.35391 10.1884 6.93166C10.2221 6.89457 10.2497 6.84654 10.2664 6.79899C10.3657 6.51416 10.565 6.2978 10.7595 6.07907C10.8779 5.94593 10.8883 5.84702 10.7533 5.7291C10.5745 5.57265 10.4347 5.39386 10.3353 5.17798C10.2649 5.02582 10.1166 4.93737 10.0082 4.81612C9.85743 4.64731 9.76043 4.44094 9.65439 4.24646C9.50745 3.97685 9.2949 3.76192 9.12229 3.5156C8.94825 3.26739 8.80227 3.00396 8.69671 2.71913C8.67294 2.65493 8.65629 2.58646 8.64964 2.51846C8.63775 2.39008 8.71573 2.31019 8.81607 2.2479C8.91069 2.18894 8.9958 2.21366 9.07949 2.27595C9.24497 2.39911 9.42043 2.5042 9.54882 2.67728C9.71287 2.89792 9.96299 3.0439 10.1052 3.28736C10.4799 3.50086 10.6601 3.88507 10.9159 4.20414C11.0662 4.39149 11.2497 4.55364 11.4261 4.71817C11.5683 4.85083 11.6843 4.99586 11.7357 5.18654C11.7656 5.29733 11.8322 5.38673 11.894 5.48136C12.0414 5.70722 12.0319 5.93737 11.8874 6.16276C11.6739 6.49562 11.497 6.85225 11.2549 7.16703C11.0039 7.49371 10.8375 7.87982 10.545 8.17844C10.3672 8.36008 10.273 8.59356 10.1632 8.81847C10.0115 9.12898 9.83222 9.4238 9.57782 9.66345C9.43755 9.79517 9.30917 9.84415 9.13656 9.84557L9.13513 9.8451Z" fill="#1C1D1E"/>
</svg>
                </button>
              </div>
              
            </div>
          </div>
         
       
        </div>
      
        
       </div>
    </div>


    <div id="popup-box" class="modal" v-if="isModalOpen" >
      <div style="display: flex;
    padding-left: 0px;
    justify-content: space-evenly;">

        <Add @cancel="closeModal"/>
      </div>
      
    </div>
   </div>
 
</template>

<script>
import Vue from 'vue'
import chartBarDemo from "../../chart/demo/chart-bar-demo";
import { get , byMethod} from '../admin/components/lib/api'
import Profile from "./brandprofile.vue";
import Add from "./addmerchendise.vue";

export default {
    name: 'admin',

    components: {
   
      Profile,
      Add
 },

   

    data () {
            return {
                method:'POST',
                model:{},
                model:'',
                model:[],
                isModalOpen:true,

               
               
              
              
              
            }
        },
        created(){
        
        get('/getmerchandises')
              .then((res) => {
                
                 this.setData(res)

              })
          
        }, 

        methods:{

            add_new() {
     
     $('#popup-box').modal('show');
     
     
   },
   closeModal() {
   console.log('avcd');

   this.shows = false;
   $('#popup-box').modal('hide');

   get('/getmerchandises')
              .then((res) => {
                
                 this.setData(res)

              })
          
        }, 
            setData(res) {
        
              Vue.set(this.$data, 'model', res.data.data)
              console.log(res.data.data)
              
             

            
          },

          profile(){
                this.$router.push('/admin/dashborad4')
            }

          

        }
    }
</script>

<style scoped>
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
    gap: 30px;
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
    justify-content: center;
}

.box-1 {
    height: 100%;
    background: transparent;
    width: 90%;
}

.box-2 {
    height: 871px;
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
h2.main-para {
    color: #000;
    font-family: sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 150% */
    padding-bottom: 20px;
    margin: 0px;
}

.poxs-2 {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 20px;
    background-image: url(/images/boxbg.png);
    background-position: center;
    background-size:auto;
    background-repeat: no-repeat;
}

.poxs-2 img {
    
    width: 55%;
    min-height: 140px;
    max-height: 140px;
    border-radius: 20px;
}

.poxs-3 {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
}

.poxs-box p {color: #000;font-family: sans-serif;font-size: 18px;font-style: normal;font-weight: 400;line-height: normal;margin: 0px;}

.poxs-box h2 {
    color: #000;
    font-family: fantasy;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0px;
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
    width: 40%;
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
    font-size: 16px;
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
    justify-content: center;
}
.box-2 {
    height: 720px;
    flex-shrink: 0;
    border-radius: 20px;
    background: #FFF;
    box-shadow: 0px 10px 54px 0px rgba(0, 0, 0, 0.25);
    width: 30%;
    padding: 24px;
}
.poxs-box p[data-v-875b56d8] {
    color: #000;
    font-family: sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0px;
}
.poxs-box h2[data-v-875b56d8] {
    color: #000;
    font-family: fantasy;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0px;
}
.poxs-3[data-v-875b56d8] {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
}
.poxs-2[data-v-875b56d8] {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 15px;
    background-image: url(/images/boxbg.png);
    background-position: center;
    background-size: auto;
    background-repeat: no-repeat;
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
}
.card-box {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    gap: 31px;

/* 
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 30px;
} */
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
    background: #FFF;
    box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.25);
    padding: 30px 20px;
}
}
@media screen and (max-width: 425px){
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
}
</style>