<script setup lang="ts">
import { apiGetRoles, login } from './api'
import { ref } from 'vue'
import Button from './components/ui/button/Button.vue'
import Input from './components/ui/input/Input.vue'
import Label from './components/ui/label/Label.vue'

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
  <div class="container h-dvh mx-auto">
    <div class="flex justify-center items-center h-full">
      <form
        @submit.prevent="onSubmit"
        class="flex flex-col justify-center basis-[500px] flex-wrap gap-5"
      >
        <div class="flex flex-col gap-2">
          <Label for="usr"> Username </Label>
          <Input id="usr" type="text" v-model="usr" />
        </div>
        <div class="flex flex-col gap-2">
          <Label for="pwd"> Password </Label>
          <Input id="pwd" type="password" v-model="pwd" />
        </div>
        <Button type="submit" size="lg">Login</Button>
      </form>
    </div>
  </div>

  <!-- <Button @click="getRoles" type="button">Get roles</Button> -->
</template>

<style scoped></style>
