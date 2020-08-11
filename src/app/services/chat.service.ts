import { Injectable} from '@angular/core';
import { ApiAiClient } from 'api-ai-javascript/ts/ApiAiClient';
import { environment } from '../../environments/environment';


@Injectable({
    providedIn: 'root'
})
export class chatservice{
     token = environment.dialogflow.angularBot;
     client = new ApiAiClient({accessToken: this.token});

    constructor(){}
        talk(){
                 this.client.textRequest('Who are you!').then(res => console.log(res));
        }
    

}