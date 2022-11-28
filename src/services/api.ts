import axios from "axios";
import md5 from "md5";

const publicKey = "85017247a9015801e8f4325840d96d67";
const privateKey = "e206801c1e53729d01dcbe27d213719061ad19eb";

const ts = Number(new Date());

const hash = md5(ts + privateKey + publicKey);

const api = axios.create({
  baseURL: "http://gateway.marvel.com/v1/public/",
  params: {
    apikey: publicKey,
    ts,
    hash,
  },
});

export default api;
