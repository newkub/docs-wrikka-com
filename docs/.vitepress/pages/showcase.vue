<script setup lang="ts">
const items = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured online store built with Wrikka UI and Server.',
    image: 'https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600',
    link: '#',
  },
  {
    title: 'Data Dashboard',
    description: 'Analytics dashboard for visualizing complex data sets.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600',
    link: '#',
  },
  {
    title: 'SaaS Application',
    description: 'A multi-tenant SaaS application with subscription billing.',
    image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600',
    link: '#',
  },
  {
    title: 'Developer Portfolio',
    description: 'A personal portfolio site for a software developer.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600',
    link: '#',
  },
]
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    <div v-for="item in items" :key="item.title" class="border rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
      <img :src="item.image" alt="" class="w-full h-40 object-cover">
      <div class="p-4">
        <h2 class="text-lg font-semibold mb-2">{{ item.title }}</h2>
        <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">{{ item.description }}</p>
        <a :href="item.link" target="_blank" class="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline">View Project &rarr;</a>
      </div>
    </div>
  </div>
</template>
