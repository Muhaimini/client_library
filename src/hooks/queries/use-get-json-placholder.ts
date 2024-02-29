import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { URLS } from "^/constants/urls";
import { QUERY_KEYS } from "^/constants/query-keys";
import { JsonPlacholder } from "^/types/response/json-placholder";

const useGetJsonPlacholder = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_JSON_PLACEHOLDER],
    queryFn: () => axios.get<JsonPlacholder[]>(URLS.JSON_PLACHOLDER),
  });
};

export default useGetJsonPlacholder;
