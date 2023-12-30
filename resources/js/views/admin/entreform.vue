<template>
<div class="main-div">
 <div class="main-box">
    <div class="logo-from">
        <img src="/images/logo.png" alt="">
    </div>
    <div class="main-form">
        <div class="form-col-1"></div>
        <div class="form-col-2">
            <div class="input-box">
                <div class="input-group">
                    <label for="text">Edit Username</label>
                    <input type="text" placeholder="@alex">
                </div>
                <div class="input-group">
                    <label for="text">Edit Email</label>
                    <input type="text" placeholder="Alex@someone.com">
                </div>
                <div class="input-group-1">
                    <label for="text">Edit Bio</label>
                    <input type="text" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper pharetra ligula finibus malesuada. Nullam vitae diam viverra, vehicula ligula vitae, eleifend mi. Suspendisse tempus eros eu ligula aliquam">
                </div>
                <div class="input-group-3">
                    <label for="text">Edit Email</label>
                    <input class="hello-1"  type="text" placeholder="">
                    <input class="hello-2" type="text" placeholder="">
                    <input class="hello-3" type="text" placeholder="">
                </div>
            </div>
        </div>
    </div>
 </div>
</div>
</template>

<script>
import Vue from 'vue'
import chartBarDemo from "../../chart/demo/chart-bar-demo";
import { get , byMethod} from '../admin/components/lib/api'
export default {
    name: 'admin',

   

    data () {
            return {
                method:'POST',
                model:{},
                model:'',

               
               
              
              
              
            }
        },
        // created(){
        
        // get('/getuser')
        //       .then((res) => {
                
        //          this.setData(res)

        //       })
          
        // }, 

        methods:{
            setData(res) {
        
              Vue.set(this.$data, 'model', res.data.data)
              console.log(res.data.data)

          },
        }
    }
</script>

<style scoped>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
.main-div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.main-box {
    width: 67.20%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: column;
    align-content: center;
    align-items: center;
    background-color: #FF9966;
    border-radius: 50px;
    gap: 85px;
    padding: 40px 0px;
}

.logo-from {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.main-form {
    width: 75%;
    border-radius: 40px;
    background: #FFF;
    box-shadow: 0px 4px 35px 0px rgba(0, 0, 0, 0.08);
}

.form-col-1 {
    display: flex;
    width: 100%;
    height: 152px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    background: linear-gradient(90deg, rgba(255, 153, 102, 0.29) 0%, rgba(255, 153, 102, 0.72) 50.04%, rgba(255, 153, 102, 0.29) 100%), lightgray 0px -359.563px / 141.93% 598.766% no-repeat;
    border-radius: 40px 40px 0px 0px;
}

.form-col-2 {
    width: 100%;
    padding: 33px 95px;
}

.input-box {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
}

.input-group {
    width: 48%;
    display: flex;
    flex-direction: column;
}

.input-group-1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
}

.input-group-3 {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.input-group label {
    color: #000;
    font-family: sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding-bottom: 15px;
}

.input-group-1 lable {}

.input-group-1 label {color: #000;font-family: sans-serif;font-size: 16px;font-style: normal;font-weight: 400;line-height: normal;padding-bottom: 15px;}

.input-group-3 label {
    width: 100%;
    color: #000;
    font-family: sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding-bottom: 15px;
}

.input-group input {
    border-radius: 9px;
    border: 1px solid #ADADAD;
    background: #FFF;
    padding: 15px;
    flex-shrink: 0;
    width: 100%;
}

.input-group-1 input {
    border-radius: 9px;
    border: 1px solid #ADADAD;
    background: #FFF;
    padding: 15px;
    width: 100%;
}

.input-group-3 input {
    border-radius: 9px;
    border: 1px solid #ADADAD;
    background: #FFF;
    padding: 15px;
    width: 30%;
}
</style>