<template>
  <b-container fluid>
    <b-row>
      <b-col xl="3" md="5" sm="12" style="background-color: #ffffff;">
        <Side />
      </b-col>
      <b-col xl="9" md="7" sm="0" style="background-color: #fafafa;">
        <p>asem</p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Side from '@/components/_base/Sidebar.vue'

export default {
  name: 'Main',
  components: {
    Side
  }
}
</script>
