import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { DataService } from 'src/app/service/data.service';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  public totalItem : number = 0;
  public searchTerm !: string;
  isCollapsed: boolean | undefined;
  router: any;
  content: any;
  constructor(private cartService : CartService) { }
  
  get token() {
    return localStorage.getItem('token');
  }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
  }

  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
  }
  
  logout() {
    localStorage.clear();
    this.router.navigate(['']);
  }  
}
