<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { authService } from '@/auth/auth-service'
import type { AuthUser } from '@/auth/auth-interface'

const user = ref<AuthUser | null>(null)


onMounted(async () => {
  user.value = await authService.getCurrentUser()
})
</script>

<template>
  <ion-page>
    <ion-content class="ion-padding">

      <h2>Profile</h2>

      <div v-if="user">
        <p><b>UID:</b> {{ user.uid }}</p>
        <p><b>Email:</b> {{ user.email }}</p>
        <p><b>Phone:</b> {{ user.phoneNumber }}</p>
        <p><b>Name:</b> {{ user.displayName }}</p>

        <img v-if="user.photoUrl" :src="user.photoUrl" width="100" />
      </div>

    </ion-content>
  </ion-page>
</template>