import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubjectUnderstandingComponent } from './subject-understanding/subject-understanding.component';
import { DataInputComponent } from './data-input/data-input.component';
import { DataOutputComponent } from './data-output/data-output.component';
import { FormsModule } from '@angular/forms';
import { ConsumerSubjectComponent } from './consumer-subject/consumer-subject.component';
import { BehaviourSubjectComponent } from './behaviour-subject/behaviour-subject.component';
import { ReplaySubjectComponent } from './replay-subject/replay-subject.component';
import { AsynchronousSubjectComponent } from './asynchronous-subject/asynchronous-subject.component';
import { CreationalOperatorsComponent } from './creational-operators/creational-operators.component';
import { MathematicaloperatorComponent } from './mathematicaloperator/mathematicaloperator.component';
import { JoinOperatorComponent } from './join-operator/join-operator.component';
import { TransformationOperatorComponent } from './transformation-operator/transformation-operator.component';
import { FilterOperatorComponent } from './filter-operator/filter-operator.component';
import { NgOnChangeDemoComponent } from './ng-on-change-demo/ng-on-change-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    SubjectUnderstandingComponent,
    DataInputComponent,
    DataOutputComponent,
    ConsumerSubjectComponent,
    BehaviourSubjectComponent,
    ReplaySubjectComponent,
    AsynchronousSubjectComponent,
    CreationalOperatorsComponent,
    MathematicaloperatorComponent,
    JoinOperatorComponent,
    TransformationOperatorComponent,
    FilterOperatorComponent,
    NgOnChangeDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
