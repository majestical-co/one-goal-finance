import { Component, h, Element, Host, Prop } from '@stencil/core';
import { ContentWrapper } from '../../shared/content-wrapper/content-wrapper';
import { articles } from '../../../global/content/articles';

@Component({
  tag: 'og-article-page',
  styleUrl: 'article-page.scss',
})
export class ArticlePage {
  @Element() el: HTMLElement;

  @Prop() articleSlug: string;
  @Prop() breadcrumbs: { href: string; label: string }[] = [];

  render() {
    const article = articles.find(a => a.slug === this.articleSlug);
    const lastBreadcrumb = this.breadcrumbs[this.breadcrumbs.length - 1];
    return (
      <Host>
        <ContentWrapper textOnly={true} breadcrumbs={[...this.breadcrumbs, { href: `${lastBreadcrumb.href}/${article.slug}`, label: article.title }]}>
          <h1>{article.title}</h1>
          <div innerHTML={article.body} />
        </ContentWrapper>
      </Host>
    );
  }
}
