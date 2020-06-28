import { defineComponent, h } from 'vue'
import './index.less'

export default defineComponent({
  props: {
    hover: { type: String, default: 'less' }
  },
  setup(props) {
    const close = h('i', {
      class: ['c-icon-close', `c-icon-hover-${props.hover}`]
    })

    return () => close
  }
})
