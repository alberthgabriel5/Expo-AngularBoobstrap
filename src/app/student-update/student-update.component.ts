import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-student-update',
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.css']
})
export class StudentUpdateComponent implements OnInit {

  @Input() studentData:any = { studentId: 0, name:'', age: 0, nationality: 0, major:0};

  studentForm: FormGroup;
  errorMessage: any;

  constructor(private fb: FormBuilder,public rest:RestService,
  private route: ActivatedRoute, private router: Router) {

    this.studentForm = this.fb.group({
      studentId:0,
      name: [this.studentData.name, [Validators.required]],
      age: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]{2,3}$')
      ]),
      
      nationality: ["-1", [Validators.required]],
      major: ["-1", [Validators.required]]
    })

  }

  nationalities:any=[];
  majors:any=[];

  ngOnInit() {
    this.getNationalities();
    this.getMajors();
    this.rest.getStudent(this.route.snapshot.params['studentId']).subscribe((data: {}) => {
      console.log(data);
      this.studentData = data;
    });
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

  updateStudent() {
    this.rest.updateStudent(this.studentData).subscribe((result) => {
      this.router.navigate(['/students']);
    }, (err) => {
      console.log(err);
    });
  }

  backToList(){
    this.router.navigate(['/students']);
  }

  get employeeId() { return this.studentForm.get('studentId'); }
  get name() { return this.studentForm.get('name'); }
  get age() { return this.studentForm.get('age'); }
  get nationality() { return this.studentForm.get('nationality'); }
  get major() { return this.studentForm.get('major'); }

}
