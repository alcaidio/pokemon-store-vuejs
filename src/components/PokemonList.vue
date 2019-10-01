<template>
  <div class="pokemon-list">
    <h2>Choose your Pokémon</h2>
    <p v-for="(pokemon, index) in pokemonList" :key="pokemon.url">
      N°{{ index + 1 }} -
      <router-link :to="{ name: 'pokemon', params: { id: `${index+1}` }}">{{ pokemon.name }}</router-link>

      <img
        :key="pokemon.url"
        :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`"
        alt="Pokemon`"
      />
      <a class="nes-btn" @click="setProducts(pokemon.name)">Pick me!</a>
    </p>
  </div>
</template>

<script>
export default {
  name: "PokemonList",
  props: {
    pokemonList: {
      type: Array,
      required: true
    },
    products: {
      type: Array,
      required: true
    }
  },
  computed: {
    productListLength() {
      return this.products.length;
    }
  },
  methods: {
    setProducts(name) {
      if (this.products.includes(name)) {
        const indexInArray = this.products.indexOf(name);
        this.$emit("deleteFromCart", indexInArray);
        return;
      }

      this.$emit("addToCart", name);
    }
  }
};
</script>

<style scoped>
.pokemon-list {
  text-transform: capitalize;
}
.pokemon-list-item {
  display: flex;
  align-items: center;
}
</style>