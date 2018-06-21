<template>
<section id="biography">
  <div class="flex-box flex-column top">
    <h2><span>Biography</span></h2>
    <contents></contents>
  </div>
</section>
</template>

<script>
import Contents from '@/components/biography/Contents';

export default {
  components: {
    'contents': Contents,
  }
}
</script>
