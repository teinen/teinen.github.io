<template>
  <div>
    <top-nav></top-nav>
    <menu-button></menu-button>
  </div>
</template>

<script>
import TopNav from './TopNav.vue';
import ToggleMenuButton from './ToggleMenuButton.vue';

export default {
  components: {
    'top-nav': TopNav,
    'menu-button': ToggleMenuButton
  }
}
</script>
