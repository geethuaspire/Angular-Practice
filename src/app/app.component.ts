import { HttpClient } from "@angular/common/http";
import { Component, OnInit, VERSION } from "@angular/core";
import { Observable, of, from, pipe } from "rxjs";
import { map, tap, share } from "rxjs/operators";
export class Person {
  name: string;
}
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  name = "Angular " + VERSION.major;
  loading: boolean = false;
  constructor(private http: HttpClient) {}
  ngOnInit() {
    //------start -from and of operator ----------
    // converting an object to observable
    const person: Person = {
      name: "david"
    };
    const personObs: Observable<Person> = of(person);
    personObs.subscribe(data => {
      console.log("person", data);
    });

    //converting a string to observable
    const strObs: Observable<string> = of("bharat");
    strObs.subscribe(data => {
      console.log("person string", data);
    });

    // converting romise to observable
    const personPromise: Promise<Person> = Promise.resolve(person);
    const persObs = from(personPromise);
    persObs.subscribe(data => {
      console.log("person promise", data);
    });

    //------end -from and of operator ----------

    //2.) map  & tap operator
    const source = of("david");
    source
      .pipe(
        map(data => {
          return data.toUpperCase();
        })
      )
      .subscribe(data => {
        console.log("mapped object", data);
      });

    // tap does not make changes to actual stream when ever we dont want to change the data.. we can log the data..or may be want to send some signal to some servce and we dont want to maipulate the data..
    const source2 = of("david");
    source2
      .pipe(
        tap(data => {
          console.log(data.toUpperCase());
          return data.toUpperCase();
        })
      )
      .subscribe(data => {
        console.log("tapped object", data);
      });

    // making use of share operator
    const request = this.getPosts();
    this.setLoadingSpinner(request);
    request.subscribe(data => {
      console.log("data for posts", data);
    });
    request.subscribe(data => {
      console.log("data for posts again", data);
    });
    // this.getPosts().subscribe(data => {
    //   console.log("suscriing again", data);
    // });
    // this.getPosts().subscribe(data => {
    //   console.log("suscriing again..", data);
    // });
  }

  setLoadingSpinner(observable) {
    this.loading = true;
    observable.subscribe(data => {
      this.loading = false;
      console.log("data for posts inside spinner logic", data);
    });
  }

  getPosts() {
    return this.http
      .get("https://jsonplaceholder.typicode.com/posts")
      .pipe(share());
  }
}
