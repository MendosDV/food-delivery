<template>
  <BannerApp @add-customer="addCustomerToList"/>
  <div class="container">

    <section class="favourite-meal mb-5 border-bottom">
      <div class="d-flex justify-content-between align-items-center">
        <h4>Our best products</h4>
        <p class="cursor fst-italic text-decoration-underline">See all our meal</p>
      </div>
      <p class="mb-4">Do not hesitate and order for free in less that 30 minutes</p>
      <div class="d-flex gap-4 align-items-center mb-4">
        <CardApp
          v-for="meal in mealList.slice(0, 4)"
          :key="meal.name"
          :meal="meal"
        />
        <button class="add-meal btn m-auto" @click="toggleAddMeal">
          +
        </button>
      </div>
      <div v-show="showAddMeal" class="mb-4">
        <h5 style="color: #f24f75a2;">Add a new reciepe</h5>
        <form @submit.prevent>
          <div class="form-group">
            <div class="d-flex align-items-center justify-content-center flex-row gap-3 mb-4 w-50">
              <div class="flex-grow-1">
                <label for="nameMeal" class="mb-2">Meal Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="nameMeal"
                  placeholder="Enter your meal name"
                  v-model.lazy="this.mealName"
                >
              </div>
              <div class="flex-grow-1">
                <label for="price" class="mb-2">Price Meal</label>
                <input
                  type="number"
                  class="form-control"
                  id="price"
                  placeholder="Enter your price meal"
                  v-model="this.mealPrice"
                >
              </div>
            </div>
            <input
              type="text"
              class="form-control w-50 mb-3"
              placeholder="Enter url image"
              v-model="this.mealImage"
            >
          </div>
          <button @click="createNewMeal" type="submit" class="btn button-add-meal">
            Validate
          </button>
        </form>
      </div>
    </section>

    <section class="mb-5 border-bottom">
      <div class="d-flex justify-content-between align-items-center">
        <h4>Already clients</h4>
        <p @click="toggleClientList" class="cursor fst-italic text-decoration-underline">See all our clients</p>
      </div>
      <p>They trust us, why not you?</p>
      <div class="d-flex flex-wrap gap-2 align-items-center mb-4">
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

    <section class="all-meal mb-5">
      <div class="d-flex justify-content-between align-items-center">
        <h4>Our best products</h4>
        <p href="#" class="cursor fst-italic text-decoration-underline">See all our meal</p>
      </div>
      <p class="mb-4">Do not hesitate and order for free in less that 30 minutes</p>
      <div class="d-flex flex-wrap gap-4 align-items-center">
        <CardApp
          v-for="meal in mealList"
          :key="meal.name"
          :meal="meal"
        />
      </div>
    </section>
  </div>
  <FooterApp />
</template>

<script>
import BannerApp from './components/Header/BannerApp.vue'
import CardApp from './components/CardApp.vue'
import ClientCard from './components/ClientCard.vue'
import FooterApp from './components/FooterApp.vue'

export default {
  name: 'App',
  components: { BannerApp, CardApp, ClientCard, FooterApp },
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
      showAddMeal: false,
      showClient: false,
      mealName: '',
      mealPrice: 0,
      mealImage: ''
    }
  },
  methods: {
    addCustomerToList(newCustomer) {
      this.customerList.push(newCustomer)
    },
    toggleAddMeal() {
      this.showAddMeal = !this.showAddMeal
    },
    toggleClientList() {
      this.showClient = !this.showClient
    },
    sameClient(client) {
      client.first
    },
    createNewMeal() {
      const newMeal = {
        name: this.mealName,
        price: this.mealPrice,
        img: this.mealImage
      }
      this.mealList.push(newMeal)
      this.mealName = ''
      this.mealPrice = 0
      this.mealImage = ''
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
  min-height: 100%;

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

  .add-meal {
    font-size: 40px;
    font-weight: bold;

  }

  .button-add-meal {
    background-color: #f24f76;
  }

  .button-add-meal:hover {
    background-color: #e7345e;
    color: white;
  }
}
</style>
