import { Injectable } from '@angular/core';
import { TransferHttpService } from '@gorniv/ngx-transfer-http';
@Injectable({
  providedIn: 'root'
})
export class CommomServiceService {
  private port = '3001';
  private rootPath = 'http://localhost:'+this.port;
  private getDataPath = this.rootPath + '/test/getData';

  parameter: any = {
    params:{},
    responseType: "json"
  }

  constructor(private http: TransferHttpService) { }

  getData(param){
    this.parameter.params = param;
    console.log(this.parameter);
    
    return this.http.get(this.getDataPath,this.parameter);
  }
}