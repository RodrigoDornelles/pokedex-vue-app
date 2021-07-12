<template>
    <button class="Type waves-effect" :class="[name, checked?'Active':'']" @click="check(name)">
        {{ name }}
    </button>
</template>

<script>
import bus from '../bus.js';

export default {
  name: 'Type',
  props: {
    name: String,
    checked: Boolean
  },
  methods: {
      check(name) {
        bus.$emit('checktype', name);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Type {
    border: none;
    border-radius: 8px;
    padding: 8px;
    margin: 2px;
}

.Type:hover {
    opacity: 0.74;
    cursor: pointer;
}

.Active {
    color: white;
    filter: brightness(0.90 );
}

.Grass {
    background-color: #81c784;
}

.Rock {
    background-color: #bcaaa4;
}

.Ice {
    background-color: #e1bee7;
}

.Dragon {
    background-color: #ea80fc;
}

.Dark {
    background-color: #ff1744;
}

.Psychic {
    background-color: #e040fb;
}

.Bug {
    background-color: #eeff41;
}

.Flying {
    background-color: #00b0ff;
}

.Steel {
    background-color: #b0bec5;
}

.Fire {
    background-color: #ef5350;
}

.Fighting  {
    background-color: #ff5252;
}

.Ground {
    background-color: #ff6e40;
}

.Ghost {
    background-color: #b39ddb;
}

.Poison {
    background-color: #9575cd;
}

.Water {
    background-color: #448aff;
}

.Fairy {
    background-color: #ff80ab;
}

.Electric {
    background-color: #ffca28;
}

.Normal {
    background-color: #ffcc80;
}
</style>
