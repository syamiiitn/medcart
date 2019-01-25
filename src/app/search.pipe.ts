import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(data: any[], searchTerm: string): any {
    if(!data || !searchTerm)
    {
    return data;
    }
    else
    {
      return data.filter(x=>x.medicine.toLowerCase().indexOf(searchTerm.toLowerCase())!=-1);
    }
  }

}
