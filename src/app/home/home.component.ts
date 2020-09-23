import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompleterService, CompleterData } from 'ng2-completer';
import { People } from '../modelos/people';
import { HttpService } from '../services/http.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  providers: [HttpService]
})
export class HomeComponent implements OnInit {


  people: People[] = [];

  public settings = {
    columns: {
      name: {
        title: 'Name',
        filter: false
      },
      height: {
        title: 'Height',
        filter: false
      },
      skin_color: {
        title: 'Skin Color',
        filter: false
      },
      birth_year: {
        title: 'Birth Year',
        filter: false
      },
      mass: {
        title: 'Mass',
        filter: false
      },
      gender: {
        title: 'Gender',
        filter: false
      }
    }
  };

  constructor(private _rest: HttpService, private router: Router) {

  }

  ngOnInit(): void {
    this.getPeople();
  }

  getPeople(): void {
    this._rest.getPeople().subscribe((resp: any) => {
      this.people = resp.results;
      console.log(this.people);
    });
  }



}
