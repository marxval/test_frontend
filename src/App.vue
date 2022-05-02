<template>
  <v-app>
    <v-app-bar app dark>
      <div class="d-flex align-center">
        <div class="mr-2 d-none d-sm-flex">
          <v-icon x-large>mdi-hours-24</v-icon>
        </div>

        <span class="text-sm-body-2 text-md-h5 font-weight-bold"
          >User Records System</span
        >
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/marxval/test_frontend"
        target="_blank"
        text
      >
        <v-icon large>mdi-github</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view class="view"></router-view>
    </v-main>
  </v-app>
</template>

<script>
import axios from "axios";

export default {
  name: "App",

  components: {},

  mounted() {
    this.getUsers();
  },
  methods: {
    async getUsers() {
      this.loading = true;
      try {
        const res = await axios.get("https://test-keyence.herokuapp.com/user");
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
        await axios.delete(`https://test-keyence.herokuapp.com/user/${id}`);
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
