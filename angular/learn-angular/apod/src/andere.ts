// export class AppComponent implements OnInit, OnDestroy {
//   title = 'Astronomy Picture of the Day';
//   private ngUnsubscribe = new Subject<void>();

//   constructor(private http: HttpClient) {}

//   ngOnInit() {
//     this.getDataFromAPI();
//   }

//   ngOnDestroy() {
//     this.ngUnsubscribe.next();
//     this.ngUnsubscribe.complete();
//   }
  
//   getDataFromAPI() {
//   const apiUrl = 'https://api.nasa.gov/planetary/apod?api_key=d36huVswPSig0c0LTJH37giaLhknCsFb1Kl16E8b';

//   this.http.get(apiUrl).pipe(
//     takeUntil(this.ngUnsubscribe)
//   ).subscribe(
//     (data: any) => {
//       console.log(data);
//     },
//     (error: any) => {
//       console.log('Fehler beim Abrufen der Daten:', error);
//     }
//   );
//   }
// }