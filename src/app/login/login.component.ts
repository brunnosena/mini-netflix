import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public loading: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private _loginService: LoginService
    ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  public login(): void {
    this.loading = true;

    const user = this.loginForm.get('email').value;
    const pass = this.loginForm.get('password').value;

    this._loginService.login(user, pass)
            .subscribe(
                next => this.tratarSucesso(next),
                err => this.tratarErro(err)
            );
  }


  private tratarSucesso(next: any): void {
    console.log(next)
  }

  private tratarErro(err: any): void {
    console.log(err)
  }

  


}
