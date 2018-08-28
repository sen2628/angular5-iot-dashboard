import { Component, OnInit, OnDestroy } from '@angular/core';
import { ILocation, AppState, CloudDevice } from '@app/definitions';
import { ChangeDetectorRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActionsService } from '@services/actions.service';
import { IotModuleState } from '@app/iot/iot.module.defs';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss',  '../checkbox-switch.scss']
})
export class PlacesComponent implements OnInit, OnDestroy {

  public locations: Array<ILocation> = [];
  public devices: Array<CloudDevice> = [];

  constructor(
    public chRef: ChangeDetectorRef,
    private store: Store<IotModuleState>,
    public actions: ActionsService,
  ) {
    // Initialize the private variables
  }

  async ngOnInit() {
    this.store.select('iotModule').subscribe(({locations}) => {
      this.locations = locations;
    });
    this.store.select('iotModule').subscribe(({devices}) => {
      this.devices = devices;
    });
  }

  ngOnDestroy () {
    this.chRef.detach();
  }

}
