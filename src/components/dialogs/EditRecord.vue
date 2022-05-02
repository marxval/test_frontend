<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title v-if="$vuetify.breakpoint.smAndUp">
          <span class="text-h5">Record: {{ date }}</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" class="d-flex justify-center pa-6">
                <v-btn-toggle
                  v-model="isOutSelected"
                  mandatory
                  v-bind:color="isOutSelected ? 'red' : 'green'"
                >
                  <v-btn>
                    <span
                      >Punch In <br />
                      {{ punchInValue }}</span
                    >
                  </v-btn>
                  <v-btn>
                    <span
                      >Punch Out <br />
                      {{ punchOutValue }}</span
                    >
                  </v-btn>
                </v-btn-toggle>
              </v-col>
              <v-col cols="12" class="d-flex justify-center">
                <div class="reserved">
                  <v-time-picker
                    elevation="1"
                    v-model="timePicker"
                    v-bind:color="isOutSelected ? 'red' : 'green'"
                  ></v-time-picker>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="grey darken-1" text @click="closeModal"> Close </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="updateRecord(record._id, punchInValue, punchOutValue, date)"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: "EditRecord",
  props: ["record"],
  data: () => ({
    dialog: false,
    isOutSelected: undefined,
    punchInValue: undefined,
    punchOutValue: undefined,
    date: undefined,
    timePicker: undefined,
  }),
  methods: {
    closeModal() {
      this.buttonDisabled = true;
      this.$emit("closeModal");
    },
    updateRecord(id, punchInValue, punchOutValue, date) {
      this.$emit("updateRecord", id, punchInValue, punchOutValue, date);
      this.dialog = false;
      this.buttonDisabled = true;
    },
  },
  watch: {
    timePicker(newTime) {
      if (this.isOutSelected) {
        this.punchOutValue = newTime;
      } else {
        this.punchInValue = newTime;
      }
    },
    isOutSelected(isOutSelected) {
      this.timePicker = isOutSelected ? this.punchOutValue : this.punchInValue;
    },
    record(newRecord) {
      this.dialog = newRecord ? true : false;
      if (newRecord) {
        const { punchIn, punchOut } = newRecord;
        this.punchInValue = punchIn;
        this.punchOutValue = punchOut;
        this.timePicker = this.isOutSelected ? punchOut : punchIn;
        this.date = newRecord.date;
      }
    },
  },
};
</script>
<style></style>
