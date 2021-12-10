import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsultasService } from 'src/app/services/consultas.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.sass']
})
export class ResultadoComponent implements OnInit {

  results: any;
  miga: any;

  constructor(private routerActivate: ActivatedRoute,
              private consultService: ConsultasService,
              private router: Router) { }

  ngOnInit(): void {

    /**
     * Servicio que obtiene el parametro a buscar
     */
    this.routerActivate.queryParams.subscribe(parameter => {
      this.getProductos(parameter.search);
    })

  }

  /**
   * Daniel Martinez
   * Metodo que trae una lista de productos dependiendo de una palabra clave que se envia
   * @param parameter palabra clave
   */
  getProductos(parameter: string){
    this.consultService.getProducts(parameter).subscribe(result =>{

      this.results = result.items;
      this.miga = result.categories.toString();

    });

  }

  /**
   * Daniel Martinez
   * Metodo que envia el item total seleccionado y su id para ser buscado
   * @param item item seleccionado
   * @param id id del item seleccionado
   */
  detalles(item:any, id: number){
    this.router.navigate(['items', id]);
    this.consultService.itemDetalle(item);
  }

}
