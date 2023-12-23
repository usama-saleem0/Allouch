<template>
  <div>
    <Nav />
    <div class="masthead">
      <div class="text-center text-white">
        <h1 class="py-5 home-title">
          Welcome Influencer Marketing System
        </h1>
      </div>
    </div>
    <div class="container">
      <div class="text-center py-5 min-vh-50">
        
          <!-- <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
           Register
          </button> -->

          <button type="button" class="btn btn-primary" @click="openModal">
           Register
          </button>
        <!-- <router-link to="/admin" class="btn btn-primary">
          Go to dashboard <i class="fas fa-chevron-right"></i
        ></router-link> -->
      </div>


<!-- Modal -->
<div v-if="shows">
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" >
  <div class="modal-dialog" role="document">
    <Details @cancel="closeModal"/>

   
          <!-- <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> -->
   
        </div>
 
</div>
</div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Details from "../register/branddetail.vue";


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
    };
  },


  methods:{

    openModal() {
      // You might need to trigger Bootstrap's modal using jQuery
      $('#exampleModal').modal('show');
      
    },
    closeModal() {
    console.log('avcd');

    this.shows = false;
    $('#exampleModal').modal('hide');
      // Use Bootstrap modal method to hide the modal
     
    },
  }
 
};
</script>

<style>

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
</style>
