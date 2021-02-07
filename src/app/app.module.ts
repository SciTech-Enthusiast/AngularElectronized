import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ElectronCookieTestComponent } from './tmp/components/electron-cookie-test/electron-cookie-test.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { ContentComponent } from './components/content/content.component';
import { AppRoutingModule } from './app-routing.module';
import { BootstrapComponent } from './components/bootstrap/bootstrap.component';
import { PostComponent } from './tmp/components/post/post.component';
import { BackgroundGeneratorComponent } from './tmp/components/background-generator/background-generator.component';
import { ColorsComponent } from './tmp/components/colors/colors.component';
import { AppsfilterPipe } from './tmp/pipes/appsfilter.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ElectronCookieTestComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    ContentComponent,
    BootstrapComponent,
    PostComponent,
    BackgroundGeneratorComponent,
    ColorsComponent,
    AppsfilterPipe
  ],
  imports: [
    BrowserModule,
     // import HttpClientModule after BrowserModule.
     HttpClientModule,
     AppRoutingModule,
     FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
