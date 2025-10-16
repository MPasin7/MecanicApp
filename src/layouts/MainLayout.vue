<template>
  <q-layout class="bg-grey-1">
    <q-header elevated class="text-white" style="background: #348E91" height-hint="61.59">
      <q-toolbar class="q-py-sm q-px-md">
        <router-link to="/" class="flex items-center q-mr-md">
          <img src="/icons/Iconp.png" style="height: 40px" />
        </router-link>

        <q-select
          ref="search" dark dense standout use-input hide-selected
          class="GL__toolbar-select"
          color="black" :stack-label="false" label="Pesquise seu serviço..."
          v-model="text" :options="filteredOptions" @filter="filter"
          style="width: 300px"
        >

          <template v-slot:no-option>
            <q-item>
              <q-item-section>
                <div class="text-center">
                  <q-spinner-pie
                    color="grey-5"
                    size="24px"
                  />
                </div>
              </q-item-section>
            </q-item>
          </template>

          <template v-slot:option="scope">
            <q-item
              v-bind="scope.itemProps"
              class="GL__select-GL__menu-link"
            >
              <q-item-section side>
                <q-icon name="collections_bookmark" />
              </q-item-section>
              <q-item-section>
                <q-item-label>{{ scope.opt.label }}</q-item-label>
              </q-item-section>
              <q-item-section side :class="{ 'default-type': !scope.opt.type }">
                <q-btn outline dense no-caps text-color="blue-grey-5" size="12px" class="bg-grey-1 q-px-sm">
                  {{ scope.opt.type || 'Jump to' }}
                  <q-icon name="subdirectory_arrow_left" size="14px" />
                </q-btn>
              </q-item-section>
            </q-item>
          </template>
        </q-select>

        <div
          v-if="$q.screen.gt.sm"
          class="GL__toolbar-link q-ml-xs q-gutter-md text-subtitle2 text-weight-bolder row items-center no-wrap">
          <router-link to="/servicos-page" class="text-white">Serviços</router-link>
          <router-link to="/agendamento-page" class="text-white">Agendamento</router-link>
          <router-link to="/market-page" class="text-white">Marketplace</router-link>
          <router-link to="/funciona-page" class="text-white">Como Funciona?</router-link>
        </div>

        <q-space />

        <div class="q-pl-sm q-gutter-sm row items-center no-wrap">
          <q-btn v-if="$q.screen.gt.xs" dense flat round size="13px" icon="notifications" />

          <q-btn dense flat no-wrap>
            <q-avatar rounded size="30px">
              <img src="https://cdn.quasar.dev/img/avatar4.jpg">
            </q-avatar>
            <q-icon name="arrow_drop_down" size="16px" />

            <q-menu auto-close>
              <q-list dense>
                <q-item class="GL__menu-link-signed-in">
                  <q-item-section>
                    <div>Logado como <strong>Maria</strong></div>
                  </q-item-section>
                </q-item>
                <q-separator />
                <q-separator />
                <q-item clickable class="GL__menu-link">
                  <q-item-section>Seu Perfil</q-item-section>
                </q-item>
                <q-item clickable class="GL__menu-link">
                  <q-item-section>Seus Serviços Agendados</q-item-section>
                </q-item>
                <q-item clickable class="GL__menu-link">
                  <q-item-section>Your projects</q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable class="GL__menu-link">
                  <q-item-section>Ajuda</q-item-section>
                </q-item>
                <q-item clickable class="GL__menu-link">
                  <q-item-section>Configurações</q-item-section>
                </q-item>
                <q-item clickable class="GL__menu-link">
                  <q-item-section>Sair</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-teal-9 text-white q-py-lg q-px-md custom-footer"> <div class="row q-col-gutter-lg"> <div class="col-12 col-md-4">
      <router-link to="/" class="flex items-center q-mb-md footer-logo-link">
        <img src="/icons/Iconp.png" style="height: 40px" class="q-mr-sm" />
        <span class="text-h6 text-white text-bold">MecanicApp</span>
      </router-link>
      <p class="text-body2 text-grey-3">
        Somos apaixonados por carros e dedicados a oferecer um serviço de confiança e qualidade. Conectamos você aos melhores mecânicos da sua região de forma simples, rápida e transparente.
      </p>
    </div>

    <div class="col-12 col-md-4">
      <div class="text-h6 text-white q-mb-md">Links Úteis</div>
      <ul class="footer-links-list">
        <li><a href="javascript:void(0)" class="footer-link">Agendar Serviço</a></li>
        <li><a href="javascript:void(0)" class="footer-link">Nossos Serviços</a></li>
        <li><a href="javascript:void(0)" class="footer-link">Como Funciona</a></li>
        <li><a href="javascript:void(0)" class="footer-link">Política de Privacidade</a></li>
      </ul>
    </div>

    <div class="col-12 col-md-4">
      <div class="text-h6 text-white q-mb-md">Contato</div>
      <div class="flex items-start q-mb-sm">
        <q-icon name="location_on" class="q-mr-sm q-mt-xs" size="20px" />
        <span class="text-body2 text-grey-3">Rua Fictícia, 123 - Centro<br>Porto Alegre, RS - CEP 90000-000</span>
      </div>
      <div class="flex items-center q-mb-sm">
        <q-icon name="phone" class="q-mr-sm" size="20px" />
        <span class="text-body2 text-grey-3">(51) 99999-8888</span>
      </div>
      <div class="flex items-center">
        <q-icon name="email" class="q-mr-sm" size="20px" />
        <span class="text-body2 text-grey-3">contato@mecanicapp.com</span>
      </div>
    </div>
  </div>

  <q-separator dark class="q-my-md" /> <div class="row items-center justify-center justify-md-between">
    <div class="text-caption text-grey-4">
      &copy; {{ new Date().getFullYear() }} MecanicApp.
    </div>
  </div>
</q-footer>
  </q-layout>
</template>

<script>
import { ref } from 'vue'
import { fabGithub } from '@quasar/extras/fontawesome-v6'

const stringOptions = [
  'Troca de óleo',
  'Revisão completa',
  'Alinhamento e balanceamento',
  'Freios',
  'Bateria'
]

export default {
  name: 'MainLayout', 

  setup () {
    const text = ref('')
    const options = ref(null)
    const filteredOptions = ref([])
    const search = ref(null)

    function filter (val, update) {
      if (options.value === null) {
        setTimeout(() => {
          options.value = stringOptions
          search.value.filter('')
        }, 1000)
        update()
        return
      }

      if (val === '') {
        update(() => {
          filteredOptions.value = options.value.map(op => ({ label: op }))
        })
        return
      }

      update(() => {
        filteredOptions.value = [
          {
            label: val,
            type: 'Pesquisar por'
          },
          ...options.value
            .filter(op => op.toLowerCase().includes(val.toLowerCase()))
            .map(op => ({ label: op }))
        ]
      })
    }

    return {
      fabGithub,
      text,
      options,
      filteredOptions,
      search,
      filter
    }
  }
}
</script>

<style lang="sass">
// Estilos do seu Header (mantidos)
.GL
  &__select-GL__menu-link
    .default-type
      visibility: hidden

    &:hover
      background: #0366d6
      color: white
      .q-item__section--side
        color: white
      .default-type
        visibility: visible

  &__toolbar-link
    a
      color: white
      text-decoration: none
      &:hover
        opacity: 0.7

  &__menu-link:hover
    background: #0366d6
    color: white

  &__menu-link-signed-in,
  &__menu-link-status
    &:hover
      & > div
        background: white !important

  &__menu-link-status
    color: $blue-grey-6
    &:hover
      color: $light-blue-9

  &__toolbar-select.q-field--focused
    width: 450px !important
    .q-field__append
      display: none

// Estilos do Footer (atualizados)
.custom-footer
  background-color: #26A69A !important // Cor teal-7 ou um pouco mais escuro se preferir

.custom-footer .text-h6
  color: white !important // Garante que os títulos sejam brancos

.custom-footer .text-body2
  color: #CFD8DC !important // Garante que o texto seja cinza claro

.footer-logo-link
  color: white !important // Garante que o link da logo seja branco

.footer-links-list
  list-style-type: none
  padding-left: 0
  margin: 0

  li
    margin-bottom: 8px

.footer-link
  color: #CFD8DC // Text grey 200
  text-decoration: none
  transition: color 0.3s ease

  &:hover
    color: var(--q-color-primary) // Usa a cor primária do seu tema no hover
    text-decoration: underline

.footer-social-icon
  color: #CFD8DC // Text grey 200
  &:hover
    color: var(--q-color-primary) // Mudar para a cor primária no hover
    background: transparent !important // Garantir que o fundo não mude
</style>