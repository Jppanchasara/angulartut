import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CoreserviceService } from '../core/coreservice.service';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.css']
})
export class EmpAddEditComponent  implements OnInit{
  empForm: FormGroup;
  education: string[] = [
    'Matric',
    'Diploma',
    'Intermediate',
    'Graduate',
    'Post Graduate'
  ];
  constructor(
    private _fb: FormBuilder ,
    private _empService:EmployeeService ,
    private _dialogRef:MatDialogRef<EmpAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreserviceService
   ) {
    this.empForm = this._fb.group({
      firstName: '',
      lastName: '',
      email: '',
      dob: '',
      gender: '',
      education: '',
      company: '',
      experience: '',
      package: '',
    })
  }
  ngOnInit(): void {
    this.empForm.patchValue(this.data)
    
  }
  onFormSubmit(){
    if(this.empForm.valid){
      if(this.data){
        // console.warn(this.empForm.value);
      this._empService. updateEmployee(this.data.id,this.empForm.value).subscribe({
        next:(val:any)=>{
          this._coreService.openSnackBar('Employee detail updated!','done');
          // alert("Employees detail updated! ");
          this._dialogRef.close(true);
        },
        error:(err:any)=>{
          console.warn(err);
        }
      })

      }else{
        // console.warn(this.empForm.value);
      this._empService.addEmployee(this.empForm.value).subscribe({
        next:(val:any)=>{
          this._coreService.openSnackBar('Employee added successfully','done');
          // alert("Employees added successfully");
          this._dialogRef.close(true);
        },
        error:(err:any)=>{
          console.warn(err);
        }
      })

      }
      
    }
  }

}
