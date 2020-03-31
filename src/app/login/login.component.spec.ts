import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { LoginService } from './login.service';
import { NavbarModule } from '../navbar/navbar.module';
import { LoginComponentStub as stub } from './login.component.stub';
import { RouterTestingModule } from '@angular/router/testing';
import { StorageFacade } from '../core/persistence/storage.facade';
import { Observable, of } from 'rxjs';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let service: LoginService;
  let storageFacade: StorageFacade;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [NavbarModule, RouterTestingModule],
      providers: [
        { provide: LoginService, useClass: stub },
        { provide: StorageFacade, useClass: stub },
      ]
    })
      .compileComponents()
      .then(() => {
        service = TestBed.get(LoginService);
        storageFacade = TestBed.get(StorageFacade);

        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
      })
  }));

  beforeEach(() => {
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeDefined();
  });

  describe('Dado que o component foi inicializado', () => {
    it('remove os usuários logados...', () => {
      expect(service.deslogar).toBeTruthy();
    });
  });


  describe('Dado que seja executado o login', () => {

    describe('E ocorra tudo certo...', () => {
      beforeEach(() => {
        const result = stub.mockUserReturned()
        spyOn(component, 'login').and.callFake(() => result);
        spyOn(service, 'login').and.callFake(() => of(result));
        spyOn(component, 'tratarSucesso');

        component.login(0);
        component.tratarSucesso(result, 0);
      });

      it('Retorna sucesso... ', () => {
        expect(component.tratarSucesso).toHaveBeenCalled();
      });

    });

    describe('E ocorra erros...', () => {
      beforeEach(() => {
        spyOn(component, 'login').and.callFake(() => []);
        spyOn(service, 'login').and.callFake(() => Observable.throw('error'));
        spyOn(component, 'tratarErro');


        component.login(0);
        component.tratarErro('err');
      });

      it('Retorna Error... ', () => {
        expect(component.tratarErro).toHaveBeenCalled();
      });

    });

  })


});
