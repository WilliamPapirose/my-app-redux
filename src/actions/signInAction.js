export const signIn = user => ({
  type: 'SIGN_IN',
  user,
});

export const logOut = () => ({
  type: 'LOG_OUT',
});
