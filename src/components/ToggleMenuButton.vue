<template>
  <a class="menu-button" onclick='toggleTopNav();'>
    <span></span>
    <span></span>
    <span></span>
  </a>
</template>

<script>
export default {

}
</script>

<style lang="scss">
$white:     #F7F9F9;
$black:     #000000;
$dark-gray: #424242;

.menu-button {
  display: block;
  cursor: pointer;
  width: 50px;
  height: 40px;
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 3;

  @media (min-width: 1060px) {
    &:hover {
      span {
        &:first-child {
          transform: translateY(-4px);
        }
        &:last-child {
          transform: translateY(4px);
        }
      }
    }
  }

  span {
    display: block;
    width: 40px;
    height: 2px;
    background: $white;
    position: absolute;
    left: 5px;
    transition: all 0.2s;
    &:first-child {
      top: 10px;
    }
    &:nth-child(2) {
      margin-top: -1px;
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