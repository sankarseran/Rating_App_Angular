import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { favItemsReducer } from './store/fav.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { OrderPipe } from './shared/pipes/order.pipe';

@NgModule({
  declarations: [
    AppComponent,
    OrderPipe
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({favItemsReducer}),
    StoreDevtoolsModule.instrument(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
