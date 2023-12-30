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
   <h2 class="heads">Welcome Alex!! Resume Your Influencer Journey</h2>


  <ul class="ul-list">
    <li>
      <router-link class="nav-link" to="/">
          <!-- <i class="fas fa-fw fa-tachometer-alt"></i> -->
          <a href="#">Home</a></router-link
        >
      </li>
    <li>
      
      <router-link class="nav-link" to="/influncer/dashborad">
          <!-- <i class="fas fa-fw fa-tachometer-alt"></i> -->
          <a href="#">Dashboard</a></router-link
        >
      </li>
    <li>
      <router-link class="nav-link" to="/sponsorship">
          <!-- <i class="fas fa-fw fa-tachometer-alt"></i> -->
          <a href="#">Subscription’s</a></router-link
        >
      
    </li>
    <li>
      <router-link class="nav-link" to="/courses">
          <!-- <i class="fas fa-fw fa-tachometer-alt"></i> -->
          <a href="#">Courses</a></router-link
        >
      </li>
  </ul>
    <!-- Topbar Navbar -->
    <ul class="navbar-nav ml-auto">
      <!-- Nav Item - Search Dropdown (Visible Only XS) -->
      <li class="nav-item dropdown no-arrow d-sm-none">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          id="searchDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <i class="fas fa-search fa-fw"></i>
        </a>
        <!-- Dropdown - Messages -->
        <div
          class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
          aria-labelledby="searchDropdown"
        >
          <form class="form-inline mr-auto w-100 navbar-search">
            <div class="input-group">
              <input
                type="text"
                class="form-control bg-light border-0 small"
                placeholder="Search for..."
                aria-label="Search"
                aria-describedby="basic-addon2"
              />
              <div class="input-group-append">
                <button class="btn btn-primary" type="button">
                  <i class="fas fa-search fa-sm"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </li>

      <!-- Nav Item - Alerts -->
      <li class="nav-item dropdown no-arrow mx-1">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          id="alertsDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M6 19V10C6 8.4087 6.63214 6.88258 7.75736 5.75736C8.88258 4.63214 10.4087 4 12 4C13.5913 4 15.1174 4.63214 16.2426 5.75736C17.3679 6.88258 18 8.4087 18 10V19M6 19H18M6 19H4M18 19H20M11 22H13" stroke="#FF9966" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12 4C12.5523 4 13 3.55228 13 3C13 2.44772 12.5523 2 12 2C11.4477 2 11 2.44772 11 3C11 3.55228 11.4477 4 12 4Z" stroke="#FF9966" stroke-width="2.5"/>
        </svg>
          <!-- Counter - Alerts -->
          <span class="badge badge-danger badge-counter">3+</span>
        </a>
        <!-- Dropdown - Alerts -->
        <div
          class="
            dropdown-list dropdown-menu dropdown-menu-right
            shadow
            animated--grow-in
          "
          aria-labelledby="alertsDropdown"
        >
          <h6 class="dropdown-header">Alerts Center</h6>
          <a class="dropdown-item d-flex align-items-center" href="#">
            <div class="mr-3">
              <div class="icon-circle bg-primary">
                <i class="fas fa-file-alt text-white"></i>
              </div>
            </div>
            <div>
              <div class="small text-gray-500">December 12, 2019</div>
              <span class="font-weight-bold"
                >A new monthly report is ready to download!</span
              >
            </div>
          </a>
          <a class="dropdown-item d-flex align-items-center" href="#">
            <div class="mr-3">
              <div class="icon-circle bg-success">
                <i class="fas fa-donate text-white"></i>
              </div>
            </div>
            <div>
              <div class="small text-gray-500">December 7, 2019</div>
              $290.29 has been deposited into your account!
            </div>
          </a>
          <a class="dropdown-item d-flex align-items-center" href="#">
            <div class="mr-3">
              <div class="icon-circle bg-warning">
                <i class="fas fa-exclamation-triangle text-white"></i>
              </div>
            </div>
            <div>
              <div class="small text-gray-500">December 2, 2019</div>
              Spending Alert: We've noticed unusually high spending for your
              account.
            </div>
          </a>
          <a class="dropdown-item text-center small text-gray-500" href="#"
            >Show All Alerts</a
          >
        </div>
      </li>

      <!-- Nav Item - Messages -->
      <li class="nav-item dropdown no-arrow mx-1">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          id="messagesDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          @click="chats"
        >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M2 22V4C2 3.45 2.196 2.97933 2.588 2.588C2.98 2.19667 3.45067 2.00067 4 2H20C20.55 2 21.021 2.196 21.413 2.588C21.805 2.98 22.0007 3.45067 22 4V16C22 16.55 21.8043 17.021 21.413 17.413C21.0217 17.805 20.5507 18.0007 20 18H6L2 22ZM6 14H14V12H6V14ZM6 11H18V9H6V11ZM6 8H18V6H6V8Z" fill="#FF9966"/>
        </svg>
          <!-- Counter - Messages -->
          <span class="badge badge-danger badge-counter">7</span>
        </a>
        <!-- Dropdown - Messages -->
        <!-- <div
          class="
            dropdown-list dropdown-menu dropdown-menu-right
            shadow
            animated--grow-in
          "
          aria-labelledby="messagesDropdown"
        >
          <h6 class="dropdown-header">Message Center</h6>
          <a class="dropdown-item d-flex align-items-center" href="#">
            <div class="dropdown-list-image mr-3">
              <img
                class="rounded-circle"
                src="img/undraw_profile_1.svg"
                alt="..."
              />
              <div class="status-indicator bg-success"></div>
            </div>
            <div class="font-weight-bold">
              <div class="text-truncate">
                Hi there! I am wondering if you can help me with a problem I've
                been having.
              </div>
              <div class="small text-gray-500">Emily Fowler · 58m</div>
            </div>
          </a>
          <a class="dropdown-item d-flex align-items-center" href="#">
            <div class="dropdown-list-image mr-3">
              <img
                class="rounded-circle"
                src="img/undraw_profile_2.svg"
                alt="..."
              />
              <div class="status-indicator"></div>
            </div>
            <div>
              <div class="text-truncate">
                I have the photos that you ordered last month, how would you
                like them sent to you?
              </div>
              <div class="small text-gray-500">Jae Chun · 1d</div>
            </div>
          </a>
          <a class="dropdown-item d-flex align-items-center" href="#">
            <div class="dropdown-list-image mr-3">
              <img
                class="rounded-circle"
                src="img/undraw_profile_3.svg"
                alt="..."
              />
              <div class="status-indicator bg-warning"></div>
            </div>
            <div>
              <div class="text-truncate">
                Last month's report looks great, I am very happy with the
                progress so far, keep up the good work!
              </div>
              <div class="small text-gray-500">Morgan Alvarez · 2d</div>
            </div>
          </a>
          <a class="dropdown-item d-flex align-items-center" href="#">
            <div class="dropdown-list-image mr-3">
              <img
                class="rounded-circle"
                src="/images/Characters.png"
                alt="..."
                style="object-fit: scale-down;"
              />
              <div class="status-indicator bg-success"></div>
            </div>
            <div>
              <div class="text-truncate">
                Am I a good boy? The reason I ask is because someone told me
                that people say this to all dogs, even if they aren't good...
              </div>
              <div class="small text-gray-500">Chicken the Dog · 2w</div>
            </div>
          </a>
          <a class="dropdown-item text-center small text-gray-500" href="#"
            >Read More Messages</a
          >
        </div> -->
      </li>

      <div class="topbar-divider d-none d-sm-block"></div>

      <!-- Nav Item - User Information -->
      <li class="nav-item dropdown no-arrow">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          id="userDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <!-- <span class="mr-2 d-none d-lg-inline text-gray-600 small"
            >{{ user.first_name }} {{ user.last_name }}</span -->
          <!-- > -->
          <!-- <img
            
            src="/img/undraw_profile.svg"
          /> -->
          <img class="img-profile rounded-circle" :src="'/uploads/' + user.image" alt="">
        </a>
        <!-- Dropdown - User Information -->
        <div
          class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
          aria-labelledby="userDropdown"
        >
          <a class="dropdown-item" href="#">
            <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
            Profile
          </a>
          <a class="dropdown-item" href="#">
            <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
            Settings
          </a>
          <a class="dropdown-item" href="#">
            <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
            Activity Log
          </a>
          <div class="dropdown-divider"></div>
          <a
            class="dropdown-item"
            href="javascript:void(0)"
            @click="logout"
            data-toggle="modal"
            data-target="#logoutModal"
          >
            <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
            Logout
          </a>
        </div>
      </li>
    </ul>
    
  </div>
  
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Topbar",
  computed: {
    ...mapGetters(["user"]),
  },
  methods: {
    logout() {
      localStorage.removeItem("token");
      this.$store.dispatch("user", null);
      this.$router.push("/");
    },

    chats(){
      this.$router.push('/chat')
    }
  },
};
</script>


<style scoped>

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
