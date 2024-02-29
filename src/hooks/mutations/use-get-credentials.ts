import { useMutation } from "@tanstack/react-query";
import { URLS } from "^/constants/urls";
import api from "^config/api";

interface GetCredentialProps {
  name: string;
  identityId: string;
}

const useGetCredentials = () => {
  return useMutation({
    mutationFn: (params: GetCredentialProps) => api.get(URLS.LOGIN, { params }),
  });
};

export default useGetCredentials;
