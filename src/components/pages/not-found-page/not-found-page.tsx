import { Component, h, Host } from '@stencil/core';

import { ContentWrapper } from '../../shared/content-wrapper/content-wrapper';

@Component({
  tag: 'og-not-found-page',
  styleUrl: '404-page.scss',
})
export class NotFoundPage {
  render() {
    return (
      <Host>
        <ContentWrapper>
          <div>
            <h1>Not Found</h1>
          </div>
        </ContentWrapper>
      </Host>
    );
  }
}
