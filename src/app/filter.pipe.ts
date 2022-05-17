import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(arr:any[], selected:boolean): any[] {
     const newarr=arr.filter((ele:any)=>{
       return ele.checked==true;
     })
     console.log(newarr);
     return newarr;
  }

}
