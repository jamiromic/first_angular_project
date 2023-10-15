import { Component, OnInit } from '@angular/core';
import { IArticoli } from 'src/app/models/Articoli';
import { ArticoliService } from 'src/services/articoli.service';

@Component({
  selector: 'app-grid-articoli',
  templateUrl: './grid-articoli.component.html',
  styleUrls: ['./grid-articoli.component.css']
})
export class GridArticoliComponent implements OnInit{

  $articoli : IArticoli[] = [];

  constructor(private articoliService: ArticoliService) {}

  ngOnInit(): void {
      
    this.$articoli = this.articoliService.getArticoli();
  }

  handleEdit = (codart: string) => {
    console.log("Cliccato tasto modifica del codice " + codart);
  }

  handleDelete = (codart: string) => {
    console.log("Cliccato tasto elimina del codice " + codart);

    this.$articoli.splice(this.$articoli.findIndex(x => x.codart === codart), 1);
  }


}
