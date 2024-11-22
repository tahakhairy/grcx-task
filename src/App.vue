<script setup lang="ts">
import { apiGetRoles, login } from './api'
import { ref } from 'vue'

const usr = ref('')
const pwd = ref('')

const onSubmit = async () => {
  if (usr.value && pwd.value) {
    const res = await login({ usr: usr.value, pwd: pwd.value })
    console.log(res)
  }
}

const getRoles = () => {
  apiGetRoles()
}
</script>

<template>
  <form @submit.prevent="onSubmit">
    <input type="text" v-model="usr" />
    <input type="password" v-model="pwd" />

    <button type="submit">login</button>
  </form>

  <button @click="getRoles">Get roles</button>
</template>

<style scoped></style>
