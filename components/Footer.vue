<template>
  <footer>
    <div class="social">
      <a :href=twitterUrl target="_blank" rel="noopner">
        <img src="@/assets/twitter.svg" alt="Twitter" width="30" />
      </a>

      <a :href=githubUrl target="_blank" rel="noopner">
        <img src="@/assets/github.png" alt="GitHub" width="30" />
      </a>
    </div>

    <span class="copyright">{{ copyright }}</span>
  </footer>
</template>

<script>
export default {
  data () {
    return {
      copyright: '© 2018 Akira Kanno',
      twitterUrl: 'https://twitter.com/tei_nen',
      githubUrl: 'https://github.com/teinen',
    }
  }
}
</script>

<style lang="scss" scoped>
footer {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100px;
  color: #ffffff;
  font-weight: bold;
  border-top: solid 10px #6E777C;
  position: fixed;
  background-color: #454C50;
  bottom: 0;
}

.social {
  margin-bottom: 10px;
}
</style>
