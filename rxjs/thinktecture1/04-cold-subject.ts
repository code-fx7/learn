import { from, Observable } from "rxjs";

const source$ = new Observable(observer => {
  // Imagine http request being done here
  observer.next('Value 1');
  observer.next('Value 2');
  observer.complete();

  return () => {
    console.log('observer unsubscribed');
  };
});
source$.subscribe(value => console.log('[1] Received Value:', value))
source$.subscribe(value => console.log('[2] Received Value:', value))
source$.subscribe(value => console.log('[3] Received Value:', value))

const source2$ = from(['Value 1', 'Value 2']);
source2$.subscribe(value => console.log('[4] Received Value:', value))
source2$.subscribe(value => console.log('[5] Received Value:', value))
source2$.subscribe(value => console.log('[6] Received Value:', value))
