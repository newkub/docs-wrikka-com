
<script setup lang="ts">
import { ref } from 'vue';

const packages = ref([
  { name: '@wrikka/cli', description: 'Command line interface for Wrikka projects.' },
  { name: '@wrikka/core', description: 'Core functionalities and utilities.' },
  { name: '@wrikka/ui', description: 'A rich set of UI components.' },
  { name: '@wrikka/server', description: 'Server-side utilities and integrations.' },
]);
</script>

<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-6">Wrikka Packages</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div v-for="pkg in packages" :key="pkg.name" class="border rounded-lg p-6 hover:shadow-lg transition-shadow">
        <h2 class="text-xl font-semibold mb-2">{{ pkg.name }}</h2>
        <p class="text-gray-600 dark:text-gray-400">{{ pkg.description }}</p>
      </div>
    </div>
  </div>
</template>
