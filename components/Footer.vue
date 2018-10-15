<template>
  <footer>
    <span class="copyright">{{ copyright }}</span>
  </footer>
</template>

<script>
export default {
  data () {
    return {
      copyright: '© 2018 Akira Kanno'
    }
  }
}
</script>

<style lang="scss" scoped>
footer {
  display: flex;
  width: 100vw;
  height: 100px;
  border-top: solid 2px #000;
  position: relative;
  background-color: #DEDEDE;
  bottom: 0;
  justify-content: center;
  align-items: center;
}
</style>
