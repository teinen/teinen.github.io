<template>
  <header>
    <span class="title">{{ title }}</span>
  </header>
</template>

<script>
export default {
  data () {
    return {
      title: 'teinen.github.io',
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  align-items: center;
  background-color: #28385E;
  border-bottom: 10px solid #516C8D;
  display: flex;
  height: 110px;
  justify-content: start;
  padding: 0 20px;
  position: fixed;
  top: 0;
  width: 100vw;
}

.title {
  color: #ffffff;
  font-size: 3.0em;
}
</style>
