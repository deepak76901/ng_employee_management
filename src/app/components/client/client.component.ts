import { Component, inject, OnInit } from '@angular/core';
import { Client } from '../../models/Class/Client';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css',
})
export class ClientComponent implements OnInit {
  clientObj: Client = new Client();
  clientList: Client[] = [];

  clientService = inject(ClientService);

  ngOnInit(): void {
    this.loadClients();
  }

  loadClients() {
    this.clientService
      .getAllClients()
      .subscribe((res) => (this.clientList = res.data));
  }

  onSaveClient() {
    this.clientService.addUpdateClient(this.clientObj).subscribe((res) => {
      if (res.result) {
        alert('Client saved Successfully');
        this.loadClients();
        this.clientObj = new Client();
      } else {
        alert(res.message);
      }
    });
  }

  onDelete(id: number) {
    this.clientService.deleteClientById(id).subscribe((res) => {
      this.loadClients();
    });
  }
}
