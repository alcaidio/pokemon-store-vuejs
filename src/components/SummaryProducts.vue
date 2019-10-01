<template>
  <div>
      <p  v-for="(pokemonName, index) in products"
          :key="index"
          class="chosen-pokemon">
        {{ pokemonName }}
      </p>
  </div>
</template>

<script>
    export default {
        name: 'SummaryProducts',
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
                return this.products.length
            }
        }
    }
</script>

<style scoped>
.chosen-pokemon {
    text-transform: capitalize;
}
</style>