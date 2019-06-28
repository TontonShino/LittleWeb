import { Component, OnInit, Input } from '@angular/core';
import { Personne } from '../Personne';
import { MatButton } from '@angular/material';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ConfigService } from '../config.service';
import {PersonnesComponent } from '../personnes/personnes.component';


@Component({
  selector: 'app-createpersonne',
  templateUrl: './createpersonne.component.html',
  styleUrls: ['./createpersonne.component.css'],
  providers:[ConfigService]
})
export class CreatepersonneComponent implements OnInit {
  model: Personne;
  http: HttpClient;
  config: ConfigService;

  private apiUrl = 'https://localhost:44303/api/Personnes';
  constructor(private client: HttpClient, configService: ConfigService) { this.http = client; this.config = configService }

  ngOnInit() {
    this.model = new Personne();
    this.model.nom = 'Robocop';
    this.model.prenom = 'Toty';
    let result = this.config.getConfig();
    console.log(result);
  }

  private onSubmit() {
    console.log(this.model);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    this.http.post<Personne>(this.apiUrl, this.model, httpOptions).subscribe(response => {
      console.log(response);

  });
    // console.log(this.config.getConfig());
  
  }



}
