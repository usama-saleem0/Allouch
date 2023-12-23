<template>
 
    <section class="form-1-sec">
      <div class="main-form">
        <div class="logo-from">
            <img src="/images/logo.png" alt="">
        </div>
        <div class="main-box">
            <div class="from-titel">
                <h1>We’re Glad, You’re Here</h1>
                <h3>Your journey with Influencer Marketing... Will be just awesome</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
            </div>
            <div class="from-box">
                <img src="/images/Characters.png" alt="">
                <form action="" class="form-main">
                    <div class="fromr-btn">
                        <button class="Influencer">As Influencer</button>
                        <button class="Brand">As Brand</button>
                        <a href="#">Have an Account ?<span>Sign in</span></a>
                    </div>
                    <h2>Sign up</h2>
                    <div class="input-group">
                        <label for="text">Contact</label>
                        <input type="text" placeholder="Contact">
                    </div>
                </form>
            </div>
            <div class="from-card">
                <h2>Login as</h2>
                <div class="card-box">
                    <div class="card">
                        <img src="/images/Ellipse4.png" alt="">
                        <h2>John peter</h2>
                        <p>Active 1 days ago</p>
                    </div>
                    <div class="card">
                        <img src="/images/Ellipse4.png" alt="">
                        <h2>John peter</h2>
                        <p>Active 1 days ago</p>
                    </div>
                </div>
                <a href="#"> <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
  <path d="M25.6131 4.38811C19.7639 -1.4627 10.2434 -1.4627 4.39417 4.38811C1.56078 7.22338 0 10.9922 0 15.0004C0 19.0087 1.56078 22.7775 4.39417 25.6116C7.31937 28.5376 11.1615 30 15.0036 30C18.8457 30 22.6879 28.5376 25.6131 25.6116C31.4623 19.7608 31.4623 10.24 25.6131 4.38811ZM23.9698 23.9678C19.0259 28.9131 10.9813 28.9131 6.03745 23.9678C3.6434 21.5731 2.32432 18.3879 2.32432 15.0004C2.32432 11.6129 3.6434 8.4277 6.03745 6.03184C10.9813 1.0866 19.0259 1.08778 23.9698 6.03184C28.9125 10.9771 28.9125 19.0238 23.9698 23.9678Z" fill="black"/>
  <path d="M20.0112 18.2127L16.721 14.9264L20.0112 11.64C20.4644 11.1867 20.4644 10.4508 20.0123 9.99626C19.5579 9.54057 18.8223 9.54174 18.3679 9.99509L15.0755 13.2838L11.7831 9.99509C11.3287 9.54174 10.593 9.54057 10.1386 9.99626C9.68538 10.4508 9.68537 11.1866 10.1398 11.64L13.4299 14.9264L10.1398 18.2127C9.68537 18.666 9.68538 19.4019 10.1386 19.8565C10.3652 20.0843 10.6639 20.1971 10.9614 20.1971C11.259 20.1971 11.5565 20.0831 11.7831 19.8576L15.0755 16.5689L18.3679 19.8576C18.5946 20.0843 18.8921 20.1971 19.1896 20.1971C19.4872 20.1971 19.7858 20.0831 20.0125 19.8565C20.4656 19.4019 20.4656 18.666 20.0112 18.2127Z" fill="black"/>
</svg><p>Get Back To Main Screen</p></a>
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
    justify-content: center;
    align-items: center;
}

.main-form {
    width: 1290px;
    height: 900px;
    background-image: url(/images/Up.png);
    padding: 10px 40px ;
}
.main-box {
    width: 100%;
    display: flex;
    position: relative;
    gap: 270px;
    justify-content: space-between;
    flex-direction: column;
}

.logo-from {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.from-titel {width: 32%;padding-top: 60px;}

.from-box {
    width: 40%;
    position: absolute;
    z-index: 1;
    right: 35px;
    display: flex;
    top: 35px;
    align-items: center;
}

.from-card {
    width: 40%;
}

.from-titel h1 {
    color: #1C1D1E;
    font-family: sans-serif;
    font-size: 34px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}

.from-titel h3 {
    color: #1B1C1D;
    font-family: sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: 40px;
    font-size: 24px;
    padding: 8px 0px;
}

.from-titel p {
    color: #1B1C1D;
    font-family: Poppins;
    font-size: 13px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
}

.from-titel form {
    width: 533px;
    height: 703px;
    flex-shrink: 0;
    border-radius: 40px;
    background: #FFF;
    box-shadow: 0px 4px 35px 0px rgba(0, 0, 0, 0.08);
}



form {
    border-radius: 40px;
    background: #FFF;
    box-shadow: 0px 4px 35px 0px rgba(0, 0, 0, 0.08);
    width: 533px;
    height: 703px;
    flex-shrink: 0;
    z-index: 1;
}

.from-box img {position: absolute;right: 255px;top: 0px;}

.card-box {
    width: 100%;
    display: flex;
    gap: 20px;
    align-items: center;
    padding: 24px 0px;
}

.card {
    width: 145px;
    height: 164px;
    flex-shrink: 0;
    border-radius: 9px;
    background: #F96;
    display: flex;
    align-items: center;
    justify-content: center;
}

.card img {
    width: 50%;
}

.card h2 {
    color: #1B1C1D;
    font-family: sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    padding: 5px 0px;
}

.card p {
    color: #1B1C1D;
    font-family: Poppins;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.from-card h2 {
    color: #000;
    font-family: sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.from-card a {
    display: flex;
    align-items: center;
    gap: 10px;
}



.from-card a p {
    color: #000;
    font-family: Anton;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
</style>


