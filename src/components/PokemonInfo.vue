<template>
  <div id="modal-poke" class="modal">
    <div class="modal-content">
      <h4 class="center-align">{{ pokemon.name }}</h4>
      <div class="row">
        <div class="col s12 m6">
            <img style="display: block;
            margin-left: auto;
            margin-right: auto;
            width: 80%;" :src="imgUrl()"/>
        </div>
        <div class="col s12 m6">
          <table>
            <tbody>
              <tr>
                <td>Number</td><td>{{ pokemon.number }}</td>
              </tr>
                <tr><td>Generation</td><td>{{ pokemon.generation }}</td>
              </tr>
              <tr>
                <td>Legendary</td><td>{{ pokemon.legendary }}</td>
              </tr>
              <tr>
                <td>Type</td>
                <td>
                  <Type :name="pokemon.type_1"/>
                  <Type :name="pokemon.type_2" v-if="pokemon.type_2"/>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col s12">
          <table class="striped">
            <thead>
              <tr>
                <td>HP</td>
                <td>Atk</td>
                <td>Def</td>
                <td>Spd</td>
                <td>Sp. Atk</td>
                <td>Sp. Def</td>
                <td>Total</td>
              </tr>
            </thead>
              <tbody>
                <tr>
                  <td>{{ pokemon.hp }}</td>
                  <td>{{ pokemon.attack }}</td>
                  <td>{{ pokemon.defense }}</td>
                  <td>{{ pokemon.special_attack }}</td>
                  <td>{{ pokemon.special_defence }}</td>
                  <td>{{ pokemon.speed }}</td>
                  <td>{{ pokemon.total }}</td>
                </tr>
              </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import bus from '../bus.js';
import Type from "./Type.vue";
import M from '@materializecss/materialize';

export default {
  name: 'PokemonInfo',
  components: {
    Type
  },
  props: {
    pokemon: Object
  },
  methods: {
    imgUrl() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.pokemon.number}.png`;
    }
  },
  mounted() {
    bus.$on('modal', () => {
      const modal = M.Modal.init(document.getElementById('modal-poke'));
      modal.open();
    });
  }
}
</script>

<style scoped>

</style>
