export default {
  async fetchCharacters({ commit }, page) {
    const { data } = await this.$axios
      .get(`https://swapi.dev/api/people/?page=${page}`);
    commit('setCharacters', data.results);
  },
  async fetchCount({ commit }) {
    const { data } = await this.$axios
      .get('https://swapi.dev/api/people');
    commit('setCount', data.count);
  },
  async fetchCharacter({ commit }, name) {
    const { data } = await this.$axios
      .get(`https://swapi.dev/api/people/?search=${name}`);
    commit('setCharacters', data.results);
  },
};
