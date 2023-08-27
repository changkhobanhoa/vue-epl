<script setup>
import { computed, onMounted, ref } from 'vue'
import store from '../store'
import axiosClient from '../axiosClient'
const meals = computed(() => store.state.meals)
const letters = 'ABCDEFGHIKLMNOPQRTSWYV'.split("")
const ingredients = ref([])
onMounted(async () => {
  const response = await axiosClient.get('/list.php?i=list')
  console.log(response);
  ingredients.value = response.data
})

</script>

<template>
  <div class="flex flex-col p-8 ">


    <input type="text" class="rounded w-full border-2 border-gray-200" placeholder="Search for Meals" />

    <div class="flex gap-2 justify-center mt-2">
      <router-link :to="{ name: 'byLetter', params: { letter } }" v-for="(letter, index) of letters" :key="index">
        {{ letter }}
      </router-link>
    </div>
    <pre>{{ ingredients }}</pre>
  </div>
</template>
