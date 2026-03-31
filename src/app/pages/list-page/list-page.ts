import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
interface books{
  id:number,
  title:string,
  quantity:number,
  coverImage:string,
  genre:string
}
@Component({
  selector: 'app-list-page',
  imports: [RouterModule],
  templateUrl: './list-page.html',
  styleUrl: './list-page.css',
})

export class ListPage {
  Books: books[]=[]
  constructor(private http:HttpClient){}
  ngOnInit():void{
    this.http.get<books[]>(`http://localhost:3000/books`).subscribe({
      next:(data)=>{
        this.Books=data
      },
      error:()=>{

      }
    })

  }
  deleteBook(id:number){
    const confirmdelete=confirm("bạn có chắc muốn xoá")
    if(!confirmdelete) return
    this.http.delete(`http://localhost:3000/books/${id}`).subscribe({
      next:()=>{
        this.Books=this.Books.filter((book)=>book.id !== id)
        alert("xoá thành công")
      },
      error:()=>{
        alert("xoá thất bại")
      }
    })
  }
}
