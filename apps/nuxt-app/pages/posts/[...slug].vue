<script setup lang="ts">
import { defineProps, computed } from 'vue';
import { useRoute } from 'vue-router';
const post = computed(() => {
  const route = useRoute();
  return Array.isArray(route.params.slug)
    ? route.params.slug.join('')
    : route.params.slug;
});
const query = groq`*[ _type == "post" && slug.current == $slug][0]`;
const { data, refresh } = useSanityQuery(query, { topic: 'News' });
</script>
<template>
  <div>{{ post }}</div>
  <div>{{ data }}</div>
</template>
