import axios from "axios";

const instance = axios.create({
    baseURL: 'http://keycloak-service.default.svc.cluster.local/auth/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });

  export default instance;