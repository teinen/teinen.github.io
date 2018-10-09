<template>
  <header>
    <span class="title">{{ title }}</span>
  </header>
</template>

<script>
export default {
  data () {
    return {
      title: 'teinen.github.io'
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  display: flex;
  width: 100vw;
  height: 100px;
  position: relative;
  background-color: #000;
  top: 0;
  justify-content: center;
  align-items: center;

  .title {
    color: #fff;
    font-size: 3em;
  }
}
</style>
