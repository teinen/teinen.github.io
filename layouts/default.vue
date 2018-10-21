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
  height: calc(100vh - 100px);
}

/* main container */
.container {
  max-width: 60vw;
  margin: 0 auto;

  @media screen and (max-width: 480px) {
    max-width: 100vw;
    margin: 0 20px;
  }
}

/* contents */
section {
  height: 100%;
  margin: 100px 0;
}

.card {
  background: #fff;
  border-radius: 3px;
  box-shadow: 0 2px 5px #ccc;
  height: calc(100vh - 200px);
  padding: 20px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
}
</style>
