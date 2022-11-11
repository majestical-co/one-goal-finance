import { Component, Env, h } from '@stencil/core';
import { createRouter, Route } from 'stencil-router-v2';
import { initPolyglot, LocaleString } from '../../global/translate/translate';

const Router = createRouter();
@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss',
})
export class AppRoot {
  async componentWillLoad() {
    const locale = Env.locale as LocaleString;
    await initPolyglot(locale);
  }

  render() {
    return (
      <Router.Switch>
        <Route path="/">
          <og-landing-page />
        </Route>
        <Route path="/features">
          <og-features-page />
        </Route>
        <Route path="/privacy-policy">
          <og-privacy-policy-page />
        </Route>
        <Route path="/terms">
          <og-terms-page />
        </Route>
      </Router.Switch>
    );
  }
}
