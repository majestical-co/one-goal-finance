import { Component, h, Element, Host } from '@stencil/core';

import { ContentWrapper } from '../../shared/content-wrapper/content-wrapper';

@Component({
  tag: 'og-features-page',
  styleUrl: 'features-page.scss',
})
export class FeaturesPage {
  @Element() el: HTMLElement;

  render() {
    return (
      <Host>
        <ContentWrapper>Features</ContentWrapper>
      </Host>
    );
  }
}
