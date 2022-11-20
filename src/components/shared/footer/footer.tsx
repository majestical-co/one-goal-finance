import { h, Fragment, FunctionalComponent } from '@stencil/core';
import { translate } from '../../../global/translate/translate';
import { TranslateKeys } from '../../../global/translate/translate-keys';

export const Footer: FunctionalComponent = () => {
  return (
    <Fragment>
      <footer class="og-content-footer">
        <div class="footer-links">
          <div>
            <h6>Product</h6>
            <ul>
              <li>
                <ion-router-link href="/">Home</ion-router-link>
              </li>
              {/* <li>
                <ion-router-link href="/features">Features</ion-router-link>
              </li> */}
              <li>
                <ion-router-link href="https://onegoal.app/sign-in" rel="noopener noreferrer" target="_blank">
                  Sign In
                </ion-router-link>
              </li>
            </ul>
          </div>
          <div>
            <h6>Resources</h6>
            <ul>
              {/* <li>
                <ion-router-link href="/features">{translate(TranslateKeys.FEATURES)}</ion-router-link>
              </li> */}
              <li>
                <ion-router-link href="/getting-started">{translate(TranslateKeys.GETTING_STARTED)}</ion-router-link>
              </li>
              <li>
                <ion-router-link href="/blog">Blog</ion-router-link>
              </li>
              {/* <li>
                <ion-router-link href="">FAQ</ion-router-link>
              </li> */}
            </ul>
          </div>
          <div>
            <h6>Legal</h6>
            <ul>
              <li>
                <ion-router-link href="/privacy-policy">Privacy</ion-router-link>
              </li>
              <li>
                <ion-router-link href="/terms">Terms</ion-router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="ion-text-center ion-padding">
          <div>
            <ion-button class="ion-no-margin" fill="clear" href="https://instagram.com/onegoal.app" rel="noopener noreferrer" size="small" target="_blank">
              <ion-icon name="logo-instagram" slot="icon-only" />
            </ion-button>

            <ion-button class="ion-no-margin" fill="clear" href="https://twitter.com/OneGoalFinance" rel="noopener noreferrer" size="small" target="_blank">
              <ion-icon name="logo-twitter" slot="icon-only" />
            </ion-button>

            <ion-button class="ion-no-margin" fill="clear" href="https://www.youtube.com/channel/UC8KNmVXzrQkStAiCBGqFW5Q" rel="noopener noreferrer" size="small" target="_blank">
              <ion-icon name="logo-youtube" slot="icon-only" />
            </ion-button>
          </div>
          <div class="ion-padding-top">© 2018-{new Date().getFullYear()} One Goal</div>
        </div>
      </footer>
      <div class="ion-safe-area-bottom" style={{ background: 'var(--ion-background-color)' }} />
    </Fragment>
  );
};
