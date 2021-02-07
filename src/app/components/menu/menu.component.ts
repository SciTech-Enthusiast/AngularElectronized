import { Component, OnInit } from '@angular/core';
import { AppError } from 'src/app/common/app-error';
import { NotFoundError } from 'src/app/common/not-found-error';
import { AppsService } from 'src/app/services/apps.service';
import { App } from 'src/app/types/app';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  apps:App[]
  searchText:string
  constructor(private appsService: AppsService) {
  }

  ngOnInit(): void {
    this.appsService.getAll().subscribe(data => {
      console.log(data)
      this.apps=data as App[]
    }, (error: AppError) => {
      if (error instanceof NotFoundError) {
        // this.form.setErrors(error.originalError);
      }
      else throw error;
    });

  }

}
