import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  nimi : string;
  tervehdys : string;
  eurot : number = 10;

  ostos : string;
  ostokset : string[] = ["Maitoa", "Kahvia","Omenoita","Hammastahnaa"]

  sanoHeippa = () : void => {
    
    this.tervehdys = `Heippa, ${this.nimi}!`;

  }

  lisaaOstos = () : void => {

    this.ostokset.push(this.ostos);

  }


  ostoksiaYhteensa = () : number => {

    return this.ostokset.length;


  }
}
