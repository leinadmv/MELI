export interface Welcome {
    site_id:                   any;
    country_default_time_zone: string;
    query:                     string;
    paging:                    any;
    results:                   any[];
    sort:                      any;
    available_sorts:           any[];
    filters:                   any[];
    available_filters:         any[];
}

export const respuesta = {

    autor: {
        name: 'Daniel',
        lastname: 'Martinez Vargas'
    },
    items:  null,
    categories: null

}

export class items{

    static itemsFromJson(obj: Object){
       return new items(
         obj['id'],
         obj['title'],
         obj['thumbnail'],
         obj['condition'],
         obj['shipping']['free_shipping'],
         new price(
            obj['currency_id'],
            obj['price'],
            obj['price'],
         )
       )
    };

    constructor(
        public id: String,
        public title: String,
        public picture: any,
        public condition: String,
        public free_shipping: Boolean,
        public price: price,
        ){}

}

export class price{

    constructor(
        public currency: String,
        public amount: Number,
        public decimals: Number
        ){
   }
}


export class categorie {

    arrayAux = [];

    constructor(){}

    public findCategory(event: any[]){

        let find = event.find(value => value.id === 'category' );

        find?.values.forEach((element: any) => {
            this.arrayAux.push(element.name);
        });

        return this.arrayAux;

    }
}
