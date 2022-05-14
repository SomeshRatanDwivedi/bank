import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(arr:any[], selected:boolean): any[] {
     const newarr=arr.filter((ele)=>{
       return ele.checked==selected;
     })
     console.log(newarr);
     return newarr;
  }

}
