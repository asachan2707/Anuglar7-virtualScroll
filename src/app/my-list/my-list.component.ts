import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.css']
})
export class MyListComponent implements OnInit {

  data = [];
  constructor() { }

  ngOnInit() {
    this.data = this.generateObj(this.data);
  }

  private generateObj(temp) {
    for (let i = 0; i < 9999; i++) {
        const obj = {
            id: 'Product_id-' + (i + 1),
            name: 'Product-' + (i + 1),
            type: (i % 3) === 0 ? 'Electronic' : 'Home-appliances',
            price: Math.random() * (2000 - 200) + 200,
            is_available: (i % 2) === 0 ? true : false
        };
        temp.push(obj);
    }
    return temp;
  }

}
