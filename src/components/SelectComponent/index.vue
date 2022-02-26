<template>
  <select class="form-select flex-grow-1" v-model="currentSelect" @change="handleChange()">
    <option
      v-for="(type_request, index) in listSort"
      :key="'type-select' + index"
      :value="type_request.value"
    >
      {{ type_request.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'SelectComponent',
  props: ['listSort'],
  data: () => ({
    currentSelect: 'created_at'
  }),
  methods: {
    handleChange() {
      this.$emit('updateSort', this.currentSelect);
    }
  }
};
</script>
