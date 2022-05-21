import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettlementcontentComponent } from './settlementcontent.component';

describe('SettlementcontentComponent', () => {
  let component: SettlementcontentComponent;
  let fixture: ComponentFixture<SettlementcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettlementcontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettlementcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
