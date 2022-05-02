<template>
  <v-container>
    <div class="d-flex align-center justify-center justify-sm-end">
      <input
        type="file"
        ref="file"
        style="display: none"
        @change="onFileChange"
      />
      <v-btn
        large
        type="submit"
        :loading="uploadingFile"
        :disabled="uploadingFile"
        color="green darken-2"
        class="ma-2 white--text"
        @click="searchFile"
      >
        <span class="mr-3">Upload new file</span>

        <v-icon large right> mdi-microsoft-excel </v-icon>
      </v-btn>
    </div>
  </v-container>
</template>

<script>
// import axios from "axios";

export default {
  name: "UploadFile",
  data() {
    return {
      uploadingFile: false,
    };
  },
  methods: {
    searchFile() {
      this.$refs.file.click();
    },
    async onFileChange(e) {
      const files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      const file = files[0];
      const formData = new FormData();
      formData.append("file", file, file.name);

      await fetch("https://test-keyence.herokuapp.com/file/upload", {
        method: "POST",
        body: formData,
      });
      this.$emit("getUsers");
    },
  },
};
</script>
