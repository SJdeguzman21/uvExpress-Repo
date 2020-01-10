import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'vanFilter'
})
export class VanFilter implements PipeTransform{
    transform (registeredVan: any , routeName: any): any{
        if (!registeredVan || !routeName){
            return registeredVan;
        }

        return registeredVan.filter(van => 
            van.route.toLowerCase().indexOf(routeName.toLowerCase()) !== -1);
    }
}