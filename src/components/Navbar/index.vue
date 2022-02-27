<template>
  <nav class="navbar navbar-expand-lg">
    <div class="d-flex">
      <h2 class="navbar-brand">Vuejs</h2>
      <div class="dropdown">
        <input
          class="form-control me-2 btn border dropdown-toggle bg-white"
          :class="toggleResult ? 'show' : ''"
          type="search"
          placeholder="Search"
          v-model="searchValue"
        />
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'nav-bar',
  data: () => ({
    searchValue: '',
    toggleResult: false
  }),
  watch: {
    searchValue() {
      this.$emit('searchData', this.searchValue);
    }
  }
};
</script>
