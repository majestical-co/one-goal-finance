import { FunctionalComponent, Fragment, h } from '@stencil/core';
import { translate } from '../../../global/translate/translate';
import { TranslateKeys } from '../../../global/translate/translate-keys';
import { Footer } from '../footer/footer';

type ContentWrapperProps = {
  textOnly?: boolean;
  breadcrumbs?: { href: string; label: string }[];
  withLogo?: boolean;
};
export const ContentWrapper: FunctionalComponent<ContentWrapperProps> = ({ breadcrumbs = [], textOnly = false, withLogo = false }, children) => {
  return (
    <Fragment>
      <ion-header class="no-after">
        <ion-toolbar>
          <div slot="start" style={{ display: 'flex', alignItems: 'center' }}>
            <ion-router-link href="/">
              <og-logo
                class="app-icon"
                style={{
                  maxWidth: '48px',
                  padding: '6px',
                  margin: '4px',
                }}
              />
            </ion-router-link>
          </div>
          <ion-buttons slot="end">
            <ion-button href="/features">{translate(TranslateKeys.FEATURES)}</ion-button>
            <ion-button href="https://onegoal.app/sign-in" rel="noopener noreferrer" target="_blank">
              {translate(TranslateKeys.SIGN_IN)}
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
        {breadcrumbs.length > 0 && (
          <div class="og-breadcrumb-wrapper">
            <ion-breadcrumbs mode="ios">
              {breadcrumbs.map(link => (
                <ion-breadcrumb href={link.href}>{link.label}</ion-breadcrumb>
              ))}
            </ion-breadcrumbs>
          </div>
        )}
      </ion-header>

      <div class="og-content-wrapper">
        {textOnly ? (
          <div class={`text-only-content ${withLogo ? 'with-logo' : ''}`}>
            <div class="center-content">
              {withLogo && <og-logo class="app-icon" />}
              <div>{children}</div>
            </div>
          </div>
        ) : (
          children
        )}
        <Footer />
      </div>
    </Fragment>
  );
};
