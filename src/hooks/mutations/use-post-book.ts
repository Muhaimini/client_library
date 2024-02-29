import { useMutation } from "@tanstack/react-query";
import api from "^config/api";

const usePostBooks = () => {
  return useMutation({
    mutationFn: (params: Record<string, any>) => api.post("/v1/book", params),
  });
};

export default usePostBooks;
