import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-student-add-validate',
  templateUrl: './student-add-validate.component.html',
  styleUrls: ['./student-add-validate.component.css']
})
export class StudentAddValidateComponent implements OnInit {
  
  nationalities:any=[];
  majors:any=[];

  studentForm: FormGroup;
  errorMessage: any;

  constructor(private fb: FormBuilder, private route: ActivatedRoute,
    private rest:RestService, private router: Router) { 

      
      this.studentForm = this.fb.group({
        studentId: 0,
        name: ['', [Validators.required]],
        age: new FormControl('', [
          Validators.required,
          Validators.pattern('^[0-9]{2,3}$')
        ]),
        
        nationality: ["-1", [Validators.required]],
        major: ["-1", [Validators.required]]
    })


  }

  ngOnInit() {
    this.getNationalities();
    this.getMajors();
  }

  getNationalities() {
    this.nationalities = [];
    this.rest.getNationalities().subscribe((data: {}) => {
      console.log(data);
      this.nationalities = data;
    });
  }

  getMajors() {
    this.majors = [];
    this.rest.getMajors().subscribe((data: {}) => {
      console.log(data);
      this.majors = data;
    });
  }

  addStudent() {

    if (!this.studentForm.valid) {
      return;
    }

    this.rest.addStudent(this.studentForm.value).subscribe((result) => {
      this.router.navigate(['/students']);
    }, (err) => {
      console.log(err);
    });
  }



  get employeeId() { return this.studentForm.get('studentId'); }
  get name() { return this.studentForm.get('name'); }
  get age() { return this.studentForm.get('age'); }
  get nationality() { return this.studentForm.get('nationality'); }
  get major() { return this.studentForm.get('major'); }

}
