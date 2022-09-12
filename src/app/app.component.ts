import { Component } from '@angular/core';
import { DataService } from './service/data.service';
import { ApiResponse, Data } from './models/data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'table';
  list: Data[];
  listToDisplay: Data[];
  constructor(private dataService: DataService) {
  }
  ngOnInit(): void {
    this.getDatas();
  }

  getDatas() {
    this.dataService.getDataFromModel()
        .then((resolve: any) => {
          this.list = resolve.response.data;
          this.listToDisplay = this.list;
        })
        .catch(() =>{
          console.log('Something went wrong:(')
        });
  }
  filter(e: KeyboardEvent) {
    let text: any; 
    e.target ? text = e.target : null;
    this.listToDisplay = this.list.filter(x => x.description.indexOf(text.value) !== -1);
  }
}
