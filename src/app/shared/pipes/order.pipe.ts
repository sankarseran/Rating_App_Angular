import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'order',
  pure: false
})
export class OrderPipe implements PipeTransform {

  transform(array: any, field: string): any {
    if (field) {
        return array.sort((a: any, b: any) => {
            if (a[field] === b[field]) {
                return 0;
            }
            if (a[field] == null) {
                return 1;
            }
            if (b[field] == null) {
                return -1;
            }
            return a[field] > b[field] ? -1 : 1;
        });
    } else {
        return array;
    }
}

}
