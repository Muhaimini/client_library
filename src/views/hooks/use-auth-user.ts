import useLocalStorage from "^hooks/storage";
import tokenDecoder from "^utils/jwt";
import { useEffect, useState } from "react";
import { User } from "response/user-profile";

const useAuthUser = () => {
  const { getTokenFromLocalStorage } = useLocalStorage();
  const [userProfile, setUserProfile] = useState<User>();

  const token = getTokenFromLocalStorage();

  useEffect(() => {
    if (token) {
      setUserProfile(tokenDecoder<User>(token));
    }
  }, [token]);

  return { userProfile };
};

export default useAuthUser;
