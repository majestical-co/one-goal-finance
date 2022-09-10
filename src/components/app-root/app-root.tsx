import { Component, h, Prop } from '@stencil/core';
import { initPolyglot, LocaleString } from '../../global/translate/translate';
import { renderRouter } from './render-router';

@Component({
  tag: 'app-root',
})
export class AppRoot {
  @Prop() locale: LocaleString;

  async componentWillLoad() {
    await initPolyglot(this.locale || 'en');
  }

  render() {
    return (
      <ion-app>
        {renderRouter()}
        <ion-router-outlet />
      </ion-app>
    );
  }
}
