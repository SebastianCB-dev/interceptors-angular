import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // El req de arriba es de solo lectura por lo tanto si se quiere manipular,
    // hay que clonarlo

    // Acá se podría controlar la url
    if(req.url !== '/api/users') {
      // No se clona
      return next.handle(req);
    }
    const headers = new HttpHeaders({
      'user-token': 'ABCD12UY6ER723GDAS'
    });
    const newRequest: HttpRequest<any> = req.clone({
      headers
    });


    return next.handle(newRequest).pipe(
      catchError(this.manejarError)
    );
  }

  manejarError(err: HttpErrorResponse) {
    console.log('Sucedio un error');
    console.warn(err);
    return throwError(() => 'Error personalizado');
  }
}
