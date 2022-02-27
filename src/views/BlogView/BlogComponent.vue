<template>
  <div class="card">
    <img :src="form.image" class="card-img-top blog-img" :alt="form.title" />
    <div class="card-body" v-if="!isEdit">
      <h5 class="card-title">{{ form.title }}</h5>
      <p class="card-text">
        {{ form.content }}
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
          <div class="btn btn-primary" @click="handleCancel()">Cancel</div>
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
    form: {
      title: '',
      content: '',
      image: ''
    },
    formEdit: {
      nameBlog: '',
      contentBlog: '',
      imageFileBlog: null
    }
  }),
  created() {
    this.fillData({
      title: this.blog.title,
      content: this.blog.content,
      image: this.blog.image.url
    });
  },
  methods: {
    fillData(dataObj) {
      this.form = Object.assign({}, dataObj);
    },
    handleEdit() {
      this.isEdit = true;
      this.formEdit = {
        nameBlog: this.form.title,
        contentBlog: this.form.content
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
  },
  mounted() {
    this.$eventBus.$on('UPDATE_BLOG', (res) => {
      if (res.id == this.blog.id) {
        this.fillData({
          title: res.title,
          content: res.content,
          image: res.image.url
        });
      }
      return false;
    });
  },
  watch: {
    blog() {
      this.fillData({
        title: this.blog.title,
        content: this.blog.content,
        image: this.blog.image.url
      });
    }
  }
};
</script>
