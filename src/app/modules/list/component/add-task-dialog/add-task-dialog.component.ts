import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ITask, Priority } from '../../interfaces/task';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-add-task-dialog',
  templateUrl: './add-task-dialog.component.html',
  styleUrls: []
})
export class AddTaskDialogComponent implements OnInit {

  title: string = "Add";
  formTask = this._formBuilder.group({
    id: 0,
    title: ['', Validators.required],
    priority: [Priority.normal, Validators.required],
    description: [''],
    ready: false
  });

  constructor(
    private _formBuilder: FormBuilder, 
    private listService: ListService,
    private dialogRef: MatDialogRef<AddTaskDialogComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: ITask | undefined = undefined) 
  { 
    if (data) this.formTask.setValue(data);
  }

  ngOnInit(): void {
    if(this.data) this.title = "Modify"
  }

  registry(){
    let t: ITask = this.formTask.value;
    if(this.formTask.valid){
      if(!this.data) this.add(t);
      else this.modify(t);
    }
  }
  add(t: ITask): void {
    this.listService.add(t);
    this.dialogRef.close();
  }
  modify(t: ITask) {
    this.listService.modify(t);
    this.dialogRef.close();
  }
}
