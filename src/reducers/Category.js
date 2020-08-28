let initialState = { pending: true, category:[] };

const Category = (state = initialState, action) => {
  switch(action.type){
    case "FETCH_CATEGORY_PENDING":
      return{
        initialState,
        pending: true
      };
    case "FETCH_CATEGORY_SUCCESS":
      return{
        ...state,
        pending: false,
        category: action.payload.categories
      };
      case "FETCH_CATEGORY_ERROR":
        return{
          ...state,
          pending: true,
        }
      default:
        return{
          ...state
        };
  }
}

export default Category;