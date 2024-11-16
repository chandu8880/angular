import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


interface MenuItem {
  menuName: string;
  route?: string
}

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})

export class SideMenuComponent {

  constructor(private router: Router) {}

  menu: MenuItem[] = [{ menuName: 'Dashboard', route: '/home' }];


  navigate(route: string) {
    this.router.navigate([route]);
  }

}
