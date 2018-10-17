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
  height: 100px;
  justify-content: center;
  padding: 0 20px;
  position: fixed;
  top: 0;
  width: 100vw;

  // For pc
  @media screen and (min-width: 960px) {
    justify-content: start;
  }
}

.title {
  // For mobile
  color: #ffffff;
  font-size: 1.5em;

  // For tablet
  @media screen and (min-width: 480px) and (max-width: 960px) {
    font-size: 2.0em;
  }

  // For pc
  @media screen and (min-width: 960px) {
    font-size: 2.5em;
  }
}
</style>
