<template>
  <div>
    <c-button type="success" size="small" @click="say">hello world</c-button>
    <c-button type="primary">hello world</c-button>
    <c-button type="danger" size="large">Dark</c-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CButton from '../components/cButton/index.vue'

export default defineComponent({
  name: 'Components',
  components: {
    CButton
  },
  setup() {
    const say = () => console.log(123)

    return {
      say
    }
  }
})
</script>

<style scoped lang="less">
</style>
