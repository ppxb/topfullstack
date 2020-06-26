<template>
  <div class="c-layout">
    <div class="c-layout__content">
      <div class="c-layout__content-header">
        <div class="logo">
          <svg
            class="svg"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <defs>
              <linearGradient x1="108.695%" x2="12.439%" y1="-14.936%" y2="45.215%" id="uid11-1">
                <stop stop-color="#BDAAF7" stop-opacity="0.4" offset="0%" />
                <stop stop-color="#BDAAF7" offset="100%" />
              </linearGradient>
              <linearGradient x1="0%" x2="91.029%" y1="118.55%" y2="63.971%" id="uid11-2">
                <stop stop-color="#BDAAF7" stop-opacity="0.4" offset="0%" />
                <stop stop-color="#BDAAF7" offset="100%" />
              </linearGradient>
            </defs>
            <g>
              <path
                d="M15.967 29.362a6.675 6.675 0 0 0 0-9.442l-8.699-8.671-3.957 3.957a1.062 1.062 0 0 0 0 1.5l12.656 12.656zm12.656-14.156L15.967 2.55l-.039.039a6.675 6.675 0 0 0 .028 9.41l8.706 8.667 3.96-3.96a1.062 1.062 0 0 0 0-1.5z"
                fill="currentColor"
              />
              <path
                d="M15.967 11.992a6.675 6.675 0 0 1-.028-9.41L6.91 11.606l4.72 4.721 4.336-4.335z"
                fill="url(#uid11-1"
              />
              <path
                d="M20.295 15.591l-4.328 4.329a6.675 6.675 0 0 1 0 9.442l9.05-9.05-4.722-4.72z"
                fill="url(#uid11-2"
              />
            </g>
          </svg>
          Top FullStack
        </div>
        <div class="nav">
          <div
            class="nav-item"
            v-for="(item,index) in navItems"
            :key="item.name"
            :class="currentItemIndex===index?'active':''"
            @click="changeTab(index)"
          >{{item.name}}</div>
        </div>
      </div>
      <div class="c-layout__content-main">
        <router-view class="c-layout__content-view" />
        <div class="c-layout__content-info"></div>
      </div>
    </div>
    <div class="c-layout__admin">
      <div class="admin__action">
        <i class="bx bx-planet" style="margin-right:24px;"></i>
        <i class="bx bx-cog"></i>
        <i class="bx bx-exit" style="margin-left:auto"></i>
      </div>
      <div class="admin__info">
        <c-avatar
          size="large"
          src="https://c-ssl.duitang.com/uploads/item/201807/29/20180729125008_ddqhm.thumb.1000_0.jpeg"
        />
        <div class="admin__name">Admin</div>
        <div class="admin__role">Administrator</div>
        <div class="admin__status">
          <div class="status-item">
            <i class="bx bxs-user user"></i>
            <div class="title">Current Users</div>
            <div class="desc">20K +</div>
          </div>
          <div class="status-item">
            <i class="bx bxs-meteor courses"></i>
            <div class="title">Setuped Courses</div>
            <div class="desc">42</div>
          </div>
        </div>
      </div>
      <div>trending</div>
      <div>events</div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, ref, computed } from 'vue'
import { CAvatar } from '../index'

export default defineComponent({
  name: 'CLayout',
  components: {
    CAvatar
  },
  setup() {
    const navItems = reactive([
      { path: '/', name: 'Home' },
      { path: '/', name: 'Course' },
      { path: '/', name: 'User' },
      { path: '/', name: 'Event' }
    ])

    const currentItemIndex = ref(0)

    const changeTab = index => {
      currentItemIndex.value = index
    }

    return {
      navItems,
      currentItemIndex,
      changeTab
    }
  }
})
</script>