import { useQuery } from "@tanstack/react-query";
import api from "^config/api";

const getDetailsBook = ({ id }: { id: string }) => {
  return useQuery({
    queryKey: ["books"],
    queryFn: () => api.get(`/v1/book/${id}`),
    enabled: !!id,
  });
};

export default getDetailsBook;
