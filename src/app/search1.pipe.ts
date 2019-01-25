import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search1'
})
export class Search1Pipe implements PipeTransform {

  transform(data: any[], searchTerm: string): any {
    if(!data || !searchTerm)
    {
    return data;
    }
    else
    {
      return data.filter(x=>x.customername.toLowerCase().indexOf(searchTerm.toLowerCase())!=-1);
    }
  }

}
