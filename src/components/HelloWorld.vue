<template>
  <v-select label="name"
            :options="options"
            :filterable="false"
            :value="localSelected"
            @search="onSearch"
            @input="updateSelected"
            >
    <template slot="no-options">
      Please enter 3 or more characters
    </template>
    <template slot="option" slot-scope="option">
      <div class="d-center">
        <b>{{ option.code }}</b>
        {{ option.name }}
      </div>
    </template>
    <template slot="selected-option" slot-scope="option">
      <div class="selected d-center">
        <b>{{ option.code }}</b>
        {{ option.name }}
      </div>
    </template>
  </v-select>
</template>

<script>
import vSelect from "vue-select";
export default {
  name: "HelloWorld",
  data: function() {
    return {
      localSelected: null,
      options: []
    };
  },
  props: {
    initValue: {},
    dataUrl: {}
  },
  components: {
    "v-select": vSelect
  },
  methods: {
    updateSelected(newValue) {
      this.localSelected = newValue;
      this.$emit("input", newValue);
    },
    onSearch(search, loading) {
      if (search.length >= 3) {
        loading(true);
        this.search(loading, search, this);
      }
    },
    search: (loading, search, vm) => {
      fetch(`${vm.dataUrl}?q=${escape(search)}`).then(res => {
        res.json().then(json => (vm.options = json.data));
        loading(false);
      });
    }
  },
  created: function() {
    fetch(`${this.dataUrl}?q=${escape(this.initValue)}`).then(res => {
      res.json().then(json => (this.localSelected = json.data[0]));
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
