<template>
<header>
  <top-nav></top-nav>
  <menu-button></menu-button>
</header>
</template>

<script>
import TopNav from '../components/header/TopNav';
import ToggleMenuButton from '../components/header/ToggleMenuButton';

export default {
  components: {
    'top-nav': TopNav,
    'menu-button': ToggleMenuButton
  }
}
</script>
