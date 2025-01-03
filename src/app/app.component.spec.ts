import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'testes-angular' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('testes-angular');
  });

  it('shoud apply the value in an input and show the exit after click', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const inputDebugElement = fixture.debugElement.query(
      By.css('[data-testid="input"]')
    );
    expect(inputDebugElement).toBeTruthy();
    const mockInputValue = 'Fake input value';
    inputDebugElement.triggerEventHandler('input', {
      target: {
        value: mockInputValue,
      },
    });

    const btnDebugelement = fixture.debugElement.query(
      By.css('[data-testid="button"]')
    );
    btnDebugelement.triggerEventHandler('click', null);
    fixture.detectChanges();
    const outputDebugElement = fixture.debugElement.query(
      By.css('[data-testid="output"]')
    );
    expect(outputDebugElement.nativeElement.textContent).toContain(
      mockInputValue
    );
  });
});
