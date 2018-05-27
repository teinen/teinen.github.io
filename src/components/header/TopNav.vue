<template>
  <div class="top-nav">
    <nav>
      <span>Contents</span>
      <ul>
        <li v-for="item in items" :key="item.id">
          <a
            data-scroll
            v-bind:href=item.link
            onclick='toggleTopNav();'
          >
            {{ item.title }}
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: 0, title: 'About', link: '#about' },
        { id: 1, title: 'Biography', link: '#biography' },
        { id: 2, title: 'Skill', link: '#skill' },
        { id: 3, title: 'Work', link: '#work' },
      ]
    }
  }
}
</script>

<style lang="scss">
$white:     #F7F9F9;
$black:     #000000;
$dark-gray: #424242;

.top-nav {
  display: block;
  position: fixed;
  width: 100vw;
  height: 60px;
  background-color: #000000;
  border-bottom: solid 2px $white;
  opacity: 0.9;
  top: 0;
  right: 0;
  left: 0;
  z-index: 2;
  transition: all 0.3s;

  nav {
    color: $white;
    text-align: center;
    visibility: hidden;
    span {
      font-size: 5rem;
      font-weight: 600;
    }
    ul {
      li {
        display: block;
        list-style: none;
        font-size: 3rem;
        animation-duration: 0.6s;
        animation-delay: 0.1s;
        @media (min-width: 1060px) {
          &:hover {
            content: "";
            background-color: $dark-gray;
          }
        }
        a {
          display: block;
          color: $white;
          text-decoration: none;
        }
      }
    }
  }

  &.opened {
    height: 330px;

    nav {
      visibility: visible;
    }
  }
}
</style>
