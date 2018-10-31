<template>
  <section id="about">
    <div class="card">
      <h1>About</h1>
      <div class="main">
        <img class="profile" src="@/assets/profile.png" />
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.main {
  display: flex;
}

.profile {
  border: 6px solid #516C8D;
  border-radius: 50%;
  width: 300px;
  height: 300px;
}
</style>
