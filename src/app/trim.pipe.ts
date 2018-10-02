import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trim'
})
export class TrimPipe implements PipeTransform {

  transform(value: string, length?: number): string {
    let tmp = document.createElement("DIV");
    tmp.innerHTML = value;
    value = tmp.textContent || tmp.innerText || "";
    return value.substring(0,length)+'...';
  }

}
