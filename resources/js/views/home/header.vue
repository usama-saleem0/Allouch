<template>
  <div
    class="
      navbar navbar-expand navbar-light
     
      topbar
      
      static-top
      
    "
 style="background-color: #F5F3EA;" >
    <!-- Sidebar Toggle (Topbar) -->
    <button
      id="sidebarToggleTop"
      class="btn btn-link d-md-none rounded-circle mr-3"
    >
      <i class="fa fa-bars"></i>
    </button>

    <!-- Topbar Search -->
   <img class="images" src="/images/logo.png"/>



  <ul class="ul-list">
    <li>
      <router-link class="nav-link" to="/">
          <!-- <i class="fas fa-fw fa-tachometer-alt"></i> -->
          <a href="#">Home</a></router-link
        >
      </li>
   



      <li >
      
        <button type="button" class="btn" @click="openModal" style="color: black;
    font-size: 11px;
    font-family: sans-serif;
    border: 1px solid black;
    font-weight: bold;
    margin-right: 10px;
    box-shadow: rgb(0 0 0 / 85%) 1.95px 1.95px 2.6px;">
          
           Start for free
          </button>
      </li>
   
   
  </ul>

  <div id="popup-box" class="modal" v-if="isModalOpen" >
      <div style="display: flex;
    padding-left: 0px;
    justify-content: space-evenly;">

        <Details @cancel="closeModal"/>
      </div>
      
    </div>
  
    
  </div>
  
</template>

<script>

import Details from "../register/formrr.vue";
export default {
  name: "Topbar",

  components: {
    
    Details
  },

  data() {
  return {
      shows: true,
      isModalOpen: true,
    };
  },
 

  
  methods: {

    openModal() {
      console.log('acdd');
     
     $('#popup-box').modal('show');
     
   },
   closeModal() {
   console.log('avcd');

   this.shows = false;
   $('#popup-box').modal('hide');
     
    
   },
    logout() {
      localStorage.removeItem("token");
      this.$store.dispatch("user", null);
      this.$router.push("/");
    },

    chats(){
      this.$router.push('/chat')
    },

    back(){
      this.$router.go(-1);
    }
  },
};
</script>


<style>


body {
  overflow-y: hidden;
}


.topbar .dropdown-list .dropdown-header {
    background-color: #f96 !important;
    border: 1px solid #f96 !important;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    color: #fff;
}
.heads{
  color: rgb(0, 0, 0);
    font-family: fantasy;
    font-size: 26px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 20px;
    padding: 10px;

}
.topbar {
    height: 6.375rem !important;
   
    padding-left: 140px !important;
    padding-right: 140px !important;
}
ul.ul-list {
    display: flex;
    justify-content: flex-end;
    width: 30%;
    gap: 20px;
    margin: 0px;
}

ul.ul-list li {
    list-style: none;
}

ul.ul-list li a {
    color: #000;
    color: #222;
    font-family: sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    padding: 0px !important; /* 150% */
}

.navbar.navbar-expand.navbar-light.topbar.static-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 20px !important;
    padding-bottom: 20px !important;
}

h2.heads {
    width: 40% !important;
    margin: 0px !important;
}

img.images {
    padding-top: 0px !important;
    width: 14% !important;
}
@media screen and (max-width: 1600px){
  .heads{
    color: rgb(0, 0, 0);
    font-family: fantasy;
    font-size: 24px !important;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 20px;
    padding: 10px;
 
}
}
@media screen and (max-width: 1440px){

  .topbar {
    height: 4.375rem !important;
   
    padding-left: 75px !important;
    padding-right: 75px !important;
}

ul.ul-list li a{
    color: #000;
    color: #222;
    font-family: sans-serif;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
}

.images{
  padding-top: 5px;
    width: 17%;
}
ul.ul-list[data-v-7bfd2830] {
    display: flex;
    justify-content: flex-end;
    width: 30%;
    gap: 15px;
    margin: 0px ;
}
.heads[data-v-7bfd2830] {
    color: rgb(0, 0, 0);
    font-family: fantasy;
    font-size: 22px !important;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 20px;
    padding: 10px;
}
}

@media screen and (max-width: 1024px){
  .images{
    width: 30%;
    padding-bottom: 12px;
}
h2.heads {
    width: 60% !important;
    margin: 0px !important;
}
ul.ul-list {
    display: flex;
    justify-content: flex-end;
    width: 30%;
    gap: 8px !important;
    margin: 0px;
}
ul.ul-list li a{
    color: #000;
    color: #222;
    font-family: sans-serif;
    font-size: 12px !important;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    padding: 0px !important;
}
.navbar.navbar-expand.navbar-light.topbar.static-top{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 20px !important;
    padding-bottom: 20px !important;
    padding-left: 35px !important;
    padding-right: 35px !important;
}
.heads[data-v-7bfd2830][data-v-7bfd2830] {
    color: rgb(0, 0, 0);
    font-family: fantasy;
    font-size: 16px !important;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 20px;
    padding: 10px;
}
}

@media screen and (max-width: 768px){

  .heads{
    display: none;
  }

  .images{
   display: none;
}

 
}

</style>
