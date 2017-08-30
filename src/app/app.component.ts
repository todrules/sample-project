import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DashboardComponent } from '../widgets/dashboard/dashboard.component';
import { PageSpeed } from '../widgets/pagespeed/speed';
import { Rank } from '../widgets/rank/rank';
import { PaymentComponent } from '../widgets/payment/payment.component';
import { Observable } from 'rxjs/Observable';
import { VoiceService } from '../services/voices.service';
import { NetComponent } from '../widgets/neuralnet/net.component';
import { TabsPage } from '../widgets/tabs/tabs';

declare var SpeechSynthesisUtterance: any;
declare var SpeechSynthesis: any;
declare var SpeechSynthesisVoice: any;

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  speechData: string;
  public speechData$: Observable<string>;
  voices: Array<any> = [];
  utterance: any;
  utteranceMaker: typeof SpeechSynthesisUtterance = SpeechSynthesisUtterance;
  rootPage: any = DashboardComponent;

  pages: Array<{ title: string, component: any }>;
  utterances = [
    `You shall not pass! Fly, you fools!
    `,
    `I'm a lot more at peace 
     trust me
     I'm a lot more at peace
     trust me 
     I'm a lot more at 
     Trust me
     I'm a lot more at 
     Trust me
     I'm a lot more at 
     Trust me
     I'm a lot more 
     Trust me
     I'm a lot more 
     Trust me
     I'm a lot more
     trust me
     I'm a lot
     trust me
     I'm a lot
     trust me
     I'm a lot
     trust me
     I'm a lot
     trust me
    `,
    `it's happening to me 
     it's happening to me
     it's happening to me
     it's happening to me
     it's happening to me
     it's happening to me
     it's happening to me
     it's happening to me
     it's happening to me
     it's happening to me
    `,
    `They're climbing all over my walls 
     trust me
     They're hiding under my bed
     Trust me 
     They're hiding in the shadows
     Trust me 
     They're taking over the world
     Trust me
     I have proof
     Trust me
     I have proof
     Trust me
     I have proof
     trust me
    `,
    `so don't be selfish 
     or help me
     so don't be selfish
     or help me
     so don't be selfish 
     or help me
     so don't be selfish 
     or help me
     so don't help me
     so don't help me
     so don't help me
     so don't help me
    `,
    `being scared times a thousand
     being scared times a thousand
     being scared times a thousand
     times a thousand
     times a thousand
     times a thousand
     times a thousand
    `,
    `I'm a lot more at peace knowing
     that it's not aliens
     I'm a lot more at peace
     that it's not trust me
     I'm a lot more trust me
     so don't be at peace
     knowing that it's aliens 
     I'm a lot more knowing
     that it's aliens
     so don't be selfish
     I'm a lot more
     trust me 
     or help me
     i'm a lot more scared
     i'm a lot more scared
     i'm a lot more scared
    `,
    `i'm a lot more scared
     times a thousand
     a lot more times a thousand
     a lot more times a thousand
     a lot more times a thousand
     more times a thousand
     more times a thousand
     more times a thousand
     times a thousand
     times a thousand
     times a thousand
    `
  ];
  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private voiceService: VoiceService) {
    this.initializeApp();
    this.speechData = '';


    this.pages = [
      { title: 'Dashboard', component: DashboardComponent },
      { title: 'Payment', component: PaymentComponent },
      { title: 'Page Speed', component: PageSpeed },
      { title: 'Website Rank', component: Rank },
      { title: 'Neural Net', component: TabsPage },
    ];

  }

  initializeApp () {
    this.platform.ready().then((readySource) => {
    this.playGreeting();
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      if (readySource === 'cordova') {
        this.statusBar.styleDefault();
        this.splashScreen.hide();
      }
    });
  }

  playGreeting() {
    this.utterance = this.utterances[0];
    this.voiceService.populateVoiceList();
    this.voiceService.playChat(this.utterance);
  }

  openPage (page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
