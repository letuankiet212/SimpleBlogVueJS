<template>
  <div class="card">
    <img :src="blog.image.url" class="card-img-top" :alt="blog.title" />
    <div class="card-body" v-if="!isEdit">
      <h5 class="card-title">{{ blog.title }}</h5>
      <p class="card-text">
        {{ blog.content }}
      </p>
      <div class="btn btn-primary mt-2" @click="handleEdit()">Edit</div>
    </div>
    <div class="card-body" v-else>
      <input type="file" name="imageBlog" id="imageBlog" @change="handleUpload" class="p-1" />
      <input type="text" id="titleBlog" class="border mb-1 p-1" v-model="formEdit.nameBlog" />
      <textarea id="contentBlog" class="border p-1" v-model="formEdit.contentBlog"></textarea>

      <div class="grp-button d-flex justify-content-between align-items-center mt-2">
        <div>
          <div class="btn btn-primary" @click="handleConfirm(blog.id)">Submit</div>
          <div class="btn btn-primary" @click="handleClick()">Cancel</div>
        </div>
        <div class="btn btn-primary" @click="handleDel(blog.id)">Delete</div>
      </div>
    </div>
  </div>
</template>

<script>
import { API } from '@/views/BlogView/_BlogScript';
export default {
  name: 'blog-component',
  props: ['blog'],
  mixins: [API],
  data: () => ({
    isEdit: false,
    formEdit: {
      nameBlog: '',
      contentBlog: '',
      imageFileBlog: null
    }
  }),
  methods: {
    handleEdit() {
      this.isEdit = true;
      this.formEdit = {
        nameBlog: this.blog.title,
        contentBlog: this.blog.content
      };
    },
    handleUpload(e) {
      this.formEdit.imageFileBlog = e.target.files[0] || e.dataTransfer.files[0];
    },

    handleConfirm(id) {
      const { nameBlog, contentBlog, imageFileBlog } = this.formEdit;
      const fd = new FormData();
      fd.append('blog[title]', nameBlog);
      fd.append('blog[content]', contentBlog);
      fd.append('blog[image]', imageFileBlog);
      this.EditBlog(id, fd);
      this.isEdit = false;
    },
    handleDel(id) {
      console.log(id);
      if (confirm('You sure want delete this Blog ?')) {
        this.isEdit = false;
        this.DeleteBlog(id);
      }
    }
  }
};
</script>
