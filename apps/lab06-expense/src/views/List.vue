<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>รายการรายรับ–รายจ่าย</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">

      <!-- สรุปยอด -->
      <ion-card>
        <ion-card-content>
          <h2>สรุปยอด</h2>
          <p>💰 รายรับรวม: {{ totalIncome }} บาท</p>
          <p>💸 รายจ่ายรวม: {{ totalExpense }} บาท</p>
        </ion-card-content>
      </ion-card>

      <!-- รายการ -->
      <ion-list>
        <ion-item
          v-for="item in expenses"
          :key="item.id"
          @click="goToEdit(item.id)"
        >
          <ion-label>
            <h2>{{ item.title || 'ไม่มีชื่อรายการ' }}</h2>
            <p>
              {{ item.category || '-' }} |
              {{ item.amount }} บาท |
              {{ item.type === 'income' ? 'รายรับ' : 'รายจ่าย' }}
            </p>
          </ion-label>
        </ion-item>
      </ion-list>
        <ion-button expand="block" fill="outline" router-link="/tabs/tab1">
        ⬅ กลับหน้าหลัก
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
  IonList,
  IonItem,
  IonLabel,
  IonCard,
  IonCardContent
} from "@ionic/vue";

import { ref, onMounted } from "vue";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "@/firebase";
import { useRouter } from "vue-router";

/* ---------- Types ---------- */
interface Expense {
  id: string;
  title: string;
  amount: number;
  type: string;
  category: string;
  note: string;
}

/* ---------- State ---------- */
const router = useRouter();
const expenses = ref<Expense[]>([]);
const totalIncome = ref<number>(0);
const totalExpense = ref<number>(0);

/* ---------- Realtime ---------- */
onMounted(() => {
  const expensesRef = collection(db, "expenses");

  onSnapshot(expensesRef, (snapshot) => {

    const dataList: Expense[] = [];
    let income = 0;
    let expense = 0;

    snapshot.forEach((docSnap) => {

      const data = docSnap.data() || {};

      // กัน undefined ทุก field
      const amount = Number(data.amount ?? 0);
      const type = data.type ?? "expense";

      const item: Expense = {
        id: docSnap.id,
        title: data.title ?? "",
        amount: amount,
        type: type,
        category: data.category ?? "",
        note: data.note ?? ""
      };

      // คำนวณยอดรวม
      if (type === "income") {
        income += amount;
      } else if (type === "expense") {
        expense += amount;
      }

      dataList.push(item);
    });

    expenses.value = dataList;
    totalIncome.value = income;
    totalExpense.value = expense;

  }, (error) => {
    console.error("Realtime error:", error);
  });
});

/* ---------- Navigate ---------- */
const goToEdit = (id: string) => {
  router.push(`/tabs/edit/${id}`);
};
</script>