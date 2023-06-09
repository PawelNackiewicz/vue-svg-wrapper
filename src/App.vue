<script setup lang="ts">
import { defaultIcons } from './components/Icons';
import Icon from './components/Icon.vue';
</script>

<template>
  <p>Default</p>
  <div v-for="(_, key) in defaultIcons" :key="key">
    <Icon :name="key as keyof typeof defaultIcons" />
  </div>
  <p>With custom color</p>
  <div v-for="(_, key) in defaultIcons" :key="key">
    <Icon :name="key as keyof typeof defaultIcons" :color="'#ff0021'" />
  </div>
  <p>With custom size</p>
  <div v-for="(_, key) in defaultIcons" :key="key">
    <Icon :name="key as keyof typeof defaultIcons" :size="48" />
  </div>
</template>
