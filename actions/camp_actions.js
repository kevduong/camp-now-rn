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
