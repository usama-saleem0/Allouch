<template>
<section class="form-1-sec">
        <div class="main-form" v-if="showss">
            <div class="form-img">
                <img src="/images/logo.png" alt="">
            </div>
            <div class="form-titel">
                <h2>step-2</h2>
            </div>
            <div class="form-box">
                <img src="/images/Character.png" alt="">
                <div  class="form-1">
                    <div class="input-group-1">
                        <label for="text">First Name</label>
                        <input type="text" placeholder="Write here" v-model="form.first_name">
                    </div>
                    <div class="input-group-1">
                        <label for="text">Last Name </label>
                        <input type="text" placeholder="Write here" v-model="form.last_name">
                    </div>
                    <div class="input-group-2">
                        <label for="text">Company Location</label>
                        <input type="text" placeholder="location
                        " v-model="form.location">
                    </div>
                    <div class="input-group-2">
                        <label for="text">Company Name</label>
                        <input type="text" placeholder="C name" v-model="form.company">
                    </div>
                    <div class="input-group-2">
                        <label for="text">Company Website </label>
                        <input type="text" placeholder="Website" v-model="form.website">
                    </div>
                    <div class="input-group-2">
                        <label for="number">Contact</label>
                        <input type="number" placeholder="Contact" v-model="form.contact">
                    </div>
                    <button class="form-btn" @click="save">
                        <p>Start for free </p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                            <path d="M2.51254 5.45272C3.05034 5.44321 3.53631 5.41563 4.01895 5.49884C4.06983 5.5074 4.12879 5.47935 4.18253 5.46318C4.44738 5.38329 4.71319 5.37236 4.9828 5.44131C5.21723 5.50122 5.45642 5.44986 5.6937 5.46746C6.05983 5.49456 6.42408 5.39566 6.78785 5.4142C7.08408 5.42942 7.38366 5.42466 7.678 5.47079C7.82731 5.49409 7.96852 5.50217 8.12116 5.46366C8.28711 5.42229 8.45164 5.52167 8.62378 5.52167C8.81304 5.52167 8.99943 5.56922 9.18108 5.62343C9.38459 5.68382 9.43594 5.86831 9.28759 6.0181C9.06124 6.24682 8.76549 6.34715 8.45926 6.39185C8.20581 6.42894 7.94713 6.45033 7.69178 6.46365C7.42169 6.47744 7.1497 6.57064 6.8758 6.48029C6.82873 6.4646 6.77025 6.46127 6.72269 6.47411C6.4041 6.56161 6.07268 6.50264 5.75171 6.56541C5.65281 6.5849 5.54438 6.57825 5.44357 6.56256C5.30377 6.54068 5.16968 6.54449 5.03654 6.58823C4.86631 6.64434 4.69704 6.57302 4.52632 6.57634C4.35371 6.57967 4.18253 6.58585 4.01895 6.62722C3.7617 6.69284 3.50588 6.65623 3.25528 6.6296C3.02894 6.60583 2.81068 6.6258 2.58767 6.6315C2.37702 6.63721 2.15686 6.65528 1.94954 6.61867C1.71416 6.57682 1.61193 6.36189 1.52586 6.1655C1.44883 5.98957 1.55725 5.85975 1.67565 5.73327C1.85015 5.54639 2.05129 5.44653 2.31045 5.46413C2.39509 5.46983 2.48116 5.45414 2.51397 5.45224L2.51254 5.45272Z" fill="white"/>
                            <path d="M9.13513 9.8451C8.83651 9.84748 8.60731 9.58072 8.65724 9.27068C8.69005 9.06574 8.76518 8.87411 8.89833 8.70768C9.00056 8.57977 9.10422 8.45091 9.18839 8.31111C9.48177 7.82181 9.80322 7.35391 10.1884 6.93166C10.2221 6.89457 10.2497 6.84654 10.2664 6.79899C10.3657 6.51416 10.565 6.2978 10.7595 6.07907C10.8779 5.94593 10.8883 5.84702 10.7533 5.7291C10.5745 5.57265 10.4347 5.39386 10.3353 5.17798C10.2649 5.02582 10.1166 4.93737 10.0082 4.81612C9.85743 4.64731 9.76043 4.44094 9.65439 4.24646C9.50745 3.97685 9.2949 3.76192 9.12229 3.5156C8.94825 3.26739 8.80227 3.00396 8.69671 2.71913C8.67294 2.65493 8.65629 2.58646 8.64964 2.51846C8.63775 2.39008 8.71573 2.31019 8.81607 2.2479C8.91069 2.18894 8.9958 2.21366 9.07949 2.27595C9.24497 2.39911 9.42043 2.5042 9.54882 2.67728C9.71287 2.89792 9.96299 3.0439 10.1052 3.28736C10.4799 3.50086 10.6601 3.88507 10.9159 4.20414C11.0662 4.39149 11.2497 4.55364 11.4261 4.71817C11.5683 4.85083 11.6843 4.99586 11.7357 5.18654C11.7656 5.29733 11.8322 5.38673 11.894 5.48136C12.0414 5.70722 12.0319 5.93737 11.8874 6.16276C11.6739 6.49562 11.497 6.85225 11.2549 7.16703C11.0039 7.49371 10.8375 7.87982 10.545 8.17844C10.3672 8.36008 10.273 8.59356 10.1632 8.81847C10.0115 9.12898 9.83222 9.4238 9.57782 9.66345C9.43755 9.79517 9.30917 9.84415 9.13656 9.84557L9.13513 9.8451Z" fill="white"/>
                          </svg>
                    </button>
                </div>
                
                <a href="#"  class="form-last" @click="$emit('cancel')" >
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none" style="cursor: pointer;"> 
                    <path d="M25.6131 4.38811C19.7639 -1.4627 10.2434 -1.4627 4.39417 4.38811C1.56078 7.22338 0 10.9922 0 15.0004C0 19.0087 1.56078 22.7775 4.39417 25.6116C7.31937 28.5376 11.1615 30 15.0036 30C18.8457 30 22.6879 28.5376 25.6131 25.6116C31.4623 19.7608 31.4623 10.24 25.6131 4.38811ZM23.9698 23.9678C19.0259 28.9131 10.9813 28.9131 6.03745 23.9678C3.6434 21.5731 2.32432 18.3879 2.32432 15.0004C2.32432 11.6129 3.6434 8.4277 6.03745 6.03184C10.9813 1.0866 19.0259 1.08778 23.9698 6.03184C28.9125 10.9771 28.9125 19.0238 23.9698 23.9678Z" fill="black"/>
                    <path d="M20.0112 18.2127L16.721 14.9264L20.0112 11.64C20.4644 11.1867 20.4644 10.4508 20.0123 9.99626C19.5579 9.54057 18.8223 9.54174 18.3679 9.99509L15.0755 13.2838L11.7831 9.99509C11.3287 9.54174 10.593 9.54057 10.1386 9.99626C9.68538 10.4508 9.68537 11.1866 10.1398 11.64L13.4299 14.9264L10.1398 18.2127C9.68537 18.666 9.68538 19.4019 10.1386 19.8565C10.3652 20.0843 10.6639 20.1971 10.9614 20.1971C11.259 20.1971 11.5565 20.0831 11.7831 19.8576L15.0755 16.5689L18.3679 19.8576C18.5946 20.0843 18.8921 20.1971 19.1896 20.1971C19.4872 20.1971 19.7858 20.0831 20.0125 19.8565C20.4656 19.4019 20.4656 18.666 20.0112 18.2127Z" fill="black"/>
                  </svg>

                    <!-- <router-link to="/admin" class="btn btn-primary">
          Go to dashboard <i class="fas fa-chevron-right"></i
        ></router-link> -->
                  <p @click="$emit('cancel')" >Get Back To Main Screen</p>
                 
                </a>
            </div>

            
          
        </div>

        <div v-if="type">
      <Type :user-id="user_id" @cancel="closeModal"/>
      
    </div>
    </section>
   
</template>

<script>
import Type from "./businesstype.vue";
import { get , byMethod} from '../admin/components/lib/api'
export default {
  name: "Borders",
  props: {
    userId: {
      type: Number,
      required: true,
    },
  },

  components: {
   
    Type
  
},

  data() {
  return {
    method:'POST',
      isModalOpens: true,
      type:false,
      showss:true,
      form: {},
    };
  },

  methods:{

    
   closeModal() {
    console.log('avcd');

    this.showss = false;
    $('#popup-box').modal('hide');
      
     
    },

   save(){


    this.form.userId = this.userId;




        byMethod(this.method, 'brand_register' , this.form)
            .then((res) => {


                if(res.data.data) {
                    // console.log(res.data.data.id)
                    this.user_id = res.data.data.user_id;
                    this.showss = false;
                    this.type = true;

                    // this.$router.push(`/register/company/${this.company_id}`);
                }

            })
            .catch((error) => {
                if(error.response.status === 422) {
                    this.errors = error.response.data.errors
                }
                this.isProcessing = false
            })

},

  }

};
</script>
<style scoped>
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    section.form-1-sec {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.main-form {
    width: 100%;
    height: 900px;
    border-radius: 50px;
    background-image: url(/images/Up.png);
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 40px 0px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
.form-img {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.form-titel {
    width: 30%;
    display: flex;
    justify-content: flex-end;
}

.form-img img {
    width: 19%;
}

.form-titel h2 {
    color: #1C1D1E;
    font-family: sans-serif;
    font-size: 32px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
}

.form-box {
    width: 66%;
}

.form-1 {
    width: 63%;
    height: 703px;
    flex-shrink: 0;
    border-radius: 40px;
    background: #FFF;
    box-shadow: 0px 4px 35px 0px rgba(0, 0, 0, 0.08);
    z-index: 1;
    position: relative;
    padding: 50px 45px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
}

.form-box img {
    position: absolute;
    left: 205px;
    bottom: 0px;
}
.input-group-1 {
    width: 46%;
    display: flex;
    flex-direction: column;
}

.input-group-2 {
    width: 100%;
    display: flex;
    flex-direction: column;
}

.input-group-1 label {
    color: #000;
    font-family: sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding-bottom: 10px;
}

.input-group-1 input {
    border-radius: 9px;
    border: 1px solid #ADADAD;
    background: #FFF;
    color: #808080;
    font-family: sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    padding: 15px;
}

.input-group-2 label {
    color: #000;
    font-family: sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding-bottom: 10px;
}

.input-group-2 input {
    border-radius: 9px;
    border: 1px solid #ADADAD;
    background: #FFF;
    color: #808080;
    font-family: sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    padding: 15px;
}
button.form-btn {
    width: 100%;
    display: flex;
    height: 44px;
    padding: 10px 0px;
    justify-content: center;
    align-items: center;
    gap: 7.647px;
    flex-shrink: 0;
    border-radius: 6px;
    border: 1px solid #000;
    background: #F96;
    box-shadow: 2px 2px 0px 0px #1B1C1D;
}

button.form-btn p {color: #FFF;text-align: center;font-family: sans-serif;font-size: 16px;font-style: normal;font-weight: 700;line-height: 24px; /* 150% */}
a.form-last {
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    gap: 14px;
    padding-top:30px;
   
}

a.form-last p {
    color: #000;
    font-family: Anton;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    cursor: pointer;
}
@media screen and (max-width: 1600px){
    .main-form {
    width: 100%;
    height: 785px;
    border-radius: 50px;
    background-image: url(/images/Up.png);
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 40px 0px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
.form-1 {
    width: 65%;
    height: 600px;
    flex-shrink: 0;
    border-radius: 30px;
    background: #FFF;
    box-shadow: 0px 4px 35px 0px rgba(0, 0, 0, 0.08);
    z-index: 1;
    position: relative;
    padding: 30px 30px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
}
.form-box img {
    position: absolute;
    left: 160px;
    bottom: 0px;
    width: 32%;
}
.form-titel h2 {
    color: #1C1D1E;
    font-family: sans-serif;
    font-size: 30px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
}
}

@media screen and (max-width: 1440px){
    .main-form {
    width: 100%;
    height: 650px;
    border-radius: 50px;
    background-image: url(/images/Up.png);
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 40px 0px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
.form-1 {
    width: 63%;
    height: 480px;
    flex-shrink: 0;
    border-radius: 29px;
    background: #FFF;
    box-shadow: 0px 4px 35px 0px rgba(0, 0, 0, 0.08);
    z-index: 1;
    position: relative;
    padding: 20px 20px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
}
a.form-last {
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    gap: 14px;
    padding-top: 15px;
}
.input-group-1 label {
    color: #000;
    font-family: sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding-bottom: 5px;
}
.input-group-2 label {
    color: #000;
    font-family: sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding-bottom: 5px;
}
.input-group-2 input {
    border-radius: 5px;
    border: 1px solid #ADADAD;
    background: #FFF;
    color: #808080;
    font-family: sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    padding: 10px;
}.input-group-1 input {
    border-radius: 5px;
    border: 1px solid #ADADAD;
    background: #FFF;
    color: #808080;
    font-family: sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    padding: 10px;
}
button.form-btn {
    width: 100%;
    display: flex;
    height: 42px;
    padding: 10px 0px;
    justify-content: center;
    align-items: center;
    gap: 7.647px;
    flex-shrink: 0;
    border-radius: 6px;
    border: 1px solid #000;
    background: #F96;
    box-shadow: 2px 2px 0px 0px #1B1C1D;
}
a.form-last svg {
    width: 30px;
    height: 30px;
}
}

@media screen and (max-width: 1366px){
    .main-form {
    width: 100%;
    height: 560px;
    border-radius: 44px;
    background-image: url(/images/Up.png);
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 30px 0px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
.form-1 {
    width: 63%;
    height: 420px;
    flex-shrink: 0;
    border-radius: 24px;
    background: #FFF;
    box-shadow: 0px 4px 35px 0px rgba(0, 0, 0, 0.08);
    z-index: 1;
    position: relative;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
}
.input-group-1 label {
    color: #000;
    font-family: sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding-bottom: 5px;
}
.input-group-2 label {
    color: #000;
    font-family: sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding-bottom: 5px;
}
.input-group-2 input {
    border-radius: 5px;
    border: 1px solid #ADADAD;
    background: #FFF;
    color: #808080;
    font-family: sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    padding: 8px;
}
button.form-btn p {
    color: #FFF;
    text-align: center;
    font-family: sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 26px;
}
button.form-btn {
    width: 100%;
    display: flex;
    height: 38px;
    padding: 8px 0px;
    justify-content: center;
    align-items: center;
    gap: 7.647px;
    flex-shrink: 0;
    border-radius: 6px;
    border: 1px solid #000;
    background: #F96;
    box-shadow: 2px 2px 0px 0px #1B1C1D;
}
.input-group-1 input {
    border-radius: 5px;
    border: 1px solid #ADADAD;
    background: #FFF;
    color: #808080;
    font-family: sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    padding: 8px;
}
.form-box img {
    position: absolute;
    left: 162px;
    bottom: 0px;
    width: 27%;
}
a.form-last svg {
    width: 20px;
    height: 20px;
}
a.form-last {
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    gap: 10px;
    padding-top: 15px;
}
a.form-last p {
    color: #000;
    font-family: Anton;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    cursor: pointer;
}
}

@media screen and (max-width: 768px){
    .form-1 {
    width: 68%;
    height: 420px;
    flex-shrink: 0;
    border-radius: 24px;
    background: #FFF;
    box-shadow: 0px 4px 35px 0px rgba(0, 0, 0, 0.08);
    z-index: 1;
    position: relative;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
}
button.form-btn{
    width: 100%;
    display: flex;
    height: 32px;
    padding: 8px 0px;
    justify-content: center;
    align-items: center;
    gap: 7.647px;
    flex-shrink: 0;
    border-radius: 6px;
    border: 1px solid #000;
    background: #F96;
    box-shadow: 2px 2px 0px 0px #1B1C1D;
}
.main-form {
    width: 100%;
    height: 100%;
    border-radius: 25px;
    background-image: url(/images/Up.png);
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 30px 0px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding-top: 12px;
}
.form-titel h2 {
    color: #1C1D1E;
    font-family: sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
}
.form-box img {
    position: absolute;
    left: 90px;
    bottom: 0px;
    width: 35%;
}
}
@media screen and (max-width: 425px){
    .main-form {
    width: 100%;
    height: 100%;
    border-radius: 25px;
    background-image: url(/images/Up.png);
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px 0px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding: 12px 0px;
}
.form-box {
    width: 100%;
    padding: 0px 20px;
}
.form-img img {
    width: 35%;
}
.form-1 {
    width: 100%;
    height: 420px;
    flex-shrink: 0;
    border-radius: 24px;
    background: #FFF;
    box-shadow: 0px 4px 35px 0px rgba(0, 0, 0, 0.08);
    z-index: 1;
    position: relative;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
}
.form-box img {
    position: absolute;
    left: 90px;
    bottom: 0px;
    width: 35%;
    display: none;
}
a.form-last {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    gap: 10px;
    padding-top: 15px;
}
}
</style>