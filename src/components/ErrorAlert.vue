<template>
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
</template>
<script>
export default {
  name: "ErrorAlert",
  props: ["openAlert"],
  data: () => ({
    error: false,
  }),
  watch: {
    openAlert(isOpen) {
      this.error = isOpen;
    },
  },
};
</script>
