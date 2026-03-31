import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-add-story',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-story.html',
  styleUrl: './add-story.css',
})
export class AddStory {
  addForm: FormGroup;
  addProduct: FormGroup;
  addUser: FormGroup;
  loading= false;
  error: string = '';
  success: string = '';
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,  
  ) {
    this.addForm = this.fb.group({
      title: "",
      age: '',
      hot: "",
    })
    this.addProduct = this.fb.group({
      name: ['', [Validators.required]],
      price: ['', [Validators.required, Validators.min(1000)]],
      category: ['', [Validators.required]],
      author: ['', [Validators.required]],
      views: ['', [Validators.required]],
      image: ['', [Validators.required]],
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
   get author() {
    return this.addProduct.get('author');
  }
   get views() {
    return this.addProduct.get('views');
  }
  get image() {
    return this.addProduct.get('image');
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
    this.loading=true
    this.error = '';
    this.success = '';
    const data = this.addProduct.value
    this.http.post('http://localhost:3000/stories', data).subscribe({
      next: () => {
        this.loading=false
        this.success='thêm thành công'
        this.addProduct.reset()
      },
      error: () => {
        this.loading=false
        this.error='thêm thất bại'
      },
    });
  }
  submitUser() {
    // const data = this.addUser.value
    // this.http.post('http://localhost:3000/stories', data).subscribe({
    //   next: () => {
    //     this.loading = false;
    //     this.success = 'đăng kí thành công';
    //     this.addForm.reset();
    //   },
    //   error: () => {
    //     this.loading = false;
    //     this.error = 'Có lỗi xảy ra';
    //   },
    // });
  }
}

