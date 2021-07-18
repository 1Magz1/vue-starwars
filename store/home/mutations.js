export default {
  setCharacters(state, payload) {
    state.characters = payload;
  },
  setCount(state, payload) {
    state.count = payload;
  },
  incrementCurrentPage(state) {
    state.currentPage += 1;
  },
  decrementCurrentPage(state) {
    state.currentPage -= 1;
  },
  setCurrentPage(state, payload) {
    state.currentPage = payload;
  },
  setCharacterName(state, payload) {
    state.characterName = payload;
  },
};
