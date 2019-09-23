import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropComponent } from './dragdrop/dragdrop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatrixComponent } from './matrix/matrix.component';
import { JokerComponent } from './joker/joker.component';
import { PulpFictionComponent } from './pulpfiction/pulpfiction.component';

@NgModule({
  declarations: [
    AppComponent, DragDropComponent, MatrixComponent, JokerComponent, PulpFictionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
