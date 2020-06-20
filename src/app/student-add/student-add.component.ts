import { Component, OnInit, Input} from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {

  @Input() studentData = { studentId: 0, name:'', age: 0, nationality: 0, major:0};

  nationalities:any=[];
  majors:any=[];
  

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  disabled =true

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
    this.rest.addStudent(this.studentData).subscribe((result) => {
      this.router.navigate(['/students']);
    }, (err) => {
      console.log(err);
    });
  }

  backToList(){
    this.router.navigate(['/students']);
  }



}
