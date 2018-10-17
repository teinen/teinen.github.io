<template>
  <header>
    <span class="title">{{ title }}</span>

    <nav>
      <ul>
        <li><router-link to="#">ABOUT</router-link></li>
        <li><router-link to="#">SKILL</router-link></li>
        <li><router-link to="#">CAREER</router-link></li>
        <li><router-link to="#">WORK</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data () {
    return {
      title: 'teinen.github.io',
    }
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
    border-bottom: 10px solid #516C8D;
    height: 100px;
  }

  @media screen and (min-width: 960px) {
    justify-content: start;
  }
}

.title {
  color: #ffffff;
  font-size: 1.5em;

  @media screen and (min-width: 480px) and (max-width: 960px) {
    font-size: 2.0em;
  }

  @media screen and (min-width: 960px) {
    font-size: 2.5em;
  }
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
      }
    }
  }
}
</style>
