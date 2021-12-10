import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { items, respuesta, Welcome, categorie} from '../models/response';
import { WelcomeDetalle } from '../models/detalle';


@Injectable({
  providedIn: 'root'
})
export class ConsultasService {

  detalle: any;

  constructor(private http: HttpClient) { }

  handleError(error: HttpErrorResponse): any{
    return throwError(error);
  }

  /**
   * Daniel Martinez
   * Servicio que consulta la lista de productos por una palabra clave
   * @param producto producto o palabra clave
   * @returns lista de productos
   */
  getProducts(producto: string){
    return this.http.get<Welcome>(`https://api.mercadolibre.com/sites/MLA/search?q=:${producto}`)
    .pipe(
      map( (resp:Welcome) =>{

        let response = respuesta;
        let categories = new categorie();

        response.items = resp.results.map(prueba => items.itemsFromJson(prueba));
        response.categories = categories.findCategory(resp.filters);

        return response;
      })
    );
  }

  /**
   * Daniel martinez
   * Servicio que guarda en el localstorage las cualidades de un item
   * @param detalle item
   */
  itemDetalle(detalle: any){
    localStorage.setItem('item', JSON.stringify(detalle));
  }

  /**
   * Daniel Martinez
   * Servicio que consulta los detalles de un item por su id
   * @param id item del id
   * @returns cualidades del item objeto json
   */
  getDetalle(id: string): Observable<any>{
    return this.http.get<WelcomeDetalle>(`https://api.mercadolibre.com/items/${id}/description`);
  }

  /**
   * Daniel Martinez
   * Servicio que consulta del localstorage las cualidades de un item
   * @returns objeto con las cualidades del item
   */
  returnDetalle(){
    return JSON.parse(localStorage.getItem('item')); 
  }
  
}


