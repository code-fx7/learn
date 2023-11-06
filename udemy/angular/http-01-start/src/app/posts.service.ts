import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from "./post.model";
import { catchError, map, tap } from "rxjs/operators";
import { Subject, throwError } from "rxjs";

@Injectable({providedIn: 'root'})
export class PostsService {
  error = new Subject<string>();

  constructor(private http: HttpClient) {}

  createAndStorePost(title: string, content: string) {
    const postData: Post = {title: title, content: content};
    this.http
    .post<{ name: string }>(
      'https://ng-complete-guide-58ed8-default-rtdb.europe-west1.firebasedatabase.app/posts.json', 
      postData,
      {
        observe: 'response'
      }
      )
      .subscribe(
        responseData => {
        console.log(responseData);
      }, 
      error => {
        this.error.next(error.message);
      });
  }

  fetchPosts() {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('print', 'pretty');
    searchParams = searchParams.append('custom', 'key');
    return this.http
    .get<{ [key: string]: Post }>('https://ng-complete-guide-58ed8-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
    {
      headers: new HttpHeaders({ 'Custom-Header': 'Hello' }),
      params: searchParams,
      responseType: 'json'
    })
    .pipe(map(responseData => {
      const postsArray: Post[] = [];
      // Umwandlung eines Objekts in ein Array
      // Jeder key aus dem responseData Objekt wird in ein neues postsArray mit einer id gepushed
      for (const key in responseData) {
        // Hier wird überprüft ob key eine eigene Eigenschaft hat
        if (responseData.hasOwnProperty(key)) {
        postsArray.push({ ...responseData[key], id: key });
      }
    }
    return postsArray;
    }),
    catchError(errorRes => {
      // Fehler weiterleiten um diesen zu speichern oder ähnliches
      return throwError(errorRes);
    })
  );
  }

  deletePosts() {
    return this.http.delete('https://ng-complete-guide-58ed8-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
    {
      observe: 'events',
      responseType: 'text'
    })
    .pipe(
      tap(event => {
        console.log(event);
        if (event.type === HttpEventType.Sent) {
          // ...
        }
        if (event.type === HttpEventType.Response) {
          console.log(event.body);
        }
      })
    );
  }
}
