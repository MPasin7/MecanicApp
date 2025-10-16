const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/funciona-page', component: () => import('pages/FuncionaPage.vue') },
      { path: '/market-page', component: () => import('pages/MarketPage.vue') },
      { path: '/agendamento-page', component: () => import('pages/AgendamentoPage.vue') },
      { path: '/servicos-page', component: () => import('pages/ServicosPage.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
