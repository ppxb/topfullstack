import { VNode, vShow, withDirectives } from 'vue'

export const useVshow = (node: VNode, display: boolean | undefined) => {
  return withDirectives(node, [[vShow, display]])
}

export const useVif = (node: VNode, display: any) => {
  return display ? node : null
}
