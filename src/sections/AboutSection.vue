<template>
<section id="about">
  <div class="flex-box flex-column top">
    <h2><span>About</span></h2>
    <my-info></my-info>
  </div>
</section>
</template>

<script>
import MyInfo from '../components/about/MyInfo';

export default {
  components: {
    'my-info': MyInfo
  }
}
</script>

<style lang="scss" scoped>

</style>
