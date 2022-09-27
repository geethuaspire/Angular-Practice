import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { GetPostService} from '../get-post.service';
import { HttpClientTestingModule} from '@angular/common/http/testing';
describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports:[ HttpClientTestingModule],
      providers:[ GetPostService ]
    })
    .compileComponents();

   
  });

  it('should get all post from getpost', () => {

    const fixture = TestBed.createComponent(HomeComponent);
    const home = fixture.componentInstance;

    spyOn(home,'isLoggedIn').and.returnValue(true);
    spyOn(home,'isUserClickedBtn').and.stub();


    const service = fixture.debugElement.injector.get(GetPostService);
    spyOn()
  });
});
/*
  const obj = {
    fetchPost:()=>{
      api call
    }
  }
  obj.fetchPost:()=> return [];
  obj.fetchPost();
*/
