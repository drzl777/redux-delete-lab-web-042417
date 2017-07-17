var idGenerator = 1

export default function manageBand (state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      const newBand = {...action.band, id: idGenerator}
      idGenerator += 1
      return { bands: state.bands.concat(newBand) }
    case 'DELETE_BAND':
      const removedBandsList = state.bands.filter(b => b.id !== action.id)
      return { bands: removedBandsList}
    default:
      return state
  }
};
