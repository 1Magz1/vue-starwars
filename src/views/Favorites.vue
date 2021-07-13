<template>
  <div class="favorite">
        <h1>This is favorite page</h1>
      <CharacterCard/>
  </div>
</template>

<script>
import CharacterCard from '@/components/CharacterCard'

export default {
    name: "Home",
    components: {
        CharacterCard
    }
};
</script>
