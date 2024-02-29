import { decode } from "jsonwebtoken";

const tokenDecoder = <T = unknown>(token: string) => {
  return decode(token) as T;
};

export default tokenDecoder;
