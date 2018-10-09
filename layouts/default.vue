<template>
  <div>
    <div class="main">
      <header>
        <span class="title">teinen.github.io</span>
      </header>

      <div class="container">
        <nuxt/>
      </div>

      <footer>
        <span class="copyright">© 2018 Akira Kanno</span>
      </footer>
    </div>
  </div>
</template>

<style lang="scss">
/* Varibles */
$black: #000;
$white: #fff;

/* General style */
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

/* Main style */
.main {
  height: 100vh;
}

/* Header style */
header {
  display: flex;
  width: 100vw;
  height: 100px;
  position: relative;
  background-color: $black;
  top: 0;
  justify-content: center;
  align-items: center;

  .title {
    color: $white;
    font-size: 3em;
  }
}

/* Footer style */
footer {
  display: flex;
  width: 100vw;
  height: 75px;
  border-top: solid 2px $black;
  position: relative;
  bottom: 0;
  justify-content: center;
  align-items: center;
}
</style>
