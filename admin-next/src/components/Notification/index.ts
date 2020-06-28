import { useVif } from '@/utils'
import { defineComponent, h, reactive, Transition, watch } from 'vue'
import CloseIcon from '../Icons/close'
import './index.less'

export default defineComponent({
  props: {
    show: { type: Boolean, default: false },
    title: { type: String, default: '' },
    text: { type: String, default: '' }
  },
  setup(props) {
    const state = reactive({
      show: props.show
    })

    watch(
      () => props.show,
      v => {
        if (props.show === state.show) return
        state.show = v
      }
    )

    const handleCloseClick = () => {
      state.show = false
    }

    const title = h(
      'div',
      {
        class: ['vs-notification__content__header']
      },
      [h('h4', props.title)]
    )

    const text = h(
      'div',
      {
        class: ['vs-notification__content__text']
      },
      [h('p', props.text)]
    )

    const content = h(
      'div',
      {
        class: ['vs-notification__content']
      },
      [props.title && title, props.text && text]
    )

    const closeBtn = h(
      'button',
      {
        class: ['vs-notification__close'],
        onClick: handleCloseClick
      },
      [h(CloseIcon)]
    )

    return () =>
      h(
        'div',
        {
          class: ['vs-notification-parent']
        },
        [
          h(Transition, { name: 'notification' }, () =>
            useVif(
              h(
                'div',
                {
                  class: ['vs-notification']
                },
                [content, closeBtn]
              ),
              state.show
            )
          )
        ]
      )
  }
})
