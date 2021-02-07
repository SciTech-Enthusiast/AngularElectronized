import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BootstrapComponent } from './components/bootstrap/bootstrap.component';
import { ContentComponent } from './components/content/content.component';
import { BackgroundGeneratorComponent } from './tmp/components/background-generator/background-generator.component';
import { ColorsComponent } from './tmp/components/colors/colors.component';
import { ElectronCookieTestComponent } from './tmp/components/electron-cookie-test/electron-cookie-test.component';
import { PostComponent } from './tmp/components/post/post.component';

const routes: Routes = [
  { path: 'content', component: ContentComponent },
  { path: 'rest-api-test', component: PostComponent },
  { path: 'github-api-test', component:  ElectronCookieTestComponent},
  { path: 'colors-test', component:  ColorsComponent},
  {path:'background-generator-test',component:BackgroundGeneratorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }