import { h, FunctionalComponent } from '@stencil/core';
import { Article } from '../../../global/content/articles';
import { formatTimestamp } from '../../../global/utils';

type ArticleCardProps = {
  article: Article;
};
export const ArticleCard: FunctionalComponent<ArticleCardProps> = ({ article }) => {
  return (
    <div>
      <ion-router-link href={`/${article.parent_slug}/${article.slug}`}>
        <ion-card class="ion-no-margin ion-margin-bottom">
          <ion-card-header>
            <ion-card-subtitle>{formatTimestamp(article.created_at * 1000)}</ion-card-subtitle>
            <ion-card-title>{article.title}</ion-card-title>
          </ion-card-header>
          <ion-card-content>{article.description}</ion-card-content>
        </ion-card>
      </ion-router-link>
    </div>
  );
};
