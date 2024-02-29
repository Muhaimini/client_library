import { useQuery } from "@tanstack/react-query";
import api from "^config/api";

interface GetGenreProps {
  enabled?: boolean;
}

const useGetGenre = ({ enabled }: GetGenreProps) => {
  return useQuery({
    queryKey: ["genre"],
    queryFn: () => api.get("/v1/genre"),
    enabled,
  });
};

export default useGetGenre;
