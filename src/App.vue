<template>
  <BannerApp @add-customer="addCustomerToList"/>
  <div class="container">

    <section class="favourite-meal mb-5">
      <div class="d-flex justify-content-between align-items-center">
        <h4>Our best products</h4>
        <p class="cursor fst-italic text-decoration-underline">See all our meal</p>
      </div>
      <p class="mb-4">Do not hesitate and order for free in less that 30 minutes</p>
      <div class="d-flex justify-content-between align-items-center">
        <CardApp
          v-for="meal in mealList.slice(0, 4)"
          :key="meal.name"
          :meal="meal"
        />
      </div>
    </section>

    <section>
      <div class="d-flex justify-content-between align-items-center">
        <h4>Already clients</h4>
        <p @click="toggleClientList" class="cursor fst-italic text-decoration-underline">See all our clients</p>
      </div>
      <p>They trust us, why not you?</p>
      <div class="d-flex flex-wrap gap-2 align-items-center">
        <ClientCard
          @remove-client="removeClient"
          v-show="showClient"
          v-for="client in customerList"
          :key="client.firstName + client.lastName"
          :client="client"
        />
        <p v-if="this.customerList.length === 0">You have no client yet</p>
      </div>
    </section>
  </div>
</template>

<script>
import BannerApp from './components/Header/BannerApp.vue'
import CardApp from './components/CardApp.vue'
import ClientCard from './components/ClientCard.vue'

export default {
  name: 'App',
  components: { BannerApp, CardApp, ClientCard },
  data() {
    return {
      customerList: [
        { firstName: 'Julie', lastName: 'Bouvier'},
        { firstName: 'Renand', lastName: 'Loradour'},
        { firstName: 'Lucien', lastName: 'Couiteau'},
        { firstName: 'Arthus', lastName: 'Ulus'}
      ],
      mealList: [
        { name: 'Lasagne', price: 10, img: 'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/3B707DAE-A600-44FC-B7D5-15896184874D/Derivates/e3304b41-3431-4b6e-b600-8ee6bd94cdbe.jpg'},
        { name: 'Burger', price: 12, img: 'https://images.radio-canada.ca/v1/alimentation/recette/16x9/burger-gourmand-marc-maula-5-chefs.jpg'},
        { name: 'Fish with lemon', price: 16, img: 'https://s1.1zoom.me/b5050/834/Fish_Food_Potato_Vegetables_Cutting_board_561687_3840x2160.jpg'},
        { name: 'Boeuf Bourguignon', price: 15, img: 'https://food-images.files.bbci.co.uk/food/recipes/boeuf_bourguignon_25475_16x9.jpg'},
        { name: 'Lasagne', price: 10, img: 'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/3B707DAE-A600-44FC-B7D5-15896184874D/Derivates/e3304b41-3431-4b6e-b600-8ee6bd94cdbe.jpg'},
        { name: 'Burger', price: 12, img: 'https://images.radio-canada.ca/v1/alimentation/recette/16x9/burger-gourmand-marc-maula-5-chefs.jpg'},
        { name: 'Fish with lemon', price: 16, img: 'https://s1.1zoom.me/b5050/834/Fish_Food_Potato_Vegetables_Cutting_board_561687_3840x2160.jpg'},
      ],
      showClient: false,
    }
  },
  methods: {
    addCustomerToList(newCustomer) {
      this.customerList.push(newCustomer)
    },
    toggleClientList() {
      this.showClient = !this.showClient
    },
    sameClient(client) {
      client.first
    },
    removeClient(client) {
      this.customerList = this.customerList.filter((c) => {
        return !(c.firstName === client.firstName && c.lastName === client.lastName);
      });
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Roboto', sans-serif;
  color: #4B4C5F;

  p {
    font-size: 16px;
  }

  input:focus {
    outline: none !important;
    border:1px solid #f24f76;
    box-shadow: 0 0 6px #f24f75a2;
  }

  .cursor {
    cursor: pointer;
  }
}
</style>
