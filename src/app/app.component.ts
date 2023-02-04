import { Component } from '@angular/core';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'interceptorsApp-Angular';

  constructor(private usersService: UsersService) {
    usersService.getUsers().subscribe({
      next: (resp) => console.log(resp),
      error: (err) => console.log('Error en el app component')
    })
  }
}
