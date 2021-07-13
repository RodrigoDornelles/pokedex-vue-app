<template>
  <div class="yellow lighten-4 table">
      <table>
        <thead>
            <tr>
                <th @click="check('number')">
                  <span v-html="sorted('#')"/>
                </th>
                <th @click="check('name')">
                  Name<span v-html="sorted('name')"/>
                </th>
                <th @click="check('generation')">
                  Gen<span class="hide-on-med-and-down">eration</span><span v-html="sorted('generation')"/>
                </th>
                <th @click="check('legendary')">
                  Legendary<span v-html="sorted('legendary')"/>
                </th>
                <th @click="check('type')">
                  Type<span v-html="sorted('type')"/>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="pokemon in this.pokemons.data" :key="pokemon.id" @click="click(pokemon.id)">
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
    <PokemonInfo :pokemon="view"/>
  </div>
</template>

<script>
import bus from '../bus.js';
import Type from "./Type.vue";
import Pagination from "./Pagination.vue";
import PokemonInfo from "./PokemonInfo.vue";

export default {
  name: 'PokemonTable',
  components: {
    Type,
    Pagination,
    PokemonInfo
  },
  props: {
    sort: {
      type: String,
      default: 'number'
    },
    view: Object,
    pokemons: Object
  },
  methods: {
    click(id) {
      bus.$emit('info', id);
    },
    check(name) {
      if (name == this.sort) {
        bus.$emit('sort', `-${name}`);
        return;
      }
      bus.$emit('sort', name);
    },
    sorted(name) {
      if (name == '#' && (!this.sort || this.sort == 'number')) {
        return '<i class="tiny material-icons">arrow_drop_up</i>'; 
      }
      else if (name == '#' && this.sort == '-number') {
        return '<i class="tiny material-icons">arrow_drop_down</i>'; 
      }
      else if (name == '#') {
        return '#';
      }
      else if (this.sort == name) {
        return '<i class="tiny material-icons">arrow_drop_up</i>'; 
      }
      else if (this.sort == `-${name}`) {
        return '<i class="tiny material-icons">arrow_drop_down</i>'; 
      }
      return '';
    }
  }
}
</script>

<style scoped>
.table {
  border-radius: 8px;
  padding: 16px;
}

thead tr th:hover {
    opacity: 0.74;
    cursor: pointer;
}

tbody tr:hover {
  cursor: pointer;
  background-color: rgba(255, 255, 255, .5);
}
</style>
