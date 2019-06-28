import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from './Config';
import { Observable } from 'rxjs';

@Injectable()
export class ConfigService {
  client: HttpClient;
  configUrl = 'assets/config.json';
  config: Config;

  constructor(private http: HttpClient) { this.client = http; }


  getConfig()
  {
    return this.client.get(this.configUrl);
  }
  


}
