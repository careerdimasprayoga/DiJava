<template>
  <div>
    <div class="header">
      <img src="../../assets/usersprofile.jpg" style="width: 50px; height: 50px; border-radius: 20px; object-fit: cover; margin-top: 10px; float: left; margin-left: 30px;">
      <h5 style="float: left; margin-left: 15px; margin-top: 10px;">Dimas</h5><br>
      <h6 style="float: left; margin-top: 15px; margin-left: -57px; color: #7e98df;">online</h6>
    </div>
    <div class="chat">
      <div v-for="(item, index) in chat" :key="index" class="row">
        <b-col xl="12">
          <div class="receiver mt-2" v-if="item.itsme===false">
            <div class="text">{{item.text}}</div>
            <div class="footer">15.30</div>
          </div>
          <div class="sender mt-2" v-else>
            <div class="text">{{item.text}}</div>
            <div class="footer" style="color: black;">12.50</div>
          </div>
        </b-col>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      chat: [
        { image: 'gambar', name: 'Dimas', text: 'Hai Miya', time: '13.30', itsme: true },
        { image: 'gambar', name: 'Miya', text: 'Hai Dimas', time: '24.00', itsme: false },
        { image: 'gambar', name: 'Dimas', text: 'Tugas IPA udah ngerjain ?', time: '01.00', itsme: true },
        { image: 'gambar', name: 'Miya', text: 'Belum nih', time: '03.03', itsme: false },
        { image: 'gambar', name: 'Miya', text: 'Males', time: '06.03', itsme: false },
        { image: 'gambar', name: 'Dimas', text: 'Good!', time: '23.01', itsme: true },
        { image: 'gambar', name: 'Miya', text: 'Kok good sih', time: '21.01', itsme: false },
        { image: 'gambar', name: 'Dimas', text: 'Biar sama2 gak ngerjain', time: '12.01', itsme: true },
        { image: 'gambar', name: 'Dimas', text: 'wkwkwkwk', time: '01.01', itsme: true }
      ]
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
  padding: 15px;
  padding-left: 20px;
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
  padding: 15px;
  padding-left: 20px;
  text-align: left;
  margin-right: 20px;
  background-color: #ffffff;
  border-top-left-radius: 10px;
  border-top-right-radius: 2px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
.footer {
  float: right;
  font-size: 13px;
  color: rgb(238, 238, 238);
  margin-right: -10px;
  margin-bottom: -10px;
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
