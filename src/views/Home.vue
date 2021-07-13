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
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li
                    :class="{'disabled': currentPage === 1}"
                    class="page-item">
                    <a
                        @click="currentPage--, getCharacters(currentPage)"
                        class="page-link" href="#">Previous</a>
                </li>
                <li
                    v-for="page in MaxPage"
                    :key="page"
                    :class="{active: currentPage === page}"
                    @click="currentPage = page, getCharacters(page)"
                    class="page-item">
                    <a class="page-link" href="#">{{page}}</a>
                </li>
                <li
                    :class="{'disabled': currentPage === MaxPage}"
                    class="page-item">
                    <a
                        @click="currentPage++, getCharacters(currentPage)"
                        class="page-link" href="#">Next</a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
import CharacterCard from '@/components/CharacterCard'
import axios from 'axios'

export default {
    name: "Home",
    data: () => ({
        characters: [],
        currentPage: 1,
        count: 0,
        maxPage: 0
    }),
    components: {
        CharacterCard
    },
    computed: {
        MaxPage() {
            return Math.ceil(this.count/10)
        }
    },
    mounted() {
        this.getCharacters(this.currentPage)
        this.getCount()
    },
    methods: {
        getCharacters(page) {
            this.characters = []
            axios
                .get(`https://swapi.dev/api/people/?page=${page}`)
                .then(response => response.data.results.forEach(el => this.characters.push(el)));
        },
        getCount() {
            axios
                .get('https://swapi.dev/api/people')
                .then(response => (this.count = response.data.count));
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
