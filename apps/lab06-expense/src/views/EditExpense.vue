<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>แก้ไขรายการ</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">

      <ion-input label="ชื่อรายการ" v-model="title"></ion-input>
      <ion-input label="จำนวนเงิน" type="number" v-model="amount"></ion-input>

      <ion-select label="ประเภท" v-model="type">
        <ion-select-option value="income">รายรับ</ion-select-option>
        <ion-select-option value="expense">รายจ่าย</ion-select-option>
      </ion-select>

      <ion-input label="หมวดหมู่" v-model="category"></ion-input>
      <ion-textarea label="หมายเหตุ" v-model="note"></ion-textarea>

      <ion-button expand="block" @click="updateExpense">
        อัปเดตข้อมูล
      </ion-button>

      <ion-button expand="block" color="danger" @click="confirmDelete">
        ลบข้อมูล
      </ion-button>

    </ion-content>
        <ion-button expand="block" fill="outline" router-link="/tabs/list">
        ⬅ กลับหน้ารายการ
        </ion-button>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage, IonHeader, IonToolbar, IonTitle,
  IonContent, IonInput, IonSelect,
  IonSelectOption, IonTextarea, IonButton
} from "@ionic/vue";

import { ref, onMounted } from "vue";
import { doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "@/firebase";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const id = route.params.id as string;

const title = ref("");
const amount = ref(0);
const type = ref("expense");
const category = ref("");
const note = ref("");

onMounted(async () => {
  const docRef = doc(db, "expenses", id);
  const snap = await getDoc(docRef);

  if (snap.exists()) {
    const data = snap.data();
    title.value = data.title;
    amount.value = data.amount;
    type.value = data.type;
    category.value = data.category;
    note.value = data.note;
  }
});

const updateExpense = async () => {
  await updateDoc(doc(db, "expenses", id), {
    title: title.value,
    amount: Number(amount.value),
    type: type.value,
    category: category.value,
    note: note.value
  });

  alert("อัปเดตสำเร็จ");
  router.push("/tabs/list");
};

const confirmDelete = async () => {
  const confirm = window.confirm("ต้องการลบข้อมูลหรือไม่?");
  if (!confirm) return;

  await deleteDoc(doc(db, "expenses", id));

  alert("ลบข้อมูลสำเร็จ");
  router.push("/tabs/list");
};
</script>