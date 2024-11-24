<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue'
import router from '@/router'
import axios from 'axios'
import { ref } from 'vue'

const roles = ref()

const getRoles = async () => {
  const res = await axios.get(
    import.meta.env.DEV
      ? `api/resource/Role`
      : `${import.meta.env.VITE_APP_API_URL}api/resource/Role`
  )

  if (res.status === 200) {
    roles.value = res.data?.data
  }
}

const logout = async () => {
  const res = await axios.post(
    import.meta.env.DEV
      ? `api/method/logout`
      : `${import.meta.env.VITE_APP_API_URL}api/method/logout`
  )
  if (res.status === 200) {
    router.push({ name: 'login' })
  }
}
</script>

<template>
  <div class="flex justify-center items-center gap-5 flex-col">
    <h1 class="text-2xl font-bold mt-5 text-center">Home Page</h1>

    <div class="flex gap-3">
      <Button @click="getRoles">Get Roles</Button>
      <Button variant="outline" @click="logout">Logout</Button>
    </div>

    <div v-if="roles">
      <p class="my-2">Roles:</p>
      <ul class="flex gap-3 flex-wrap">
        <li
          v-for="item in roles"
          class="bg-primary text-white rounded-md px-2 py-1"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
