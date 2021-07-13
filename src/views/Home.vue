<template>
    <div class="home wrap">
        <div
            v-if="characters.length"
            class="home__wrap">
            <nav class="home__nav" aria-label="page navigation">
                <ul class="pagination home__pagination">
                    <li
                        :class="{'disabled': currentPage === 1}"
                        class="page-item home__pagination-item">
                        <a
                            @click="currentPage--, getCharacters(currentPage)"
                            class="page-link home__pagination-link" href="#">Previous</a>
                    </li>
                    <li
                        v-for="page in MaxPage"
                        :key="page"
                        :class="{active: currentPage === page}"
                        @click="currentPage = page, getCharacters(page)"
                        class="page-item home__pagination-item">
                        <a class="page-link home__pagination-link" href="#">{{page}}</a>
                    </li>
                    <li
                        :class="{'disabled': currentPage === MaxPage}"
                        class="page-item home__pagination-item">
                        <a
                            @click="currentPage++, getCharacters(currentPage)"
                            class="page-link home__pagination-link" href="#">Next</a>
                    </li>
                </ul>
            </nav>
            <div class="home__content">
                <CharacterCard
                    v-for="person in characters"
                    :key="person.name"
                    :name="person.name"
                    :id="person.url.split('/')[5]"
                />
            </div>
        </div>
        <div
            v-else
            class="loader">
            <img src="@/assets/img/star-wars.jpg" alt="">
        </div>
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
        .character-card {
            flex-basis: 17.67%;
            margin-right: 20px;
            margin-bottom: 20px;
        }
    }
    &__nav {
        display: flex;
        justify-content: center;
        margin-top: 25px;
    }
    &__pagination-link {
        border-color: #000;
        color: #000;
        &:hover {
            color: #FFEE58;
            border-color: #FFEE58;
            background-color: #000;
        }
        &:focus {
            box-shadow: none;
        }
    }
    &__pagination-item {
        &.active {
            background: #000;
            a {
                color: #FFEE58;
                background-color: #000;
                border-color: #000;

            }
        }

    }
}
</style>
