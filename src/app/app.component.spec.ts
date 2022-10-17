
import { AppComponent } from './app.component';

describe('Test cases performed on App Component', ()=>{

   let appObject = new AppComponent();

   it('to test title returns unit_test', ()=>{
     expect(appObject.title).toBe('unit_test');
   })

   it('test case to check password matches confirm',()=>{
     expect(appObject.checkPassword("aspire","aspire")).toBeTrue();
    // expect(appObject.checkPassword("aspire","Aspire")).toBeFalse();
   })
})