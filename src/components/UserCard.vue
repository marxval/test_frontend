<template>
  <v-col xs="12" sm="6" md="4">
    <v-card elevation="2" outlined shaped>
      <v-card-title>
        <div class="mr-2">
          <v-icon large>mdi-account-circle</v-icon>
        </div>
        <span class="font-weight-bold"> {{ username }} </span>
      </v-card-title>
      <v-card-text>
        <span class="font-weight-bold text-body-1"> ID: {{ id }} </span>
      </v-card-text>

      <v-card-actions>
        <v-btn
          @click="openDetails(globalId)"
          class="ma-2"
          small
          fab
          color="indigo"
        >
          <v-icon color="white">mdi-account-details</v-icon>
        </v-btn>

        <v-btn
          class="ma-2"
          small
          fab
          color="error"
          @click="deleteUser(id, globalId)"
        >
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
// import axios from "axios";
export default {
  name: "UserCard",
  props: ["username", "id", "globalId"],
  methods: {
    deleteUser(id, globalId) {
      this.$emit("openDeleteModal", { id, globalId });
    },
    openDetails(id) {
      this.$router.push(`/user/${id}`);
    },
  },
};
</script>
