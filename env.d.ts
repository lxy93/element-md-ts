/// <reference types="vite/client" />
import axios, { Axios, AxiosResponse, AxiosRequestConfig } from 'axios'
declare module "*.vue" {
    import { defineComponent } from "vue";
    const Component: ReturnType<typeof defineComponent>;
    export default Component;
}

declare module 'axios'{
    interface AxiosInstance{
      (config:AxiosRequestConfig):Promise<any>
    }
}  