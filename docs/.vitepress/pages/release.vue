<script setup lang="ts">
import { ref, computed } from 'vue'

const packages = [
  { name: '@wrikka/cli' },
  { name: '@wrikka/core' },
  { name: '@wrikka/ui' },
  { name: '@wrikka/server' },
]

const releases: Record<string, { versions: { version: string; date: string }[] }> = {
  '@wrikka/cli': {
    versions: [
      { version: 'v1.2.0', date: '2024-10-26' },
      { version: 'v1.1.5', date: '2024-09-15' },
    ],
  },
  '@wrikka/core': {
    versions: [
      { version: 'v2.0.0', date: '2024-11-01' },
    ],
  },
  '@wrikka/ui': {
    versions: [
      { version: 'v0.8.0', date: '2024-10-20' },
    ],
  },
  '@wrikka/server': {
    versions: [
      { version: 'v0.5.0', date: '2024-10-18' },
    ],
  },
}

const selectedPackage = ref(packages[0].name)

const selectedRelease = computed(() => releases[selectedPackage.value])
</script>

<template>
  <div class="flex gap-8">
    <!-- Sidebar -->
    <aside class="w-1/4 space-y-2">
      <h3 class="text-lg font-semibold">Packages</h3>
      <ul class="space-y-1">
        <li v-for="pkg in packages" :key="pkg.name">
          <a
            href="#"
            class="block px-3 py-2 rounded-md text-sm"
            :class="{
              'bg-gray-200 dark:bg-gray-700 font-semibold': selectedPackage === pkg.name,
              'hover:bg-gray-100 dark:hover:bg-gray-800': selectedPackage !== pkg.name,
            }"
            @click.prevent="selectedPackage = pkg.name"
          >
            {{ pkg.name }}
          </a>
        </li>
      </ul>
    </aside>

    <!-- Main Content -->
    <main class="w-3/4">
      <div v-if="selectedRelease" class="space-y-6">
        <div v-for="release in selectedRelease.versions" :key="release.version" class="border rounded-lg p-6">
          <div class="flex items-center justify-between">
            <h2 class="text-2xl font-bold">{{ release.version }}</h2>
            <span class="text-sm text-gray-500">{{ release.date }}</span>
          </div>
          <div class="mt-4 prose dark:prose-invert max-w-none">
            <p>This release includes several new features and bug fixes. Here are some of the highlights:</p>
            <ul>
              <li>Added a new component for data visualization.</li>
              <li>Improved performance of the core rendering engine.</li>
              <li>Fixed a critical bug in the authentication module.</li>
            </ul>
            <h4>Assets</h4>
            <ul>
              <li>Source code (zip)</li>
              <li>Source code (tar.gz)</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
