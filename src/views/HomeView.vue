<template>
  <div>
    <UploadFile @getUsers="getUsers" />
    <UserList
      @deleteUser="deleteUser"
      :users="users"
      :error="error"
      :loading="loading"
    />
  </div>
</template>

<script>
import UserList from "../components/UserList";
import UploadFile from "../components/UploadFile";
import axios from "axios";

export default {
  name: "HomeView",

  components: {
    UserList,
    UploadFile,
  },

  mounted() {
    this.getUsers();
  },
  methods: {
    async getUsers() {
      this.loading = true;
      try {
        const res = await axios.get("http://localhost:3004/user");
        this.users = res.data.results;
      } catch (error) {
        this.error = true;
      } finally {
        this.loading = false;
      }
    },
    async deleteUser(id) {
      this.loading = true;
      try {
        await axios.delete(`http://localhost:3004/user/${id}`);
        this.getUsers();
      } catch (error) {
        this.error = true;
      } finally {
        this.loading = false;
      }
    },
  },

  data: () => ({
    users: [],
    loading: false,
    error: undefined,
  }),
};
</script>
