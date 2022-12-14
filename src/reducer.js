export const initialState = {
     locations: ["Nainital","Mussoorie","Rishikesh","Haridwar","Chamoli","Pithoragarh","Tehri","Uttarkashi","Rudraprayag","Pauri Garhwal","Dehradun","Almora"],
     activities:["Trekking","Rafting","Camping","Expeditions","Tours","Explore","Water Sports","Adventure Sports","Picnics","Day-outs","Skiing"],
    //  activities:[{name:"Trekking",actvar:'a'},{name:"Rafting",actvar:'b'},{name:"Camping",actvar:'c'},{name:"Expeditions",actvar:'d'},{name:"Tours",actvar:'e'},{name:"Explore",actvar:'f'},{name:"Water Sports",actvar:'g'},{name:"Adventure Sports",actvar:'h'},{name:"Picnics",actvar:'i'},{name:"Day-outs",actvar:'g'},{name:"Skiing",actvar:'k'}],
     Travel_Style:["Couples","Friends","Family","Corporate","School Trips","Workation","Solo","Bike Trips"],
     filter_season:["Trending Packages","Lightening Deals"],
     filter_prices:["All price range","0-5K","5K-10K","10K-15K","15K-20K"],
     useFilter_act:[],
     useFilter_price:"All price range",
     useFilter_style:[],
     filter_Data:[],
     All_Data:[],
  };
  
  export const actionTypes = {
    SET_ACTIVITIES : "SET_ACTIVITIES",
    SET_LOCATIONS:'SET_LOCATIONS',
    SET_PRICES:'SET_PRICES',
    SET_USE_FILTER_ACT:'SET_USE_FILTER_ACT',
    SET_USE_FILTER_STY:'SET_USE_FILTER_STY',
    SET_USE_FILTER_ACT_STRING:'SET_USE_FILTER_ACT_STRING',
    SET_USE_FILTER_PRICES:'SET_USE_FILTER_PRICES',
    SET_USE_FILTER_DATA:'SET_USE_FILTER_DATA',
    SET_USE_ALL_DATA:'SET_USE_ALL_DATA',
  };
  
  const reducer = (state, action) => {

    switch (action.type) {
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
  