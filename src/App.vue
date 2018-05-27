<template>
<div>
  <header-section></header-section>
  <title-section></title-section>
  <about-section></about-section>
</div>
</template>

<script>
import HeaderSection from './sections/HeaderSection';
import TitleSection from './sections/TitleSection';
import AboutSection from './sections/AboutSection';

export default {
  components: {
    'header-section': HeaderSection,
    'title-section': TitleSection,
    'about-section': AboutSection,
  }
}
</script>

<style>

</style>
