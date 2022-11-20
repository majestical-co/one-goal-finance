import { Component, h, Element, Host, Prop } from '@stencil/core';
import { ContentWrapper } from '../../shared/content-wrapper/content-wrapper';
import { collections } from '../../../global/content/collections';
import { articles } from '../../../global/content/articles';
import { ArticleCard } from '../../shared/article-card/article-card';

@Component({
  tag: 'og-collection-page',
  styleUrl: 'collection-page.scss',
})
export class CollectionPage {
  @Element() el: HTMLElement;

  @Prop() collectionSlug: string;

  render() {
    const collection = collections.find(a => a.slug === this.collectionSlug);
    const collectionArticles = articles.filter(a => a.parent_slug === this.collectionSlug);
    return (
      <Host>
        <ContentWrapper
          textOnly={true}
          breadcrumbs={[
            { href: '#', label: 'Collections' },
            { href: `/${collection.slug}`, label: `${collection.name}` },
          ]}
        >
          <h1>{collection.name}</h1>
          <p>{collection.description}</p>
          {collectionArticles.map(article => (
            <ArticleCard article={article} />
          ))}
        </ContentWrapper>
      </Host>
    );
  }
}
