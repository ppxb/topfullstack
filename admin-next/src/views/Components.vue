<template>
  <div class="comp">
    <h1>Icons</h1>
    <close-icon />
    <notif
      :show="showNotification"
      title="Documentation Vuesax 4.0+"
      text="These documents refer to the latest version of vuesax (4.0+), to see the documents of the previous versions you can do it here 👉 Vuesax3.x"
    />
    <h1>Button</h1>
    <c-button type="success" size="small">hello world</c-button>
    <c-button type="primary">hello world</c-button>
    <c-button type="danger" size="large" @click="say">Dark</c-button>
    <h1>Avatar</h1>
    <c-avatar src="https://vuesax.com/avatars/avatar-5.png" size="large"></c-avatar>
    <c-avatar size="large">Lily</c-avatar>
    <c-avatar>
      <i class="bx bxs-hot"></i>
    </c-avatar>
    <h1>Avatar</h1>
    <c-avatar src="https://vuesax.com/avatars/avatar-5.png" size="large"></c-avatar>
    <c-avatar size="large">Lily</c-avatar>
    <c-avatar>
      <i class="bx bxs-hot"></i>
    </c-avatar>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, nextTick, ref } from 'vue'
import { CAvatar, CButton } from '../components'
import CloseIcon from '../components/Icons/close'
import Notif from '../components/Notification/'

export default defineComponent({
  name: 'Components',
  components: {
    CButton,
    CAvatar,
    CloseIcon,
    Notif
  },
  setup() {
    const name = inject('$vs')
    const showNotification = ref(false)
    const say = () => {
      showNotification.value = !showNotification.value
    }

    return {
      say,
      showNotification
    }
  }
})
</script>

<style scoped lang="less">
.comp {
  padding: 40px;
  background: #f1f1f1;
}
</style>
