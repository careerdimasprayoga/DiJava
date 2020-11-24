<template>
  <div class="wrapper">
    <div style="height: 40px"></div>
    <div class="customCard">
      <b-row>
        <b-col xl="4">
          <img src="@/assets/icons/left-arrow2.png" class="iconsPosition mt-1">
        </b-col>
        <b-col xl="8">
          <h4 class="mt-1 text-left font-theme-c1">Register</h4>
        </b-col>
        <b-col xl="12">
          <p class="text-left mt-4 font-theme">Let's create your account!</p>
        </b-col>
        <b-col xl="12">
          <p class="text-left mt-1 font-theme-c2" style="margin-bottom: 5px">
            Name
          </p>
          <input
            type="text"
            class="float-left font-theme customInput"
            placeholder="Your name"
          />
        </b-col>
        <b-col xl="12">
          <p class="text-left mt-4 font-theme-c2" style="margin-bottom: 5px">
            Username
          </p>
          <input
            type="text"
            class="float-left font-theme customInput"
            placeholder="Your unique username"
          />
        </b-col>
        <b-col xl="12">
          <p class="text-left mt-4 font-theme-c2" style="margin-bottom: 5px">
            Phone
          </p>
          <input
            type="number"
            class="float-left font-theme customInput"
            placeholder="Your phone"
          />
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
            Register
          </b-button>
          <div class="mt-3 textLogin" style="">
            <span class="font-theme-c2 textLoginSpan"> Register with </span>
          </div>
          <b-button
            class="customButtonGoogle font-theme-c1 mt-4"
            variant="primary"
            @click="underDevelopment()"
          >
          <img src="data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PHBhdGggZD0ibTQyMC43IDQ1MC43Yy00NC40IDM3LjUtMTAxLjk5OSA2MS4zLTE2NC43IDYxLjMtOTMuMyAwLTE3NS4yMDEtNTEuNC0yMTkuNi0xMjYuNGwxNi42MjItNzYuNjIyIDczLjY3OC0xMy42NzhjMTcuMSA1NS4xOTkgNjguNjk5IDk1LjcgMTI5LjMgOTUuNyAyOS4zOTkgMCA1Ni43LTkuMyA3OS4yLTI1LjhsNzAuOCAxMC44eiIgZmlsbD0iIzU5YzM2YSIvPjxwYXRoIGQ9Im00MjAuNyA0NTAuNy0xNC43LTc0LjctNzAuOC0xMC44Yy0yMi41IDE2LjUtNDkuODAxIDI1LjgtNzkuMiAyNS44djEyMWM2Mi43MDEgMCAxMjAuMy0yMy44IDE2NC43LTYxLjN6IiBmaWxsPSIjMDBhNjZjIi8+PGcgaWQ9IkNvbm5lY3RlZF9Ib21lXzFfIj48Zz48Zz48Zz48cGF0aCBkPSJtMTIxIDI1NmMwIDEzLjc5OSAyLjEgMjYuOTk5IDUuNyAzOS4zbC05MC4zIDkwLjNjLTIyLjUtMzcuOC0zNi40LTgyLjIwMS0zNi40LTEyOS42IDAtNDcuNDAxIDEzLjktOTEuOCAzNi40LTEyOS42bDcyLjQ3MyAxMi40NzMgMTcuODI3IDc3LjgyN2MtMy42IDEyLjI5OS01LjcgMjUuNDk5LTUuNyAzOS4zeiIgZmlsbD0iI2ZmZGEyZCIvPjwvZz48L2c+PC9nPjwvZz48cGF0aCBkPSJtNTEyIDI1NmMwIDc3Ljk5OS0zNi4wOTkgMTQ3LjktOTEuMyAxOTQuN2wtODUuNS04NS41YzE3LjM5OS0xMi42MDEgMzIuMS0yOS40MDEgNDEuNy00OS4yaC0xMjAuOWMtOC40MDEgMC0xNS02LjYwMS0xNS0xNXYtOTBjMC04LjQwMSA2LjU5OS0xNSAxNS0xNWgyMzYuOGM3LjIgMCAxMy41IDUuMDk5IDE0LjcgMTIuMjk5IDMgMTUuNjAxIDQuNSAzMS44IDQuNSA0Ny43MDF6IiBmaWxsPSIjNDA4NmY0Ii8+PHBhdGggZD0ibTM3Ni45MDEgMzE2Yy05LjYgMTkuNzk5LTI0LjMwMiAzNi41OTktNDEuNyA0OS4ybDg1LjQ5OSA4NS41YzU1LjIwMS00Ni44IDkxLjMtMTE2LjcgOTEuMy0xOTQuNyAwLTE1LjkwMS0xLjUtMzIuMS00LjUwMS00Ny43MDEtMS4xOTktNy4yLTcuNS0xMi4yOTktMTQuNy0xMi4yOTloLTIzNi43OTl2MTIweiIgZmlsbD0iIzQxNzVkZiIvPjxwYXRoIGQ9Im00MjQuOSA3MS40OTljLjMgNC4yLTEuNSA4LjEwMS00LjIgMTEuMWwtNjQuMiA2My45Yy01LjA5OSA1LjQtMTMuNDk5IDYtMTkuNDk5IDEuNS0yMy43MDItMTcuNjk5LTUxLjYwMi0yNi45OTktODEuMDAxLTI2Ljk5OS02MC42MDEgMC0xMTIuMiA0MC40OTktMTI5LjMgOTUuN2wtOTAuMy05MC4zYzQ0LjM5OS03NSAxMjYuMy0xMjYuNCAyMTkuNi0xMjYuNCA1OS43IDAgMTE3LjkgMjIgMTYzLjUgNjAuMzk5IDMuMyAyLjcwMSA1LjEgNi45IDUuNCAxMS4xeiIgZmlsbD0iI2ZmNjQxYSIvPjxwYXRoIGQ9Im0zMzcgMTQ3Ljk5OWM2IDQuNTAxIDE0LjM5OSAzLjkgMTkuNDk5LTEuNWw2NC4yLTYzLjljMi43MDEtMi45OTkgNC41MDEtNi44OTkgNC4yLTExLjFzLTIuMS04LjM5OS01LjQtMTEuMWMtNDUuNTk5LTM4LjM5OS0xMDMuNzk5LTYwLjM5OS0xNjMuNDk5LTYwLjM5OXYxMjFjMjkuMzk5IDAgNTcuMjk5IDkuMyA4MSAyNi45OTl6IiBmaWxsPSIjZjAzODAwIi8+PC9nPjwvc3ZnPg==" class="googleIcons mr-2"/>
            Google
          </b-button>
          <p class="font-theme mt-3">
            Already have an account? <router-link to="/login" class="font-theme-c1">Login</router-link>
          </p>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    underDevelopment () {
      this.$swal({
        title: 'Register with google is under development',
        icon: 'info'
      })
    }
  }
}
</script>

<style scoped>
@import "../../assets/css/fonts.css";

.wrapper {
  height: 1000px;
  background-color: #E5E5E5;
}
.customCard {
  width: 430px;
  height: 900px;
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
  float: left
}
</style>
