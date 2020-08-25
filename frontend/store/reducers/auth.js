const initialState = {
  user: null,
  isLoading: true,
  isSignOut: false
}
const userReducer = (state = initialState, action) => {
  switch (action.type) {

    case "RESTORE_AUTH":
      return {
        ...state,
        user: action.user,
        isLoading: false
      };

    case "SIGN_IN":
      return {
        ...state,
        isSignout: false,
        user: action.user,
      };

    case 'SIGN_OUT':
      return {
        ...state,
        isSignout: true,
        user: null,
      };

    default:
      return state;
  }
};

export default userReducer;