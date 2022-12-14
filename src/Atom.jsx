import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
} from 'recoil';

export const pathname = atom({
    key: 'pathname', // unique ID (with respect to other atoms/selectors)
    default: '',
});
export const locations = atom({
    key: 'locations', // unique ID (with respect to other atoms/selectors)
    default: ["Nainital","Mussorie","Rishikesh","Haridwar","Chamoli","Pithoragarh","Tehri","Uttarkashi","Rudraprayag","Pauri Garhwal","Dehradun","Almora"],
});
export const activities = atom({
    key: 'activities', // unique ID (with respect to other atoms/selectors)
    default: ["Trekking","Rafting","Camping","Expeditions","Tours","Explore","Water Sports","Adventure Sports","Picnics","Day-outs","Skiing"],
});
export const Travel_Style = atom({
    key: 'Travel_Style', // unique ID (with respect to other atoms/selectors)
    default: ["Couples","Friends","Family","Corporate","School Trips","Workation","Solo","Bike Trips"],
});
export const filter_season = atom({
    key: 'filter_season', // unique ID (with respect to other atoms/selectors)
    default: ["Trending Packages","Lightening Deals"],
});
export const filter_prices = atom({
    key: 'filter_prices', // unique ID (with respect to other atoms/selectors)
    default: ["All price range","0-5K","5K-10K","10K-15K","15K-20K"],
});