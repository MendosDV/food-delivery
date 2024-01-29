<template>
  <div class="banner px-5 py-4 text-white text-center mb-5">
    <NavBar />
    <div class="mb-4">
      <h2 class="fw-light">Discover the best food & drink in <span style="font-weight: bold;">Montréal</span></h2>
      <h6 class="fw-light">The meals you love, delivered with care</h6>
    </div>
    <form @submit.prevent class="input-group m-auto add-customer mb-4">
      <input type="text" placeholder="First name" aria-label="First name" v-model.lazy ="customerFirstName" class="form-control">
      <input type="text" placeholder="Last name" aria-label="Last name" v-model.lazy ="customerLastName" class="form-control">
      <button type="submit" @click="createNewCustomer" class="btn">Add Customer</button>
    </form>
  </div>
</template>

<script>
import NavBar from './NavbarApp.vue'
export default {
  name: 'BannerApp',
  components: { NavBar },
  data() {
    return {
      customerFirstName: '',
      customerLastName:'',
    }
  },
  methods: {
    createNewCustomer() {
      // Émettre un événement pour ajouter un nouveau client
      this.$emit('add-customer', {
        firstName: this.customerFirstName,
        lastName: this.customerLastName
      });

      this.customerFirstName = '';
      this.customerLastName = '';
    }
  }
}
</script>

<style lang="scss">
  .banner {
    background-image:
      linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)),
      url(https://clicklovegrow.com/wp-content/uploads/2020/03/Naomi-Sherman-Advanced-Graduate4.jpg);
    background-size: cover;
  }

  .add-customer {
    width: 40% !important;

    .form-control {
      width: fit-content;
    }
    button {
      font-size: 14px;
      background-color:  rgb(242, 79, 118);
      transition: 0.4s ease;
    }
    button:hover {
      color: white;
      background-color:  rgb(239, 65, 106);
    }
  }
</style>
