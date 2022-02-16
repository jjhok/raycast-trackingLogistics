import axios from "axios";

const url = "https://apis.tracker.delivery/carriers/";

const instance = axios.create({
  baseURL: url,
  timeout: 10000,
});

instance.interceptors.response.use(
  function (response) {
    console.log("response", response);
    return response;
  },
  function (error) {
    console.log("error", error);
    return Promise.reject(error);
  }
);

export const apiTrack = (vendor: string, trackNumber: string | number) => {
  console.log("Axios Called");
  console.log(url + vendor + "/tracks/" + trackNumber);
  return instance.get(url + vendor + "/tracks/" + trackNumber);
};

export const getNaverPasspordKey = () => {
  return instance.get(
    "https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%ED%83%9D%EB%B0%B0%EC%A1%B0%ED%9A%8C"
  );
};

export const getTrackData = (vendorId: string, trackId: string = "1111111111", passportKey: string) => {
  return instance.get(
    `https://m.search.naver.com/p/csearch/ocontent/util/headerjson.naver?callapi=parceltracking&t_code=${vendorId}&t_invoice=${trackId}&passportKey=${passportKey}`
  );
};
