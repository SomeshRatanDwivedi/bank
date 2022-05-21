import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'settlepage'
})
export class SettlepagePipe implements PipeTransform {
    
  transform(value:any[], selectedPage:number, selectedbtn:number): any[] {
    const start=selectedPage*selectedbtn-selectedPage;
    const end=start+selectedPage-1;
      const newArr=value.filter((ele, index)=>{
        return index>=start && index<=end;
      })
      return newArr;
  }

}
