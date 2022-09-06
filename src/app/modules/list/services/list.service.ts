import { EventEmitter, Injectable } from '@angular/core';
import { Subscriber, Subscription } from 'rxjs';
import { ListTask } from 'src/app/core/mocks/task.mocks';
import { ITask } from 'src/app/modules/list/interfaces/task';
import { IndexdDBService } from './indexdDB.service';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  //#region Variables
    private Tasks: ITask[] =  [];
    public Task$: EventEmitter<ITask> = new EventEmitter<ITask>();
    public Tasks$: EventEmitter<ITask[]> = new EventEmitter<ITask[]>();
    public ChagerTasks: EventEmitter<ITask[]> = new EventEmitter<ITask[]>();
  //#endregion

  constructor(private dbService: IndexdDBService) { }
  
  get(): ITask[] {
    this.dbService.dato?.subscribe( dato => {this.Tasks = dato; console.log(this.Tasks)});
    return this.Tasks ;
  }

  getEvent() : EventEmitter<ITask[]> {
    return this.ChagerTasks;
  }

  add(t: ITask): void{
    t.id = Math.random() + new Date().getMilliseconds();
    this.Tasks?.push(t);
    this.ChagerTasks.emit(this.Tasks);
    this.dbService.addTaks(t);
  }

  delect(t: ITask){
    let index = this.Tasks?.indexOf(t, 0);
    if(index > -1) {
      this.Tasks?.splice(index, 1);
      this.ChagerTasks.emit(this.Tasks);
    }else{
      alert("Not possible to delect registry");
    }
  }

  modify(t: ITask){
    let index = this.Tasks.findIndex( x =>  x.id === t.id);
    if(index > -1){
      this.Tasks[index]= t;
      this.ChagerTasks.emit(this.Tasks);
    }else{
      alert("Not possible to update registry");
    }
  }
}
