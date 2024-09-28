import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css',
})
export class RolesComponent {
  // Databinding we have 3 things : 1.Interpolation 2.Property Binding 3.Two way data binding (ngModel)
  frameworkName = 'Angular';
  version: number = 18;
  isActive: boolean = false;
  currentDate: Date = new Date();
  selectedState: string = '';
  greetName = '';

  // Here I use Event Binding, check html file as well
  showWelcome() {
    alert('Welcome to Angular Tutorial');
  }

  showWelcome2(name: string) {
    alert(`Hi ${name}, Welcome in Angular Tutorial`);
  }

  checkVar (){
    console.log("Updated Var : ",this.frameworkName);
  }
}
