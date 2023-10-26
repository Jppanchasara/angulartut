import { Component,OnInit ,ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmpAddEditComponent } from './emp-add-edit/emp-add-edit.component';
import { EmployeeService } from './services/employee.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { CoreserviceService } from './core/coreservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'crud-app';
  displayedColumns: string[] = [
    'id',
    'firstName',
  'lastName',
  'email',
  'dob',
  'gender',
  'education',
  'company',
  'experience',
  'package',
  'action'
];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private _dialog:MatDialog ,

    private _empService:EmployeeService,
    private _coreServices:CoreserviceService
     ){}
  ngOnInit(): void {
    this.getEmployeeListBuilder();
    
  }

  openAddEditEmpForm(){
    const diallofRef= this._dialog.open(EmpAddEditComponent);
    diallofRef.afterClosed().subscribe({
      next:(val)=>{
        if(val){
          this.getEmployeeListBuilder();
        }
      }
    })
  }
  getEmployeeListBuilder(){
    this._empService.getEmployeeList().subscribe({
      next:(res)=>{
        this.dataSource=new MatTableDataSource(res);
        this.dataSource.sort=this.sort;
        this.dataSource.paginator=this.paginator;
        console.warn(res);
        // this.getEmployeeListBuilder();


      },
      error:(err)=>{
        console.warn(err);
      }
    })

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  deleteEmpoloyee(id:number){
    this._empService.deleteEmployee(id).subscribe({
      next:(res)=>{
        this._coreServices.openSnackBar('Employee deleted!',"done");
        // alert('Employess delected!');
        this.getEmployeeListBuilder();
      },
      error:console.log,
    })
  }
  openEditEmpForm(data:any){
  
  const diallofRef= this._dialog.open(EmpAddEditComponent,{ data,
  });
  diallofRef.afterClosed().subscribe({
    next:(val)=>{
      if(val){
        this.getEmployeeListBuilder();
      }
    }
  })
    
  }
}
