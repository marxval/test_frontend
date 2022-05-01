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
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Github</span>
        <v-icon>mdi-github</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <div class="d-flex align-center justify-center justify-sm-end">
          <v-btn
            large
            :loading="loading3"
            :disabled="loading3"
            color="green darken-2"
            class="ma-2 white--text"
            @click="loader = 'loading3'"
          >
            <span class="mr-3">Upload new file</span>

            <v-icon large right> mdi-microsoft-excel </v-icon>
          </v-btn>
        </div>
      </v-container>

      <UserList />
    </v-main>
  </v-app>
</template>

<script>
import UserList from "./components/UserList";

export default {
  name: "App",

  components: {
    UserList,
  },

  data: () => ({
    //
  }),
};
</script>
