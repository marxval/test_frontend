<template>
  <v-container style="height: 80vh">
    <template v-if="loading">
      <v-layout fill-height class="d-flex justify-center align-center pa-2">
        <v-progress-circular
          :size="120"
          :width="12"
          color="indigo"
          indeterminate
        ></v-progress-circular>
      </v-layout>
    </template>
    <div v-else-if="!error">
      <v-row class="text-right">
        <UserCard
          @openDeleteModal="toggleModal"
          v-for="user in users"
          :key="user._id"
          :username="user.username"
          :id="user.id"
          :globalId="user._id"
        />
      </v-row>
    </div>
    <WarningDialog
      @closeModal="toggleModal(undefined)"
      @deleteGlobalUser="deleteUser"
      :userId="userToDelete"
    />
  </v-container>
</template>

<script>
import UserCard from "./UserCard";
import WarningDialog from "./dialogs/WarningDialog";

export default {
  name: "UserList",
  data: () => ({
    page: 1,
    userToDelete: {
      id: undefined,
      globalId: undefined,
    },
  }),
  props: ["users", "error", "loading"],
  components: {
    UserCard,
    WarningDialog,
  },
  methods: {
    toggleModal(id) {
      this.userToDelete = {
        ...id,
      };
    },
    deleteUser(id) {
      this.userToDelete = {
        id: undefined,
        globalId: undefined,
      };
      this.$emit("deleteUser", id);
    },
  },
};
</script>
