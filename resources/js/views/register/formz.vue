<template>
 
    <section class="form-1-sec">
       <div class="main-form">
        <div class="form-img">
                <img src="/images/logo.png" alt="">
          </div>
          <div class="row formz">
            <div class="col-lg-6 col-md-6 col-sm-12 imger">
              <img src="/images/Characters.png" alt="">
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 form-titel">
              <h3>Thanks For Your Precious Time</h3>
              <h1>Please Wait I am Working On This</h1>
              <p>Brand Journey Start’s Here</p>
              <a href="#" @click="$emit('cancel')" ><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
  <path d="M25.6131 4.38811C19.7639 -1.4627 10.2434 -1.4627 4.39417 4.38811C1.56078 7.22338 0 10.9922 0 15.0004C0 19.0087 1.56078 22.7775 4.39417 25.6116C7.31937 28.5376 11.1615 30 15.0036 30C18.8457 30 22.6879 28.5376 25.6131 25.6116C31.4623 19.7608 31.4623 10.24 25.6131 4.38811ZM23.9698 23.9678C19.0259 28.9131 10.9813 28.9131 6.03745 23.9678C3.6434 21.5731 2.32432 18.3879 2.32432 15.0004C2.32432 11.6129 3.6434 8.4277 6.03745 6.03184C10.9813 1.0866 19.0259 1.08778 23.9698 6.03184C28.9125 10.9771 28.9125 19.0238 23.9698 23.9678Z" fill="black"/>
  <path d="M20.0112 18.2127L16.721 14.9264L20.0112 11.64C20.4644 11.1867 20.4644 10.4508 20.0123 9.99626C19.5579 9.54057 18.8223 9.54174 18.3679 9.99509L15.0755 13.2838L11.7831 9.99509C11.3287 9.54174 10.593 9.54057 10.1386 9.99626C9.68538 10.4508 9.68537 11.1866 10.1398 11.64L13.4299 14.9264L10.1398 18.2127C9.68537 18.666 9.68538 19.4019 10.1386 19.8565C10.3652 20.0843 10.6639 20.1971 10.9614 20.1971C11.259 20.1971 11.5565 20.0831 11.7831 19.8576L15.0755 16.5689L18.3679 19.8576C18.5946 20.0843 18.8921 20.1971 19.1896 20.1971C19.4872 20.1971 19.7858 20.0831 20.0125 19.8565C20.4656 19.4019 20.4656 18.666 20.0112 18.2127Z" fill="black"/>
</svg> <p @click="$emit('cancel')" >Get Back To Main Screen</p></a>
            </div>
          </div>
       </div>
    </section>
</template>

<script>
export default {
  name: "Form",
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
    border-radius: 50px;
    background: #F96;
    width: 100%;
    height: 900px;
    padding:20px 50px 0px 50px;
}

.form-img {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.col-lg-6.col-md-12.col-sm-12 img {
    width: 100%;
}
.form-titel h3 {
    color: #000;
    font-family: sans-serif;
    font-size: 38px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}

.form-titel h1 {
    color: #000;
    font-family: sans-serif;
    font-size: 74px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    padding: 15px 0px;
}

.form-titel p {
    color: #000;
    font-family: sans-serif;
    font-size: 38px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}

.form-titel a {
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: center;
    padding-top: 15px;
}

.form-titel a p {
    color: #000;
    font-family: Anton;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}
.form-titel a svg {
    width: 30px;
    height: 30px;
    flex-shrink: 0;
}


.row.formz {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

@media screen and (max-width: 1600px){
    .main-form[data-v-0dc4e8ee] {
    border-radius: 50px;
    background: #F96;
    width: 100%;
    height: 770px;
    padding: 20px 50px 0px 50px;
}
.form-titel h3[data-v-0dc4e8ee] {
    color: #000;
    font-family: sans-serif;
    font-size: 30px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}
.form-titel h1[data-v-0dc4e8ee] {
    color: #000;
    font-family: sans-serif;
    font-size: 58px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    padding: 15px 0px;
}
.form-titel p[data-v-0dc4e8ee] {
    color: #000;
    font-family: sans-serif;
    font-size: 34px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}
.imger img {
    width: 100%;
}
.form-titel a p[data-v-0dc4e8ee] {
    color: #000;
    font-family: Anton;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}
}
@media screen and (max-width: 1440px){
    .main-form[data-v-0dc4e8ee][data-v-0dc4e8ee] {
    border-radius: 50px;
    background: #F96;
    width: 100%;
    height: 650px;
    padding: 20px 50px 0px 50px;
}
.form-titel h3[data-v-0dc4e8ee][data-v-0dc4e8ee] {
    color: #000;
    font-family: sans-serif;
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}
.form-titel h1[data-v-0dc4e8ee][data-v-0dc4e8ee] {
    color: #000;
    font-family: sans-serif;
    font-size: 52px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    padding: 15px 0px;
}
.form-titel p[data-v-0dc4e8ee][data-v-0dc4e8ee] {
    color: #000;
    font-family: sans-serif;
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}
.col-lg-6.col-md-12.col-sm-12.imger img[data-v-0dc4e8ee] {
    width: 93%;
}
.form-titel a p[data-v-0dc4e8ee][data-v-0dc4e8ee] {
    color: #000;
    font-family: Anton;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}
.imger img[data-v-0dc4e8ee] {
    width: 93%;
}
}
@media screen and (max-width: 1366px){
    .main-form[data-v-0dc4e8ee][data-v-0dc4e8ee] {
    border-radius:45px;
    background: #F96;
    width: 100%;
    height: 560px;
    padding: 20px 35px 0px 35px;
}
.form-titel h3[data-v-0dc4e8ee][data-v-0dc4e8ee] {
    color: #000;
    font-family: sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}
.form-titel h1[data-v-0dc4e8ee][data-v-0dc4e8ee] {
    color: #000;
    font-family: sans-serif;
    font-size: 45px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    padding: 10px 0px;
}
.form-titel p[data-v-0dc4e8ee][data-v-0dc4e8ee] {
    color: #000;
    font-family: sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}
.col-lg-6.col-md-12.col-sm-12.imger img[data-v-0dc4e8ee] {
    width: 80%;
}
.form-titel a p[data-v-0dc4e8ee][data-v-0dc4e8ee] {
    color: #000;
    font-family: Anton;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}
.imger img[data-v-0dc4e8ee] {
    width: 80%;
}
}
@media screen and (max-width: 768px){
    .main-form[data-v-0dc4e8ee][data-v-0dc4e8ee][data-v-0dc4e8ee] {
    border-radius: 25px;
    background: #F96;
    width: 100%;
    height: 100%;
    padding: 20px 30px 0px 30px;
}
.imger img[data-v-0dc4e8ee] {
    width: 82%;
}
.form-titel h3[data-v-0dc4e8ee][data-v-0dc4e8ee][data-v-0dc4e8ee] {
    color: #000;
    font-family: sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}
.form-titel h1[data-v-0dc4e8ee][data-v-0dc4e8ee][data-v-0dc4e8ee] {
    color: #000;
    font-family: sans-serif;
    font-size: 38px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    padding: 10px 0px;
}
.form-titel p[data-v-0dc4e8ee][data-v-0dc4e8ee][data-v-0dc4e8ee] {
    color: #000;
    font-family: sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}
.form-titel a svg[data-v-0dc4e8ee] {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
}
.form-titel a p[data-v-0dc4e8ee][data-v-0dc4e8ee][data-v-0dc4e8ee] {
    color: #000;
    font-family: Anton;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}
}
@media screen and (max-width: 425px){
    .row.formz[data-v-0dc4e8ee] {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column-reverse;
    gap: 30px;
    align-content: center;
    padding-top: 30px;
    }
    .main-form[data-v-0dc4e8ee][data-v-0dc4e8ee][data-v-0dc4e8ee][data-v-0dc4e8ee] {
    border-radius: 25px;
    background: #F96;
    width: 100%;
    height: 100%;
    padding: 20px 20px 0px 20px;
}

    .form-titel h3[data-v-0dc4e8ee][data-v-0dc4e8ee][data-v-0dc4e8ee][data-v-0dc4e8ee] {
    color: #000;
    font-family: sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-align: center;
}
.form-titel h1[data-v-0dc4e8ee][data-v-0dc4e8ee][data-v-0dc4e8ee][data-v-0dc4e8ee] {
    color: #000;
    font-family: sans-serif;
    font-size: 30px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    padding: 10px 0px;
    text-align: center;
}
.form-titel p[data-v-0dc4e8ee][data-v-0dc4e8ee][data-v-0dc4e8ee][data-v-0dc4e8ee] {
    color: #000;
    font-family: sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-align: center;
}
.form-titel a p[data-v-0dc4e8ee][data-v-0dc4e8ee][data-v-0dc4e8ee][data-v-0dc4e8ee] {
    color: #000;
    font-family: Anton;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}
.form-titel a svg[data-v-0dc4e8ee][data-v-0dc4e8ee] {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
}
.form-img img {
    width: 45%;
}
}
</style>


