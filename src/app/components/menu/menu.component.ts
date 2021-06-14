import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { MenuOption } from '../../models/menuOption.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MenuComponent implements OnInit {

  options: MenuOption[] = [];

  constructor(public menuService: MenuService) { }

  async getOptions() {
    this.options = await this.menuService.getLeftOptions();
  }

  ngOnInit() {
    this.getOptions();
  }

}
