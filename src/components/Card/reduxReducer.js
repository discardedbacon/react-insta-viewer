const initialState = {
  selectedModalContent: {}
}

export default (prevState = initialState, { type, payload }) => {
  switch (type) {
    case "MODAL_CONTENT_SELECTED":
      return { ...prevState, selectedModalContent: payload }
    default:
      return { ...prevState }
  }
}
