import { Router } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})

export class ProductCreateComponent implements OnInit {  
  submitted = false;
  productForm: FormGroup;
  ProductProfile:any = ['Finance', 'BDM', 'HR', 'Sales', 'Admin']
  
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
  ) { 
    this.mainForm();
  }

  ngOnInit() { }

  mainForm() {
    this.productForm = this.fb.group({
      name: ['', [Validators.required]],
      cost: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      quantity: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      price: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    })
  }


  // Getter to access form control
  get myForm(){
    return this.productForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.productForm.valid) {
      return false;
    } else {
      this.apiService.createProduct(this.productForm.value).subscribe(
        (res) => {
          console.log('Product successfully created!')
          this.ngZone.run(() => this.router.navigateByUrl('/product-list'))
        }, (error) => {
          console.log(error);
        });
    }
  }

}
