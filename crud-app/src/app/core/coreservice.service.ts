import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})
export class CoreserviceService {

  constructor(private _snackBar: MatSnackBar) { }
  openSnackBar(message:any,action:any) {
    this._snackBar.open(message,action, {
      duration:2500,
      verticalPosition:'top',
      // horizontalPosition:'right'
    });
  }
}
