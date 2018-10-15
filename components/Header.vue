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
  height: 110px;
  position: fixed;
  background-color: #28385E;
  border-bottom: 10px solid #516C8D;
  top: 0;
  justify-content: start;
  align-items: center;

}

.title {
  color: #ffffff;
  font-size: 3.0em;
  margin-left: 25px;

  &::before {
    content: '/';
    margin-right: 5px;
  }
}
</style>
