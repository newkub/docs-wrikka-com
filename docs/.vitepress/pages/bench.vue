<script setup>
import { ref, computed } from 'vue'

const packages = [
  { name: '@wrikka/core' },
  { name: '@wrikka/server' },
  { name: '@wrikka/utils' },
]

const benchmarks = {
  '@wrikka/core': {
    results: [
      { name: 'Component Rendering', ops: 15230, margin: 1.25 },
      { name: 'State Updates', ops: 89560, margin: 0.89 },
    ],
  },
  '@wrikka/server': {
    results: [
      { name: 'Request Routing', ops: 45230, margin: 2.1 },
      { name: 'Middleware Chain', ops: 32100, margin: 1.5 },
    ],
  },
  '@wrikka/utils': {
    results: [
      { name: 'Array Manipulation', ops: 120560, margin: 0.5 },
      { name: 'String Parsing', ops: 98540, margin: 0.7 },
    ],
  },
}

const selectedPackage = ref(packages[0].name)

const selectedBenchmark = computed(() => benchmarks[selectedPackage.value])
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
      <div v-if="selectedBenchmark" class="space-y-6">
        <h2 class="text-2xl font-bold">{{ selectedPackage }} Benchmarks</h2>
        <div v-for="bench in selectedBenchmark.results" :key="bench.name" class="border rounded-lg p-6">
          <h3 class="text-xl font-semibold">{{ bench.name }}</h3>
          <div class="mt-4 grid grid-cols-2 gap-4">
            <div>
              <p class="text-sm text-gray-500">Operations/sec</p>
              <p class="text-2xl font-bold">{{ bench.ops.toLocaleString() }}</p>
            </div>
            <div>
              <p class="text-sm text-gray-500">Margin of error</p>
              <p class="text-2xl font-bold">±{{ bench.margin }}%</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
