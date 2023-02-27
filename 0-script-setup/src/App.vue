<template>
  <h1>{{ title }}</h1>
  <input type="text" v-model="title" />
  <button @click="inc">{{ counter }}</button>
  <hr />
  <oddOrEven :counter="counter" @odd-event="alertMe" />

  <hr />
  <h1>User App</h1>
  <input type="text" placeholder="Name" v-model="state.personal.name" /> <br />
  <input type="text" placeholder="Last Name" v-model="state.personal.lname" />
  {{ state.personal }}
  <br />
</template>
<script setup>
import { ref, reactive, watch } from "vue";
//! beforeCreate() created() ve data()
import oddOrEven from "./components/oddOrEven.vue";
import Utils from "./composables/Utils.js";
import UserApp from "./composables/UserApp.js";
const { title, counter, inc, alertMe } = Utils();
const { state } = UserApp();
</script>
