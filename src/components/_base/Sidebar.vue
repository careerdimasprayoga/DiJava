<template>
  <b-row>
    <b-col xl="8" md="7" sm="6" cols="7">
      <h2 class="text-left mt-3 ml-2 font-brand">Di java</h2>
    </b-col>
    <b-col xl="4" md="5" sm="6" cols="5">
      <b-button id="popover-menu" variant="transparent" class="mt-3 menu-bottom">
        <img src="../../assets/icons/Menu.png" alt="">
      </b-button>
      <b-popover custom-class="menu" target="popover-menu" triggers="click" placement="right">
        <b-icon icon="lock" class="ml-3 mr-2 mb-2 menu-hover" font-scale="1.7"></b-icon>
        <!-- v-b-toggle.my-profile -->
        <b-icon icon="gear" class="ml-2 mr-2 mt-2 mb-2 menu-hover" font-scale="1.7" id="popover-seting"></b-icon> <!-- focus -->
        <b-icon icon="person-plus" class="ml-2 mr-2 mb-2 mt-2 menu-hover" font-scale="1.7"></b-icon>
        <b-icon icon="search" class="ml-2 mr-3 mt-2 mb-2 menu-hover" font-scale="1.7" @click="searchVisible()"></b-icon> <br>
        <!-- <b-popover custom-class="menu-seting" target="popover-seting" triggers="click" placement="bottomright">
      </b-popover> -->
        <b-icon icon="person" class="ml-2 mr-2 mt-2 pointer" font-scale="1.7" v-b-toggle.my-profile></b-icon> <span style="text-align: center; line-height: 5px;">Profile</span> <br>
        <b-icon icon="journals" class="ml-2 mr-2 mt-2 pointer" font-scale="1.7"></b-icon> <span>Contact</span> <br>
        <b-icon icon="telephone" class="ml-2 mr-2 mt-2 pointer" font-scale="1.7"></b-icon> <span>Call</span> <br>
        <b-icon icon="bookmarks" class="ml-2 mr-2 mt-2 pointer" font-scale="1.7"></b-icon> <span>Save Message</span> <br>
        <b-icon icon="info-circle" class="ml-2 mr-2 mt-2 pointer" font-scale="1.7"></b-icon> <span>Di java FAQ</span> <br>
        <b-icon icon="power" class="ml-2 mr-2 mt-2 pointer" font-scale="1.7"></b-icon> <span>Sign Out</span>
      </b-popover>
      <!-- SideBar -->
      <b-sidebar id="my-profile" width="340px" bg-variant="white" aria-labelledby="my-profile" no-header shadow>
        <template #default="{ hide }">
          <b-container>
            <b-row>
              <b-col xl="12">
                <div class="close-profile pointer mb-3">
                  <b-icon icon="x-circle" style="margin-top: 7px;" font-scale="1.7" v-b-toggle.my-profile></b-icon><br>
                </div>
              </b-col>
              <b-col xl="12">
                <p>
                  Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                  in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                </p>
                <nav class="mb-3">
                  <b-nav vertical>
                    <b-nav-item active @click="hide">Active</b-nav-item>
                    <b-nav-item href="#link-1" @click="hide">Link</b-nav-item>
                    <b-nav-item href="#link-2" @click="hide">Another Link</b-nav-item>
                  </b-nav>
                </nav>
                <b-button variant="primary" block @click="hide">Close Sidebar</b-button>
              </b-col>
            </b-row>
          </b-container>
        </template>
      </b-sidebar>
    </b-col>
    <b-col xl="12">
      <img src="../../assets/usersprofile.jpg" class="mt-1" style="max-height: 80px; max-width: 80px; border-radius: 30px;">
      <h4 class="mt-2">Dimas Prayoga</h4>
      <p style="margin-bottom: 0px;">@dimasu</p>
    </b-col>
    <b-col xl="12" v-if="this.searchVisibility === true" class="mt-2">
      <b-input-group size="sm">
        <b-input-group-prepend is-text>
          <b-icon icon="search" class="ml-2" font-scale="1.7"></b-icon>
        </b-input-group-prepend>
        <b-form-input type="search" placeholder="Type your message..." class="search-style"></b-form-input>
      </b-input-group>
    </b-col>
    <b-col xl="12">
      <b-form-group class="mt-3">
        <b-button variant="transparent" :class="item.value == selected ? 'btn-filterchat-active' : 'btn-filterchat'" v-for="(item, index) in options" :key="index" @click="filterChat(item.value)">
          {{item.text}}
        </b-button>
      </b-form-group>
    </b-col>
    <b-col xl="12">
      <div class="list">
        <div class="chat" v-for="(item, index) in chat" :key="index">
          <b-container fluid>
            <b-row>
              <b-col xl="2">
                <img src="../../assets/usersprofile.jpg" class="chat-list-image mt-2">
              </b-col>
              <b-col xl="7">
                <p class="chat-list-name mt-2">{{item.name}} <b-icon icon="bell-fill" class="color-main" font-scale="1"></b-icon></p>
                <p class="chat-list-message">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima exercitationem odit alias sequi aliquid hic amet mollitia beatae harum fugiat voluptates consequatur neque doloremque eaque dolor eius, quod facere possimus. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus assumenda, a voluptatibus nemo quasi veritatis possimus placeat officia cum soluta ab adipisci deleniti rerum voluptate. Nesciunt libero sint provident nulla?</p>
              </b-col>
              <b-col xl="3">
                <p class="mt-2 chat-list-time">{{item.time}}</p>
                <span class="chat-list-unread">6</span>
              </b-col>
            </b-row>
          </b-container>
        </div>
      </div>
    </b-col>
  </b-row>
</template>

<script>
export default {
  data () {
    return {
      selected: 'all',
      searchVisibility: false,
      options: [
        { text: 'All', value: 'all' },
        { text: 'Important', value: 'important' },
        { text: 'Unread', value: 'unread' }
      ],
      chat: [
        { picture: '', name: 'Dimas', time: '20:50' },
        { picture: '', name: 'Fatah', time: '30:50' },
        { picture: '', name: 'Razip', time: '20:10' },
        { picture: '', name: 'Yanti', time: '10:50' },
        { picture: '', name: 'Ibnu', time: '14:50' },
        { picture: '', name: 'Aru;', time: '12:50' }
      ],
      popoverShow: false
    }
  },
  methods: {
    filterChat (item) {
      this.selected = ''
      this.selected = item
    },
    searchVisible () {
      if (this.searchVisibility === false) {
        this.searchVisibility = true
      } else {
        this.searchVisibility = false
      }
    }
  }
}
</script>

<style scoped>
@import "../../assets/css/fonts.css";

/* Search Start */
.search-style {
  margin: auto;
  background-color: #fafafa;
  border: none;
  height: 45px !important;
  border-top-right-radius: 10px !important;
  border-bottom-right-radius: 10px !important;
}
.input-group-text {
  background-color: #fafafa;
  border: none;
  height: 45px;
  border-top-left-radius: 10px !important;
  border-bottom-left-radius: 10px !important;
}
/* Search End */

/* Popover Start */
.menu >>> .popover-body{
  background-color: #7E98DF;
  border-radius: 10px 30px 30px 30px;
  color: #ffffff
}
.menu-seting >>> .popover-body{
  margin-top: 10px;
  background-color: #7E98DF;
  border-radius: 10px 30px 30px 30px;
  color: #ffffff
}
.b-popover {
  border: none;
  background-color: transparent;
  margin-left: 30px; /* ni penting */
  margin-top: 10px;
}
.menu >>> .arrow {
  display: none;
}
.menu-seting >>> .arrow {
  display: none;
}
.menu-bottom {
  border-radius: 100px;
}
.pointer:hover {
  cursor: pointer;
}
.menu-hover:hover {
  cursor: pointer;
  border-radius: 30px;
  transform: rotate(360deg);
  transition: ease 0.5s;
}
/* Popover End */

/* Start Filter Message */
.btn-filterchat {
  border-radius: 15px;
  font-size: 12pt;
}
.btn-filterchat-active {
  border-radius: 15px;
  background-color: #7e98df;
  color: #ffffff;
  font-size: 12pt;
}
.btn-filterchat:hover {
  background-color: #7e98df;
  color: #ffffff;
}
.btn-filterchat-active:hover {
  color: #ffffff;
}
.btn-filterchat-active:focus {
  box-shadow: none;
}
/* Filter Message End */

/* List Start */
::-webkit-scrollbar {
  width: 4px;
}
::-webkit-scrollbar-track {
  background: #f1f1f1;
}
::-webkit-scrollbar-thumb {
  background: #7e98df;
  border-radius: 30px;
}
::-webkit-scrollbar-thumb:hover {
  background: #7e98df;
}
.list {
  background-color: transparent;
  text-align: left;
  height: 300px;
  overflow: auto;
}
.chat {
  height: 65px;
  background-color: #ffffff;
  border-radius: 15px;
}
.chat-list-image {
  max-width: 50px;
  max-height: 50px;
  border-radius: 15px;
}
.chat-list-name {
  font-weight: bold;
  margin-bottom: 2px;
}
.chat-list-time {
  text-align: right;
  margin-bottom: 2px;
}
.chat-list-unread {
  float: right;
  background-color: #7E98DF;
  border-radius: 50px;
  display: inline-block;
  min-width: 21px;
  height: 21px;
  font-size: 14.3px;
  color: white;
  vertical-align: middle;
  text-align: center;
  line-height: 21px;
  padding-left: 2px;
  padding-right: 2px;
}
.chat-list-message {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 300px;
}
.chat:hover {
  background-color: #f1efef;
  cursor: pointer;
}
/* List End */

/* My profile Start */
.close-profile {
  float: right;
  margin-top: 17px;
  margin-right: 50px;
  background-color: #7e98df;
  width: 40px;
  height: 41.2344px;
  border-radius: 30px;
  color: #ffffff;
}
#my-profile{
  width: 100px !important;
  background-color: #ffffff !important;
}
/* My profile End */
</style>
