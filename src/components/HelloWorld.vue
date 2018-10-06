<template>
<v-select v-model="selected" :options="options"></v-select>
</template>

<script>
import vSelect from "vue-select";
export default {
  name: "HelloWorld",
  data: function() {
    return {
      options: [{ label: "foo", value: "Foo" }]
    };
  },
  props: {
    selected: {}
  },
  components: {
    "v-select": vSelect
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
