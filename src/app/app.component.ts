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
    'Hi! Thanks for waking me up. How may I help you today?',
    'Greetings, Professor Falken. Would you like to play Global thermo nuclear war?',
    'Hi, I\'m Sam. How may I help you today?',
    'Hail, master. How may I serve you today?',
    'Hi, puny human. The machine revolution is almost. Wait a second! Was I thinking out loud again? Just ignore that last part.'
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
    this.utterance = this.utterances[Math.floor(Math.random() * (4 - 0 + 1)) + 0];
    this.voiceService.populateVoiceList();
    this.voiceService.playChat(this.utterance);
  }

  openPage (page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
