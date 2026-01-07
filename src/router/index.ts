import DrumcorpbsnView from '@/views/drumcorpbsn-view.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: '/', name: 'drumcorpbsn', component: DrumcorpbsnView }],
})

export default router
