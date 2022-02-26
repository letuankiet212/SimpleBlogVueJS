<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <form class="d-flex justify-content-center align-items-center"></form>

      <div class="dropdown">
        <input
          class="form-control me-2 btn border dropdown-toggle"
          :class="toggleResult ? 'show' : ''"
          type="search"
          placeholder="Search"
          v-model="searchValue"
        />

        <ul class="dropdown-menu w-100" :class="toggleResult ? 'show' : ''">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
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
