<template>
  <b-container fluid>
    <b-row>
      <b-col xl="3" md="5" sm="12" style="background-color: #ffffff;">
        <Side />
      </b-col>
      <b-col xl="9" md="7" class="d-none d-sm-block, d-sm-none d-md-block" style="background-color: #fafafa; padding: 0; overflow-y: hidden;">
        <Chat />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Side from '@/components/_base/Sidebar.vue'
import Chat from '@/components/_base/Chat.vue'

export default {
  name: 'Main',
  components: {
    Side,
    Chat
  }
}
</script>
