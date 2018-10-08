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
    dataUrl: {},
    value: {}
  },
  components: { vSelect },
  methods: {
    updateSelected(newValue) {
      this.$emit("input", newValue.code);
    },
    async onSearch(queryTerm, loading) {
      if (queryTerm.length >= 3) {
        try {
          const response = await fetch(
            `${this.dataUrl}?q=${escape(queryTerm)}`
          );
          const json = await response.json();
          this.options = json.data;
        } finally {
          loading(false);
        }
      }
    }
  },
  created: function() {
    // the initial value is just the value with no label
    // so we must make and ajax call to get the label too
    fetch(`${this.dataUrl}?q=${escape(this.value)}`, {
      // credentials: "include"
    }).then(res => {
      res.json().then(json => (this.localSelected = json.data[0]));
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
