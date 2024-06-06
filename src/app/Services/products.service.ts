import { environment } from 'src/environments/environment';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Iproduct } from './../models/iproduct';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  httpOption;
  constructor(private httpclient: HttpClient) {
     this.httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        // ,Authorization: 'my-auth-token'
      })
    };
  }
//*******************************************Handel error */
  private handleError(error: HttpErrorResponse) {
    // Generic Error handler
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Write error details in Generic error log

    // Return an observable with a user-facing error message.
    return throwError(
      ()=>new Error('Error occured, please try again')
    )
  }

//************************************ Handel error */

  getAllproducts():Observable<Iproduct[]> {
    //repository Design pattern ==[handel error from one place for advanced]
       // return this.genericAPIHandler.getAll('/Products')
    //       .pipe(
    //         map((APIResponseVM: APIResponseVM) => {
    //           return APIResponseVM.data;
    //         })
    //       );

  return  this.httpclient.get<Iproduct[]>(`${environment.APIURL}/products`)
  .pipe(
    retry(2),
      catchError(this.handleError)
  );

  }

  getProductsByCatID(catID: number):Observable<Iproduct[]> {
  return  this.httpclient.get<Iproduct[]>(`${environment.APIURL}/products?CategoryID=${catID}`)
  .pipe(
    retry(2),
      catchError(this.handleError)
  );

  }
  getProductByID(prdID: number):Observable<Iproduct>  {
    return  this.httpclient.get<Iproduct>(`${environment.APIURL}/products/${prdID}`)
    .pipe(
      retry(2),
        catchError(this.handleError)
    );

  }

  addProduct(newPrd: Iproduct):Observable<Iproduct> {
    // return this.httpclient.post<Iproduct>(`${environment.APIURL}/products`,JSON.stringify(newPrd),this.httpOption );
    //**************************** Handel error[1] */
    // return this.httpclient.post<Iproduct>(`${environment.APIURL}/products`,JSON.stringify(newPrd),this.httpOption )
    // .pipe(
    //  retry(2),
    //       catchError((err: HttpErrorResponse) => {
    //         console.log(err.status, err.error);
    //         return throwError(() => new Error(err.error));
    //       })
    // );
    //************************************************** Handel error[2] */
    return this.httpclient.post<Iproduct>(`${environment.APIURL}/products`,JSON.stringify(newPrd),this.httpOption )
    .pipe(
      retry(2),
        catchError(this.handleError)
    );
  }
  updateProduct(prdID: number, UpdatedPrd: Iproduct) {}
  deleteProduct(pdID: number) {}
}
