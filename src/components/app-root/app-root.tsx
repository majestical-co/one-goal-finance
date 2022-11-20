import { Component, Env, h } from '@stencil/core';
import { createRouter, match, Route } from 'stencil-router-v2';
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
        <Route path="/blog">
          <og-blog-page />
        </Route>
        <Route
          path={match('/blog/:articleSlug')}
          render={({ articleSlug }) => (
            <og-article-page
              articleSlug={articleSlug}
              breadcrumbs={[
                { href: '#', label: 'Collections' },
                { href: '/blog', label: 'Blog' },
              ]}
            />
          )}
        />
        <Route path="/features">
          <og-features-page />
        </Route>
        <Route
          path={match('/features/:articleSlug')}
          render={({ articleSlug }) => (
            <og-article-page
              breadcrumbs={[
                { href: '#', label: 'Collections' },
                { href: '/features', label: 'Features' },
              ]}
              articleSlug={articleSlug}
            />
          )}
        />
        <Route path="/getting-started">
          <og-collection-page collectionSlug="getting-started" />
        </Route>
        <Route
          path={match('/getting-started/:articleSlug')}
          render={({ articleSlug }) => (
            <og-article-page
              articleSlug={articleSlug}
              breadcrumbs={[
                { href: '#', label: 'Collections' },
                { href: '/getting-started', label: 'Getting Started' },
              ]}
            />
          )}
        />
        <Route path="/tips-and-tricks">
          <og-collection-page collectionSlug="tips-and-tricks" />
        </Route>
        <Route
          path={match('/tips-and-tricks/:articleSlug')}
          render={({ articleSlug }) => (
            <og-article-page
              articleSlug={articleSlug}
              breadcrumbs={[
                { href: '#', label: 'Collections' },
                { href: '/tips-and-tricks', label: 'Tips and Tricks' },
              ]}
            />
          )}
        />
        {/* <Route path="/collections">
          <og-collections-page />
        </Route> */}
        <Route path="/privacy-policy">
          <og-privacy-policy-page />
        </Route>
        <Route path="/terms">
          <og-terms-page />
        </Route>
        <Route path={match('/:any')}>
          <og-not-found-page />
        </Route>
      </Router.Switch>
    );
  }
}
