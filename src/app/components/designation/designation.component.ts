import { Component, inject } from '@angular/core';
import { ApiResponseType, IDesignations } from '../../models/Interface/roles';
import { MasterService } from '../../services/master.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-designation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css',
})
export class DesignationComponent {
  masterService = inject(MasterService);
  isLoader : boolean = true;

  designationResponse: IDesignations[] = [];
  ngOnInit(): void {
    this.masterService.fetchDesignation().subscribe(
      (result: ApiResponseType) => {
        this.designationResponse = result.data;
        this.isLoader = false;
      },
      (error) => {
        alert(`Api error / Network Down. ${error}`);
        this.isLoader = false;
      }
    );
  }
}
