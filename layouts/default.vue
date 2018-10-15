<template>
  <div>
    <div class="main">
      <header-component></header-component>

      <div class="container">
        <nuxt/>
      </div>

      <footer-component></footer-component>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  components: {
    'header-component': Header,
    'footer-component': Footer,
  }
}
</script>

<style lang="scss">
@font-face {
  font-family: SmartFont;
  font-style: normal;
  src: url('/fonts/smart-font-ui.otf')
}

html {
  font-family: SmartFont, "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: #DEDEDE;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

/* Main style */
.main {
  height: 100vh;
}

/* main container */
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
