<template>
  <div class="navbar mb-5 d-flex justify-content-between align-items-center">
    <!-- <span class="user-logo p-2 rounded">
      <font-awesome-icon :icon="['fas', 'm']" style="color: #ffffff;" />
    </span> -->
    <TitleApp />
    <div class="d-flex gap-4 align-items-center">
      <div class="d-flex gap-2 align-items-center">
        <font-awesome-icon class="border border-white p-2 rounded-circle" :icon="['fas', 'user']" style="color: #FFFF;" />
        <h6 class="m-auto fw-light">ACCOUNT</h6>
      </div>
      <h6 class="m-auto fw-light">CARD</h6>
      <font-awesome-icon :icon="['fas', 'bars']" style="color: #ffffff;" />
    </div>

  </div>
</template>

<script>
import TitleApp from './TitleApp.vue'
export default {
  name: 'NavbarApp',
  components: { TitleApp }
}
</script>

<style lang="scss">
  .user-logo {
    background-color: #f24f76;
  }
</style>
