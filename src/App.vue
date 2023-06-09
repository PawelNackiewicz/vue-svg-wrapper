<script setup lang="ts">
import { defaultIcons } from './components/Icons';
import Icon from './components/Icon.vue';
</script>

<template>
  <p>Default</p>
  <div v-for="(_, key) in defaultIcons" :key="key">
    <Icon :name="key" />
  </div>
  <p>With custom color</p>
  <div v-for="(_, key) in defaultIcons" :key="key">
    <Icon :name="key" :color="'#ff0021'" />
  </div>
  <p>With custom size</p>
  <div v-for="(_, key) in defaultIcons" :key="key">
    <Icon :name="key" :size="48" />
  </div>
  <p>Missing Icon</p>
  <Icon :name="missing" />
</template>
