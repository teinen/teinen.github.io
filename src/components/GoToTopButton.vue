<template>
<a data-scroll class="go-to-top" href="#">
  <i class="fas fa-chevron-circle-up fa-4x"></i>
</a>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
$white: #F7F9F9;

.go-to-top {
  display: block;
  cursor: pointer;
  width: 50px;
  height: 50px;
  position: fixed;
  bottom: 30px;
  right: 30px;
  color: $white;
  z-index: 3;
}
</style>
