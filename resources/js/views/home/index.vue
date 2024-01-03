<template>
    <div>
        <Nav/>
      <!-- Other Vue.js content -->
  
      <!-- Embed WordPress landing page using iframe -->
      <iframe src="https://aisites.me/" width="100%" height="600" frameborder="0"></iframe>
    </div>
  </template>
  
  <script>
//   import Nav from "../admin/components/Topbar.vue";
  import Nav from "./header.vue";

  export default {
    components: {
    Nav
    
  },
  };
  </script>
  
  