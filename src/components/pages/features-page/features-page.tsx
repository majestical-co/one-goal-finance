import { Component, h, Element, Host } from '@stencil/core';
import { translate } from '../../../global/translate/translate';
import { TranslateKeys } from '../../../global/translate/translate-keys';

import { ContentWrapper } from '../../shared/content-wrapper/content-wrapper';
import { OgSVG } from '../../shared/svg/svg';

@Component({
  tag: 'og-features-page',
  styleUrl: 'features-page.scss',
})
export class FeaturesPage {
  @Element() el: HTMLElement;

  render() {
    return (
      <Host>
        <ContentWrapper>
          <section class="light-section">
            <div class="og-container og-flex-row" style={{ paddingBottom: '0', zIndex: '0' }}>
              <OgSVG class="col-12 col-sm-5" svg="iphone-with-budgets" />
              <div class="col-12 col-sm-6 offset-sm-1 text-col">
                <h1>{translate(TranslateKeys.TRACK_MULTI)}</h1>
                <p>
                  One Goal uses{' '}
                  <a href="https://plaid.com/" target="_blank">
                    Plaid
                  </a>{' '}
                  to securely connect to your accounts.
                </p>
              </div>
            </div>
          </section>
          <section>
            <OgSVG svg="wave-divider" />
            <div class="og-container og-flex-row og-wrap-reverse" style={{ paddingBottom: '0' }}>
              <div class="col-12 col-sm-5 text-col">
                <h1>{translate(TranslateKeys.FUND_YOUR_BUDGETS)}</h1>
                <p>{translate(TranslateKeys.SPLIT_BALANCE)}</p>
              </div>
              <OgSVG class="col-12 col-sm-6 offset-sm-1" svg="frustrated" />
            </div>
          </section>
          <section class="light-section">
            <OgSVG svg="wave-divider" />
            <div class="og-container og-flex-row">
              <OgSVG class="col-12 col-sm-6" svg="spending-plan" />
              <div class="col-12 col-sm-5 offset-sm-1 text-col">
                <h1>{translate(TranslateKeys.TRACK_TRANS)}</h1>
                <p>{translate(TranslateKeys.SEE_AVAILABLE_AMOUNT)}</p>
              </div>
            </div>
          </section>
          <section>
            <OgSVG svg="wave-divider" />
            <div class="og-container og-flex-row og-wrap-reverse">
              <div class="col-12 col-sm-5 text-col">
                <h1>{translate(TranslateKeys.SPLIT_TRANSACTION_S, 2)}</h1>
                <p>{translate(TranslateKeys.CAN_SPLIT_TRANS)}</p>
              </div>
              <OgSVG class="col-12 col-sm-6 offset-sm-1" svg="invite-family" />
            </div>
          </section>
          <section class="light-section">
            <OgSVG svg="wave-divider" />
            <div class="og-container og-flex-row">
              <OgSVG class="col-12 col-sm-6" svg="budget-weekly" />
              <div class="col-12 col-sm-5 offset-sm-1 text-col">
                <h1>{translate(TranslateKeys.FAST_TRACK)}</h1>
                <p>{translate(TranslateKeys.SET_AUTO_SEND)}</p>
              </div>
            </div>
          </section>
          <section>
            <OgSVG svg="wave-divider" />
            <div class="og-container og-flex-row og-wrap-reverse">
              <div class="col-12 col-sm-5 text-col">
                <h1>{translate(TranslateKeys.SEE_WHERE_YOUR)}</h1>
                <p>{translate(TranslateKeys.SEE_YOUR_SPENDING)}</p>
              </div>
              <OgSVG class="col-12 col-sm-6 offset-sm-1" svg="look-back" />
            </div>
          </section>
          <section class="light-section">
            <OgSVG svg="wave-divider" />
            <div class="og-container og-flex-row og-wrap-reverse">
              <div class="col-12 col-sm-5 text-col">
                <h1>{translate(TranslateKeys.WORKS_ON_ALL)}</h1>
                <p>{translate(TranslateKeys.ONE_GOAL_IS)}</p>
              </div>
              <OgSVG class="col-12 col-sm-6 offset-sm-1" svg="all-devices">
                <div class="platform-wrapper">
                  <a href="https://onegoal.app/sign-in" target="_blank">
                    <OgSVG class="og-clickable" svg="pwa" />
                  </a>
                  <a href="https://apps.apple.com/us/app/one-goal-finance/id1572722093" target="_blank">
                    <OgSVG class="og-clickable" svg="app-store" />
                  </a>
                  <a href="https://play.google.com/store/apps/details?id=com.onegoal.onegoal" target="_blank">
                    <OgSVG class="og-clickable" svg="play-store" />
                  </a>
                </div>
              </OgSVG>
            </div>
          </section>
          <section>
            <OgSVG svg="wave-divider" />
            <div class="og-container og-flex-row">
              <OgSVG class="col-12 col-sm-5" svg="celebrate" />
              <div class="col-12 col-sm-6 offset-sm-1 text-col">
                <label>{translate(TranslateKeys.ONE_GOAL)}</label>
                <h1>{translate(TranslateKeys.SPEND_WITH_CONFIDENCE)}</h1>
                <p>{translate(TranslateKeys.YOU_VE_MADE)}</p>
                <ion-button href="https://onegoal.app/sign-in" target="_blank">
                  {translate(TranslateKeys.SIGN_UP)}
                  <ion-icon name="chevron-forward" slot="end" />
                </ion-button>
              </div>
            </div>
          </section>
        </ContentWrapper>
      </Host>
    );
  }
}
