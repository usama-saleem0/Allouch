<template>
    <section class="form-1-sec">
        <div class="main-form" v-if="sho">
            <div class="form-img">
                <img src="/images/logo.png" alt="">
            </div>
            <div class="form-titel">
                <h2>step-2</h2>
            </div>
            
            <div class="form-box">
                <img src="/images/Character.png" alt="">
                <form action="" class="form-1">
                   
                    <div class="input-group-2" @click="datas('South Africa' , 1)" :style="{ backgroundColor: bgColor1 }">
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="15" viewBox="0 0 21 15" fill="none">
  <g clip-path="url(#clip0_213_8455)">
    <rect width="21" height="15" rx="3" fill="white"/>
    <path d="M19 0H2C0.89543 0 0 0.89543 0 2V13C0 14.1046 0.89543 15 2 15H19C20.1046 15 21 14.1046 21 13V2C21 0.89543 20.1046 0 19 0Z" fill="white"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 10H21V15H0V10Z" fill="#1A47B8"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H21V5H0V0Z" fill="#F93939"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.013 10L2 15.033H0V0H2L8 5H21V10H8.013Z" fill="white"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.7 9L0.5 15L0 15.033V0H0.5L7.7 6H21V9H7.7Z" fill="#249F58"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 3L6 7.5L0 12V3Z" fill="#FFDA2C"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 4L4.75 7.5L0 11V4Z" fill="#151515"/>
  </g>
  <defs>
    <clipPath id="clip0_213_8455">
      <rect width="21" height="15" rx="3" fill="white"/>
    </clipPath>
  </defs>
</svg><h2>South Africa</h2></div>
                    <div class="input-group-2" @click="datas('United States' , 2)" :style="{ backgroundColor: bgColor2 }">
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="15" viewBox="0 0 21 15" fill="none">
  <g clip-path="url(#clip0_213_12288)">
    <rect width="21" height="15" rx="3" fill="white"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H9V7H0V0Z" fill="#1A47B8"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M9 0V1H21V0H9ZM9 2V3H21V2H9ZM9 4V5H21V4H9ZM9 6V7H21V6H9ZM0 8V9H21V8H0ZM0 10V11H21V10H0ZM0 12V13H21V12H0ZM0 14V15H21V14H0Z" fill="#F93939"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M1 1V2H2V1H1ZM3 1V2H4V1H3ZM5 1V2H6V1H5ZM7 1V2H8V1H7ZM6 2V3H7V2H6ZM4 2V3H5V2H4ZM2 2V3H3V2H2ZM1 3V4H2V3H1ZM3 3V4H4V3H3ZM5 3V4H6V3H5ZM7 3V4H8V3H7ZM1 5V6H2V5H1ZM3 5V6H4V5H3ZM5 5V6H6V5H5ZM7 5V6H8V5H7ZM6 4V5H7V4H6ZM4 4V5H5V4H4ZM2 4V5H3V4H2Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_213_12288">
      <rect width="21" height="15" rx="3" fill="white"/>
    </clipPath>
  </defs>
</svg><h2>United States</h2></div>
                    <div class="input-group-2" @click="datas('Canada' , 3)" :style="{ backgroundColor: bgColor3 }"><svg xmlns="http://www.w3.org/2000/svg" width="21" height="15" viewBox="0 0 21 15" fill="none">
  <g clip-path="url(#clip0_213_16116)">
    <rect width="21" height="15" rx="3" fill="white"/>
    <path d="M10.7059 11.6176H10.2941L10.3971 9.97059C10.3912 9.88385 10.3496 9.86105 10.1912 9.86765L8.54412 10.0735C8.54412 10.0735 8.85294 9.66176 8.85294 9.45588C8.85294 9.25 7 7.91176 7 7.91176C7 7.91176 7.41176 7.80882 7.51471 7.70588C7.61765 7.60294 7.10294 6.47059 7.10294 6.47059C7.10294 6.47059 8.14906 6.88235 8.23529 6.77941C8.32153 6.67647 8.44118 6.26471 8.44118 6.26471C8.44118 6.26471 9.26471 7.19118 9.47059 7.19118C9.67647 7.19118 9.05882 4.92647 9.05882 4.92647C9.05882 4.92647 9.57353 5.33824 9.77941 5.33824C9.98529 5.33824 10.5 4 10.5 4C10.5 4 11.0147 5.33824 11.1176 5.33824C11.2206 5.33824 11.9412 4.92647 11.9412 4.92647C11.9412 4.92647 11.4265 7.08824 11.5294 7.19118C11.6324 7.29412 12.5588 6.26471 12.5588 6.26471C12.5588 6.26471 12.6618 6.67647 12.7647 6.77941C12.8676 6.88235 13.8971 6.47059 13.8971 6.47059C13.8971 6.47059 13.3824 7.60294 13.4853 7.70588C13.5882 7.80882 14 7.91176 14 7.91176C14 7.91176 12.1471 9.25 12.1471 9.45588C12.1471 9.66176 12.3529 10.0735 12.3529 10.0735L10.8088 9.86765C10.6847 9.83206 10.6417 9.85907 10.6029 9.97059L10.7059 11.6176Z" fill="#F93939"/>
    <rect x="16" width="5" height="15" fill="#F93939"/>
    <rect width="5" height="15" fill="#F93939"/>
  </g>
  <defs>
    <clipPath id="clip0_213_16116">
      <rect width="21" height="15" rx="3" fill="white"/>
    </clipPath>
  </defs>
</svg><h2>Canada</h2></div>
                    <div class="input-group-2" @click="datas('Ireland' , 4)" :style="{ backgroundColor: bgColor4 }">
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="15" viewBox="0 0 21 15" fill="none">
  <g clip-path="url(#clip0_213_19944)">
    <path d="M19 0H2C0.89543 0 0 0.89543 0 2V13C0 14.1046 0.89543 15 2 15H19C20.1046 15 21 14.1046 21 13V2C21 0.89543 20.1046 0 19 0Z" fill="white"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M14 0H21V15H14V0Z" fill="#FF6C2D"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H7V15H0V0Z" fill="#249F58"/>
  </g>
  <defs>
    <clipPath id="clip0_213_19944">
      <rect width="21" height="15" rx="3" fill="white"/>
    </clipPath>
  </defs>
</svg> <h2>Ireland</h2></div>
                    <div class="input-group-2" @click="datas('United States' , 5)" :style="{ backgroundColor: bgColor5 }">
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="15" viewBox="0 0 21 15" fill="none">
  <g clip-path="url(#clip0_213_19952)">
    <rect width="21" height="15" rx="3" fill="white"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H9V7H0V0Z" fill="#1A47B8"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M9 0V1H21V0H9ZM9 2V3H21V2H9ZM9 4V5H21V4H9ZM9 6V7H21V6H9ZM0 8V9H21V8H0ZM0 10V11H21V10H0ZM0 12V13H21V12H0ZM0 14V15H21V14H0Z" fill="#F93939"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M1 1V2H2V1H1ZM3 1V2H4V1H3ZM5 1V2H6V1H5ZM7 1V2H8V1H7ZM6 2V3H7V2H6ZM4 2V3H5V2H4ZM2 2V3H3V2H2ZM1 3V4H2V3H1ZM3 3V4H4V3H3ZM5 3V4H6V3H5ZM7 3V4H8V3H7ZM1 5V6H2V5H1ZM3 5V6H4V5H3ZM5 5V6H6V5H5ZM7 5V6H8V5H7ZM6 4V5H7V4H6ZM4 4V5H5V4H4ZM2 4V5H3V4H2Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_213_19952">
      <rect width="21" height="15" rx="3" fill="white"/>
    </clipPath>
  </defs>
</svg><h2>United States</h2></div>
                    <div class="input-group-2" @click="datas('Ireland' , 6)" :style="{ backgroundColor: bgColor6 }">
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="15" viewBox="0 0 21 15" fill="none">
  <g clip-path="url(#clip0_213_19965)">
    <path d="M19 0H2C0.89543 0 0 0.89543 0 2V13C0 14.1046 0.89543 15 2 15H19C20.1046 15 21 14.1046 21 13V2C21 0.89543 20.1046 0 19 0Z" fill="white"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M14 0H21V15H14V0Z" fill="#FF6C2D"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H7V15H0V0Z" fill="#249F58"/>
  </g>
  <defs>
    <clipPath id="clip0_213_19965">
      <rect width="21" height="15" rx="3" fill="white"/>
    </clipPath>
  </defs>
</svg><h2>Ireland</h2></div>
                    <div class="input-group-2" @click="datas('Canada' , 7)" :style="{ backgroundColor: bgColor7 }">
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="15" viewBox="0 0 21 15" fill="none">
  <g clip-path="url(#clip0_213_19958)">
    <rect width="21" height="15" rx="3" fill="white"/>
    <path d="M10.7059 11.6176H10.2941L10.3971 9.97059C10.3912 9.88385 10.3496 9.86105 10.1912 9.86765L8.54412 10.0735C8.54412 10.0735 8.85294 9.66176 8.85294 9.45588C8.85294 9.25 7 7.91176 7 7.91176C7 7.91176 7.41176 7.80882 7.51471 7.70588C7.61765 7.60294 7.10294 6.47059 7.10294 6.47059C7.10294 6.47059 8.14906 6.88235 8.23529 6.77941C8.32153 6.67647 8.44118 6.26471 8.44118 6.26471C8.44118 6.26471 9.26471 7.19118 9.47059 7.19118C9.67647 7.19118 9.05882 4.92647 9.05882 4.92647C9.05882 4.92647 9.57353 5.33824 9.77941 5.33824C9.98529 5.33824 10.5 4 10.5 4C10.5 4 11.0147 5.33824 11.1176 5.33824C11.2206 5.33824 11.9412 4.92647 11.9412 4.92647C11.9412 4.92647 11.4265 7.08824 11.5294 7.19118C11.6324 7.29412 12.5588 6.26471 12.5588 6.26471C12.5588 6.26471 12.6618 6.67647 12.7647 6.77941C12.8676 6.88235 13.8971 6.47059 13.8971 6.47059C13.8971 6.47059 13.3824 7.60294 13.4853 7.70588C13.5882 7.80882 14 7.91176 14 7.91176C14 7.91176 12.1471 9.25 12.1471 9.45588C12.1471 9.66176 12.3529 10.0735 12.3529 10.0735L10.8088 9.86765C10.6847 9.83206 10.6417 9.85907 10.6029 9.97059L10.7059 11.6176Z" fill="#F93939"/>
    <rect x="16" width="5" height="15" fill="#F93939"/>
    <rect width="5" height="15" fill="#F93939"/>
  </g>
  <defs>
    <clipPath id="clip0_213_19958">
      <rect width="21" height="15" rx="3" fill="white"/>
    </clipPath>
  </defs>
</svg><h2>Canada</h2></div>
                    <div class="input-group-2" @click="datas('Other' , 8)" :style="{ backgroundColor: bgColor8 }"><h2>Other</h2></div>
                    <button class="form-btn" @click="save">
                        <p>Start for free </p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                            <path d="M2.51254 5.45272C3.05034 5.44321 3.53631 5.41563 4.01895 5.49884C4.06983 5.5074 4.12879 5.47935 4.18253 5.46318C4.44738 5.38329 4.71319 5.37236 4.9828 5.44131C5.21723 5.50122 5.45642 5.44986 5.6937 5.46746C6.05983 5.49456 6.42408 5.39566 6.78785 5.4142C7.08408 5.42942 7.38366 5.42466 7.678 5.47079C7.82731 5.49409 7.96852 5.50217 8.12116 5.46366C8.28711 5.42229 8.45164 5.52167 8.62378 5.52167C8.81304 5.52167 8.99943 5.56922 9.18108 5.62343C9.38459 5.68382 9.43594 5.86831 9.28759 6.0181C9.06124 6.24682 8.76549 6.34715 8.45926 6.39185C8.20581 6.42894 7.94713 6.45033 7.69178 6.46365C7.42169 6.47744 7.1497 6.57064 6.8758 6.48029C6.82873 6.4646 6.77025 6.46127 6.72269 6.47411C6.4041 6.56161 6.07268 6.50264 5.75171 6.56541C5.65281 6.5849 5.54438 6.57825 5.44357 6.56256C5.30377 6.54068 5.16968 6.54449 5.03654 6.58823C4.86631 6.64434 4.69704 6.57302 4.52632 6.57634C4.35371 6.57967 4.18253 6.58585 4.01895 6.62722C3.7617 6.69284 3.50588 6.65623 3.25528 6.6296C3.02894 6.60583 2.81068 6.6258 2.58767 6.6315C2.37702 6.63721 2.15686 6.65528 1.94954 6.61867C1.71416 6.57682 1.61193 6.36189 1.52586 6.1655C1.44883 5.98957 1.55725 5.85975 1.67565 5.73327C1.85015 5.54639 2.05129 5.44653 2.31045 5.46413C2.39509 5.46983 2.48116 5.45414 2.51397 5.45224L2.51254 5.45272Z" fill="white"/>
                            <path d="M9.13513 9.8451C8.83651 9.84748 8.60731 9.58072 8.65724 9.27068C8.69005 9.06574 8.76518 8.87411 8.89833 8.70768C9.00056 8.57977 9.10422 8.45091 9.18839 8.31111C9.48177 7.82181 9.80322 7.35391 10.1884 6.93166C10.2221 6.89457 10.2497 6.84654 10.2664 6.79899C10.3657 6.51416 10.565 6.2978 10.7595 6.07907C10.8779 5.94593 10.8883 5.84702 10.7533 5.7291C10.5745 5.57265 10.4347 5.39386 10.3353 5.17798C10.2649 5.02582 10.1166 4.93737 10.0082 4.81612C9.85743 4.64731 9.76043 4.44094 9.65439 4.24646C9.50745 3.97685 9.2949 3.76192 9.12229 3.5156C8.94825 3.26739 8.80227 3.00396 8.69671 2.71913C8.67294 2.65493 8.65629 2.58646 8.64964 2.51846C8.63775 2.39008 8.71573 2.31019 8.81607 2.2479C8.91069 2.18894 8.9958 2.21366 9.07949 2.27595C9.24497 2.39911 9.42043 2.5042 9.54882 2.67728C9.71287 2.89792 9.96299 3.0439 10.1052 3.28736C10.4799 3.50086 10.6601 3.88507 10.9159 4.20414C11.0662 4.39149 11.2497 4.55364 11.4261 4.71817C11.5683 4.85083 11.6843 4.99586 11.7357 5.18654C11.7656 5.29733 11.8322 5.38673 11.894 5.48136C12.0414 5.70722 12.0319 5.93737 11.8874 6.16276C11.6739 6.49562 11.497 6.85225 11.2549 7.16703C11.0039 7.49371 10.8375 7.87982 10.545 8.17844C10.3672 8.36008 10.273 8.59356 10.1632 8.81847C10.0115 9.12898 9.83222 9.4238 9.57782 9.66345C9.43755 9.79517 9.30917 9.84415 9.13656 9.84557L9.13513 9.8451Z" fill="white"/>
                          </svg>
                    </button>
                </form>
                <a href="#"  class="form-last">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                        <path d="M25.6131 4.38811C19.7639 -1.4627 10.2434 -1.4627 4.39417 4.38811C1.56078 7.22338 0 10.9922 0 15.0004C0 19.0087 1.56078 22.7775 4.39417 25.6116C7.31937 28.5376 11.1615 30 15.0036 30C18.8457 30 22.6879 28.5376 25.6131 25.6116C31.4623 19.7608 31.4623 10.24 25.6131 4.38811ZM23.9698 23.9678C19.0259 28.9131 10.9813 28.9131 6.03745 23.9678C3.6434 21.5731 2.32432 18.3879 2.32432 15.0004C2.32432 11.6129 3.6434 8.4277 6.03745 6.03184C10.9813 1.0866 19.0259 1.08778 23.9698 6.03184C28.9125 10.9771 28.9125 19.0238 23.9698 23.9678Z" fill="black"/>
                        <path d="M20.0112 18.2127L16.721 14.9264L20.0112 11.64C20.4644 11.1867 20.4644 10.4508 20.0123 9.99626C19.5579 9.54057 18.8223 9.54174 18.3679 9.99509L15.0755 13.2838L11.7831 9.99509C11.3287 9.54174 10.593 9.54057 10.1386 9.99626C9.68538 10.4508 9.68537 11.1866 10.1398 11.64L13.4299 14.9264L10.1398 18.2127C9.68537 18.666 9.68538 19.4019 10.1386 19.8565C10.3652 20.0843 10.6639 20.1971 10.9614 20.1971C11.259 20.1971 11.5565 20.0831 11.7831 19.8576L15.0755 16.5689L18.3679 19.8576C18.5946 20.0843 18.8921 20.1971 19.1896 20.1971C19.4872 20.1971 19.7858 20.0831 20.0125 19.8565C20.4656 19.4019 20.4656 18.666 20.0112 18.2127Z" fill="black"/>
                      </svg>
                      <p>Get Back To Main Screen</p>
                    </a>
               
            </div>
          
        </div>

        <div v-if="fin">
      <Final :user-id="user_id" @cancel="closeModal"/>
      
    </div>
    </section>
</template>

<script>
import { get , byMethod} from '../admin/components/lib/api'
import Final from "./formz.vue";
export default {
  name: "Borders",

  components: {
   
    Final

},

  props: {
    userId: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      sho:true,
      fin:false,
      method:'POST',
        form: {
     
      
    },
     
     method: 'POST',
     bgColor1:'white',
     bgColor2:'white',
     bgColor3:'white',
     bgColor4:'white',
     bgColor5:'white',
     bgColor6:'white',
     bgColor7:'white',
     bgColor8:'white',


    };
  },

  methods:{

    datas(e , num){
        this.company_type = e;
        console.log(this.company_type);
        if(num == 1){
            this.bgColor1 = '#F96'
            this.bgColor2 = 'white'
            this.bgColor3 = 'white'
            this.bgColor4 = 'white'
            this.bgColor5 = 'white'
            this.bgColor6 = 'white'
            this.bgColor7 = 'white'
            this.bgColor8 = 'white'

        }

        if(num == 2){
            this.bgColor1 = 'white'
            this.bgColor2 = '#F96'
            this.bgColor3 = 'white'
            this.bgColor4 = 'white'
            this.bgColor5 = 'white'
            this.bgColor6 = 'white'
            this.bgColor7 = 'white'
            this.bgColor8 = 'white'

        }

        if(num == 3){
            this.bgColor1 = 'white'
            this.bgColor2 = 'white'
            this.bgColor3 = '#F96'
            this.bgColor4 = 'white'
            this.bgColor5 = 'white'
            this.bgColor6 = 'white'
            this.bgColor7 = 'white'
            this.bgColor8 = 'white'

        }

        if(num == 4){
            this.bgColor1 = 'white'
            this.bgColor2 = 'white'
            this.bgColor3 = 'white'
            this.bgColor4 = '#F96'
            this.bgColor5 = 'white'
            this.bgColor6 = 'white'
            this.bgColor7 = 'white'
            this.bgColor8 = 'white'

        }

        if(num == 5){
            this.bgColor1 = 'white'
            this.bgColor2 = 'white'
            this.bgColor3 = 'white'
            this.bgColor4 = 'white'
            this.bgColor5 = '#F96'
            this.bgColor6 = 'white'
            this.bgColor7 = 'white'
            this.bgColor8 = 'white'

        }

        if(num == 6){
            this.bgColor1 = 'white'
            this.bgColor2 = 'white'
            this.bgColor3 = 'white'
            this.bgColor4 = 'white'
            this.bgColor5 = 'white'
            this.bgColor6 = '#F96'
            this.bgColor7 = 'white'
            this.bgColor8 = 'white'

        }

        if(num == 7){
            this.bgColor1 = 'white'
            this.bgColor2 = 'white'
            this.bgColor3 = 'white'
            this.bgColor4 = 'white'
            this.bgColor5 = 'white'
            this.bgColor6 = 'white'
            this.bgColor7 = '#F96'
            this.bgColor8 = 'white'

        }

        if(num == 8){
            this.bgColor1 = 'white'
            this.bgColor2 = 'white'
            this.bgColor3 = 'white'
            this.bgColor4 = 'white'
            this.bgColor5 = 'white'
            this.bgColor6 = 'white'
            this.bgColor7 = 'white'
            this.bgColor8 = '#F96'


        }


    },

    closeModal() {
    console.log('avcdssss');

    this.showw = false;
    $('#popup-box').modal('hide');
    window.location.reload();
      
     
    },

    save(){


this.form.userId = this.userId;
this.form.country = this.company_type;





    byMethod(this.method, 'country' , this.form)
        .then((res) => {


            if(res.data.data) {
                // console.log(res.data.data.id)
                this.user_id = res.data.data.user_id;
                this.sho = false;
                this.fin = true;

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
    width: 100% !important;
    height: 900px;
    border-radius: 50px;
    background-image: url(/images/Up.png);
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap:40px 0px;
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

form.form-1 {
    width: 64%;
    height: 703px;
    flex-shrink: 0;
    border-radius: 40px;
    background: #FFF;
    box-shadow: 0px 4px 35px 0px rgba(0, 0, 0, 0.08);
    z-index: 1;
    position: relative;
    padding: 45px 40px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}

.form-box img {
    position: absolute;
    left: 205px;
    bottom: 0px;
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

button.form-btn p {color: #FFF;text-align: center;font-family: DM Sans;font-size: 16px;font-style: normal;font-weight: 700;line-height: 24px; /* 150% */}
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
}
.input-group-2 {
    border-radius: 6px;
    border: 1px solid #000;
    background: #FFF;
    box-shadow: 2px 2px 0px 0px #1B1C1D;
    display: flex;
    padding: 11px 0px 9px 0px;
    justify-content: center;
    align-items: center;
    width: 92%;
}

.input-group-2 h2 {
    color: #000;
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 150% */
    font-family: sans-serif;
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
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}
form.form-1 {
    width: 65%;
    height: 600px;
    flex-shrink: 0;
    border-radius: 30px;
    background: #FFF;
    box-shadow: 0px 4px 35px 0px rgba(0, 0, 0, 0.08);
    z-index: 1;
    position: relative;
    padding:30px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}
a.form-last {
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    gap: 14px;
    padding-top: 20px;
}
.form-box img {
    position: absolute;
    left: 154px;
    bottom: 0px;
    width: 33%;
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
    gap: 30px 0px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}
form.form-1 {
    width: 63%;
    height: 510px;
    flex-shrink: 0;
    border-radius: 29px;
    background: #FFF;
    box-shadow: 0px 4px 35px 0px rgba(0, 0, 0, 0.08);
    z-index: 1;
    position: relative;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}
.input-group-2 {
    border-radius: 6px;
    border: 1px solid #000;
    background: #FFF;
    box-shadow: 2px 2px 0px 0px #1B1C1D;
    display: flex;
    padding: 9px 0px 8px 0px;
    justify-content: center;
    align-items: center;
    width: 92%;
}
.input-group-2 h2 {
    color: #000;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
    font-family: sans-serif;
}
button.form-btn {
    width: 100%;
    display: flex;
    height: 40px;
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
.form-box img {
    position: absolute;
    left: 145px;
    bottom: 0px;
    width: 30%;
}
}

@media screen and (max-width: 1366px){
    .main-form {
    width: 100%;
    height: 560px;
    border-radius: 50px;
    background-image: url(/images/Up.png);
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 30px 0px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}
.form-box img {
    position: absolute;
    left: 160px;
    bottom: 0px;
    width: 27%;
}
form.form-1 {
    width: 63%;
    height: 420px;
    flex-shrink: 0;
    border-radius: 30px;
    background: #FFF;
    box-shadow: 0px 4px 35px 0px rgba(0, 0, 0, 0.08);
    z-index: 1;
    position: relative;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
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
.input-group-2 {
    border-radius: 6px;
    border: 1px solid #000;
    background: #FFF;
    box-shadow: 2px 2px 0px 0px #1B1C1D;
    display: flex;
    padding: 10px 0px 10px 0px;
    justify-content: center;
    align-items: center;
    width: 92%;
}
.input-group-2 h2 {
    color: #000;
    text-align: center;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 12px;
    font-family: sans-serif;
}
button.form-btn {
    width: 100%;
    display: flex;
    height: 34px;
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
button.form-btn p {
    color: #FFF;
    text-align: center;
    font-family: DM Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
}
a.form-last svg {
    width: 20px;
    height: 20px;
}
a.form-last p {
    color: #000;
    font-family: Anton;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
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
}
@media screen and (max-width: 768px){
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
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    padding-top: 15px;
}
form.form-1 {
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
    justify-content: center;
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
    .form-titel {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.form-box {
    width: 100%;
    padding: 0px 20px;
}
.form-box img {
    position: absolute;
    left: 90px;
    bottom: 0px;
    width: 35%;
    display: none;
}
form.form-1 {
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
    justify-content: center;
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