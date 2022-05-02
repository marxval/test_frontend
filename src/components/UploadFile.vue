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
    <div class="errorAlert">
      <v-alert
        v-model="error"
        border="right"
        color="red"
        dense
        outlined
        dismissible
        text
        type="error"
        class="error-alert"
        elevation="3"
      >
        Could not complete your petition
      </v-alert>
    </div>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "UploadFile",
  data() {
    return {
      uploadingFile: false,
      error: false,
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

      try {
        await axios({
          url: "https://test-keyence.herokuapp.com/file/upload",
          method: "POST",
          data: formData,
          headers: { "Content-Type": "multipart/form-data" },
        });
        this.$emit("getUsers");
      } catch (error) {
        this.error = true;
        setTimeout(() => {
          this.error = false;
        }, 3000);
      }
    },
  },
};
</script>
<style>
.error-alert {
  max-width: 80vw;
  position: absolute;
  bottom: 0;
  right: 15px;
}
</style>
