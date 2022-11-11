import { FunctionalComponent, Fragment, h } from '@stencil/core';
import { translate } from '../../../global/translate/translate';
import { TranslateKeys } from '../../../global/translate/translate-keys';
import { Footer } from '../footer/footer';

type ContentWrapperProps = {
  textOnly?: boolean;
};
export const ContentWrapper: FunctionalComponent<ContentWrapperProps> = ({ textOnly = false }, children) => {
  return (
    <Fragment>
      <ion-header class="no-after">
        <ion-toolbar>
          <div slot="start" style={{ display: 'flex', alignItems: 'center' }}>
            <og-logo
              class="app-icon"
              style={{
                maxWidth: '48px',
                padding: '6px',
                margin: '4px',
              }}
            />
          </div>
          <ion-buttons slot="end">
            <ion-button href="https://onegoal.app/sign-in" rel="noopener noreferrer" target="_blank">
              {translate(TranslateKeys.SIGN_IN)}
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>

      <ion-content>
        <div class="og-content-wrapper">
          {textOnly ? (
            <div class="text-only-content">
              <div class="center-content">
                <og-logo class="app-icon" />
                <div>{children}</div>
              </div>
            </div>
          ) : (
            children
          )}
        </div>
        <Footer />
      </ion-content>
    </Fragment>
  );
};
