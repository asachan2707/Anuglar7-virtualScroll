# Anuglar7-virtualScroll
We will use virtual scroll feature available in angular 7

# Add the dependency
npm install @angular/cdk --save

# Add ScrollingModule in app.module
//app.module.ts
import { ScrollingModule } from '@angular/cdk/scrolling';
 
@NgModule({
  imports:      [ ScrollingModule ],
})
export class AppModule { }