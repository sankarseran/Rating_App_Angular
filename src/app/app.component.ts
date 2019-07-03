import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromFavItems from './store/fav.reducers';
import * as favItemsActions from './store/fav.actions';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items: any;
  items$: any;
  rating: number;
  isRandomRating: boolean;
  interval: any;
  constructor(private store: Store<fromFavItems.AppFavItemsState>) {
    this.store.dispatch(new favItemsActions.LoadFavItems());
    this.store.pipe(select(fromFavItems.getFavItems)).subscribe((result) => {
      this.items = result;
    });
  }

  ratingChanged(event, item) {
    if (event && event.target.value) {
      this.items.forEach(value => {
        if (value.name === item.name) {
          const avg = (value.noOfPerson * value.ratingAvg) + Number(event.target.value);
          value.noOfPerson += 1;
          value.ratingAvg = (avg / value.noOfPerson).toFixed(1);
        }
      });
    }
  }

  radomRating(rating, id) {
    this.items.forEach(value => {
      if (value.id === id) {
        const avg = (value.noOfPerson * value.ratingAvg) + rating;
        value.noOfPerson += 1;
        value.ratingAvg = (avg / value.noOfPerson).toFixed(1);
      }
    });
  }

  startRandomRating() {
    this.isRandomRating ? this.isRandomRating = false : this.isRandomRating = true;
    if (this.isRandomRating) {
      this.interval = setInterval(() => {
        const ranRating = Math.floor(Math.random() * 5) + 1;
        const ranId = Math.floor(Math.random() * this.items.length) + 1;
        this.radomRating(ranRating, ranId);
      }, 1000);
    } else {
      if (this.interval) { clearInterval(this.interval); }
    }
  }
}
