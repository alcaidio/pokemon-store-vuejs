import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    statePokemonDataList: [],
    stateCartPokemonList: [], 
    stateTotal: 0,
  },
  actions: {
    setPokemonData(context, payload) {
      context.commit("setPokemonData", payload);
    },
    setCartPokemonList(context, payload) {
      context.commit("setCartPokemonList", payload);
    },
    addToCart(context, payload) {
      context.commit("addToCart", payload);
      context.commit("getTotal");
    },
    removeOneFromCart(context, payload) {
      context.commit("removeOneFromCart", payload);
      context.commit("getTotal");
    },
    removeFromCart(context, payload) {
      context.commit("removeFromCart", payload);
      context.commit("getTotal");
    },
    getTotal(context) {
      context.commit("getTotal");
    },
  },
  mutations: {
    setPokemonData(state, list) {
      state.statePokemonDataList = list;
    },
    setCartPokemonList(state, list) {
      state.stateCartPokemonList = list;
    },
    addToCart(state, item) {
      const currentItems = [...state.stateCartPokemonList];
      const findItem = currentItems.find(data => data.name === item.name);
      if (findItem) {
        findItem.quantity += 1;
      } else {
        state.stateCartPokemonList.push(item);
      }   
    },
    removeOneFromCart(state, item) {
      let currentItems = [...state.stateCartPokemonList];
      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.stateCartPokemonList.splice(item, 1);
      }
    },
    removeFromCart(state, item){
      if(item.quantity > 0) state.stateCartPokemonList.splice(item, 1);
    },
    getTotal(state) {
      const total = Object.values(state.stateCartPokemonList).reduce((t, {price, quantity}) => t + price * quantity, 0)
      state.stateTotal = total;
    }
  }
}); 