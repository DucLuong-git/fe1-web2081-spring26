import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  template: `
    <div>
      <h2>Danh sách sản phẩm</h2>
      <table border="1" style="width: 50%; border-collapse: collapse; text-align: left;">
        <thead>
          <tr style="background-color: #f2f2f2;">
            <th style="padding: 8px;">STT</th>
            <th style="padding: 8px;">Tên sản phẩm</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 8px;">1</td>
            <td style="padding: 8px;">Laptop</td>
          </tr>
          <tr>
            <td style="padding: 8px;">2</td>
            <td style="padding: 8px;">Phone</td>
          </tr>
          <tr>
            <td style="padding: 8px;">3</td>
            <td style="padding: 8px;">Tablet</td>
          </tr>
        </tbody>
      </table>
    </div>
  `
})
export class Products {}
