<template>
<div>
  <header>
    <top-nav></top-nav>
    <menu-button></menu-button>
  </header>
</div>
</template>

<script>
import TopNav from './components/TopNav.vue';
import ToggleMenuButton from './components/ToggleMenuButton.vue';

export default {
  components: {
    'top-nav': TopNav,
    'menu-button': ToggleMenuButton
  }
}
</script>

<style>

</style>
