<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld />
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld
  }
})
</script>
