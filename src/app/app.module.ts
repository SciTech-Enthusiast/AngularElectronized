import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ElectronCookieTestComponent } from './tmp/components/electron-cookie-test/electron-cookie-test.component';

@NgModule({
  declarations: [
    AppComponent,
    ElectronCookieTestComponent
  ],
  imports: [
    BrowserModule,
     // import HttpClientModule after BrowserModule.
     HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
