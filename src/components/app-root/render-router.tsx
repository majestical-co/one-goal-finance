import { h } from '@stencil/core';

export function renderRouter() {
  return (
    <ion-router useHash={false}>
      <ion-route url="/" component="og-landing-page" />
      <ion-route url="/terms" component="og-terms-page" />
      <ion-route url="/privacy-policy" component="og-privacy-policy-page" />
    </ion-router>
  );
}
