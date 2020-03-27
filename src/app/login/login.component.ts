import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { StorageFacade } from '../core/persistence/storage.facade';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public showError: boolean = false;
  public showAlert: boolean = false;
  public loading: boolean = false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private _loginService: LoginService,
    private storage: StorageFacade
    ) { }

  ngOnInit() {
    this._loginService.deslogar();

    this.loginForm = this.formBuilder.group({
      user: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  public login(): void {
    this.loading = true;
    this.showError = false;
    this.showAlert = false;

    const user = this.loginForm.get('user').value;
    const pass = this.loginForm.get('password').value;

    this._loginService.login(user, pass)
            .subscribe(
                next => this.tratarSucesso(next),
                err => this.tratarErro(err)
            );
  }


  private tratarSucesso(next: any): void {
    if (next.length === 0) {
      this.loading = false;
      this.showAlert = true;
      return;
    }

    this.storage.usersStorage = next.pop();
    this.loading = false;
    this.router.navigate(['/']);
  }

  private tratarErro(err: any): void {
    this.loading = false;
    this.showError = true;
  }

  


}
