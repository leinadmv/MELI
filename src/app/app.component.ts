import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  
  title = 'MELI';

  entrada: any = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
 
  /**
   * Daniel Martinez
   * Metodo que redirecciona a la vista que mnuestra los resultados
   */
  buscar():void{
    this.router.navigate(['items'], { queryParams: { search: this.entrada }});
  }
}
