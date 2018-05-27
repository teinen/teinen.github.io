<template>
<div>
  <header-section></header-section>
  <title-section></title-section>
  <about-section></about-section>
  <biography-section></biography-section>
  <skill-section></skill-section>
  <work-section></work-section>
  <go-to-top-button></go-to-top-button>
</div>
</template>

<script>
import HeaderSection from './sections/HeaderSection';
import TitleSection from './sections/TitleSection';
import AboutSection from './sections/AboutSection';
import BiographySection from './sections/BiographySection';
import SkillSection from './sections/SkillSection';
import WorkSection from './sections/WorkSection';
import GoToTopButton from './components/GoToTopButton';

export default {
  components: {
    'header-section': HeaderSection,
    'title-section': TitleSection,
    'about-section': AboutSection,
    'biography-section': BiographySection,
    'skill-section': SkillSection,
    'work-section': WorkSection,
    'go-to-top-button': GoToTopButton,
  }
}
</script>

<style lang="scss">
$white:     #F7F9F9;
$black:     #000000;
$dark-gray: #424242;

/* --- Common Properties --- */
h2 span {
  @media (max-width: 414px) {
    font-size: 6rem;
  }
  @media (min-width: 415px) {
    font-size: 9rem;
  }
  display: block;
  font-weight: 600 !important;
  margin-top: 80px !important;
}

/* --- Body --- */
body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  background-image: url(./images/portfolio-bg.jpg);
  @media screen and (max-width: 414px) {
    background-image: none;
    background-color: $black;
  }
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  z-index: 0;

  section {
    color: $white;
  }
}

.sec-contents {
  @media (max-width: 414px) {font-size: 2rem;}
  @media (min-width: 415px) {font-size: 3rem;}
  text-align: center;

  div {
    margin-bottom: 50px;
  }

  /* title */
  p {
    &.title {
      @media (max-width: 414px) {font-size: 3rem;}
      @media (min-width: 415px) {font-size: 4rem;}
      font-weight: bold;
      position: relative;
      display: inline-block;
    }
    &::after {
      content: '';
      position: absolute;
      bottom: 0px;
      left: 0px;
      width: 100%;
      height: 3px;
      background: $white;
      transform: scale(0, 1);
      transform-origin: center top;
      transition: transform .3s;
    }
    &:hover::after {
      transform: scale(1, 1);
    }
  }

  span {
    display: block;
  }
}

.sec-contents-bio {
  @extend .sec-contents;
  table {
    th {
      @media (max-width: 414px) {font-size: 2.5rem;}
      @media (min-width: 415px) {font-size: 3rem;}
    }
    td {
      @media (max-width: 414px) {font-size: 2rem;}
      @media (min-width: 415px) {font-size: 2.5rem;}
    }
  }
}

.sec-contents-skill {
  @extend .sec-contents;
  span {
    margin-bottom: 10px;
    @media (max-width: 414px) {font-size: 5.5rem;}
    @media (min-width: 415px) {font-size: 6.5rem;}
  }
}

.flex-box {
  width: 100vw;
  min-height: 100vh;
  margin: 0;
  display: flex;
  align-items: center;

  &.center {
    justify-content: center;
  }

  &.top {
    justify-content: start;
  }

  &.flex-column {
    flex-direction: column;
  }

  .flex-row {
    flex-direction: row;
  }
}
</style>

