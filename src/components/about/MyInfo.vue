<template>
<div class="container">
  <div class="sec-contents">
    <div
      v-for="item in items"
      :key="item.id"
      :class="item.class"
      data-wow-duration="1s"
    >
      <p class="title">{{ item.title }}</p>
      <span>{{ item.content }}</span>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        { id: 1, title: 'Name', content: '諦念(teinen)', class: 'wow animated bounceInLeft' },
        { id: 2, title: 'Job', content: 'Server Side Engineer', class: 'wow animated bounceInRight' },
        { id: 3, title: 'Hobby', content: 'ゲーム, 漫画, アニメ, プログラミング', class: 'wow animated bounceInLeft' }
      ]
    }
  }
}
</script>

<style <style lang="scss" scoped>

</style>
