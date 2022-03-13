import axios from "axios";

const url = "https://video-proxy.3rdy.tv/api/vod/popular";

export const FETCH_POPULAR = "FETCH_POPULAR";

export function fetchPopular() {
    const request = axios.get(url);
return {
    type: FETCH_POPULAR,
    payload: request
};
}
