import useGetBooks from "^hooks/queries/use-get-books";
import { useDebouncedState } from "@mantine/hooks";
import { useEffect } from "react";

const useMainPageHooks = () => {
  const [searchBookValue, onSearchBook] = useDebouncedState("", 400, {
    leading: true,
  });

  const { data, isLoading, isRefetching, refetch } = useGetBooks({
    search: searchBookValue,
    enabled: !!searchBookValue,
  });

  useEffect(() => {
    if (!isLoading && !searchBookValue) {
      refetch();
    }
  }, [searchBookValue]);

  return {
    data: data?.data,
    isLoading,
    isRefetching,
    searchBookValue,
    onSearchBook,
  };
};

export default useMainPageHooks;
