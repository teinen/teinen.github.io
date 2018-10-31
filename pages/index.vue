<template>
  <section id="about">
    <div class="card">
      <h1>About</h1>
      <div class="main">
        <div class="profile-image">
          <img class="icon" src="@/assets/profile.png" />
        </div>
        <div class="profile-info">
          <h2>名前</h2>
          <h2>年齢</h2>
          <h2>職業</h2>
          <h2>居住</h2>
          <h2>趣味</h2>
        </div>
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
  height: 90%;
  padding-top: 20px;
}

.profile-image {
  text-align: center;
  width: 50%;
}

.profile-info {
  width: 50%;
}

.icon {
  border: 6px solid #516C8D;
  border-radius: 50%;
  width: 300px;
  height: 300px;
}
</style>
