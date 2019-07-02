const visibilityAsider = (state = true, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_ASIDER':
      return action.collapsed
    default:
      return state
  }
}

export default visibilityAsider