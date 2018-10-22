<template>
  <header>
    <span class="title">{{ title }}</span>

    <nav>
      <ul>
        <li v-for="(v, i) in headerContents" :key="i">
          <router-link :to=v.url>{{ v.title }}</router-link>
        </li>
      </ul>
    </nav>

    <top-nav-button></top-nav-button>
  </header>
</template>

<script>
import TopNavButton from '@/components/TopNavButton'

export default {
  data () {
    return {
      title: 'teinen.github.io',
      headerContents: [
        { title: 'ABOUT', url: '/'},
        { title: 'SKILL', url: '/skill'},
        { title: 'CAREER', url: '/career'},
        { title: 'WORK', url: '/work'},
      ]
    }
  },
  components: {
    'top-nav-button': TopNavButton
  }
}
</script>

<style lang="scss" scoped>
header {
  align-items: center;
  background-color: #28385E;
  border-bottom: 8px solid #516C8D;
  display: flex;
  height: 80px;
  justify-content: center;
  padding: 0 60px;
  position: fixed;
  top: 0;
  width: 100vw;

  @media screen and (min-width: 480px) {

  }

  @media screen and (min-width: 960px) {
    justify-content: start;
  }
}

.title {
  color: #ffffff;
  font-size: 1.8em;

  @media screen and (min-width: 960px) {
    font-size: 2.3em;
  }
}

/* navigation */
@mixin active-link($width: 0) {
  border-bottom: 2px solid #ffffff;
  content: '';
  display: block;
  width: $width;
}

nav {
  font-size: 1.5em;
  position: absolute;
  right: 60px;

  ul {
    align-items: flex-end;
    display: flex;
    justify-content: space-between;
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      margin: 0 0 0 20px;

      a {
        color: #ffffff;
        text-decoration: none;

        &::after {
          @include active-link();
          transition: all .3s;
        }

        &:hover::after {
          width: 100%;
        }

        /* active link */
        &.nuxt-link-exact-active {
          &::after {
            @include active-link(100%);
          }
        }
      }
    }
  }
}
</style>
