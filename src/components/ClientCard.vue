<template>
  <div class="card">
    <div class="card-body">
      <h6>{{ client.firstName }} {{ client.lastName }}</h6>
      <button @click="removeClient(client.firstName, client.lastName)" class="btn">Remove</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ClientCard',
  props: {
    client: {
      type: Object
    }
  },
  methods: {
    removeClient(firstName, lastName) {
      this.$emit('remove-client', {
        firstName: firstName,
        lastName: lastName
      })
    }
  }
}
</script>

<style lang="scss">
  .card {
    width: 20%;

    button {
      background-color: #f24f76;
      transform: 0.4s ease;
      font-size: 12px;
    }

    button:hover {
      background-color: #ef3f68;
      color: white;
    }
  }
</style>
