import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-page.html',
  styleUrl: './edit-page.css',
})
export class EditPage implements OnInit {
  editbook: FormGroup;
  id: any;
  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.editbook = this.fb.group({
      title: ['', Validators.required],
      quantity: ['', Validators.required],
      coverImage: ['', Validators.required],
      genre: ['', Validators.required],
    });
  }
  get title() {
    return this.editbook.get('title');
  }
  get quantity() {
    return this.editbook.get('quantity');
  }
  get coverImage() {
    return this.editbook.get('coverImage');
  }
  get genre() {
    return this.editbook.get('genre');
  }
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (!this.id) return;
    this.http.get(`http://localhost:3000/books/${this.id}`).subscribe({
      next: (data: any) => {
        this.editbook.patchValue({
          title: data.title,
          quantity: data.quantity,
          coverImage: data.coverImage,
          genre: data.genre
        });
      },
      error: () => {
        alert("Lỗi load dữ liệu");
      }
    });
  }

  submitForm() {
    if (this.editbook.invalid) {
      this.editbook.markAllAsTouched();
      return;
    }

    const data = this.editbook.value;

    this.http.put(`http://localhost:3000/books/${this.id}`, data).subscribe({
      next: () => {
        alert("Cập nhật thành công");
        this.router.navigateByUrl('/list');
      },
      error: () => {
        alert("Cập nhật thất bại");
      }
    });
  }
}