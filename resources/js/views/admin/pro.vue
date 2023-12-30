<template>
   <div class="box-2">
          <h2>Influencer Profile</h2>
          <div class="id-box">
            <img :src="'/uploads/' + model.image" alt="">
            <h2>{{ model.user_name }}</h2>
            <h3>{{ model.email }}</h3>
          </div>

          <div class="contact-box">
            <div class="contact">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path opacity="0.3" d="M20 8L12 13L4 8V18H20V8ZM20 6H4L12 10.99L20 6Z" fill="#FF9966"/>
  <path d="M4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20ZM20 6L12 10.99L4 6H20ZM4 8L12 13L20 8V18H4V8Z" fill="#FF9966"/>
</svg><p>{{ model.email }}</p>
            </div>
            <div class="contact">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M6.62 10.79C8.06 13.62 10.38 15.93 13.21 17.38L15.41 15.18C15.68 14.91 16.08 14.82 16.43 14.94C17.55 15.31 18.76 15.51 20 15.51C20.55 15.51 21 15.96 21 16.51V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" fill="#FF9966"/>
</svg><p>{{ model.contact }}</p>
            </div>
          </div>

          <div class="titel-box">

            <div class="id-titel">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M18.9 0H1.1C0.808262 0 0.528473 0.115893 0.322183 0.322183C0.115893 0.528473 0 0.808262 0 1.1V18.9C0 19.1917 0.115893 19.4715 0.322183 19.6778C0.528473 19.8841 0.808262 20 1.1 20H10.68V12.25H8.08V9.25H10.68V7C10.6261 6.47176 10.6885 5.93813 10.8627 5.43654C11.0369 4.93495 11.3188 4.47755 11.6885 4.09641C12.0582 3.71528 12.5068 3.41964 13.0028 3.23024C13.4989 3.04083 14.0304 2.96225 14.56 3C15.3383 2.99521 16.1163 3.03528 16.89 3.12V5.82H15.3C14.04 5.82 13.8 6.42 13.8 7.29V9.22H16.8L16.41 12.22H13.8V20H18.9C19.0445 20 19.1875 19.9715 19.321 19.9163C19.4544 19.861 19.5757 19.78 19.6778 19.6778C19.78 19.5757 19.861 19.4544 19.9163 19.321C19.9715 19.1875 20 19.0445 20 18.9V1.1C20 0.955546 19.9715 0.812506 19.9163 0.679048C19.861 0.54559 19.78 0.424327 19.6778 0.322183C19.5757 0.220038 19.4544 0.139013 19.321 0.0837326C19.1875 0.0284524 19.0445 0 18.9 0Z" fill="#FF5757"/>
</svg> <p>{{ model.facebook ? model.facebook:'No Facebook Id' }}</p>
            </div>

            <div class="id-titel">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M13.028 2C14.153 2.003 14.724 2.009 15.217 2.023L15.411 2.03C15.635 2.038 15.856 2.048 16.123 2.06C17.187 2.11 17.913 2.278 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.952 8.144 21.962 8.365 21.97 8.59L21.976 8.784C21.991 9.276 21.997 9.847 21.999 10.972L22 11.718V13.028C22.0025 13.7574 21.9948 14.4868 21.977 15.216L21.971 15.41C21.963 15.635 21.953 15.856 21.941 16.122C21.891 17.187 21.721 17.912 21.475 18.55C21.2247 19.2178 20.8312 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.123 21.94C15.8857 21.9512 15.6484 21.9612 15.411 21.97L15.217 21.976C14.724 21.99 14.153 21.997 13.028 21.999L12.282 22H10.973C10.2433 22.0025 9.51355 21.9949 8.78403 21.977L8.59003 21.971C8.35264 21.962 8.1153 21.9517 7.87803 21.94C6.81403 21.89 6.08803 21.722 5.45003 21.475C4.7827 21.2244 4.17824 20.8308 3.67903 20.322C3.17007 19.8223 2.77625 19.2176 2.52503 18.55C2.27803 17.913 2.11003 17.187 2.06003 16.122C2.04889 15.8847 2.03889 15.6474 2.03003 15.41L2.02503 15.216C2.0066 14.4868 1.99827 13.7574 2.00003 13.028V10.972C1.99724 10.2426 2.00457 9.5132 2.02203 8.784L2.02903 8.59C2.03703 8.365 2.04703 8.144 2.05903 7.878C2.10903 6.813 2.27703 6.088 2.52403 5.45C2.77514 4.7819 3.16975 4.17702 3.68003 3.678C4.17912 3.16947 4.78317 2.77599 5.45003 2.525C6.08803 2.278 6.81303 2.11 7.87803 2.06C8.14403 2.048 8.36603 2.038 8.59003 2.03L8.78403 2.024C9.51322 2.00623 10.2426 1.99857 10.972 2.001L13.028 2ZM12 7C10.6739 7 9.40218 7.52678 8.46449 8.46447C7.52681 9.40215 7.00003 10.6739 7.00003 12C7.00003 13.3261 7.52681 14.5979 8.46449 15.5355C9.40218 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5356 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5356 8.46447C14.5979 7.52678 13.3261 7 12 7ZM12 9C12.394 8.99993 12.7841 9.07747 13.1481 9.22817C13.5121 9.37887 13.8429 9.5998 14.1215 9.87833C14.4001 10.1569 14.6212 10.4875 14.772 10.8515C14.9228 11.2154 15.0005 11.6055 15.0005 11.9995C15.0006 12.3935 14.9231 12.7836 14.7724 13.1476C14.6217 13.5116 14.4007 13.8423 14.1222 14.121C13.8437 14.3996 13.513 14.6206 13.149 14.7714C12.7851 14.9223 12.395 14.9999 12.001 15C11.2054 15 10.4423 14.6839 9.87971 14.1213C9.3171 13.5587 9.00103 12.7956 9.00103 12C9.00103 11.2044 9.3171 10.4413 9.87971 9.87868C10.4423 9.31607 11.2054 9 12.001 9M17.251 5.5C16.9195 5.5 16.6016 5.6317 16.3671 5.86612C16.1327 6.10054 16.001 6.41848 16.001 6.75C16.001 7.08152 16.1327 7.39946 16.3671 7.63388C16.6016 7.8683 16.9195 8 17.251 8C17.5825 8 17.9005 7.8683 18.1349 7.63388C18.3693 7.39946 18.501 7.08152 18.501 6.75C18.501 6.41848 18.3693 6.10054 18.1349 5.86612C17.9005 5.6317 17.5825 5.5 17.251 5.5Z" fill="#FF5757"/>
</svg><p>{{ model.instagram ? model.instagram:'No Instagram Id' }}</p>
            </div>


            <div class="id-titel">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
  <path d="M16 0C16.5304 0 17.0391 0.210714 17.4142 0.585786C17.7893 0.960859 18 1.46957 18 2V16C18 16.5304 17.7893 17.0391 17.4142 17.4142C17.0391 17.7893 16.5304 18 16 18H2C1.46957 18 0.960859 17.7893 0.585786 17.4142C0.210714 17.0391 0 16.5304 0 16V2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0H16ZM15.5 15.5V10.2C15.5 9.33539 15.1565 8.5062 14.5452 7.89483C13.9338 7.28346 13.1046 6.94 12.24 6.94C11.39 6.94 10.4 7.46 9.92 8.24V7.13H7.13V15.5H9.92V10.57C9.92 9.8 10.54 9.17 11.31 9.17C11.6813 9.17 12.0374 9.3175 12.2999 9.58005C12.5625 9.8426 12.71 10.1987 12.71 10.57V15.5H15.5ZM3.88 5.56C4.32556 5.56 4.75288 5.383 5.06794 5.06794C5.383 4.75288 5.56 4.32556 5.56 3.88C5.56 2.95 4.81 2.19 3.88 2.19C3.43178 2.19 3.00193 2.36805 2.68499 2.68499C2.36805 3.00193 2.19 3.43178 2.19 3.88C2.19 4.81 2.95 5.56 3.88 5.56ZM5.27 15.5V7.13H2.5V15.5H5.27Z" fill="#FF5757"/>
</svg><p>{{ model.linkdin ? model.linkdin:'No Linkdin Id' }}</p>
            </div>



          </div>

          <div class="para-box">
            <p>{{ model.bio }}</p>
            
             
            <button @click="profile">
              <p>Profile</p><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
  <path d="M2.51273 5.45272C3.05053 5.44321 3.5365 5.41563 4.01914 5.49884C4.07002 5.5074 4.12898 5.47935 4.18272 5.46318C4.44757 5.38329 4.71338 5.37236 4.98299 5.44131C5.21742 5.50122 5.4566 5.44986 5.69388 5.46746C6.06002 5.49456 6.42426 5.39566 6.78803 5.4142C7.08427 5.42942 7.38384 5.42466 7.67818 5.47079C7.82749 5.49409 7.96871 5.50217 8.12135 5.46366C8.2873 5.42229 8.45183 5.52167 8.62396 5.52167C8.81322 5.52167 8.99962 5.56922 9.18126 5.62343C9.38478 5.68382 9.43613 5.86831 9.28778 6.0181C9.06143 6.24682 8.76567 6.34715 8.45944 6.39185C8.20599 6.42894 7.94732 6.45033 7.69197 6.46365C7.42188 6.47744 7.14989 6.57064 6.87599 6.48029C6.82892 6.4646 6.77043 6.46127 6.72288 6.47411C6.40429 6.56161 6.07286 6.50264 5.75189 6.56541C5.65299 6.5849 5.54457 6.57825 5.44376 6.56256C5.30396 6.54068 5.16987 6.54449 5.03673 6.58823C4.8665 6.64434 4.69722 6.57302 4.52651 6.57634C4.3539 6.57967 4.18272 6.58585 4.01914 6.62722C3.76189 6.69284 3.50607 6.65623 3.25547 6.6296C3.02913 6.60583 2.81087 6.6258 2.58786 6.6315C2.37721 6.63721 2.15705 6.65528 1.94973 6.61867C1.71435 6.57682 1.61211 6.36189 1.52604 6.1655C1.44901 5.98957 1.55743 5.85975 1.67583 5.73327C1.85034 5.54639 2.05148 5.44653 2.31064 5.46413C2.39528 5.46983 2.48135 5.45414 2.51416 5.45224L2.51273 5.45272Z" fill="white"/>
  <path d="M9.13513 9.8451C8.83651 9.84748 8.60731 9.58072 8.65724 9.27068C8.69005 9.06574 8.76518 8.87411 8.89833 8.70768C9.00056 8.57977 9.10422 8.45091 9.18839 8.31111C9.48177 7.82181 9.80322 7.35391 10.1884 6.93166C10.2221 6.89457 10.2497 6.84654 10.2664 6.79899C10.3657 6.51416 10.565 6.2978 10.7595 6.07907C10.8779 5.94593 10.8883 5.84702 10.7533 5.7291C10.5745 5.57265 10.4347 5.39386 10.3353 5.17798C10.2649 5.02582 10.1166 4.93737 10.0082 4.81612C9.85743 4.64731 9.76043 4.44094 9.65439 4.24646C9.50745 3.97685 9.2949 3.76192 9.12229 3.5156C8.94825 3.26739 8.80227 3.00396 8.69671 2.71913C8.67294 2.65493 8.65629 2.58646 8.64964 2.51846C8.63775 2.39008 8.71573 2.31019 8.81607 2.2479C8.91069 2.18894 8.9958 2.21366 9.07949 2.27595C9.24497 2.39911 9.42043 2.5042 9.54882 2.67728C9.71287 2.89792 9.96299 3.0439 10.1052 3.28736C10.4799 3.50086 10.6601 3.88507 10.9159 4.20414C11.0662 4.39149 11.2497 4.55364 11.4261 4.71817C11.5683 4.85083 11.6843 4.99586 11.7357 5.18654C11.7656 5.29733 11.8322 5.38673 11.894 5.48136C12.0414 5.70722 12.0319 5.93737 11.8874 6.16276C11.6739 6.49562 11.497 6.85225 11.2549 7.16703C11.0039 7.49371 10.8375 7.87982 10.545 8.17844C10.3672 8.36008 10.273 8.59356 10.1632 8.81847C10.0115 9.12898 9.83222 9.4238 9.57782 9.66345C9.43755 9.79517 9.30917 9.84415 9.13656 9.84557L9.13513 9.8451Z" fill="white"/>
</svg>
            </button>

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
