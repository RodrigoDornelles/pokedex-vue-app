<template>
  <div class="yellow lighten-4 table">
      <table class="highlight">
        <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Generation</th>
                <th>Legendary</th>
                <th>Type</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="pokemon in this.pokemons.data" :key="pokemon.id">
              <th>{{ pokemon.number }}</th>
              <th>{{ pokemon.name }}</th>
              <th>{{ pokemon.generation }}</th>
              <th>{{ pokemon.legendary }}</th>
              <th>
                <Type :name="pokemon.type_1"/>
                <Type :name="pokemon.type_2" v-if="pokemon.type_2"/>
              </th>
            </tr>
        </tbody>
    </table>
    <Pagination :min="1" :max="pokemons.pagination.pageCount" :actual="pokemons.pagination.page + 1"/>
  </div>
</template>

<script>
import Type from "./Type.vue";
import Pagination from "./Pagination.vue";

export default {
  name: 'PokemonTable',
  components: {
    Type,
    Pagination
  },
  props: {
    pokemons: Object
  }
}
</script>

<style scoped>
.table {
  border-radius: 8px;
  padding: 16px;
}

</style>