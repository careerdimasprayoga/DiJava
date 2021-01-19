<template>
  <div :class="{ loader: true, fadeout: !isLoading }">
    <div class="text-center" style="margin-top: 45vh;">
      <b-spinner style="width: 3rem; height: 3rem; color: white;" label="Text Centered"></b-spinner>
      <h5 class="mt-3">Loading..</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoadingScreen',
  props: ['isLoading']
}
</script>

<style>
.loader {
  /* background-image: url('../../assets/icons/Splashscreen.png'); */
  background-color: #7E98DF;
  background-position: right -200px;
  background-repeat: no-repeat;
  bottom: 0;
  color: white;
  display: block;
  font-size: 32px;
  left: 0;
  overflow: hidden;
  position: fixed;
  right: 0;
  text-align: center;
  top: 0;
  width: 100%;
}

.fadeout {
  animation: fadeout 2s forwards;
}

@keyframes fadeout {
  to {
    opacity: 0;
    visibility: hidden;
  }
}
</style>
