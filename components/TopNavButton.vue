<template>
  <a class="menu-button">
    <span></span>
    <span></span>
    <span></span>
  </a>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
/* top navi for mobile */
.menu-button {
  @media screen and (min-width: 960px) {
    display: none;
  }

  display: block;
  cursor: pointer;
  width: 40px;
  height: 40px;
  position: fixed;
  top: 15px;
  right: 15px;
  z-index: 3;

  span {
    display: block;
    width: 30px;
    height: 3px;
    background: #ffffff;
    position: absolute;
    left: 5px;
    transition: all 0.2s;
    &:first-child {
      top: 10px;
    }
    &:nth-child(2) {
      margin-top: -1.5px;
      top: 50%;
    }
    &:last-child {
      bottom: 10px;
    }
  }
  &.active {
    span {
      &:first-child {
        transform: translateY(9px) rotate(45deg);
      }
      &:nth-child(2) {
        opacity: 0;
      }
      &:last-child {
        transform: translateY(-9px) rotate(-45deg);
      }
    }
  }
}
</style>
