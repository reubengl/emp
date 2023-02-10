import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.scss']
})
export class EmpAddEditComponent {

  designation: string[] = [
    'Assistant System Engineer Trainee',
    'Assistant System Engineer',
    'System Engineer. ',
    'IT Analyst. ',
    'Post Graduate',
    'Senior Consultant',
    'Principal Consultant'
  ];
  constructor(private _fb: FormBuilder,private _dialogRef: MatDialogRef<EmpAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,){

  }
}
