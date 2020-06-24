<template>
  <button class="c-button" :class="btnClass">
    <div class="c-button__content">
      <slot></slot>
    </div>
  </button>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'CButton',
  props: {
    type: {
      type: String,
      default: 'primary',
      validator: (v: string) =>
        ['primary', 'success', 'danger', 'warn', 'dark'].includes(v)
    },
    size: {
      type: String,
      default: 'normal',
      validator: (v: string) => ['small', 'normal', 'large'].includes(v)
    }
  },
  setup(props) {
    const btnClass = computed(() => {
      const classList = []
      if (props.type) classList.push(`c-button__${props.type}`)
      if (props.size) classList.push(`c-button__${props.size}`)
      return classList.join(' ')
    })

    return {
      btnClass
    }
  }
})
</script>

<style scoped lang="less">
.c-button {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
  border: none;
  border-radius: 12px;
  transition: all 0.25s ease;
  overflow: hidden;
  color: #fff;

  &:hover {
    cursor: pointer;
  }

  .c-button__content {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.c-button__primary {
  background: rgba(var(--c-primary), 1);
  &:hover {
    background: rgba(var(--c-primary), 0.85);
  }
}

.c-button__success {
  background: rgba(var(--c-success), 1);
  &:hover {
    background: rgba(var(--c-success), 0.85);
  }
}

.c-button__danger {
  background: rgba(var(--c-danger), 1);
  &:hover {
    background: rgba(var(--c-danger), 0.85);
  }
}

.c-button__warn {
  background: rgba(var(--c-warn), 1);
  &:hover {
    background: rgba(var(--c-warn), 0.85);
  }
}

.c-button__dark {
  background: rgba(var(--c-dark), 1);
  &:hover {
    background: rgba(var(--c-dark), 0.85);
  }
}

.c-button__normal {
  padding: 8px 12px;
  font-size: 1em;
}

.c-button__small {
  padding: 6px 10px;
  font-size: 0.8em;
}

.c-button__large {
  padding: 10px 14px;
  font-size: 1.2em;
  font-weight: 600;
}
</style>