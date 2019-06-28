import { Component, OnInit } from '@angular/core';
import { Personne } from '../Personne';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormControl, FormGroup, FormBuilder, Validator } from '@angular/forms';




@Component({
  selector: 'app-personnes',
  templateUrl: './personnes.component.html',
  styleUrls: ['./personnes.component.css']
})
export class PersonnesComponent implements OnInit {
  personnes: Personne[];
  public personnesApi: Personne[];
  columnsToDisplay = ['Id', 'Prenom', 'Nom'];
  private apiUrl = 'https://localhost:44303/api/Personnes';
  personneToAdd: Personne;



  constructor(private http: HttpClient) {

    const headers = new HttpHeaders({ 'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*' });
    const options = {  headers };

    this.updatePersonnes(http);

    }

  ngOnInit() {

    this.personnes = [
      {id : 1, nom : 'Toto', prenom: 'Gertrude'},
      {id: 2, nom: 'Hamon', prenom: 'Benoit'}
    ];

  }

  updatePersonnes( http: HttpClient): void {
    http.get<Personne[]>(this.apiUrl).subscribe(
      result => {
        console.log(result);
        this.personnesApi = result;
      }, error => console.log(error));
  }
  createPersonne(): void {

  }


}
