import { useMutation } from "@tanstack/react-query";
import { URLS } from "^/constants/urls";
import api from "^config/api";

const useGetCredentials = () => {
  return useMutation({ mutationFn: () => api.post(URLS.LOGIN) });
};

export default useGetCredentials;
