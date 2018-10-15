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
  color: #ffffff;
  font-weight: bold;
  border-top: solid 10px #6E777C;
  position: relative;
  background-color: #454C50;
  bottom: 0;
  justify-content: center;
  align-items: center;
}
</style>
