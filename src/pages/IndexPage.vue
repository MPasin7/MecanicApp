<template>
  <q-page class="q-pa-none">

    <div class="hero-section flex flex-center">
      <div class="hero-overlay"></div>
      <div class="hero-content text-center text-white">
        <h1 class="text-h2 text-bold q-mb-md">
          Cuidamos do seu carro com confiança e qualidade
        </h1>
        <p class="text-subtitle1 q-mb-lg">
          Agende sua manutenção ou reparo em poucos cliques e tenha um mecânico de confiança sempre à disposição.
        </p>

        <div class="row justify-center q-mb-sm">
          <div class="col-12 col-md-8 col-lg-6">
            <q-input
              outlined
              rounded
              dense
              v-model="busca"
              placeholder="Qual serviço seu carro precisa? (ex: Troca de óleo)"
              class="full-width bg-white text-dark search-input"
              input-class="q-pl-md"
            >
              <template v-slot:append>
                <q-btn flat round dense icon="search" color="primary" class="q-mr-sm" />
              </template>
            </q-input>
          </div>
        </div>

        <div class="row q-gutter-sm justify-center q-mb-xl">
          <q-chip
            v-for="item in populares"
            :key="item"
            clickable
            color="secondary"
            text-color="white"
            class="text-capitalize"
            @click="busca = item"
          >
            {{ item }}
          </q-chip>
        </div>

        <q-btn
          color="primary"
          text-color="white"
          unelevated
          rounded
          size="lg"
          label="Agendar serviço agora"
          padding="12px 32px"
          class="q-mt-md text-bold"
        />
      </div>
    </div>

    <div class="q-pa-xl bg-grey-2">
      <div class="text-center">
        <h2 class="text-h4 text-bold text-dark q-mb-sm">Nossos Serviços</h2>
        <p class="text-subtitle1 text-grey-8 q-mb-xl">Navegue pelas principais categorias de serviços.</p>
      </div>
      <div class="row q-col-gutter-lg justify-center">
        <div
          v-for="cat in categorias"
          :key="cat.label"
          class="col-6 col-sm-4 col-md-2"
        >
          <q-card flat class="q-pa-md flex flex-center column cursor-pointer category-card text-center">
            <q-icon :name="cat.icon" size="40px" color="primary" />
            <div class="text-subtitle2 q-mt-md text-bold text-dark">{{ cat.label }}</div>
          </q-card>
        </div>
      </div>
    </div>

    <div class="q-pa-xl">
       <div class="text-center">
        <h2 class="text-h4 text-bold text-dark q-mb-sm">Como Funciona?</h2>
        <p class="text-subtitle1 text-grey-8 q-mb-xl">Simples, rápido e transparente.</p>
      </div>
      <div class="row q-col-gutter-xl justify-center items-start">
        <div class="col-12 col-md-4 text-center">
          <q-icon name="edit_calendar" color="accent" size="50px" class="q-mb-md" />
          <h3 class="text-h6 text-bold q-mb-sm">1. Agende o Serviço</h3>
          <p class="text-grey-8">Escolha o serviço que seu carro precisa e selecione o melhor dia e horário para você.</p>
        </div>
        <div class="col-12 col-md-4 text-center">
          <q-icon name="person_search" color="accent" size="50px" class="q-mb-md" />
          <h3 class="text-h6 text-bold q-mb-sm">2. Encontre o Profissional</h3>
          <p class="text-grey-8">Nós conectamos você ao melhor mecânico parceiro perto de você, com base em avaliações.</p>
        </div>
        <div class="col-12 col-md-4 text-center">
          <q-icon name="thumb_up" color="accent" size="50px" class="q-mb-md" />
          <h3 class="text-h6 text-bold q-mb-sm">3. Aprove o Orçamento</h3>
          <p class="text-grey-8">Receba um orçamento justo e detalhado. Você aprova tudo antes de qualquer serviço ser feito.</p>
        </div>
      </div>
    </div>


    <div class="q-pa-xl bg-dark text-white">
       <div class="text-center">
        <h2 class="text-h4 text-bold q-mb-sm">Profissionais de Confiança</h2>
        <p class="text-subtitle1 text-grey-4 q-mb-xl">Conheça um de nossos mecânicos parceiros mais bem avaliados.</p>
      </div>
      <div class="flex flex-center">
        <q-card class="q-pa-lg text-center mechanic-card bg-secondary text-white" flat>
          <q-avatar size="120px" class="q-mb-md shadow-4">
            <img src="https://cdn-icons-png.flaticon.com/512/1995/1995574.png" />
          </q-avatar>
          <div class="text-h5 q-mt-sm">João Silva</div>
          <div class="text-caption text-grey-5 q-mb-sm">
            Mecânico parceiro desde 2024
          </div>
          <q-rating v-model="rating" max="5" color="amber" readonly size="24px" />
          <div class="text-bold q-mt-xs">{{ rating.toFixed(1) }} de 5 estrelas</div>
        </q-card>
      </div>
    </div>

  </q-page>
</template>

<script setup>
import { ref } from "vue";

const busca = ref("");
const rating = ref(4.9);

const categorias = [
  { label: "Revisão Completa", icon: "build" },
  { label: "Troca de Óleo", icon: "oil_barrel" },
  { label: "Sistema de Freios", icon: "car_repair" },
  { label: "Suspensão", icon: "directions_car" },
  { label: "Parte Elétrica", icon: "bolt" },
  { label: "Pneus e Rodas", icon: "circle" }
];

const populares = ["Troca de óleo", "Revisão", "Bateria", "Freios", "Pneus"];
</script>

<style scoped>
/* HERO */
.hero-section {
  position: relative;
  height: 90vh; /* Aumenta a altura para maior impacto */
  min-height: 600px;
  background-image: url("https://images.unsplash.com/photo-1503376780353-7e6692767b70");
  background-size: cover;
  background-position: center;
  color: white;
}
.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(10, 12, 13, 0.85); /* Mais escuro para melhor contraste */
  z-index: 1;
}
.hero-content {
  position: relative;
  z-index: 2;
  max-width: 900px; /* Limita a largura do texto em telas grandes */
  padding: 0 24px;
}

/* <<< CORREÇÃO AQUI >>> */
.search-input :deep(.q-field__control) {
  border-radius: 50px;
}


/* Categorias */
.category-card {
  border-radius: 16px;
  border: 1px solid #e0e0e0;
  background: white;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%; /* Garante que todos os cards tenham a mesma altura */
}
.category-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

/* Profissional */
.mechanic-card {
  border-radius: 16px;
  max-width: 350px;
  width: 100%;
  border: 1px solid var(--q-color-primary);
}

/* Títulos das Seções */
.text-h4 {
  font-weight: 700;
}
</style>
