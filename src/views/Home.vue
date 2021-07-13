<template>
    <div class="home">
        <h1>This is Home page</h1>

        <CharacterCard
            v-for="person in characters"
            :key="person.name"
            :name="person.name"
            :id="person.url.split('/')[5]"
        />
    </div>
</template>

<script>
import CharacterCard from '@/components/CharacterCard'
import axios from 'axios'

export default {
    name: "Home",
    data: () => ({
        characters: []
    }),
    components: {
        CharacterCard
    },
    mounted() {
        this.getCharacters()
        console.log(this.characters)
    },
    methods: {
        getCharacters() {
            axios
                .get('https://swapi.dev/api/people')
                .then(response => response.data.results.forEach(el => this.characters.push(el)));
        }
    }
};
</script>
