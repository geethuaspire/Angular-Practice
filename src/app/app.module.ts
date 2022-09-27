import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReipeComponent } from './reipe/reipe.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';

import { FormsModule } from '@angular/forms';
import { SalutationPipe } from './salutation.pipe';
import { SizechartPipe } from './sizechart.pipe';
import { DirectivesComponent } from './directives/directives.component';
import { HighlightDirective } from './highlight.directive';



@NgModule({
  declarations: [
    AppComponent,
    ReipeComponent,
    RecipeDetailsComponent,
    SalutationPipe,
    SizechartPipe,
    DirectivesComponent,
    HighlightDirective,
    
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
