import { Pipe, PipeTransform } from '@angular/core';
export type SortOrder = '';

@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
  transform(value: any, sortOrder: SortOrder | string, sortKey?: string): any {
    value = value || [];
    return value.sort((a: any, b: any) => {
      if (a[sortOrder] < b[sortOrder]) {
        return -1;
      } else if (a[sortOrder] > b[sortOrder]) {
        return 1;
      } else {
        return 0;
      }
    });
  }
}
