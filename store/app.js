export const state = () => ({
  dialog: false,
});

export const mutations = {
  SET_LOADING(state, payload) {
    state.loading = payload;
  },
};
