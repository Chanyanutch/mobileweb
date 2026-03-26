<template>
  <ion-page>
    <ion-header>
      <ion-toolbar class="header">
        <ion-title>✨ Gemini Vision</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding content">
      <input ref="fileEl" type="file" accept="image/*" hidden @change="onFileChange" />

      <ion-button expand="block" class="btn" @click="fileEl?.click()">
        📁 เลือกรูปภาพ
      </ion-button>

      <ion-button expand="block" class="btn" @click="onTakePhoto">
        📸 ถ่ายภาพ
      </ion-button>

      <ion-card v-if="previewUrl" class="preview-card">
        <ion-img :src="previewUrl" />
      </ion-card>

      <ion-button expand="block" class="analyze-btn" :disabled="!img || loading" @click="onAnalyze">
        🔍 วิเคราะห์ภาพ
      </ion-button>

      <ion-spinner v-if="loading" />

      <ion-card v-if="result" class="result-card">
        <ion-card-header>
          <ion-card-title>📝 คำอธิบาย</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          {{ result.caption }}
        </ion-card-content>

        <ion-card-header>
          <ion-card-title>🏷️ Tags</ion-card-title>
        </ion-card-header>
        <ion-chip v-for="tag in result.tags" :key="tag" class="tag-chip">
          {{ tag }}
        </ion-chip>

        <div v-if="result.objects">
          <ion-card-header>
            <ion-card-title>📦 Objects</ion-card-title>
          </ion-card-header>
          <ion-item v-for="obj in result.objects" :key="obj.name">
            {{ obj.name }} ({{ obj.confidence?.toFixed(2) || '-' }})
          </ion-item>
        </div>

        <div v-if="result.safety">
          <ion-card-header>
            <ion-card-title>⚠️ Safety</ion-card-title>
          </ion-card-header>
          <ion-item>
            {{ result.safety.isSensitive ? 'Sensitive' : 'Safe' }}
          </ion-item>
        </div>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  IonButton, IonContent, IonHeader, IonImg, IonPage, IonSpinner,
  IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader,
  IonCardTitle, IonChip, IonItem
} from "@ionic/vue";
import { PhotoService } from "../core/photo.service";
import { GeminiVisionService } from "../core/gemini.service";
import type { Base64Image, ImageAnalysisResult } from "../core/ai.interface";

const fileEl = ref<HTMLInputElement | null>(null);
const img = ref<Base64Image | null>(null);
const previewUrl = ref("");
const result = ref<ImageAnalysisResult | null>(null);
const loading = ref(false);

async function onFileChange(e: Event) {
  const file = (e.target as HTMLInputElement).files?.[0];
  if (!file) return;
  img.value = await PhotoService.fromFile(file);
  previewUrl.value = URL.createObjectURL(file);
  result.value = null;
}

async function onTakePhoto() {
  loading.value = true;
  try {
    const b64 = await PhotoService.fromCamera();
    img.value = b64;
    previewUrl.value = `data:${b64.mimeType};base64,${b64.base64}`;
    result.value = null;
  } finally {
    loading.value = false;
  }
}

async function onAnalyze() {
  if (!img.value) return;
  loading.value = true;
  try {
    result.value = await GeminiVisionService.analyze(img.value);
  } finally {
    loading.value = false;
  }
}
</script>

<style scoped>
.content {
  --background: linear-gradient(to bottom, #e0f7ff, #ffffff);
}

.header {
  --background: #b3ecff;
  color: #333;
}

.btn {
  margin-top: 10px;
  --background: #b3ecff;
  --border-radius: 20px;
  color: #333;
}

.analyze-btn {
  margin-top: 15px;
  --background: #87dfff;
  --border-radius: 20px;
  font-weight: bold;
}

.preview-card {
  margin-top: 15px;
  border-radius: 20px;
  overflow: hidden;
}

.result-card {
  margin-top: 20px;
  border-radius: 20px;
  background: #f0fbff;
}

.tag-chip {
  margin: 4px;
  --background: #d6f4ff;
}
</style>
