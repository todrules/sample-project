import { Injectable } from '@angular/core';

export function getWindow (): any {
  return window;
}

@Injectable()
export class WindowRefService extends Window {

}
