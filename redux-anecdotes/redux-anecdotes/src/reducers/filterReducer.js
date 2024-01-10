const filterReducer = (state = '', action) => {
    switch (action.type) {
      case 'SET_FILTER_TEXT':
        return action.payload.filter
      default:
        return state
    }
  }

  export const filterChange = filter => {
    return {
       type: 'SET_FILTER_TEXT',
       payload: { filter },
     }
   }
  

export default filterReducer