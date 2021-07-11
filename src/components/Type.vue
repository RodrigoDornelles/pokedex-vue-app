<template>
    <button class="Type" :class="name">
        {{ name }}
    </button>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    name: String
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

.Grass {
    background-color: rgb(60, 205, 77);
}

.Rock {
    background-color: rgb(190, 133, 145);
}

.Ice {
    background-color: rgb(252, 213, 218);
}

.Dragon {
    background-color: rgb(57, 51, 86);
}

.Dark {
    background-color: rgb(204, 15, 69);
}

.Psychic {
    background-color: rgb(200, 38, 149);
}

.Bug {
    background-color: rgb(233, 154, 27);
}

.Flying {
    background-color: rgb(82, 135, 203);
}

.Steel {
    background-color: rgb(69, 71, 82);
}

.Fire {
    background-color: rgb(209, 23, 31);
}

.Fighting  {
    background-color: rgb(244, 66, 30);
}

.Ground {
    background-color: rgb(255, 50, 23);
}

.Ghost {
    background-color: rgb(179, 109, 196);
}

.Poison {
    background-color: rgb(131, 149, 165);
}

.Water {
    background-color: rgb(74, 60, 183);
}


.Fairy {
    background-color: rgb(247, 137, 142);
}

.Electric {
    background-color: rgb(254, 220, 30);
}

.Normal {
    background-color: rgb(252, 219, 216);
}
</style>
