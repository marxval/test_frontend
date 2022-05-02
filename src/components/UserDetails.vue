<template>
  <v-container>
    <v-row justify="space-around" class="mx-1">
      <v-card width="100%">
        <div height="200px" class="indigo darken-2">
          <v-card-title class="white--text">
            <v-avatar size="54">
              <v-icon x-large color="white">mdi-account-circle</v-icon>
            </v-avatar>
            <p class="ml-4 mb-0 text-uppercase">
              {{ user.username }} <br />
              ID:{{ user.id }}
            </p>
          </v-card-title>
        </div>

        <h3 v-if="records.length === 0" class="pa-3">
          No records for this user
        </h3>

        <v-card-text>
          <RecordDetail
            @openModal="openModal"
            @deleteRecord="deleteRecord"
            v-for="(record, ix) in records"
            :key="record._id"
            :ix="ix"
            :date="record.date"
            :punchIn="record.punchIn"
            :punchOut="record.punchOut"
            :globalId="record._id"
          />
        </v-card-text>
      </v-card>
    </v-row>
    <EditRecord
      :record="editRecord"
      @closeModal="closeModal"
      @updateRecord="updateRecord"
    />
    <div class="errorAlert">
      <ErrorAlert :openAlert="error" />
    </div>
  </v-container>
</template>

<script>
import RecordDetail from "./RecordDetail";
import EditRecord from "./dialogs/EditRecord";
import ErrorAlert from "./ErrorAlert";
import axios from "axios";

export default {
  name: "UserDetails",
  props: ["user", "records"],
  components: {
    RecordDetail,
    EditRecord,
    ErrorAlert,
  },
  data: () => ({
    editRecord: undefined,
    loadingDelete: false,
    error: false,
  }),
  methods: {
    openModal(ix) {
      this.editRecord = this.records[ix];
    },
    closeModal() {
      this.editRecord = undefined;
    },
    handleError() {
      this.error = true;
      setTimeout(() => {
        this.error = false;
      }, 3000);
    },
    async deleteRecord(id) {
      this.loadingDelete = true;
      try {
        await axios.delete(
          `https://test-keyence.herokuapp.com/user/${this.user._id}/records/${id}`
        );
        this.$emit("refetchRecords");
      } catch (error) {
        this.handleError();
      } finally {
        this.loadingDelete = false;
      }
    },
    async updateRecord(id, punchIn, punchOut, date) {
      this.loadingDelete = true;
      try {
        await axios.patch(
          `https://test-keyence.herokuapp.com/user/${this.user._id}/records/${id}`,
          { punchIn, punchOut, date }
        );
        this.$emit("refetchRecords");
      } catch (error) {
        this.handleError();
      } finally {
        this.loadingDelete = false;
      }
    },
  },
};
</script>

<style>
.error-alert {
  max-width: 80vw;
  position: absolute;
  bottom: 0;
  right: 15px;
}
</style>
