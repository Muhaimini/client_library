export enum STORAGE {
  NAME = "token",
}

const useLocalStorage = () => {
  const setTokenToLocalStorage = (token: string) => {
    try {
      localStorage.setItem(STORAGE.NAME, token);
    } catch (error) {
      return;
    }
  };

  const getTokenFromLocalStorage = () => {
    try {
      return localStorage.getItem(STORAGE.NAME);
    } catch (error) {
      return "";
    }
  };

  return {
    setTokenToLocalStorage,
    getTokenFromLocalStorage,
  };
};

export default useLocalStorage;
