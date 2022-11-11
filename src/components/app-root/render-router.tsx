import { h } from '@stencil/core';
import { createRouter, Route } from 'stencil-router-v2';

const Router = createRouter();

export function renderRouter() {
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
