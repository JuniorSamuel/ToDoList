import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AddTaskDialogComponent } from '../../component/add-task-dialog/add-task-dialog.component';
import { ViewTaskDialogComponent } from '../../component/view-task-dialog/view-task-dialog.component';
import { ITask, Priority } from '../../interfaces/task';
import { Ready } from '../../pipes/filtro.pipe';
import { ListService } from '../../services/list.service';
import { Dialog } from '../../utils/dialog';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  //#region Variables
    listTask: ITask[] = [];
    searchField: string = '';
    searchPriority: Priority | string = Priority.all;
    searchReady: Ready = Ready.all;
  //#endregion

  constructor(private _dialog: Dialog, private _listService: ListService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.listTask = this._listService.get();
    this._listService.getEvent().subscribe((t: ITask[]) => { 
      this.listTask = t });
  }

  // Abrir Dialog de agregar tarea.
  dialogAdd(): void{
    this._dialog.open(AddTaskDialogComponent);
  }

  dialogView(t: ITask): void{
    this._dialog.open(ViewTaskDialogComponent, {data: t, width: "600px"});
  }

  dialogModify(t: ITask): void{
    this._dialog.open(AddTaskDialogComponent, {data: t});
  }

  dialogDelect(t: ITask){
    this._listService.delect(t);
  }

  // change status ready
  changeReady(t: ITask): void{
    t.ready = !t.ready;
    this._listService.modify(t);
  }
}
