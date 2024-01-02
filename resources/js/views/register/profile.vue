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
                <img class="imgss" src="/images/Character.png" alt="">
                <div  class="form-1">

                    <div class="img-input">
                        <label for="text">Upload Your Profile Picture</label>

                        <div >
        <div
        class="drop-zone"
      id="image-drop-area"
      @dragover="onDragOver"
      @drop="onDrop"
      @click="openFileDialog"
     
    >
    <input type="file" id="file-input" ref="fileInput" style="display: none" @change="handleFileChange" accept="image/*">
      <div class="image-drop-zone" v-if="!imageUrl"  >

        <span class="drop-zone__prompt" ><svg xmlns="http://www.w3.org/2000/svg" width="74" height="74" viewBox="0 0 74 74" fill="none">
  <path d="M58.5833 40.0771H40.0833V58.5771H33.9166V40.0771H15.4166V33.9104H33.9166V15.4104H40.0833V33.9104H58.5833V40.0771Z" fill="#FF9966"/>
</svg></span>
      </div>
      <div class="drop-zone" v-else>
        <img class="image-preview" :src="imageUrl" alt="Uploaded Image"/>
      </div>
    </div>

  
  </div>
                        <!-- <div id="app">
    <div class="drop-zone" :class="{ 'drop-zone--over': isDragging }" @dragover.prevent="handleDragOver" @dragleave="handleDragLeave" @drop="handleDrop">
      <span class="drop-zone__prompt" v-if="!thumbnail"><svg xmlns="http://www.w3.org/2000/svg" width="74" height="74" viewBox="0 0 74 74" fill="none">
  <path d="M58.5833 40.0771H40.0833V58.5771H33.9166V40.0771H15.4166V33.9104H33.9166V15.4104H40.0833V33.9104H58.5833V40.0771Z" fill="#FF9966"/>
</svg></span>
      <input type="file" name="myFile" class="drop-zone__input" @change="handleFileChange">
      <div class="drop-zone__thumb" v-if="thumbnail" :style="{ 'background-image': `url('${thumbnail}')` }" :data-label="fileName"></div>
    </div>
  </div> -->
                    </div>
                    
                    <div class="input-group-2">
                        <label for="text">Bio</label>
                        <input type="text" placeholder="Write here
                        " v-model="form.bio">
                    </div>
                    <div class="input-3">
                        <label for="text">Provide Social Media Handles</label>
                        <input class="icon-input1" type="text" placeholder="" v-model="form.facebook">
                        <input class="icon-input2" type="text" placeholder="" v-model="form.instagram">
                        <input class="icon-input3" type="text" placeholder="" v-model="form.linkdin">
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
        <div v-if="final">
      <Final  @cancel="closeModal"/>
      
    </div>
    </section>
</template>

<script>
 import { get , byMethod} from '../admin/components/lib/api';
 import Final from "../register/formz.vue"
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

  data () {
            return {
                method:'POST',
                imageUrl: null,
                file: null,
                form: {},
                showss:true,
                final:false,
              
              
              
            }
        },

        methods:{

          closeModal() {
    console.log('avcd');

    this.shows = false;
    $('#popup-box').modal('hide');

    window.location.reload();
      
     
    },

          handleFileChange(event) {
      this.file = event.target.files[0];
      this.imageUrl = URL.createObjectURL(this.file);
      console.log(this.imageUrl);
    },
    onDragOver(event) {
      event.preventDefault();
    },
    onDrop(event) {
      event.preventDefault();
      this.file = event.dataTransfer.files[0];
      this.imageUrl = URL.createObjectURL(this.file);
    },
    openFileDialog() {
        
    //   document.getElementById('file-input').click();
    this.$refs.fileInput.click();
    },


    


    save(){
                const formData = new FormData();
    formData.append('image', this.file); 
    formData.append('bio', this.form.bio);
    formData.append('facebook', this.form.facebook);
    formData.append('instagram', this.form.instagram);
    formData.append('linkdin', this.form.linkdin);
    formData.append('user_id', this.userId);


   

     
                byMethod(this.method, '/api/profile' , formData)
                     .then((res) => {
                       
                         if(res.data.data) {
                          console.log(res.data.data)
                          this.showss = false;
                          this.final = true;
                            // this.$router.push('/brands');
                          
                         }
                     })
                     .catch((error) => {
                         if(error.response.status === 422) {
                             this.errors = error.response.data.errors
                         }
                         this.isProcessing = false
                     })
            }
        }
};



</script>
<style scoped>
.image-preview img {
  max-width: 88%;
  max-height: 200px;
}

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
.icon-input1 {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'%3E%3Cpath d='M20.9 2H3.1C2.80826 2 2.52847 2.11589 2.32218 2.32218C2.11589 2.52847 2 2.80826 2 3.1V20.9C2 21.1917 2.11589 21.4715 2.32218 21.6778C2.52847 21.8841 2.80826 22 3.1 22H12.68V14.25H10.08V11.25H12.68V9C12.6261 8.47176 12.6885 7.93813 12.8627 7.43654C13.0369 6.93495 13.3188 6.47755 13.6885 6.09641C14.0582 5.71528 14.5068 5.41964 15.0028 5.23024C15.4989 5.04083 16.0304 4.96225 16.56 5C17.3383 4.99521 18.1163 5.03528 18.89 5.12V7.82H17.3C16.04 7.82 15.8 8.42 15.8 9.29V11.22H18.8L18.41 14.22H15.8V22H20.9C21.0445 22 21.1875 21.9715 21.321 21.9163C21.4544 21.861 21.5757 21.78 21.6778 21.6778C21.78 21.5757 21.861 21.4544 21.9163 21.321C21.9715 21.1875 22 21.0445 22 20.9V3.1C22 2.95555 21.9715 2.81251 21.9163 2.67905C21.861 2.54559 21.78 2.42433 21.6778 2.32218C21.5757 2.22004 21.4544 2.13901 21.321 2.08373C21.1875 2.02845 21.0445 2 20.9 2Z' fill='%23FF5757'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: 10px center;
    padding-left: 40px; /* Adjust this value based on the width of your SVG icon */
  }
  .icon-input2 {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'%3E%3Cpath d='M13.028 2C14.153 2.003 14.724 2.009 15.217 2.023L15.411 2.03C15.635 2.038 15.856 2.048 16.123 2.06C17.187 2.11 17.913 2.278 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.2239 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.952 8.144 21.962 8.365 21.97 8.59L21.976 8.784C21.991 9.276 21.997 9.847 21.999 10.972L22 11.718V13.028C22.0024 13.7574 21.9948 14.4868 21.977 15.216L21.971 15.41C21.963 15.635 21.953 15.856 21.941 16.122C21.891 17.187 21.721 17.912 21.475 18.55C21.2246 19.2178 20.8311 19.8226 20.322 20.322C19.8219 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.123 21.94C15.8857 21.9512 15.6483 21.9612 15.411 21.97L15.217 21.976C14.724 21.99 14.153 21.997 13.028 21.999L12.282 22H10.973C10.2432 22.0025 9.51349 21.9949 8.78397 21.977L8.58997 21.971C8.35258 21.962 8.11524 21.9517 7.87797 21.94C6.81397 21.89 6.08797 21.722 5.44997 21.475C4.78264 21.2244 4.17818 20.8308 3.67897 20.322C3.17001 19.8223 2.77619 19.2176 2.52497 18.55C2.27797 17.913 2.10997 17.187 2.05997 16.122C2.04883 15.8847 2.03883 15.6474 2.02997 15.41L2.02497 15.216C2.00654 14.4868 1.9982 13.7574 1.99997 13.028V10.972C1.99718 10.2426 2.00451 9.5132 2.02197 8.784L2.02897 8.59C2.03697 8.365 2.04697 8.144 2.05897 7.878C2.10897 6.813 2.27697 6.088 2.52397 5.45C2.77508 4.7819 3.16969 4.17702 3.67997 3.678C4.17906 3.16947 4.78311 2.77599 5.44997 2.525C6.08797 2.278 6.81297 2.11 7.87797 2.06C8.14397 2.048 8.36597 2.038 8.58997 2.03L8.78397 2.024C9.51316 2.00623 10.2426 1.99857 10.972 2.001L13.028 2ZM12 7C10.6739 7 9.40211 7.52678 8.46443 8.46447C7.52675 9.40215 6.99997 10.6739 6.99997 12C6.99997 13.3261 7.52675 14.5979 8.46443 15.5355C9.40211 16.4732 10.6739 17 12 17C13.326 17 14.5978 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5978 7.52678 13.326 7 12 7ZM12 9C12.3939 8.99993 12.7841 9.07747 13.1481 9.22817C13.5121 9.37887 13.8428 9.5998 14.1214 9.87833C14.4001 10.1569 14.6211 10.4875 14.7719 10.8515C14.9227 11.2154 15.0004 11.6055 15.0005 11.9995C15.0005 12.3935 14.923 12.7836 14.7723 13.1476C14.6216 13.5116 14.4007 13.8423 14.1221 14.121C13.8436 14.3996 13.5129 14.6206 13.149 14.7714C12.785 14.9223 12.3949 14.9999 12.001 15C11.2053 15 10.4423 14.6839 9.87965 14.1213C9.31704 13.5587 9.00097 12.7956 9.00097 12C9.00097 11.2044 9.31704 10.4413 9.87965 9.87868C10.4423 9.31607 11.2053 9 12.001 9M17.251 5.5C16.9194 5.5 16.6015 5.6317 16.3671 5.86612C16.1327 6.10054 16.001 6.41848 16.001 6.75C16.001 7.08152 16.1327 7.39946 16.3671 7.63388C16.6015 7.8683 16.9194 8 17.251 8C17.5825 8 17.9004 7.8683 18.1349 7.63388C18.3693 7.39946 18.501 7.08152 18.501 6.75C18.501 6.41848 18.3693 6.10054 18.1349 5.86612C17.9004 5.6317 17.5825 5.5 17.251 5.5Z' fill='%23FF5757'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: 10px center;
    padding-left: 40px;
}

  .icon-input3 {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'%3E%3Cpath d='M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z' fill='%23FF5757'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: 10px center;
    padding-left: 40px; /* Adjust this value based on the width of your SVG icon */
  }
.main-form {
    width: 100%;
    height: 900px;
    border-radius: 50px;
    background-image: url(/images/Sign\ Up.png);
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap:40px 0px ;
}
.form-img {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.input-3 {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.input-3 label {
    color: #000;
    font-family: sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 100%;
    padding-bottom: 10px;
}

.input-3 input {
    width: 28%;
    border-radius: 9px;
    border: 1px solid #ADADAD;
    padding: 10px 10px 10px 40px;
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

.imgss {
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
    font-family: Poppins;
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
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    padding: 15px;
}

.input-group-2 label {
    color: #000;
    font-family: Poppins;
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
    font-family: Poppins;
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
    cursor: pointer;
}
.drop-zone[data-v-273194bc] {
    width: 100%;
    height: 280px;
    padding: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-family: "Quicksand", sans-serif;
    font-weight: 500;
    font-size: 20px;
    cursor: pointer;
    border-radius: 9px;
    border: 1px solid #FF5757;
    background: #FFF;
}

.drop-zone--over {
  border-style: solid;
}

.drop-zone__input {
  display: none;
}

.drop-zone__thumb {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
  background-color: #cccccc;
  background-size: cover;
  position: relative;
}

.drop-zone__thumb::after {
  content: attr(data-label);
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 5px 0;
  color: #ffffff;
  background: rgba(0, 0, 0, 0.75);
  font-size: 14px;
  text-align: center;
}
div#app {
    width: 100%;
}

.img-input {
    width: 100%;
}
.img-input label {
    color: #000;
    font-family: sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding-bottom: 10px;
}
img.image-preview {
    width: 100%;
    min-width: 443px;
    min-height: 278px;
    border-radius: 5px;
    max-width: 443px;
    max-height: 278px;
}

@media screen and (max-width: 1600px){
  .form-titel h2[data-v-273194bc] {
    color: #1C1D1E;
    font-family: sans-serif;
    font-size: 29px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
}
img.image-preview[data-v-273194bc] {
    width: 100%;
    min-width: 394px;
    min-height: 180px;
    border-radius: 5px;
    max-width: 443px;
    max-height: 180px;
}
.form-1[data-v-273194bc] {
    width: 63%;
    height: 606px;
    flex-shrink: 0;
    border-radius: 24px;
    background: #FFF;
    box-shadow: 0px 4px 35px 0px rgba(0, 0, 0, 0.08);
    z-index: 1;
    position: relative;
    padding: 24px 25px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
}
.main-form[data-v-273194bc] {
    width: 100%;
    height: 785px;
    border-radius: 50px;
    background-image: url(/images/Sign\ Up.png);
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 30px 0px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}
.form-titel[data-v-273194bc] {
    width: 28%;
    display: flex;
    justify-content: flex-end;
}
.drop-zone[data-v-273194bc][data-v-273194bc] {
    width: 100%;
    height: 180px;
    padding: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-family: "Quicksand", sans-serif;
    font-weight: 500;
    font-size: 20px;
    cursor: pointer;
    border-radius: 9px;
    border: 1px solid #FF5757;
    background: #FFF;
}
a.form-last[data-v-273194bc] {
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    gap: 14px;
    padding-top: 20px;
}
.imgss[data-v-273194bc] {
    position: absolute;
    left: 160px;
    bottom: 0px;
    width: 32%;
}
}
@media screen and (max-width: 1440px){
  .main-form[data-v-273194bc][data-v-273194bc] {
    width: 100%;
    height: 650px;
    border-radius: 50px;
    background-image: url(/images/Sign\ Up.png);
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 25px 0px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}
img.image-preview[data-v-273194bc] {
    width: 100%;
    min-width: 318px;
    min-height: 124px;
    border-radius: 5px;
    max-width: 443px;
    max-height: 124px;
}
.drop-zone[data-v-273194bc][data-v-273194bc][data-v-273194bc] {
    width: 100%;
    height: 125px;
    padding: 25px;
    display: flex;
    align-items: center;
    text-align: center;
    font-family: "Quicksand", sans-serif;
    font-weight: 500;
    font-size: 20px;
    cursor: pointer;
    border-radius: 9px;
    border: 1px solid #FF5757;
    background: #FFF;
    justify-content: center;
}
.input-group-2 input[data-v-273194bc] {
    border-radius: 9px;
    border: 1px solid #ADADAD;
    background: #FFF;
    color: #808080;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    padding: 10px;
}
.img-input label[data-v-273194bc] {
    color: #000;
    font-family: sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding-bottom: 10px;
}
.input-group-2 label[data-v-273194bc] {
    color: #000;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding-bottom: 10px;
}
.input-3 label[data-v-273194bc] {
    color: #000;
    font-family: sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 100%;
    padding-bottom: 10px;
}
.form-1[data-v-273194bc][data-v-273194bc] {
    width: 58%;
    height: 485px;
    flex-shrink: 0;
    border-radius: 24px;
    background: #FFF;
    box-shadow: 0px 4px 35px 0px rgba(0, 0, 0, 0.08);
    z-index: 1;
    position: relative;
    padding: 24px 25px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
}
.imgss[data-v-273194bc][data-v-273194bc] {
    position: absolute;
    left: 160px;
    bottom: 0px;
    width: 30%;
}
a.form-last p[data-v-273194bc] {
    color: #000;
    font-family: Anton;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    cursor: pointer;
}
}
@media screen and (max-width: 1366px){
  .main-form[data-v-273194bc][data-v-273194bc][data-v-273194bc] {
    width: 100%;
    height: 560px;
    border-radius: 45px;
    background-image: url(/images/Sign\ Up.png);
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 25px 0px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}
.form-1[data-v-273194bc][data-v-273194bc][data-v-273194bc] {
    width:55%;
    height: 420px;
    flex-shrink: 0;
    border-radius: 20px;
    background: #FFF;
    box-shadow: 0px 4px 35px 0px rgba(0, 0, 0, 0.08);
    z-index: 1;
    position: relative;
    padding: 20px 24px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
}
img.image-preview[data-v-273194bc][data-v-273194bc] {
    width: 100%;
    min-width: 282px;
    min-height: 108px;
    border-radius: 5px;
    max-width: 443px;
    max-height: 108px;
}
a.form-last p[data-v-273194bc][data-v-273194bc] {
    color: #000;
    font-family: Anton;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    cursor: pointer;
}
a.form-last[data-v-273194bc][data-v-273194bc] svg {
    width: 20px;
    height: 20px;
}
button.form-btn[data-v-273194bc] {
    width: 100%;
    display: flex;
    height: 38px;
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
button.form-btn p[data-v-273194bc] {
    color: #FFF;
    text-align: center;
    font-family: DM Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
}
.drop-zone[data-v-273194bc][data-v-273194bc][data-v-273194bc][data-v-273194bc] {
    width: 100%;
    height: 110px;
    padding: 25px;
    display: flex;
    align-items: center;
    text-align: center;
    font-family: "Quicksand", sans-serif;
    font-weight: 500;
    font-size: 20px;
    cursor: pointer;
    border-radius: 9px;
    border: 1px solid #FF5757;
    background: #FFF;
    justify-content: center;
}
.img-input label[data-v-273194bc][data-v-273194bc] {
    color: #000;
    font-family: sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding-bottom: 8px;
}
.input-group-2 label[data-v-273194bc][data-v-273194bc] {
    color: #000;
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding-bottom: 8px;
}
.input-3 label[data-v-273194bc][data-v-273194bc] {
    color: #000;
    font-family: sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 100%;
    padding-bottom: 8px;
}
.input-group-2 input[data-v-273194bc][data-v-273194bc] {
    border-radius: 9px;
    border: 1px solid #ADADAD;
    background: #FFF;
    color: #808080;
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    padding: 8px;
}
.input-3 input[data-v-273194bc] {
    width: 28%;
    border-radius: 9px;
    border: 1px solid #ADADAD;
    padding: 8px 8px 8px 35px !important;
}
.imgss[data-v-273194bc][data-v-273194bc][data-v-273194bc] {
    position: absolute;
    left: 170px;
    bottom: 0px;
    
    width: 26%;
}

}
@media screen and (max-width: 768px){
  .main-form[data-v-273194bc][data-v-273194bc][data-v-273194bc][data-v-273194bc] {
    width: 100%;
    height: 560px;
    border-radius: 24px;
    background-image: url(/images/Sign\ Up.png);
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 25px 0px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}
.main-form[data-v-273194bc][data-v-273194bc][data-v-273194bc][data-v-273194bc] {
    width: 100%;
    height: 100%;
    border-radius: 24px;
    background-image: url(/images/Sign\ Up.png);
    position: relative;
    display: flex;
    gap: 25px 0px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    flex-direction: column;
    align-content: center;
    align-items: center;
}
.form-titel[data-v-273194bc][data-v-273194bc] {
    width: 100%;
    display: flex;
    justify-content: center;
}
.form-1[data-v-273194bc][data-v-273194bc][data-v-273194bc][data-v-273194bc] {
    width: 50%;
    height: 420px;
    flex-shrink: 0;
    border-radius: 20px;
    background: #FFF;
    box-shadow: 0px 4px 35px 0px rgba(0, 0, 0, 0.08);
    z-index: 1;
    position: relative;
    padding: 20px 24px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
}
.imgss[data-v-273194bc][data-v-273194bc][data-v-273194bc][data-v-273194bc][data-v-273194bc] {
    position: relative;
    left: 85px;
    bottom: 0px;
    width: 33%;
}
.form-box[data-v-273194bc][data-v-273194bc] {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: flex-start;
}
a.form-last[data-v-273194bc][data-v-273194bc] {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    gap: 14px;
    padding-top: 20px;
}
img.image-preview[data-v-273194bc][data-v-273194bc][data-v-273194bc] {
    width: 100%;
    min-width: 288px;
    min-height: 108px;
    border-radius: 5px;
    max-width: 443px;
    max-height: 108px;
}
}
@media screen and (max-width: 425px){

.main-form[data-v-273194bc][data-v-273194bc][data-v-273194bc][data-v-273194bc][data-v-273194bc] {
    width: 100%;
    height: 100%;
    border-radius: 24px;
    background-image: url(/images/Sign\ Up.png);
    position: relative;
    display: flex;
    gap: 25px 0px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    flex-direction: column;
    align-content: center;
    align-items: center;
    padding: 20px;
}
div#popup-box {
    padding-right: 0px;
}
.form-img img[data-v-273194bc] {
    width: 40%;
}
.form-titel h2[data-v-273194bc][data-v-273194bc] {
    color: #1C1D1E;
    font-family: sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
}
.imgss[data-v-273194bc][data-v-273194bc][data-v-273194bc][data-v-273194bc][data-v-273194bc][data-v-273194bc] {
    position: relative;
    left: 85px;
    bottom: 0px;
    width: 33%;
    display: none;
}
.form-1[data-v-273194bc][data-v-273194bc][data-v-273194bc][data-v-273194bc][data-v-273194bc] {
    width: 100%;
    height: 420px;
    flex-shrink: 0;
    border-radius: 20px;
    background: #FFF;
    box-shadow: 0px 4px 35px 0px rgba(0, 0, 0, 0.08);
    z-index: 1;
    position: relative;
    padding: 20px 24px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
}
}
</style>