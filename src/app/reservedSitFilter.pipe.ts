import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'reservedSitFilter'
})
export class ReservedSitFilter implements PipeTransform{
    transform (reservedList: any , plate: any): any{
        if (!reservedList || !plate){
            return reservedList;
        }

        return reservedList.filter(list => 
            list.plate.toLowerCase().indexOf(plate.toLowerCase()) !== -1);
    }
}