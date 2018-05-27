<template>
<div>
  <svg style="visibility: visible;">
    <text x="5" y="70" class="svg-main-title-1">Let me</text>
    <text x="5" y="170" class="svg-main-title-2">SHOW</text>
    <text x="25" y="60" class="svg-main-title-mobile-1">Let me</text>
    <text x="25" y="130" class="svg-main-title-mobile-2">SHOW</text>
  </svg>
</div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
svg {
  @media (max-width: 414px) {
    width: 300px;
    height: 150px;

    .svg-main-title-mobile-1 {
      font-size: 5rem;
      font-weight: 600;
      fill: none;
      stroke: none;
      stroke-dasharray: 400% 400%;
      stroke-width: 1.5px;
      animation: stroke-offset-1 3s linear 1s forwards;
    }

    .svg-main-title-mobile-2 {
      font-size: 8rem;
      font-weight: 600;
      fill: none;
      stroke: none;
      stroke-dasharray: 450% 450%;
      stroke-width: 1.5px;
      animation: stroke-offset-2 3s linear 1s forwards;
    }

    .svg-main-title-1,
    .svg-main-title-2 {
      visibility: hidden;
    }
  };

  @media (min-width: 415px) {
    width: 400px;
    height: 200px;

    .svg-main-title-1 {
      font-size: 8rem;
      font-weight: 600;
      fill: none;
      stroke: none;
      stroke-dasharray: 400% 400%;
      stroke-width: 1.5px;
      animation: stroke-offset-1 5s linear 1s forwards;
    }

    .svg-main-title-2 {
      font-size: 12rem;
      font-weight: 600;
      fill: none;
      stroke: none;
      stroke-dasharray: 450% 450%;
      stroke-width: 1.5px;
      animation: stroke-offset-2 5s linear 1s forwards;
    }

    .svg-main-title-mobile-1,
    .svg-main-title-mobile-2 {
      visibility: hidden;
    }
  };
}


@keyframes stroke-offset-1 {
  0% {
    stroke-dashoffset: 400%;
    stroke: white;
    fill:transparent;
  }
  50% {
    fill:transparent;
    stroke: white;
  }
  100% {
    stroke-dashoffset: 0%;
    stroke: white;
    fill: none;
  }
}

@keyframes stroke-offset-2 {
  0% {
    stroke-dashoffset: 450%;
    stroke: white;
    fill:transparent;
  }
  50% {
    fill:transparent;
    stroke: white;
  }
  100% {
    stroke-dashoffset: 0%;
    stroke: white;
    fill: white;
  }
}
</style>
