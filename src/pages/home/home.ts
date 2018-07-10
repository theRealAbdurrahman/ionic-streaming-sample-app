import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';


import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    private streaming: StreamingMedia,
    private alert: AlertController

  ) {

  }
  startVideo() {
    let options: StreamingVideoOptions = {

      successCallback: () => {
        this.alert.create({
          title: "success",
          buttons: ['OK']
        })
      },
      errorCallback: (e) => {
        this.alert.create({
          title: "error",
          subTitle: e,
          buttons: ['OK']
        })
      },
      orientation: 'landscape',

    }
    this.streaming.playVideo('https://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_30mb.mp4', options)
  }

}
