import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { StatusesService } from './statuses/statuses.service';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SidebarComponent } from './sidebar/sidebar.component';

// Import the AngularFireModule and the AngularFireDatabaseModule
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { StatusesComponent } from './statuses/statuses.component';

// Define the firebase database configuration keys, get it from your Firebase application console
export const firebaseConfig = {
  apiKey: "AIzaSyD23S59l9QV87oQUg1AfJ5_ZkuUHU0dJsU",
  authDomain: "reactions-d3182.firebaseapp.com",
  databaseURL: "https://reactions-d3182.firebaseio.com",
  projectId: "reactions-d3182",
  storageBucket: "",
  messagingSenderId: "1068512600596"
};

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SidebarComponent,
    StatusesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [StatusesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
