
<script setup lang="ts">
import { ref } from 'vue';

// This is a placeholder. In a real scenario, you would use a build script 
// or a dynamic import mechanism to get this list.
const components = ref([
  'allapis.vue',
  'allframework.vue',
  'allproducts.vue',
  'allprojects.vue',
  'bench.vue',
  'blog.vue',
  'changelog.vue',
  'components.vue',
  'contributing.vue',
  'feedback.vue',
  'marketplace.vue',
  'packages.vue',
  'release.vue',
  'servicesplatform.vue',
  'showcase.vue',
  'test.vue',
]);
</script>

<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-6">Available Components</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div v-for="component in components" :key="component" class="border rounded-lg p-4 flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
        <div class="i-mdi-vuejs text-2xl text-green-500"></div>
        <span class="font-mono text-sm">{{ component }}</span>
      </div>
    </div>
  </div>
</template>
