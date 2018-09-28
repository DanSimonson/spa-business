import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    products: [
      { name: "Swedish Massage", price: 250 },
      { name: "Shiatsu Massage", price: 300 },
      { name: "Hot Stone Massage", price: 350 },
      { name: "Aromatherapy Massage", price: 350 }
    ],
    products2: [
      { name: "Ear Candling", price: 400 },
      { name: "foot reflexiology", price: 200 },
      { name: "Chair Massage", price: 300 }
    ],
    session: false
  },
  getters: {
    getProducts: state => state.products,
    getProducts2: state => state.products2,
    saleProducts: state => {
      var saleProducts = state.products.map(product => {
        return {
          name: "**" + product.name + "**",
          price: product.price - 100
        };
      });
      return saleProducts;
    },
    session: state => state.session
  },
  mutations: {
    SET_SESSION(state, session) {
      state.session = session;
    }
  }
});
