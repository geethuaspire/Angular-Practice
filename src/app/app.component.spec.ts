import { AppComponent } from "./app.component"

describe('Test Cases Performed On App Component',()=>{
  let appObject = new AppComponent();
     it('to test title variable returns RXJS Demo',()=>{
      
     expect(appObject.title).toBe('Rxjs Demo')
     })
     it('to check password matches with confirm password',()=>{
      // expect(appObject.checkPassword("aspire","aspire")).toBeTrue();
    expect(appObject.checkPassword("aspire","asire")).toBeFalse();
     })
})