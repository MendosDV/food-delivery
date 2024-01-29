<template>
  <BannerApp @add-customer="addCustomerToList"/>
  <div class="container">
    <section class="favourite-meal">
      <h4>Our best products</h4>
      <p class="mb-4">Do not hesitate and order for free in less that 30 minutes</p>
      <div class="d-flex justify-content-between align-items-center">
        <CardApp
          v-for="meal in mealList"
          :key="meal.name"
          :meal="meal"
        />
      </div>
    </section>
    <div>
      <h3>Liste de mes clients</h3>
      <u>
        <li v-for="client in customerList" :key="client.firstName + client.lastName">
          {{ client.firstName }}
          {{ client.lastName }}
        </li>
      </u>
    </div>
  </div>
</template>

<script>
import BannerApp from './components/Header/BannerApp.vue'
import CardApp from './components/CardApp.vue'

export default {
  name: 'App',
  components: { BannerApp, CardApp },
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
        { name: 'Boeuf Bourguignon', price: 15, img: 'https://food-images.files.bbci.co.uk/food/recipes/boeuf_bourguignon_25475_16x9.jpg'}
      ]
    }
  },
  methods: {
    addCustomerToList(newCustomer) {
      console.log(this.customerList)
      this.customerList.push(newCustomer)
      console.log(this.customerList)
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Roboto', sans-serif;
  color: #4B4C5F;

  p {
    font-size: 14px;
  }

  input:focus {
    outline: none !important;
    border:1px solid #f24f76;
    box-shadow: 0 0 6px #f24f75a2;
  }
}
</style>
