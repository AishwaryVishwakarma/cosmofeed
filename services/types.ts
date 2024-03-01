import type {AxiosResponse} from 'axios';

export interface ServiceParams {
  onSuccess?: (res: AxiosResponse<any, any>) => void;
  onError?: (err: any) => void;
  onFinally?: () => void;
}
