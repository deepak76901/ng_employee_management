import { Component, inject, OnInit } from '@angular/core';
import { RolesComponent } from '../roles/roles.component';
import { DesignationComponent } from '../designation/designation.component';
import { CommonModule } from '@angular/common';
import { MasterService } from '../../services/master.service';
import { ApiResponseType, IDesignations } from '../../models/Interface/roles';

@Component({
  selector: 'app-master',
  standalone: true,
  imports: [RolesComponent, DesignationComponent, CommonModule],
  templateUrl: './master.component.html',
  styleUrl: './master.component.css',
})
export class MasterComponent {
  currentComponent: string = 'roles';

  setCurrentComp(tabName: string) {
    this.currentComponent = tabName;
  }
}
