<template>
<section id="title">
  <div class="flex-box center flex-column">
    <main-title></main-title>
    <sub-title></sub-title>
  </div>
</section>
</template>

<script>
import MainTitle from '../components/title/MainTitle';
import SubTitle from '../components/title/SubTitle';

export default {
  components: {
    'main-title': MainTitle,
    'sub-title': SubTitle
  }
}
</script>

<style>

</style>
