<template>
    <div class="home wrap">
        <div class="home__content">
            <CharacterCard
                v-for="person in characters"
                :key="person.name"
                :name="person.name"
                :id="person.url.split('/')[5]"
            />
        </div>

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

<style lang="scss" scoped>
.home {
    &__content {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 25px;
        .character-card {
            flex-basis: 17.67%;
            margin-right: 20px;
            margin-bottom: 20px;
        }
    }
}
</style>
