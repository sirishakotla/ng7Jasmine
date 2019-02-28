import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {  // define a test description
  let appCompnt: AppComponent;
  //runs before each test
  beforeEach(() => {   
   appCompnt = new AppComponent();
  });

  //runs after each test
  afterEach(() => {
    //clean up here

  })

  it('should contain specified products', ()=> {  // 
    const prods = appCompnt.getProducts();
   // expect(prods).to
    expect(prods).toContain("1");
    expect(prods).toContain("3");
  })

  it('should add new  product in products', ()=> {
    const newProd = "4";
    appCompnt.addProducts(newProd);
    expect(appCompnt.products).toContain(newProd);
  })

  
  // beforeEach(async(() => {   
  //   TestBed.configureTestingModule({
  //     declarations: [
  //       AppComponent
  //     ],
  //   }).compileComponents();
  // }));
  // it('should create the app', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app).toBeTruthy();
  // });

  // it(`should have as title 'a7-unit-testing'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('a7-unit-testing');
  // });

  // it('should render title in a h1 tag', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to a7-unit-testing!');
  // });

});
