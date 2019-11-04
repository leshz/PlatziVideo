
const actions = {
  setFavorite: 'SET_FAVORITE',
  deleteFavorite: 'DELETE_FAVORITE',
  loginRequest: 'LOGIN_REQUEST',
  logoutRequest: 'LOGOUT_REQUEST',
  registerRequest: 'REGISTER_REQUEST',
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
const registerRequest = payload => ({
  type: actions.registerRequest,
  payload,
});

export { setFavorite, deleteFavorite, actions, loginRequest, logoutRequest, registerRequest };
