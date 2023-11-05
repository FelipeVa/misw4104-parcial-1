import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CafesModule } from './cafes/cafes.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, CafesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
