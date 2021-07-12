<template>
    <div>
        <div class="switch">
            <label>
                Legendary
                <input type="checkbox" v-model="filter.legendary" @change="checklegendary()"/>
                <span class="lever"></span>
            </label>
            <label>
                Mega Evolution
                <input type="checkbox" v-model="filter.mega" @change="checkmega()"/>
                <span class="lever"></span>
            </label>
        </div><br/>
        <div id="Types">
            <Type v-for="(name, key) in types.data" :checked="checked(name)" :name="name" :key="key"/>
        </div>
    </div>
</template>

<script>
import bus from '../bus.js';
import Type from "./Type.vue";

export default {
  name: 'ListTypes',
  components: {
    Type
  },
  props: {
    types: Object,
    filter: Object
  },
  methods: {
    checklegendary() {
        bus.$emit('checklegendary', this.filter.legendary);
    },
    checkmega() {
        bus.$emit('checkmega', this.filter.mega);
    },
    checked(name) {
        return this.filter.types.includes(name);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#Types {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>


