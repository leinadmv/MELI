import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConsultasService } from 'src/app/services/consultas.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.sass']
})
export class DetalleComponent implements OnInit {

  detalle: any;

  constructor(private routerActivate: ActivatedRoute,
              private consultService: ConsultasService) { }

  ngOnInit(): void {
    /**
      * Servicio que obtiene de la url el id del item a buscar 
      */
    this.routerActivate.params.subscribe(router => {
        this.getDetalles(router.id);
    })

  }

  /**
   * Daniel Martinez
   * Metodo que trae las caracteristicas de un item por su id
   * @param id id del item
   */
  getDetalles(id: string){
    this.consultService.getDetalle(id).subscribe(result =>{
      
      this.detalle = {
        detalle: result,
        info: this.consultService.returnDetalle()
      }

    });
  }


}
