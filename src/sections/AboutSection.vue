<template>
<section id="about">
  <div class="flex-box flex-column top">
    <h2><span>About</span></h2>
    <contents></contents>
  </div>
</section>
</template>

<script>
import Contents from '@/components/about/Contents';

export default {
  components: {
    'contents': Contents
  }
}
</script>

<style lang="scss" scoped>

</style>
