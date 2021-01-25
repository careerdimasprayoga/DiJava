<template>
  <b-row>
    <b-col xl="8" md="7" sm="6" cols="7">
      <h2 class="text-left mt-3 ml-2 font-brand">Di java</h2>
    </b-col>
    <b-col xl="4" md="5" sm="6" cols="5">
      <b-button id="popover-menu" variant="transparent" class="mt-3 menu-bottom float-right">
        <img src="../../assets/icons/Menu.png" alt="Menu">
      </b-button>
      <b-popover custom-class="menu" target="popover-menu" triggers="focus" placement="right">
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
        <template>
          <b-container>
            <b-row>
              <b-col xl="2" md="2" sm="2" cols="2" class="align-self-center mt-3 mb-4">
                <div class="close-profile pointer float-right">
                  <b-icon icon="chevron-left" style="margin-top: 7px;" font-scale="1.5" v-b-toggle.my-profile></b-icon>
                </div>
              </b-col>
              <b-col xl="8" md="8" sm="8" cols="8" class="align-self-center mt-3 mb-4">
                <h5 style="margin: 0; color: #7E98DF">@dimasu</h5>
              </b-col>
              <b-col xl="12" md="12" sm="12" cols="12">
                <img src="https://randomuser.me/api/portraits/men/1.jpg" alt style="height: 100px; width: 100px; object-fit: cover; border-radius: 30px;">
              </b-col>
              <b-col xl="12" md="12" sm="12" cols="12" class="mt-4">
                <h5 class="font-weight-bold">Dimas Prayoga</h5>
                <h6 style="color: #848484;">@dimasu</h6>
              </b-col>
              <b-col xl="12" md="12" sm="12" cols="12" class="mt-4 text-left">
                <h5 style="font-size: 18px; font-weight: bold">Account</h5>
                <h6 class="mt-3">(+62) 85697975214</h6>
                <h6 style="color: #7E98DF">Tap to change phone number</h6>
              </b-col>
            </b-row>
          </b-container>
        </template>
      </b-sidebar>
    </b-col>
    <b-col xl="12">
      <img src="https://randomuser.me/api/portraits/men/1.jpg" class="mt-1" style="height: 80px; width: 80px; object-fit: cover; border-radius: 30px;" alt="">
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
              <b-col xl="2" md="2" sm="1" cols="2">
                <img v-bind:src="dummyImage + index + '.jpg'" class="chat-list-image mt-2 mr-2" alt="">
              </b-col>
              <b-col xl="7" md="7" sm="8" cols="7">
                <p class="chat-list-name mt-2">{{item.name}} <b-icon v-if="item.important === true" icon="bell-fill" class="color-main" font-scale="1"></b-icon></p>
                <p class="chat-list-message">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima exercitationem odit alias sequi aliquid hic amet mollitia beatae harum fugiat voluptates consequatur neque doloremque eaque dolor eius, quod facere possimus. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus assumenda, a voluptatibus nemo quasi veritatis possimus placeat officia cum soluta ab adipisci deleniti rerum voluptate. Nesciunt libero sint provident nulla?</p>
              </b-col>
              <b-col xl="3" md="3" sm="3" cols="3">
                <p class="mt-2 chat-list-time">{{item.time}}</p>
                <span v-if="item.unread >= 1" class="chat-list-unread">{{item.unread}}</span>
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
      dummyImage: 'https://randomuser.me/api/portraits/women/',
      selected: 'all',
      searchVisibility: false,
      options: [
        { text: 'All', value: 'all' },
        { text: 'Important', value: 'important' },
        { text: 'Unread', value: 'unread' }
      ],
      chat: [
        { picture: '', name: 'Dimas', time: '20:50', important: true, unread: 5 },
        { picture: '', name: 'Fatah', time: '30:30', important: false, unread: 0 },
        { picture: '', name: 'Razip', time: '20:23', important: true, unread: 3 },
        { picture: '', name: 'Yanti', time: '23:57', important: true, unread: 0 },
        { picture: '', name: 'Ibnu', time: '14:31', important: false, unread: 10 },
        { picture: '', name: 'Aru;', time: '12:35', important: true, unread: 0 }
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
  width: 46px;
  height: 46px;
  border-radius: 15px;
  object-fit: cover;
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
@media screen and (max-width: 1200px) {
  .chat-list-message {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 300px;
  }
}
.chat:hover {
  background-color: #f1efef;
  cursor: pointer;
}
/* List End */

/* My profile Start */
.close-profile {
  color: #7E98DF;
}
#my-profile{
  width: 100px !important;
  background-color: #ffffff !important;
}
/* My profile End */
</style>
