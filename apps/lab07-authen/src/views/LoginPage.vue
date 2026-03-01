<template>
  <ion-page>
    <ion-content class="ion-padding">

      <h2>Login</h2>

      <!-- Email -->
      <ion-input
        v-model="email"
        label="Email"
        label-placement="floating"
        type="email"
      ></ion-input>

      <!-- Password -->
      <ion-input
        v-model="password"
        label="Password"
        label-placement="floating"
        type="password"
      ></ion-input>

      <ion-button expand="block" @click="loginEmail">
        Login Email/Password
      </ion-button>

      <ion-button expand="block" color="danger" @click="loginGoogle">
        Login Google
      </ion-button>

      <!-- Phone -->
      <ion-input
        v-model="phoneNumber"
        label="Phone (+66...)"
        label-placement="floating"
        type="tel"
      ></ion-input>

      <ion-button expand="block" color="success" @click="sendOTP">
        Login Phone (Send OTP)
      </ion-button>

      <ion-input
        v-if="verificationId"
        v-model="otp"
        label="OTP Code"
        label-placement="floating"
        type="text"
      ></ion-input>

      <ion-button
        v-if="verificationId"
        expand="block"
        color="primary"
        @click="confirmOTP"
      >
        Confirm OTP
      </ion-button>

      <!-- สำคัญสำหรับ Web Phone Auth -->
      <div id="recaptcha-container"></div>

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { authService } from '@/auth/auth-service'
import { getRecaptchaVerifier } from '@/auth/auth-web'
import {
  IonPage,
  IonContent,
  IonButton,
  IonInput
} from '@ionic/vue'

const router = useRouter()

const email = ref('')
const password = ref('')
const phoneNumber = ref('')
const otp = ref('')
const verificationId = ref<string | null>(null)

async function loginEmail() {
  try {
    await authService.loginWithEmailPassword({
      email: email.value,
      password: password.value
    })

    router.push('/tabs/tab1')
  } catch (err) {
    console.error(err)
    alert('Email login failed')
  }
}

async function loginGoogle() {
  try {
    await authService.loginWithGoogle()
    router.push('/tabs/tab1')
  } catch (err) {
    console.error(err)
    alert('Google login failed')
  }
}

async function sendOTP() {
  try {
    let phone = phoneNumber.value.trim()

    if (phone.startsWith("0")) {
      phone = "+66" + phone.substring(1)
    }

    if (!phone.startsWith("+")) {
      alert("Phone must be in +66 format")
      return
    }

    // 🔥 สร้าง recaptcha ตอนกดจริง
    getRecaptchaVerifier("recaptcha-container")

    const result = await authService.startPhoneLogin({
      phoneNumberE164: phone
    })

    verificationId.value = result.verificationId

  } catch (err) {
    console.error(err)
    alert('Send OTP failed')
  }
}

async function confirmOTP() {
  if (!verificationId.value) return

  try {
    await authService.confirmPhoneCode({
      verificationId: verificationId.value,
      verificationCode: otp.value
    })

    router.push('/tabs/tab1')
  } catch (err) {
    console.error(err)
    alert('OTP incorrect')
  }
}
</script>