import axios from 'axios';
import reverseGeocode from 'latlng-to-zip';
import qs from 'qs';

import {
  FETCH_CAMPS
} from './types';

const CAMP_ROOT_URL = 'https://ridb.recreation.gov/api/v1/recareas.json/?';
const CAMP_QUERY_PARAMS = {
  apikey: 'E8FA4774028246DB8671C0178DCD6FF7',
  radius: 30
};

const buildCampURL = ({longitude, latitude}) => {
  const query = qs.stringify({
    ...CAMP_QUERY_PARAMS
  });

  const latitude_api = latitude
  const longitude_api = longitude

  return `${CAMP_ROOT_URL}${query}&latitude=${latitude_api}&longitude=${longitude_api}`;
};

export const fetchCamp = (region, callback) => async (dispatch) => {
  try {
    // REGION already gives us an object of { latitude: , longitude: }
    // let region = await reverseGeocode(region);
    const url = buildCampURL(region);
    let { data } = await axios.get(url);
    dispatch({ type: FETCH_CAMPS, payload: data });
    callback();
  } catch(e) {
    console.error(e);
  }
};

// const JOB_ROOT_URL = 'http://api.indeed.com/ads/apisearch?';
// const JOB_QUERY_PARAMS = {
//   publisher: '4201738803816157',
//   format: 'json',
//   v: '2',
//   latlong: 1,
//   radius: 10,
//   q: 'javascript'
// };
//
// const buildJobsUrl = (zip) => {
//   const query = qs.stringify({ ...JOB_QUERY_PARAMS, l: zip });
//   return `${JOB_ROOT_URL}${query}`;
// };
//
// export const fetchCamp = (region, callback) => async (dispatch) => {
//   try {
//     let zip = await reverseGeocode(region);
//     const url = buildJobsUrl(zip);
//     let { data } = await axios.get(url);
//     dispatch({ type: FETCH_CAMPS, payload: data });
//     callback();
//   } catch(e) {
//     console.error(e);
//   }
// };
