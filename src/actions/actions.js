export const onContactUsSaved = state => ({
  submitted: true,
  request: {
    value: ''                                   // textarea values have to be explicitly cleared
  }
});
