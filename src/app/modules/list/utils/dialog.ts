import { ComponentType } from "@angular/cdk/portal";
import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";

@Injectable({
    providedIn: 'root'
})

export class Dialog {

    constructor(private _matDialog: MatDialog){}

    open(component: ComponentType<any>, _config: any = undefined): void{
        this._matDialog.open(component, _config);
    }
}
