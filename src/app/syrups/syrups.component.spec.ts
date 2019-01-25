import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SyrupsComponent } from './syrups.component';

describe('SyrupsComponent', () => {
  let component: SyrupsComponent;
  let fixture: ComponentFixture<SyrupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SyrupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SyrupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
