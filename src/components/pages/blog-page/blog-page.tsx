import { IonSearchbarCustomEvent, SearchbarChangeEventDetail } from '@ionic/core';
import { Component, h, Element, Host, State } from '@stencil/core';

import { translate } from '../../../global/translate/translate';
import { TranslateKeys } from '../../../global/translate/translate-keys';
import { ContentWrapper } from '../../shared/content-wrapper/content-wrapper';
import { Article, blogArticles } from '../../../global/content/articles';
import { ArticleCard } from '../../shared/article-card/article-card';

@Component({
  tag: 'og-blog-page',
  styleUrl: 'blog-page.scss',
})
export class BlogPage {
  @Element() el: HTMLElement;

  @State() searchValue?: string;

  setSearchValue(e: IonSearchbarCustomEvent<SearchbarChangeEventDetail>) {
    this.searchValue = e.detail.value;
  }

  private filterArticles = (a: Article) => {
    const filterValue = this.searchValue;
    if (!filterValue) return true;
    const lowerCase = filterValue.toLowerCase();
    console.log('a', a);
    if (a.title.toLowerCase().includes(lowerCase)) return true;
    if (a.description?.toLowerCase().includes(lowerCase)) return true;
    if (a.body?.toLowerCase().includes(lowerCase)) return true;
    return false;
  };

  render() {
    return (
      <Host>
        <ContentWrapper textOnly={true}>
          <h1>{translate(TranslateKeys.BLOG)}</h1>
          {/* <ion-searchbar onIonChange={e => this.setSearchValue(e)} class="ion-no-padding ion-margin-bottom" /> */}
          {blogArticles.filter(this.filterArticles).map(article => (
            <ArticleCard article={article} />
          ))}
        </ContentWrapper>
      </Host>
    );
  }
}
