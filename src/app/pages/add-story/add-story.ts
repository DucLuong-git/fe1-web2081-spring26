import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-story',
  imports: [ReactiveFormsModule],
  templateUrl: './add-story.html',
  styleUrl: './add-story.css',
})
export class AddStory {
  addForm: FormGroup;
  addProduct: FormGroup;
  addUser: FormGroup;
  constructor(private fb: FormBuilder) {
    this.addForm = this.fb.group({
      title: "",
      age: '',
      hot: "",
    })
    this.addProduct = this.fb.group({
      name: ['', [Validators.required]],
      price: ['', [Validators.required, Validators.min(1000)]],
      category: ['', [Validators.required]],
    })
    this.addUser = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }
  get name() {
    return this.addProduct.get('name');
  }
  get price() {
    return this.addProduct.get('price');
  }
  get category() {
    return this.addProduct.get('category');
  }
  get username() {
    return this.addUser.get('username');
  }
  get email() {
    return this.addUser.get('email');
  }
  get password() {
    return this.addUser.get('password');
  }

  submitForm() {
    console.log(this.addForm.value);
  }
  submitProduct() {
    if (this.addProduct.invalid) {
      this.addProduct.markAllAsTouched();
      return;
    }
    console.log(this.addProduct.value);
  }
  submitUser() {
    if (this.addUser.invalid) {
      this.addUser.markAllAsTouched();
      return;
    }
    console.log(this.addUser.value);
  }
}

