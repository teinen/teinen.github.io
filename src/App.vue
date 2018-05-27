<template>
<div>
  <header-section></header-section>
  <title-section></title-section>
</div>
</template>

<script>
import HeaderSection from './sections/HeaderSection';
import TitleSection from './sections/TitleSection';

export default {
  components: {
    'header-section': HeaderSection,
    'title-section': TitleSection
  }
}
</script>

<style>

</style>
