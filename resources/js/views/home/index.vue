<template>
  <div class="bg_image">
    
    <!-- <div class="masthead">
      <div class="text-center text-white">
        <h1 class="py-5 home-title">
          Welcome Influencer Marketing System
        </h1>
      </div>
    </div> -->
    <div class="container acc">
      <div class="text-center py-5">
        
          <!-- <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
           Register
          </button> -->

          <button type="button" class="btn" @click="openModal" style="color: black;
    font-size: 11px;
    font-family: sans-serif;
    border: 1px solid black;
    font-weight: bold;
    margin-right: 10px;
    box-shadow: rgb(0 0 0 / 85%) 1.95px 1.95px 2.6px;">
          
           Start for free
          </button>
        <!-- <router-link to="/admin" class="btn btn-primary">
          Go to dashboard <i class="fas fa-chevron-right"></i
        ></router-link> -->
      </div>
     
    <div id="popup-box" class="modal" v-if="isModalOpen">
      <Details @cancel="closeModal"/>
      
    </div>



    </div>
   
  </div>
</template>

<script>
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Details from "../register/formrr.vue";


export default {
  name: "Home",
  components: {
    Nav,
    Footer,
    Details
  },
  data() {
  return {
      shows: true,
      isModalOpen: true,
    };
  },


  methods:{

    openModal() {
     
      $('#popup-box').modal('show');
      
    },
    closeModal() {
    console.log('avcd');

    this.shows = false;
    $('#popup-box').modal('hide');
      
     
    },
  }
 
};
</script>

<style>
body{
  width: 100%;
    height:100%;
  background-image: url(/images/Lanfing.png);
  background-size: cover;
  overflow: scroll;
}
.acc{
    padding: 27px ;
  }

  section.form-1-sec {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100% !important;
    align-content: center;
}


@media screen and (max-width: 1440px){

  .acc{
    padding: 0px !important;
  }
}


/* .bg_image{
  width: 100%;
    height:100%;
    background-image: url(/images/Lanfing.png);
   
} */

.modal-dialog {
    /* min-width: 1290px; */
    max-width: 1290px !important;
    width: 100% !important;
}
.home-title {
  font-size: 4rem;
}
.masthead {
  background: linear-gradient(0deg, #4e73df 0%, #36b9cc 100%);
  padding-top: 5rem;
  padding-bottom: 5rem;
}
.min-vh-50 {
    min-height: 50vh !important;
}

.box {
            background-color: black;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        p {
            font-size: 17px;
            align-items: center;
        }
        .box a {
            display: inline-block;
            background-color: #fff;
            padding: 15px;
            border-radius: 3px;
        }
        /* .modal {
            align-items: center;
            display: flex;
            justify-content: center; 
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background: rgba(254, 126, 126, 0.7);
            transition: all 0.4s;
            visibility: hidden;
            opacity: 0;
        } */
        .content {
            position: absolute;
            background: white;
            width: 400px;
            padding: 1em 2em;
            border-radius: 4px;
        } 
        .modal:target {
            visibility: visible;
            opacity: 1;
        }
        .box-close {
            position: absolute;
            top: 0;
            right: 15px;
            color: #fe0606;
            text-decoration: none;
            font-size: 30px;
        }
</style>


