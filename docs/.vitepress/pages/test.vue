
<script setup lang="ts">
import { ref, computed } from 'vue'

const packages = [
  { name: '@wrikka/cli' },
  { name: '@wrikka/core' },
  { name: '@wrikka/ui' },
  { name: '@wrikka/server' },
]

const tests: Record<string, { suites: { name: string; tests: { name: string; status: string }[] }[] }> = {
  '@wrikka/cli': {
    suites: [
      { name: 'Commands',
        tests: [
          { name: 'create project', status: 'pass' },
          { name: 'run dev server', status: 'pass' },
          { name: 'build project', status: 'fail' },
        ]
      },
    ],
  },
  '@wrikka/core': {
    suites: [
      { name: 'Reactivity',
        tests: [
          { name: 'ref()', status: 'pass' },
          { name: 'computed()', status: 'pass' },
          { name: 'watch()', status: 'pass' },
        ]
      },
    ],
  },
  '@wrikka/ui': {
    suites: [
      { name: 'Components',
        tests: [
          { name: 'Button', status: 'pass' },
          { name: 'Input', status: 'pass' },
          { name: 'Modal', status: 'pass' },
        ]
      },
    ],
  },
  '@wrikka/server': {
    suites: [
      { name: 'Routing',
        tests: [
          { name: 'GET /', status: 'pass' },
          { name: 'POST /users', status: 'pass' },
        ]
      },
    ],
  },
}

const selectedPackage = ref(packages[0].name)

const selectedTest = computed(() => tests[selectedPackage.value])
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
      <div v-if="selectedTest" class="space-y-6">
        <h2 class="text-2xl font-bold">{{ selectedPackage }} Test Results</h2>
        <div v-for="suite in selectedTest.suites" :key="suite.name" class="border rounded-lg p-6">
          <h3 class="text-xl font-semibold mb-4">{{ suite.name }}</h3>
          <ul class="space-y-2">
            <li v-for="test in suite.tests" :key="test.name" class="flex items-center justify-between">
              <span>{{ test.name }}</span>
              <span
                class="px-2 py-1 text-xs font-semibold rounded-full"
                :class="{
                  'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200': test.status === 'pass',
                  'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200': test.status === 'fail',
                }"
              >
                {{ test.status.toUpperCase() }}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </main>
  </div>
</template>
