<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" elevation="0" dark v-bind="attrs" v-on="on">
            <v-badge
              :content="messages"
              :value="messages"
              color="green"
              overlap
            >
              <v-icon large> mdi-vuetify </v-icon>
            </v-badge>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, index) in items" :key="index">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { bus } from "./main";
export default {
  name: "App",

  data() {
    return {
      messages: 0,
      items: [
        {
          title:
            "Click Me aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa              aaaaaaaaaaaa",
        },
        {
          title:
            "Click Me ccccccccccccccccccccccccccccccccccc              sssssssssssssssss",
        },
        { title: "Click Me" },
        { title: "Click Me 2" },
      ],
    };
  },
  created() {
    bus.$on("makerMounted", (data) => {
      console.log("maker", data);
      this.messages = data;
    });

    bus.$on("checkerMounted", (data) => {
      console.log("checker", data);
      this.messages = data;
    });
  },
};
</script>
