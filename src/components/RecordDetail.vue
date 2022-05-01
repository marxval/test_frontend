<template>
  <div>
    <div class="d-flex align-center">
      <div class="font-weight-bold ml-8 mb-2 text-body-1">{{ date }}</div>
      <div class="ml-3 mb-2">
        <v-btn
          class="mx-1"
          fab
          dark
          x-small
          color="indigo"
          @click="editRecord(ix)"
        >
          <v-icon dark> mdi-pencil </v-icon>
        </v-btn>
        <v-btn
          class="mx-1"
          fab
          dark
          x-small
          color="error"
          @click="deleteRecord(globalId)"
        >
          <v-icon dark> mdi-delete </v-icon>
        </v-btn>
      </div>
    </div>

    <v-timeline align-top dense>
      <v-timeline-item small color="green">
        <div class="font-weight-normal">
          <strong> Punch In </strong> @ {{ punchIn }}
        </div>
      </v-timeline-item>
      <v-timeline-item small color="red">
        <div class="font-weight-normal">
          <strong>Punch Out</strong> @ {{ punchOut }}
        </div>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
export default {
  name: "RecordDetail",
  props: ["date", "punchIn", "punchOut", "ix", "globalId"],
  data: () => ({}),
  methods: {
    editRecord(ix) {
      this.$emit("openModal", ix);
    },
    deleteRecord(id) {
      this.$emit("deleteRecord", id);
    },
  },
};
</script>
<style></style>
