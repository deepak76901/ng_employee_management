import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IRoles } from '../../models/Interface/roles';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css',
})
export class RolesComponent implements OnInit {
  // ===To fetch anything from api, we need HttpClient instance to fetch

  // ===This is Old way
  // constructor (private http : HttpClient){

  // }

  // ===New Way
  http = inject(HttpClient);

  ngOnInit(): void {
    this.getAllRoles();
  }

  roleList: IRoles[] = [];
  getAllRoles() {
    this.http
      .get('https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles')
      .subscribe((res: any) => {
        this.roleList = res.data;
      });
  }


  /*
  ===Databinding we have 3 things : 1.Interpolation 2.Property Binding 3.Two way data binding (ngModel)

  frameworkName = 'Angular';
  version: number = 18;
  isActive: boolean = false;
  currentDate: Date = new Date();
  selectedState: string = '';
  greetName = '';

  // ===Here I use Event Binding, check html file as well
  showWelcome() {
    alert('Welcome to Angular Tutorial');
  }

  showWelcome2(name: string) {
    alert(`Hi ${name}, Welcome in Angular Tutorial`);
  }

  checkVar (){
    console.log("Updated Var : ",this.frameworkName);
  }
    */
}
