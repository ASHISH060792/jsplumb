import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DrawingComponent } from './drawing/drawing.component';
import { ElementService } from './element.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, DrawingComponent],
  bootstrap: [AppComponent],
  providers: [ElementService]
})
export class AppModule {}
