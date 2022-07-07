// source code is from https://stackblitz.com/edit/rxjs-buffer-with-debounce-khkrhw

import type { OperatorFunction, Observable } from 'rxjs'; 
import { debounceTime, tap, map } from 'rxjs/operators';

export default function bufferDebounceTime<T>(time: number = 0): OperatorFunction<T, T[]> {
  return (source: Observable<T>) => {
    let bufferedValues: T[] = [];

    return source.pipe(
      tap(value => bufferedValues.push(value)),
      debounceTime(time),
      map(() => bufferedValues),
      tap(() => bufferedValues = []),
    );
  };
}
