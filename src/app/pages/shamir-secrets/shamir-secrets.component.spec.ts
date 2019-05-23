import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShamirSecretsComponent } from './shamir-secrets.component';

describe('ShamirSecretsComponent', () => {
  let component: ShamirSecretsComponent;
  let fixture: ComponentFixture<ShamirSecretsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShamirSecretsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShamirSecretsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
