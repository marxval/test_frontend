<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">
          OpenpunchOutalog
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Record</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-row align="center" justify="center" class="pa-6">
                <v-btn-toggle
                  v-model="punchOut"
                  mandatory
                  v-bind:color="punchOut ? 'red' : 'green'"
                >
                  <v-btn>
                    <span>Punch In: {{ punchInValue }}</span>
                  </v-btn>
                  <v-btn>
                    <span>Punch Out: {{ punchOutValue }}</span>
                  </v-btn>
                </v-btn-toggle>
              </v-row>
              <v-col cols="12" class="d-flex justify-center">
                <div class="reserved">
                  <v-time-picker
                    elevation="1"
                    v-model="timePicker"
                    v-bind:color="punchOut ? 'red' : 'green'"
                  ></v-time-picker>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="grey darken-1" text @click="dialog = false">
            Close
          </v-btn>
          <v-btn color="green darken-1" text @click="dialog = false">
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
  data: () => ({
    dialog: true,
    punchOut: undefined,
    punchInValue: "6:00",
    punchOutValue: "19:00",
    timePicker: "6:00",
  }),
  watch: {
    // whenever question changes, this function will run
    timePicker(newTime) {
      if (this.punchOut) {
        this.punchOutValue = newTime;
      } else {
        this.punchInValue = newTime;
      }
    },
    punchOut(punchOut) {
      this.timePicker = punchOut ? this.punchOutValue : this.punchInValue;
    },
  },
};
</script>
<style></style>
