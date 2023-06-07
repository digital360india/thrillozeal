export const initialState = {
  Travel_Style: ["Couples", "Friends", "Family", "Corporate", "School Trips", "Workation", "Solo", "Bike Trips"],
  filter_season: ["Trending Packages", "Lightening Deals"],
  filter_prices: ["All price range", "0-5K", "5K-10K", "10K-15K", "15K-20K"],
  useFilter_act: '',
  useFilter_style: '',
  useFilter_price: "All price range",
  filter_Data: [],
  All_Data: [],
  globalVariable: null,
   All_Treks:[],
};

export const actionTypes = {
  SET_PRICES: 'SET_PRICES',
  SET_USE_FILTER_ACT: 'SET_USE_FILTER_ACT',
  SET_USE_FILTER_STY: 'SET_USE_FILTER_STY',
  SET_USE_FILTER_ACT_STRING: 'SET_USE_FILTER_ACT_STRING',
  SET_USE_FILTER_PRICES: 'SET_USE_FILTER_PRICES',
  SET_USE_FILTER_DATA: 'SET_USE_FILTER_DATA',
  SET_USE_ALL_DATA: 'SET_USE_ALL_DATA',
  SET_GLOBAL_VARIABLE: 'SET_GLOBAL_VARIABLE',
    SET_USE_ALL_TREKS:'SET_USE_ALL_TREKS',
};

const reducer = (state, action) => {

  switch (action.type) {
    case actionTypes.SET_GLOBAL_VARIABLE:
      return {
        ...state,
        globalVariable: action.globalVariable,
      };
         case actionTypes.SET_USE_ALL_TREKS:
        return {
          ...state,
          All_Treks: action.All_Treks,
        };
    case actionTypes.SET_USE_ALL_DATA:
      return {
        ...state,
        All_Data: action.All_Data,
      };
    case actionTypes.SET_USE_FILTER_DATA:
      return {
        ...state,
        filter_Data: action.filter_Data,
      };
    case actionTypes.SET_USE_FILTER_ACT:
      return {
        ...state,
        useFilter_act: action.useFilter_act,
      };
    case actionTypes.SET_USE_FILTER_STY:
      return {
        ...state,
        useFilter_style: action.useFilter_style,
      };
    case actionTypes.SET_USE_FILTER_PRICES:
      return {
        ...state,
        useFilter_price: action.useFilter_price,
      };
    case actionTypes.SET_PRICES:
      return {
        ...state,
        filter_prices: action.filter_prices,
      };
    case actionTypes.SET_ACTIVITIES:
      return {
        ...state,
        activities: action.activities,
      };

    case actionTypes.SET_LOCATIONS:
      return {
        ...state,
        location: action.location,
      };

    default:
      return state;
  }
};

export default reducer;
