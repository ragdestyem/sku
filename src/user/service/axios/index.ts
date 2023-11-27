import axios from "axios";

const instance = axios.create({
    baseURL: 'https://user.ragdewms.com/auth/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });

  export default instance;