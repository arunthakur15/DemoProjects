import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  
  Product:any = [];
  filteredProducts:any = [];
  typeahead: FormControl = new FormControl();
  suggestions: any = []; 

  constructor(private apiService: ApiService) { 
    this.readProduct();
  }

  ngOnInit() {}

  suggest() {
    if(this.typeahead.value){
      this.suggestions = this.Product
      .filter(c => c.name.startsWith(this.typeahead.value));
    }else{
      this.suggestions = [];
    }
  }

  readProduct(){
    this.apiService.getProducts().subscribe((data) => {
     this.Product = data;
    })    
  }

  removeProduct(product, index) {
    if(window.confirm('Are you sure?')) {
        this.apiService.deleteProduct(product._id).subscribe((data) => {
          this.Product.splice(index, 1);
        }
      )    
    }
  }

  searchProduct(id){
    console.log(id);
    this.apiService.getProduct(id).subscribe((data) => {
      console.log(data);
      this.Product = [data];
     })  
  }
  

}