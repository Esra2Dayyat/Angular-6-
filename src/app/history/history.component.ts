import { Component, OnInit } from '@angular/core';
import { ScanverfyService } from '../scanverfy.service';
import { Search } from '../search';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  bindtable = false;
    resultsearch:Search[];
  startdate: string;
  message;
  isloading =true ;


  enddate: string;
  constructor(private Searchservive:ScanverfyService) {
   this.resultsearch = [new Search( )];
  
  }
  search() {
    this.Searchservive.search(this.startdate, this.enddate).subscribe((data:any ) => {
      this.resultsearch = data.items;
      this.isloading= false;

      console.log(data) ;
    },
      error => { this.message = error.error }
    );
  }

  ngOnInit() {
  }

}
