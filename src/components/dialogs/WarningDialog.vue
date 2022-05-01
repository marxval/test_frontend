<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="360">
      <v-card>
        <v-card-title class="text-h5">
          Delete user with id: {{ userId.id }} ?
        </v-card-title>
        <v-card-text
          >All info related to the user will be deleted including all records
          logged from him.</v-card-text
        >
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="gray darken-1" text @click="dialog = false">
            Cancel
          </v-btn>
          <v-btn color="red darken-1" text @click="deleteUser(userId.globalId)">
            Delete
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: "WarningDialog",
  props: ["userId"],
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    deleteUser(globalId) {
      this.$emit("deleteGlobalUser", globalId);
    },
  },
  watch: {
    userId({ id }) {
      this.dialog = id ? true : false;
    },
    dialog(isOpen) {
      if (!isOpen) {
        this.$emit("closeModal");
      }
    },
  },
};
</script>
