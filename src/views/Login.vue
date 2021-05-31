<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field
      v-model="username"
      label="UserName"
      class="ml-4"
    ></v-text-field>

    <v-text-field class="ml-4" v-model="password" label="Password" ></v-text-field>

    <v-btn  class="ml-4" @click.prevent="logging">
      Submit
    </v-btn>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    username: "",
    password:"",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
  }),

  methods: {
      logging(){
              console.log("called")

          if (this.username==="cus" && this.password==="cus"){
              this.$router.push('/maker')
          }else{
              this.$router.push("/checker")
          }
      }
  },
};
</script>