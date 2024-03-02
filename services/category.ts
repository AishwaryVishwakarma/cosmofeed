import axios from 'axios';

import type {ServiceParams} from './types';

export class Category {
  static get(
    category: string,
    signal: AbortSignal,
    {
      onSuccess = (res) => {},
      onError = (err) => {},
      onFinally = () => {},
    }: ServiceParams
  ): void {
    axios
      .get(process.env.NEXT_PUBLIC_HOST + category, {
        signal,
      })
      .then((res) => onSuccess(res))
      .catch((err) => {
        console.debug(err);
        onError(err);
      })
      .finally(() => onFinally());
  }
}
