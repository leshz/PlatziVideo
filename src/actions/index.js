
const actions = {
  setFavorite: 'SET_FAVORITE',
  deleteFavorite: 'DELETE_FAVORITE',
  loginRequest: 'LOGIN_REQUEST',
  logoutRequest: 'LOGOUT_REQUEST',
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

const loginRequest = payload => ({
  type: actions.loginRequest,
  payload,
});

const logoutRequest = payload => ({

  type: actions.logoutRequest,
  payload,

});

export { setFavorite, deleteFavorite, actions, loginRequest, logoutRequest };
