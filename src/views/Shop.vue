<template>
  <div class="select-pokemon-page">
    <div class="select-pokemon-content">
      <pokemon-list
        :pokemon-list="statePokemonDataList"
        :products="stateCartPokemonList"
        @deleteFromCart="deleteFromCart"
        @addToCart="addToCart"
      />
    </div>
  </div>
</template>

<script>
import PokemonList from '@/components/PokemonList'
import { mapState, mapActions } from 'vuex'
export default {
    components: {
        PokemonList,
    },
    computed: {
        ...mapState(['statePokemonDataList', 'stateCartPokemonList']),
    },
    async created() {
        const pokemonData = await this.getPokemonData()
        this.setPokemonData(pokemonData)
    },
    methods: {
        async getPokemonData() {
            const data = await fetch(
                'https://pokeapi.co/api/v2/pokemon?limit=151'
            )
            const json = await data.json()
            return json.results
        },
        ...mapActions(['setPokemonData', 'addToCart', 'deleteFromCart']),
    },
}
</script>

<style scoped>
.select-pokemon-page {
    text-align: center;
}
.select-pokemon-content {
    text-align: left;
    display: flex;
    justify-content: space-evenly;
}
</style>
