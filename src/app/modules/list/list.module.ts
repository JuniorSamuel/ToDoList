import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './pages/list/list.component';
import { FiltroPipe } from './pipes/filtro.pipe';
import { MatDialogModule } from "@angular/material/dialog";
import { AddTaskDialogComponent } from './component/add-task-dialog/add-task-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewTaskDialogComponent } from './component/view-task-dialog/view-task-dialog.component';



@NgModule({
  declarations: [
    ListComponent,
    FiltroPipe,
    AddTaskDialogComponent,
    ViewTaskDialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    ListComponent
  ]
})
export class ListModule { }
