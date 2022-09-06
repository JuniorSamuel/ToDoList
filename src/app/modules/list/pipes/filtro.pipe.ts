import { Pipe, PipeTransform } from '@angular/core';
import { ITask, Priority } from '../interfaces/task';

export enum Ready {all = -1, ready = 0, notReady = 1 };

@Pipe({
  name: 'filter'
})
export class FiltroPipe implements PipeTransform {

  transform(value: ITask[], args: any, priority: Priority | string, count: number, ready: Ready): ITask[] {

    let _ready  = null;
    if(ready == Ready.ready) _ready = true;
    else if(ready == Ready.notReady) _ready = false;

    let resul: ITask[] = [];
    for(const elemento of value){

      if (
        elemento.title.toLowerCase().indexOf(args.toLowerCase()) > -1 && 
        (elemento.priority === priority || priority === Priority.all) &&
        (elemento.ready === _ready || _ready == null)
      ){
        resul.push(elemento);
      }
    }
     return resul;
   }

}
