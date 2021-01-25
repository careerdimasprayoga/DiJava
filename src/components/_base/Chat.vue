<template>
  <div>
    <div class="header">
      <img src="https://randomuser.me/api/portraits/women/51.jpg" alt="" style="width: 50px; height: 50px; border-radius: 20px; object-fit: cover; margin-top: 10px; float: left; margin-left: 30px;">
      <div class="head" style="width: 200px; height: 70px; text-align: left; margin-left: 90px; position: absolute;">
        <h5 style="margin-top: 17px; line-height: 13px">Maria</h5>
        <h6 style="color: #7e98df;">online</h6>
      </div>
      <!-- <h5 style="float: left; margin-left: 15px; margin-top: 10px;">Dimas</h5><br>
      <h6 style="float: left; margin-top: 15px; margin-left: -57px; color: #7e98df;">online</h6> -->
    </div>
    <div class="chat">
      <div v-for="(item, index) in chat" :key="index" class="row">
        <b-col xl="auto" v-if="item.itsme===false">
          <div class="receiver mt-2">
            <div class="text">{{item.text}}</div>
            <div class="footer-receive">15.30</div>
          </div>
        </b-col>
        <b-col xl="12" v-else>
          <div class="sender mt-2">
            <div class="text">{{item.text}}</div>
            <div class="footer-sender" style="color: black;">{{item.time}}</div>
            <b-icon icon="clock" class="mr-2" v-if="item.readStatus === 0" aria-hidden="true" font-scale="1"></b-icon>
            <b-icon icon="check2" class="mr-2" v-else-if="item.readStatus === 1" aria-hidden="true"></b-icon>
            <b-icon icon="check2-all" class="mr-2" v-else-if="item.readStatus === 2" aria-hidden="true"></b-icon>
            <b-icon icon="check2-all" class="mr-2" v-else-if="item.readStatus === 3" aria-hidden="true" style="color: #7e98df"></b-icon>
          </div>
        </b-col>
      </div>
    </div>
    <div class="input" style="overflow-x: hidden;">
      <b-form @submit.prevent="sendChat()">
        <b-row>
          <b-col xl="1" md="1" sm="1" cols="1" style="padding: 0px;">
            <b-button pill variant="primary" class="float-right mt-1 mr-2">
              <b-icon icon="file-earmark" aria-hidden="true"></b-icon>
            </b-button>
          </b-col>
          <b-col xl="10" md="10" sm="10" cols="10" style="padding: 0px">
            <b-form-input type="text" v-model="chatInput" class="mb-1 mt-1" style="width: 100%; border-radius: 30px; margin: auto;"></b-form-input>
          </b-col>
          <b-col xl="1" md="1" sm="1" cols="1" style="padding: 0px;">
            <b-button pill variant="primary" class="float-left mt-1 ml-2">Save</b-button>
          </b-col>
        </b-row>
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      chatInput: '',
      chat: [
        { text: 'Hai Miya Lorem ipsum dolor sit amet, consectetur adipisicing elit. A error cum, consequuntur recusandae excepturi aspernatur quidem velit sed aliquid veritatis? Fugiat enim culpa laborum asperiores facilis cum dolore, molestiae commodi!', time: '13.30', itsme: true, readStatus: 3 },
        { text: 'Hai Dimas Lorem ipsum dolor sit amet, consectetur adipisicing elit. A error cum, consequuntur recusandae excepturi aspernatur quidem velit sed aliquid veritatis? Fugiat enim culpa laborum asperiores facilis cum dolore, molestiae commodi!', time: '24.00', itsme: false, readStatus: 3 },
        { text: 'Tugas IPA udah ngerjain ? lorem', time: '01.00', itsme: true, readStatus: 3 },
        { text: 'Belum nih', time: '03.03', itsme: false, readStatus: 3 },
        { text: 'Males', time: '06.03', itsme: false, readStatus: 3 },
        { text: 'Good!', time: '23.01', itsme: true, readStatus: 1 },
        { text: 'Kok good sih', time: '21.01', itsme: false, readStatus: 3 },
        { text: 'Biar sama2 gak ngerjain', time: '12.01', itsme: 3, readStatus: 3 },
        { text: 'wkwkwkwk', time: '01.01', itsme: true, readStatus: 2 },
        { text: 'testing testing test sets set set', time: '21.01', itsme: false, readStatus: 1 }
      ]
    }
  },
  methods: {
    addZero (i) {
      if (i < 10) { i = '0' + i }
      return i
    },
    sendChat () {
      // Status chat : 0 me offline (time clock), 1 friend offline (check 1), 2 message terkirim (check 2), 2 message read (check 2 blue)
      const dates = new Date()
      const dateTime = this.addZero(dates.getHours()) + ':' + this.addZero(dates.getMinutes())
      const sendMessage = { image: 'gambar', name: 'Dimas', text: this.chatInput, time: dateTime, itsme: true, readStatus: 0 }
      this.chat.push(sendMessage)
      console.log(sendMessage)
      this.chatInput = ''
    }
  }
}
</script>

<style scoped>
@import "../../assets/css/fonts.css";

.chat {
  width: 100%;
  height: 80vh;
  /* background-color: yellowgreen; */
  padding-top: 10px;
  overflow: auto;
  overflow-x: hidden;
}
.receiver {
  max-width: 80vh;
  height: auto;
  padding: 10px;
  padding-bottom: 15px;
  text-align: left;
  margin-left: 20px;
  background-color: #7E98DF;
  border-top-left-radius: 2px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  color: white;
}
.sender {
  max-width: 80vh;
  height: auto;
  float: right;
  padding: 10px 10px 0 10px;
  /* padding-left: 20px; */
  text-align: left;
  margin-right: 20px;
  background-color: #ffffff;
  border-top-left-radius: 10px;
  border-top-right-radius: 2px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
.footer-sender{
  float: right;
  font-size: 13px;
  color: rgb(238, 238, 238);
  margin-right: -5px;
  margin-bottom: -5px;
}
.footer-receive {
  float: right;
  font-size: 13px;
  color: rgb(238, 238, 238);
  margin-top: -5px;
  margin-right: -6px;
}
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
/* End scroll */
.header {
  width: 100%;
  height: 70px;
  background-color: #ffffff;
}
.imgprofile {
  margin-top: 6px;
  width: 55px;
  height: 55px;
  border-radius: 20px;
  object-fit: cover;
}
</style>
