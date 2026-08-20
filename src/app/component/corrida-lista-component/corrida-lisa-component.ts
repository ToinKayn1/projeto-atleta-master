import { Component } from '@angular/core';
import { CorridaService } from '../../corrida/corrida-service';
import { Corridas } from '../../models/Corrida';

@Component({
  selector: 'app-corrida-lisa-component',
  imports: [],
  templateUrl: './corrida-lisa-component.html',
  styleUrl: './corrida-lisa-component.css',
})
export class CorridaLisaComponent {
  constructor(private corridaService: CorridaService){}
}
