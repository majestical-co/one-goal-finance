import { Component, h } from '@stencil/core';
import { initPolyglot, LocaleString } from '../../global/translate/translate';
import { renderRouter } from './render-router';
import { Env } from '@stencil/core';

@Component({
  tag: 'app-root',
})
export class AppRoot {
  async componentWillLoad() {
    const locale = Env.locale as LocaleString;
    await initPolyglot(locale);
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
