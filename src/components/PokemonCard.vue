<template>
  <div v-if="pokemonData && pokemonDescription" class="pokemon-card">
    <div class>
      <img
        :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonData.id}.png`"
        :alt="pokemonData.name"
      />
    </div>
    <div class>
      <p>Name: {{ pokemonData.name }}</p>
      <p>No. {{ pokemonData.id }}</p>
      <p>{{ pokemonData.price }}$</p>
      <p>
        Type:
        <span
          v-for="(typesOfPokemon, index) in pokemonData.types"
          :key="`type${index}`"
        >{{ typesOfPokemon.type.name }}</span>
      </p>
      <p>{{ pokemonDescription[0].flavor_text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PokemonCard",
  props: {
    pokemonId: {
      type: Number,
      required: true
    }
  },
  data: function() {
    return {
      pokemonData: null,
      pokemonDescription: null
    };
  },
  async created() {
    if (this.pokemonId) {
      this.pokemonData = await this.getDataSpecificPokemon(this.pokemonId);
      this.pokemonDescription = await this.getPokemonDescription(this.pokemonData);
    }
  },
  methods: {
    async getDataSpecificPokemon(id) {
      const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
      const json = await data.json();
      const price = await this.getPrice(id);
      return {...json, price: price};
    },
    async getPokemonDescription(pokemonData) {
      const data = await fetch(`${pokemonData.species.url}`);
      const json = await data.json();
      return json.flavor_text_entries.filter(function(element) {
        return element.language.name === "en";
      });
    }, 
    async getPrice(id){
      const price = await(id % 10 + 0.99); 
      return price;
    }
  }
};
</script>

<style scoped>
.pokemon-card {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 10px;
}
</style>