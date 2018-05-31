<template>
<section id="skill">
  <div class="flex-box flex-column top">
    <h2><span>Skill</span></h2>
    <contents></contents>
  </div>
</section>

</template>

<script>
import Contents from '../components/skill/Contents';

export default {
  components: {
    'contents': Contents,
  }
}
</script>
