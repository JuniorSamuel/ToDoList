import { Component, OnInit } from '@angular/core';
import { ListTask } from 'src/app/core/mocks/task.mocks';
import { ITask, Priority } from '../../interfaces/task';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  //#region Variables
    listTask: ITask[] = ListTask;
  //#endregion

  constructor() { }

  ngOnInit(): void {
  }

}
