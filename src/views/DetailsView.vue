<template>
  <div>
    <v-container>
      <div class="d-flex align-center justify-start">
        <v-btn dark class="ma-2 white--text" @click="backToHome">
          <v-icon left> mdi-arrow-left </v-icon>
          <span>Home</span>
        </v-btn>
      </div>
    </v-container>
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
      <UserDetails
        :user="user"
        :records="records"
        @refetchRecords="getUserRecords($route.params.id)"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import UserDetails from "../components/UserDetails";
export default {
  name: "DetailsView",

  mounted() {
    const { id } = this.$route.params;
    this.getUserRecords(id);
  },
  components: {
    UserDetails,
  },
  data: () => ({
    error: undefined,
    loading: false,
    records: [],
    user: {},
  }),
  methods: {
    backToHome() {
      this.$router.push(`/`);
    },
    async getUserRecords(id) {
      this.loading = true;
      try {
        const res = await axios.get(`http://localhost:3004/user/${id}/records`);
        const { user, records } = res.data.results;
        this.user = user;
        const recordsWithLocalDate = records.map((props) => {
          const { date, punchIn, punchOut } = props;
          const recordDate = new Date(date);
          const punchInDate = new Date(punchIn).toLocaleTimeString();
          const punchOutDate = new Date(punchOut).toLocaleTimeString();

          const simpleDate = `${
            recordDate.getMonth() + 1
          }/${recordDate.getDate()}/${recordDate.getFullYear()}`;

          return {
            ...props,
            date: simpleDate,
            punchIn: punchInDate,
            punchOut: punchOutDate,
          };
        });
        this.records = recordsWithLocalDate;
      } catch (error) {
        this.error = true;
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
