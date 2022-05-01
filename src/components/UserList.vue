<template>
  <v-container>
    <v-row class="text-right">
      <v-col xs="12" sm="6" md="4">
        <v-card elevation="2" outlined shaped>
          <v-card-title>
            <div class="mr-2">
              <v-icon large>mdi-account-circle</v-icon>
            </div>
            <span class="font-weight-bold"> mxmghost </span>
          </v-card-title>
          <v-card-text>
            <span class="font-weight-bold text-body-1"> ID: 001 </span>
          </v-card-text>

          <v-card-actions>
            <v-btn class="ma-2" small fab color="indigo">
              <v-icon color="white">mdi-account-details</v-icon>
            </v-btn>

            <v-btn class="ma-2" small fab color="error">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col xs="12">
        <v-pagination v-model="page" :length="2" circle></v-pagination>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "UserList",
};
</script>
