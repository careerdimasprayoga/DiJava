<template>
  <div class="wrapper">
    <div class="customCard">
      <b-row>
        <b-col xl="3" lg="3" md="3" sm="3" cols="3">
          <router-link to="/login">
            <img
              src="@/assets/icons/left-arrow2.png"
              class="iconsPosition mt-1"
            />
          </router-link>
        </b-col>
        <b-col xl="9" lg="9" md="9" sm="9" cols="9">
          <h4 class="mt-1 text-left font-theme-c1">Forgot Password</h4>
        </b-col>
        <b-col xl="12">
          <p class="text-left mt-4 font-theme">
            You'll get messages soon on your e-mail!
          </p>
        </b-col>
        <b-col xl="12">
          <p class="text-left mt-2 font-theme-c2" style="margin-bottom: 5px">
            Email
          </p>
          <input
            type="text"
            class="float-left font-theme customInput"
            placeholder="Your email"
          />
        </b-col>
        <b-col xl="12">
          <b-button class="customButton font-theme mt-4" variant="primary">
            Send
          </b-button>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    pageTitle: function () {
      return this.$route.meta.title
    }
  },
  methods: {
    underDevelopment () {
      this.$swal({
        title: 'Login with google is under development',
        icon: 'info'
      })
    }
  }
}
</script>

<style scoped>
@import '../../assets/css/fonts.css';

.wrapper {
  height: 100vh;
  background-color: #e5e5e5;
  display: flex;
}
.customCard {
  max-width: 430px;
  height: 330px;
  border-radius: 20px;
  background-color: #ffffff;
  margin: auto;
  padding: 40px;
  padding-left: 50px;
  padding-right: 50px;
}
.customInput {
  width: 100%;
  border-top: none;
  border-left: none;
  border-right: none;
  outline: none;
}
.customButton {
  background-color: #2675ec;
  border: none;
  width: 100%;
  border-radius: 30px;
  height: 50px;
}
.customButtonGoogle {
  background-color: white;
  color: #2675ec;
  border: 1px solid #2675ec;
  width: 100%;
  border-radius: 30px;
  height: 50px;
}
.googleIcons {
  width: 17px;
}
.textLogin {
  width: 100%;
  height: 13px;
  border-bottom: 1.5px solid #848484;
  text-align: center;
}
.textLoginSpan {
  background-color: #ffffff;
  padding: 0 30px;
}
.iconsPosition {
  height: 30px;
  float: left;
}
</style>
