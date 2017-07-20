import { Injectable } from '@angular/core';
import { WindowRefService } from './window-ref.service';

declare var SpeechSynthesisUtterance: any;
declare var SpeechSynthesis: any;
declare var SpeechSynthesisVoice: any;

@Injectable()
export class VoiceService {
  private _window: Window;
  private voices: Array<any> = [];
  private synth: any;
  utterance: any;
  utteranceMaker: typeof SpeechSynthesisUtterance = SpeechSynthesisUtterance;

  constructor() {
    this.synth = (window as any).speechSynthesis;

  }

  populateVoiceList () {
    this.voices = (window as any).speechSynthesis.getVoices();
    if (this.synth.onvoiceschanged === undefined) {
      this.populateVoiceList();
    }
    return this.voices;
  }

  public playChat (msg) {
    (window as any).speechSynthesis.cancel();
    (window as any).speechSynthesis.speak(this.createUtterance(msg));
    (window as any).speechSynthesis.resume();
  };

  public createUtterance (text: string) {
    const utterance = new this.utteranceMaker(text);
    this.voices.forEach(voice => {
      if (voice.name === 'Google US English') {
        utterance.voice = voice;
        utterance.pitch = 0.9;
        utterance.rate = 0.9;
        console.log(voice);
        return utterance;
      }
    });
    return utterance;
  }

}
