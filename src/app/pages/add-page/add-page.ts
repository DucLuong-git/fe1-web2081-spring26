import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-page',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-page.html',
  styleUrl: './add-page.css',
})
export class AddPage {
  addBook:FormGroup;
  constructor(
    private fb:FormBuilder,
    private http:HttpClient,
  ){
    this.addBook=this.fb.group({
      title:["",Validators.required],
      quantity:["",Validators.required],
      coverImage:"",
      genre:""
    })
  }
  get title(){
    return this.addBook.get("title")
  }
  get quantity(){
    return this.addBook.get("quantity")
  }
  get coverImage(){
    return this.addBook.get("coverImage")
  }
  get genre(){
    return this.addBook.get("genre")
  }
  submitBook(){
    const data=this.addBook.value
    this.http.post(`http://localhost:3000/books`,data).subscribe({
      next:()=>{
        alert("thêm thành công")
        this.addBook.reset()
      },
      error:()=>{
        alert("thêm thất bại")
      }
    })
  }
}
