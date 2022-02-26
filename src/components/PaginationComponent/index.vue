<template>
  <ul class="d-flex">
    <li
      class="page-item"
      :class="index + 1 === infoPage.page ? 'active' : ''"
      v-for="(value, index) in fetchPageNumber"
      :key="'page' + index"
    >
      <a class="page-link" @click="handleClick(value)">{{ value }}</a>
    </li>
  </ul>
</template>

<script>
import { range } from '@/helpers/Array.js';

export default {
  name: 'PaginationComponent',
  methods: {
    range,
    handleClick(value) {
      let result = this.infoPage.page;
      switch (value) {
        case '>':
          result += 1;
          break;
        case '<':
          result -= 1;
          break;
        default:
          result = value;
          break;
      }
      this.$emit('updatePag', result);
    }
  },
  computed: {
    fetchPageNumber() {
      if (this.infoPage) {
        const { pages, page } = this.infoPage;
        const pageNeighbours = 2;

        const totalNumber = pageNeighbours * 2 + 3;
        const totalBlocks = totalNumber + 2;

        let data = null;
        if (pages > totalBlocks) {
          const startPage = Math.max(2, page - pageNeighbours);
          const endPage = Math.min(pages - 1, page + pageNeighbours);
          let pages = this.range(startPage, endPage);

          const hasLeftPage = startPage > 2;
          const hasRightPage = pages - endPage > 1;
          switch (true) {
            case hasLeftPage && !hasRightPage:
              pages = ['<', ...pages];
              break;
            case !hasLeftPage && hasRightPage:
              pages = [...pages, '>'];
              break;
            case hasLeftPage && hasRightPage:
            default: {
              pages = ['<', ...pages, '>'];
              break;
            }
          }
          data = [1, ...pages, pages];
        } else {
          data = this.range(1, pages);
        }
        return data;
      }
      return false;
    }
  },
  props: ['infoPage']
};
</script>
