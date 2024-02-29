import { useQuery } from "@tanstack/react-query";
import { URLS } from "^/constants/urls";
import { QUERY_KEYS } from "^/constants/query-keys";
import api from "^config/api";
import { Book } from "response/books";
import { ApiResponse } from "response";

interface GetBookProps {
  search: string;
  enabled?: boolean;
}

const useGetBooks = ({ search = "", enabled }: GetBookProps) => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_BOOKS],
    queryFn: () =>
      api.get<ApiResponse<Book[]>>(URLS.ALL_BOOKS, {
        params: { search },
      }),
    enabled,
  });
};

export default useGetBooks;
