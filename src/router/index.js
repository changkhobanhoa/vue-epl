import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import MealsByIngredient from '../views/MealsByIngredient.vue'
import MealsByLetter from '../views/MealsByLetter.vue'
import MealsByName from '../views/MealsByName.vue'
import MealDetails from '../views/MealDetails.vue'
import Ingredients from '../views/Ingredients.vue'
import DefaultLayout from '../components/DefaultLayout.vue';
import GuestLayout from '../components/GuestLayout.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: "/",
          name: "home",
          component: Home,
        },
        {
          path: "/by-name/:name?",
          name: "byName",
          component: MealsByName,
        },
        {
          path: "/by-letter/:letter?",
          name: "byLetter",
          component: MealsByLetter,
        },
        {
          path: "/ingredients",
          name: "ingredients",
          component: Ingredients,
        },
        {
          path: "/by-ingredient/:ingredient",
          name: "byIngredient",
          component: MealsByIngredient,
        },
        {
          path: '/meal/:id',
          name: 'mealDetails',
          component: MealDetails
        }
      ]
    },
    {
      path: '/guest',
      component: GuestLayout
    }
    
  ]
})

export default router
