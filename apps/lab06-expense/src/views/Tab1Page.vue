<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>หน้าหลัก</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">

      <ion-button expand="block" router-link="/tabs/add">
        ➕ เพิ่มรายการ
      </ion-button>

      <ion-button expand="block" color="success" router-link="/tabs/list">
        📋 ดูรายการรายรับ–รายจ่าย
      </ion-button>

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton
} from '@ionic/vue';
</script>