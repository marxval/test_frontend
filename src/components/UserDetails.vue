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
              mxmghost <br />
              ID:001
            </p>
          </v-card-title>
        </div>

        <v-card-text>
          <div class="d-flex align-center">
            <div class="font-weight-bold ml-8 mb-2 text-body-1">Today</div>
            <div class="ml-3 mb-2">
              <v-btn class="mx-1" fab dark x-small color="indigo">
                <v-icon dark> mdi-pencil </v-icon>
              </v-btn>
              <v-btn class="mx-1" fab dark x-small color="error">
                <v-icon dark> mdi-delete </v-icon>
              </v-btn>
            </div>
          </div>

          <v-timeline align-top dense>
            <v-timeline-item
              v-for="message in messages"
              :key="message.time"
              :color="message.color"
              small
            >
              <div>
                <div class="font-weight-normal">
                  <strong>{{ message.from }}</strong> @{{ message.time }}
                </div>
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "UserDetails",
  data: () => ({
    messages: [
      {
        from: "You",
        message: `Sure, I'll see you later.`,
        time: "10:42am",
        color: "green",
      },
      {
        from: "John Doe",
        message: "Yeah, sure. Does 1:00pm work?",
        time: "10:37am",
        color: "error darken-1",
      },
    ],
  }),
};
</script>
<style></style>
