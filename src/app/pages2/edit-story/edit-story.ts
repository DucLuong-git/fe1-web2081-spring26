import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-story',
  imports: [ReactiveFormsModule],
  templateUrl: './edit-story.html',
  styleUrl: './edit-story.css',
})
export class EditStory {
editForm: FormGroup;
id: any;
author: any;
name: any;
image: any;
views: any;
category: any;
price: any;
constructor(
  private route: ActivatedRoute,
  private fb: FormBuilder,
  private http: HttpClient,
  private router: Router
) {
    this.editForm = this.fb.group({
      name: ['', [Validators.required]],
      price: ['', [Validators.required, Validators.min(1000)]],
      category: ['', [Validators.required]],
      author: ['', [Validators.required]],
      views: ['', [Validators.required]],
      image: ['', [Validators.required]],
    });
  }
ngOnInit(){
  this.id = this.route.snapshot.paramMap.get('id')

    this.http.get(`http://localhost:3000/stories/${this.id}`).subscribe({
      next:(data:any)=>{
        this.editForm.patchValue({
          title:data.title
        })
      },
      error:()=>{
         alert("loi")
      }
    })
}

submitForm(){
  if(!this.id) return
 const data=this.editForm.value
 this.http.put(`http://localhost:3000/stories/${this.id}`,data).subscribe({
  next:()=>{
    alert("cập nhật thành công")
    this.router.navigateByUrl('/stories')
  },
  error:()=>{
    alert('sua that bai')
  }
 })
}
}