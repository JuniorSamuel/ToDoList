import { Component, Inject, inject, OnInit } from '@angular/core';
import {  MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ITask } from '../../interfaces/task';

@Component({
  selector: 'app-view-task-dialog',
  templateUrl: './view-task-dialog.component.html',
  styleUrls: ['./view-task-dialog.component.css']
})
export class ViewTaskDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public task: ITask) { }

  ngOnInit(): void {
  }

}
