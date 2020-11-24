<template>
  <div class="wrapper">
    <div class="customCard">
      <b-row>
        <b-col xl="12">
          <h4 class="mt-1 font-theme-c1">Login</h4>
          <p class="text-left mt-4 font-theme">Hi, Welcome back!</p>
        </b-col>
        <b-col xl="12">
          <p class="text-left mt-4 font-theme-c2" style="margin-bottom: 5px">
            Email
          </p>
          <input
            type="email"
            class="float-left font-theme customInput"
            placeholder="Your email"
          />
        </b-col>
        <b-col xl="12">
          <p class="text-left mt-4 font-theme-c2" style="margin-bottom: 5px">
            Password
          </p>
          <input
            type="password"
            class="float-left font-theme customInput mb-4"
            placeholder="Your password"
          />
          <p class="font-theme-c1 mt-5 text-right">Forgot password?</p>
        </b-col>
        <b-col xl="12">
          <b-button class="customButton font-theme-c1 mt-2" variant="primary">
            Login
          </b-button>
          <div class="mt-3 textLogin" style="">
            <span class="font-theme-c2 textLoginSpan"> Login with </span>
          </div>
          <b-button
            class="customButtonGoogle font-theme-c1 mt-4"
            variant="primary"
          >
            Google
          </b-button>
          <p class="font-theme mt-3">
            Don't have an account? <router-link to="/register" class="font-theme-c1">Sign Up</router-link>
          </p>
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
  }
}
</script>

<style scoped>
@import "../../../assets/css/fonts.css";

.wrapper {
  height: 100vh;
  background-color: #E5E5E5;
  display: flex;
}
.customCard {
  width: 430px;
  height: 600px;
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
  background-color: #2675EC;
  border: none;
  width: 100%;
  border-radius: 30px;
  height: 50px;
}
.customButtonGoogle {
  background-color: white;
  color: #2675EC;
  border: 1px solid #2675EC;
  width: 100%;
  border-radius: 30px;
  height: 50px;
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
</style>
