import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-protegida',
  templateUrl: './protegida.component.html',
  styleUrls: ['./protegida.component.css']
})
export class ProtegidaComponent implements OnInit {
  profileJson: string = 'null';
  constructor(public auth: AuthService) { }

  ngOnInit(): void {
    this.auth.user$.subscribe((profile) => {

      (this.profileJson = JSON.parse(JSON.stringify(profile, null, 2)))
      console.log(this.profileJson);

    });
  }

}
