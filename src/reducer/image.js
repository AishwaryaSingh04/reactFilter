const initialState = {
  imageArray: [],
  filteredArray : [],
  filterApplied:false,
  error: ""
};

const imageList = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USER_IMAGES":
      return {
        ...state,
        imageArray: action.payload.products
      };

    case "FETCH_IMAGE_FAILURE":
      return {
        ...state,
        error: action.payload
      };

    case "cardID":
      const updatedArray = state.imageArray.filter(result=>result.id===Number(action["payload"]))
      return{
        ...state,
        filterApplied:true,
        filteredArray:updatedArray
      };
      case 'albumID':
        const updatedAlbumArray = state.imageArray.filter(result=>result.albumId===Number(action["payload"]))
      return{
        ...state,
        filterApplied:true,
        filteredArray:updatedAlbumArray
      };

    default:
      return state;
  }
};

export default imageList;
