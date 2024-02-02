import { Component, OnInit } from '@angular/core';
import {dataFake} from '../../data/dataFake'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  id:string[]=["1","2","3","4"]
  title:string[]=[]
  photoCover:string[]=[]
  description:string[]=[]

  constructor() { }

  ngOnInit(): void {
    this.setValues()
  }

  setValues(){
    for(let i = 0;i<dataFake.length;i++) {
      const result = dataFake.filter(article => article.id == this.id[i])[0]
      this.title[i] = result.title
      this.photoCover[i] = result.photo
      this.description[i] = result.description
    }
  }

}
