
const actions = {
  setFavorite: 'SET_FAVORITE',
  deleteFavorite: 'DELETE_FAVORITE',
};

const setFavorite = payload => (
  {
    type: actions.setFavorite,
    payload,
  }
);

const deleteFavorite = payload => (
  {
    type: actions.deleteFavorite,
    payload,
  }
);

export { setFavorite, deleteFavorite, actions };
