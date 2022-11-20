import { Component, h, Element, Host } from '@stencil/core';
import { ContentWrapper } from '../../shared/content-wrapper/content-wrapper';
import { collections } from '../../../global/content/collections';

@Component({
  tag: 'og-collections-page',
  styleUrl: 'collections-page.scss',
})
export class CollectionsPage {
  @Element() el: HTMLElement;

  render() {
    return (
      <Host>
        <ContentWrapper textOnly={true}>
          <h1>Collections</h1>
          {collections.map(c => (
            <ion-router-link href={`/${c.slug}`}>
              <ion-card class="ion-no-margin ion-margin-bottom">
                <ion-card-header>
                  <ion-card-title>{c.name}</ion-card-title>
                </ion-card-header>
                <ion-card-content>{c.description}</ion-card-content>
              </ion-card>
            </ion-router-link>
          ))}
        </ContentWrapper>
      </Host>
    );
  }
}
