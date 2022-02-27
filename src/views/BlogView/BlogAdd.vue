<template>
  <div class="col-4">
    <form class="card shadow" @submit.prevent="handleSubmit()">
      <img :src="formBlog.imagePreview" alt="" />
      <div class="card-body">
        <input type="file" name="imageBlog" id="imageBlog" @change="handleUpload" class="p-1" />
        <input
          type="text"
          id="titleBlog"
          class="border mb-1 p-1"
          placeholder="Title Blog"
          v-model="formBlog.nameBlog"
          required
        />
        <textarea id="contentBlog" class="border p-1" v-model="formBlog.contentBlog"></textarea>
        <button type="submit" class="btn btn-primary mt-2 mx-auto d-block">Add Blog</button>
      </div>
    </form>
  </div>
</template>

<script>
import { API } from './_BlogScript';
import { previewImgUpload } from '@/helpers/Image';
export default {
  name: 'blog-add',
  mixins: [API],
  data: () => ({
    formBlog: {
      nameBlog: 'The Great Dictator',
      contentBlog:
        'Est non voluptas. Vitae repudiandae quo. Omnis nostrum ut.\nIn illum a. Est nemo quibusdam. Blanditiis praesentium at.\nQui animi est. Voluptate iure aut. Animi asperiores debitis',
      imagePreview: 'https://api-placeholder.herokuapp.com/images/fallback/default.png',
      imageFileBlog: null
    }
  }),
  methods: {
    previewImgUpload,
    handleUpload(e) {
      this.formBlog.imageFileBlog = e.target.files[0] || e.dataTransfer.files[0];
      this.formBlog.imagePreview = this.previewImgUpload(e);
    },
    handleSubmit() {
      const { nameBlog, contentBlog, imageFileBlog } = this.formBlog;
      const fd = new FormData();
      fd.append('blog[image]', imageFileBlog);
      fd.append('blog[title]', nameBlog);
      fd.append('blog[content]', contentBlog);
      this.CreateBlog(fd);
    }
  }
};
</script>
