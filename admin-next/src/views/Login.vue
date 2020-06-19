<template>
  <main class="container">
    <section class="content">
      <div class="logo">
        <svg class="svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
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
      <div class="form">
        <div class="title">Welcome Back</div>
        <input type="text" placeholder="USERNAME" class="input" />
        <input type="password" placeholder="PASSWORD" class="input" />
        <div class="desc">
          Built by
          <span>&nbsp;Vue3&nbsp;</span> and
          <span>&nbsp;Typescript</span>
        </div>
        <button class="btn">Log in</button>
      </div>
      <footer>
        made with
        <span>&nbsp;❤</span>
      </footer>
    </section>
    <section class="slogan">
      <a class="author" href="https://dribbble.com/shots/11655162-GlitchGirl" target="_blank">
        <img
          class="avatar"
          src="https://cdn.dribbble.com/users/642793/avatars/normal/73d66133e81b3b89600c31261348a0e2.png?1496853515"
        />
        <div class="name">Mercedes Bazan</div>
      </a>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Login'
})
</script>

<style scoped lang="less">
.container {
  display: flex;
  height: 100vh;

  .content {
    display: flex;
    flex-direction: column;
    padding: 20px 80px;
    flex: 1;
    color: #333333;

    .logo {
      display: flex;
      align-items: center;
      font-size: 26px;
      margin-bottom: 20px;
      font-weight: 700;
      height: fit-content;

      .svg {
        width: 44px;
        height: 44px;
        margin-right: 10px;
        color: #6236ff;
      }

      .currentColor {
        color: #6236ff;
      }
    }

    .form {
      display: flex;
      flex-direction: column;
      flex: 3;
      justify-content: center;
      color: #333333;

      .title {
        font-size: 5em;
        margin-bottom: 20px;
      }

      .input {
        border: none;
        outline: none;
        padding: 20px;
        color: #333;
        font-size: 18px;
        background: #fafafa;
        border-radius: 12px;
        margin-bottom: 20px;
      }

      .desc {
        display: flex;
        justify-content: center;

        span {
          color: #6236ff;
        }
      }

      .btn {
        border: none;
        padding: 20px;
        border-radius: 12px;
        margin-top: 32px;
        font-size: 20px;
        color: #fff;
        background: #6236ff;
      }
    }

    footer {
      display: flex;
      align-items: center;
      margin-top: auto;
      height: fit-content;

      span {
        color: #fb5051;
      }
    }
  }

  .slogan {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    padding: 20px 80px;
    flex: 3;
    background: url('../assets/slogan2.jpg');
    background-size: cover;
    background-position: center;

    .author {
      display: flex;
      align-items: center;
      color: #fff;

      &:hover {
        cursor: pointer;
      }

      .avatar {
        width: 32px;
        height: 32px;
        border-radius: 4px;
        margin-right: 16px;
      }
    }
  }
}
</style>