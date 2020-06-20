import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students:any = [];

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }


  ngOnInit() {

    this.getStudents();
    
  }

  getStudents() {
    this.students = [];
    this.rest.getStudents().subscribe((data: {}) => {
      console.log(data);
      this.students = data;
    });
  }

  add() {
    this.router.navigate(['/student-add-validate']);
  }

  delete(id) {
    this.rest.deleteStudent(id)
      .subscribe(res => {
          this.getStudents();
        }, (err) => {
          console.log(err);
        }
      );
  }

}
