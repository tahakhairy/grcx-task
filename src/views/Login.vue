<script setup lang="ts">
import { ref } from 'vue'
import Button from '@/components/ui/button/Button.vue'
import Input from '@/components/ui/input/Input.vue'
import Label from '@/components/ui/label/Label.vue'
import axios from 'axios'
import router from '@/router'

const usr = ref('')
const pwd = ref('')

const onSubmit = async () => {
  if (usr.value && pwd.value) {
    const res = await axios.post(`api/method/login`, {
      usr: usr.value,
      pwd: pwd.value
    })

    if (res.status === 200) {
      router.push({ name: 'home' })
    }
  }
}
</script>

<template>
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
</template>

<style scoped></style>
