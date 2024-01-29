<template>
  <div class="card" style="width: 14rem;">
    <img class="card-img-top" :src="meal.img" alt="Card image cap">
    <div class="card-body">
      <p class="card-text text-center fw-bold">{{ meal.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardApp',
  props: {
    meal: {
      type: Object
    }
  },
}
</script>

<style>
  .card:hover {
    cursor: pointer;
  }
  img {
    max-height: 120px;
    object-fit: cover;
  }
  p {
    font-size: 16px;
  }
</style>
