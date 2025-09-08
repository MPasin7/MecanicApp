<template>
  <q-page class="q-pa-none">

    <!-- HERO COM FUNDO -->
    <div class="hero-section">
      <div class="hero-overlay">
        <div class="q-pa-xl text-white">
          <h2 class="text-h3 text-bold q-mb-sm">
            Cuidamos do seu carro com confiança e qualidade
          </h2>
          <p class="text-subtitle1 q-mb-lg">
            Agende sua manutenção ou reparo em poucos cliques e tenha um mecânico de confiança sempre à disposição.
          </p>

          <!-- BUSCA -->
          <div class="row items-center q-mb-md">
            <div class="col-12 col-md-8">
              <q-input
                outlined
                rounded
                dense
                v-model="busca"
                placeholder="Qual serviço seu carro precisa?"
                class="full-width bg-white text-dark"
              >
                <template v-slot:append>
                  <q-btn flat round dense icon="search" color="primary" />
                </template>
              </q-input>
            </div>
          </div>

          <!-- POPULARES -->
          <div class="row q-gutter-sm q-mb-md">
            <q-chip
              v-for="item in populares"
              :key="item"
              clickable
              color="secondary"
              text-color="black"
              class="text-capitalize"
              @click="busca = item"
            >
              {{ item }}
            </q-chip>
          </div>

          <!-- CTA -->
          <q-btn
            color="secondary"
            text-color="black"
            unelevated
            rounded
            size="lg"
            label="Agendar serviço agora"
            class="q-mt-sm"
          />
        </div>
      </div>
    </div>

    <!-- CATEGORIAS -->
    <div class="q-pa-lg">
      <div
        class="row q-col-gutter-md q-mb-xl justify-center categories-desktop"
      >
        <div
          v-for="cat in categorias"
          :key="cat.label"
          class="col-auto text-center"
        >
          <q-card
            flat
            bordered
            class="q-pa-md flex flex-center column cursor-pointer category-card"
          >
            <q-icon :name="cat.icon" size="36px" color="primary" />
            <div class="text-caption q-mt-sm text-bold">{{ cat.label }}</div>
          </q-card>
        </div>
      </div>

      <!-- MOBILE: SCROLL HORIZONTAL -->
      <div class="row no-wrap scroll categories-mobile q-pa-sm">
        <div
          v-for="cat in categorias"
          :key="cat.label"
          class="q-mr-md text-center"
          style="min-width: 100px;"
        >
          <q-card
            flat
            bordered
            class="q-pa-md flex flex-center column cursor-pointer category-card"
          >
            <q-icon :name="cat.icon" size="32px" color="primary" />
            <div class="text-caption q-mt-sm">{{ cat.label }}</div>
          </q-card>
        </div>
      </div>
    </div>

    <!-- PROFISSIONAL EM DESTAQUE -->
    <div class="q-pa-md flex flex-center">
      <q-card class="q-pa-md text-center mechanic-card">
        <q-avatar size="100px" class="q-mb-md">
          <img src="https://cdn-icons-png.flaticon.com/512/1995/1995574.png" />
        </q-avatar>
        <div class="text-h6">João Silva</div>
        <div class="text-caption text-grey q-mb-sm">
          Mecânico parceiro desde 2018
        </div>
        <q-rating v-model="rating" max="5" color="amber" readonly size="20px" />
        <div class="text-bold q-mt-xs">{{ rating.toFixed(1) }}</div>
      </q-card>
    </div>

  </q-page>
</template>

<script setup>
import { ref } from "vue";

const busca = ref("");
const rating = ref(4.9);

const categorias = [
  { label: "Revisão", icon: "build" },
  { label: "Troca de Óleo", icon: "oil_barrel" },
  { label: "Freios", icon: "car_repair" },
  { label: "Suspensão", icon: "directions_car" },
  { label: "Elétrica", icon: "bolt" },
  { label: "Pneus", icon: "circle" }
];

const populares = ["Troca de óleo", "Revisão", "Bateria", "Freios", "Pneus"];
</script>

<style scoped>
/* HERO */
.hero-section {
  background-image: url("https://images.unsplash.com/photo-1503376780353-7e6692767b70");
  background-size: cover;
  background-position: center;
  position: relative;
  height: 400px;
  display: flex;
  align-items: center;
}
.hero-overlay {
  background: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}

/* Categorias */
.category-card {
  border-radius: 16px;
  transition: 0.3s;
}
.category-card:hover {
  background: #f5f5f5;
  transform: translateY(-4px);
}

/* Profissional */
.mechanic-card {
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 300px;
}

/* Responsividade */
.categories-mobile {
  display: none;
}
@media (max-width: 768px) {
  .categories-desktop {
    display: none;
  }
  .categories-mobile {
    display: flex;
  }
}
</style>

