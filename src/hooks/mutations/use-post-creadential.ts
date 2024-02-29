import { useMutation } from "@tanstack/react-query";
import { URLS } from "^/constants/urls";
import api from "^config/api";
import { ApiResponse } from "response";
import { User } from "response/user-profile";

const usePostCredentials = () => {
  return useMutation({
    mutationFn: (params: Partial<User>) =>
      api.post<ApiResponse<string>>(URLS.LOGIN, params),
  });
};

export default usePostCredentials;
