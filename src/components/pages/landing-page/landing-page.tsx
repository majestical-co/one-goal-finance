import { Component, h, Element, Host } from '@stencil/core';

import { TestimonialCard, TestimonialDocument } from '../../shared/testimonial/testimonial';
import { playVideoModal } from '../../shared/video-modal/play-video-modal';
import { translate } from '../../../global/translate/translate';
import { TranslateKeys } from '../../../global/translate/translate-keys';

import renderIPhoneWithBudgets from './iphone-with-budgets.svg';
import renderFrustratedSVG from './frustrated.svg';
import renderSpendingPlanSVG from './spending-plan.svg';
import renderBudgetWeeklySVG from './budget-weekly.svg';
import renderCelebrateSVG from './celebrate.svg';
import renderWaveDividerSVG from './wave-divider.svg';
import renderLookBackSVG from './look-back.svg';
import renderInviteFamilySVG from './invite-family.svg';
import renderPWASVG from './pwa.svg';
import renderAllDevicesSVG from './all-devices.svg';
import renderAppStoreSVG from './app-store.svg';
import renderPlayStoreSVG from './play-store.svg';
import { ContentWrapper } from '../../shared/content-wrapper/content-wrapper';

@Component({
  tag: 'og-landing-page',
  styleUrl: 'landing-page.scss',
})
export class LandingPage {
  private testimonials: Partial<TestimonialDocument>[] = [
    {
      name: 'Carly & Stephen',
      testimonial: translate(TranslateKeys.TESTIMONIAL_1),
      bio: translate(TranslateKeys.TEST_1_OG),
      one_goal: translate(TranslateKeys.TEST_1_BIO),
    },
    {
      name: 'Katie & Cory',
      testimonial: translate(TranslateKeys.TESTIMONIAL_2),
      one_goal: translate(TranslateKeys.TEST_2_OG),
      bio: translate(TranslateKeys.TEST_2_BIO),
    },
    {
      name: 'Landon & MaLese',
      testimonial: translate(TranslateKeys.TESTIMONIAL_3),
      one_goal: translate(TranslateKeys.TEST_3_OG),
      bio: translate(TranslateKeys.TEST_3_BIO),
    },
    {
      name: 'Bruce & Kathy',
      testimonial: translate(TranslateKeys.TESTIMONIAL_4),
      bio: translate(TranslateKeys.TEST_4_BIO),
    },
  ];

  @Element() el: HTMLElement;

  private scrollTo(id: string) {
    const scrollToElement = this.el.querySelector(id);
    if (!scrollToElement) return;
    scrollToElement.scrollIntoView({ behavior: 'smooth' });
  }

  private renderIconBenefit(icon: string, title: string, description: string) {
    return (
      <div class="icon-list-item">
        <ion-icon name={icon} color="primary" />
        <div>
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </div>
    );
  }

  render() {
    return (
      <Host>
        <ContentWrapper>
          <section class="light-section">
            <div class="og-container og-flex-row" style={{ paddingBottom: '0', zIndex: '0' }}>
              <div class="col-12 col-sm-5" innerHTML={renderIPhoneWithBudgets}></div>
              <div class="col-12 col-sm-6 offset-sm-1 text-col">
                <label>{translate(TranslateKeys.ONE_GOAL)}</label>
                <h1>{translate(TranslateKeys.SPEND_WITH_CONFIDENCE)}</h1>
                <p>{translate(TranslateKeys.CREATE_A_UNIFIED)}</p>

                <ion-button fill="outline" onClick={() => this.scrollTo('#features')}>
                  {translate(TranslateKeys.VIEW_FEATURES)}
                </ion-button>
                <ion-button data-test="sign-up" href="https://onegoal.app/sign-in" rel="noopener noreferrer" target="_blank">
                  {translate(TranslateKeys.SIGN_UP)}
                  <ion-icon name="chevron-forward" slot="end" />
                </ion-button>
                <div />
                <ion-button fill="clear" onClick={() => playVideoModal('https://www.youtube.com/embed/ZpYQ_CdPLtA?autoplay=1', 'landscape')}>
                  <ion-icon slot="start" name="play-circle" />
                  {translate(TranslateKeys.PLAY_DEMO_VIDEO)}
                </ion-button>
              </div>
            </div>
          </section>
          <section>
            <div innerHTML={renderWaveDividerSVG} />
            <div class="og-container og-flex-row og-wrap-reverse" style={{ paddingBottom: '0' }}>
              <div class="col-12 col-sm-5 text-col">
                <h1>{translate(TranslateKeys.THE_WAY_YOU)}</h1>
                <p>{translate(TranslateKeys.EACH_MONTH_YOU)}</p>
              </div>
              <div class="col-12 col-sm-6 offset-sm-1" innerHTML={renderFrustratedSVG}></div>
            </div>
            <div class="og-container og-flex-row">
              <div class="col-12 col-sm-5">
                <h4>{translate(TranslateKeys.ARE_YOU_STILL)}</h4>
                <ul>
                  <li>
                    <ion-icon name="close-circle" color="danger" />
                    {translate(TranslateKeys.TRYING_TO_DIVIDE)}
                  </li>
                  <li>
                    <ion-icon name="close-circle" color="danger" />
                    {translate(TranslateKeys.IF_YOU_RE)}
                  </li>
                  <li>
                    <ion-icon name="close-circle" color="danger" />
                    {translate(TranslateKeys.EVERY_MONTH_YOU)}
                  </li>
                  <li>
                    <ion-icon name="close-circle" color="danger" />
                    {translate(TranslateKeys.IT_S_MUCH)}
                  </li>
                </ul>
              </div>

              <div class="col-12 col-sm-6 offset-sm-1">
                <h4>{translate(TranslateKeys.ONE_GOAL_HELPS)}</h4>
                <ul>
                  <li>
                    <ion-icon name="checkmark-circle" color="primary" />
                    {translate(TranslateKeys.LOOKING_AT_THE)}
                  </li>
                  <li>
                    <ion-icon name="checkmark-circle" color="primary" />
                    {translate(TranslateKeys.NO_MORE_AWKWARD)}
                  </li>
                  <li>
                    <ion-icon name="checkmark-circle" color="primary" />
                    {translate(TranslateKeys.EACH_WEEK_A)}
                  </li>
                  <li>
                    <ion-icon name="checkmark-circle" color="primary" />
                    {translate(TranslateKeys.PLANNING_FOR_THE)}
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section class="light-section">
            <div innerHTML={renderWaveDividerSVG} />
            <div class="og-container og-flex-row">
              <div class="col-12 col-sm-6" innerHTML={renderSpendingPlanSVG} />
              <div class="col-12 col-sm-5 offset-sm-1 text-col">
                <h1>{translate(TranslateKeys.CREATE_A_PERSONAL)}</h1>
                <p>{translate(TranslateKeys.WE_LL_GIVE)}</p>
              </div>
            </div>
          </section>
          <section>
            <div innerHTML={renderWaveDividerSVG} />
            <div class="og-container og-flex-row og-wrap-reverse">
              <div class="col-12 col-sm-5 text-col">
                <h1>{translate(TranslateKeys.INVITE_YOUR_FAMILY)}</h1>
                <p>{translate(TranslateKeys.OG_DESIGNED)}</p>
              </div>
              <div class="col-12 col-sm-6 offset-sm-1" innerHTML={renderInviteFamilySVG} />
            </div>
          </section>
          <section class="light-section">
            <div innerHTML={renderWaveDividerSVG} />
            <div class="og-container og-flex-row">
              <div class="col-12 col-sm-6" innerHTML={renderBudgetWeeklySVG} />
              <div class="col-12 col-sm-5 offset-sm-1 text-col">
                <h1>{translate(TranslateKeys.START_BUDGETING_WEEKLY)}</h1>
                <p>{translate(TranslateKeys.LOOKING_AT_THE_2)}</p>
              </div>
            </div>
          </section>
          <section>
            <div innerHTML={renderWaveDividerSVG} />
            <div class="og-container og-flex-row og-wrap-reverse">
              <div class="col-12 col-sm-5 text-col">
                <h1>{translate(TranslateKeys.SEE_WHERE_YOUR)}</h1>
                <p>{translate(TranslateKeys.SEE_YOUR_SPENDING)}</p>
              </div>
              <div class="col-12 col-sm-6 offset-sm-1" innerHTML={renderLookBackSVG} />
            </div>
          </section>
          <section class="light-section">
            <div innerHTML={renderWaveDividerSVG} />
            <div class="og-container" id="features">
              <h1>{translate(TranslateKeys.FEATURES)}</h1>
              <div class="og-flex-row">
                <div class="col-12 col-sm-5">
                  <h2>{translate(TranslateKeys.CREATING_YOUR_PLAN)}</h2>
                  {this.renderIconBenefit('map', translate(TranslateKeys.CREATE_SPENDING_PLAN), translate(TranslateKeys.SUGGEST_BUDGET))}
                  {this.renderIconBenefit('calendar', translate(TranslateKeys.SCHEDULE_GOALS), translate(TranslateKeys.SET_DATES))}
                  {this.renderIconBenefit('people-circle', translate(TranslateKeys.INVITE_YOUR_FAMILY), translate(TranslateKeys.INVITE_SPOUSE))}
                  {this.renderIconBenefit('pie-chart', translate(TranslateKeys.SEE_WHERE_YOUR), translate(TranslateKeys.SEE_YOUR_SPENDING))}
                </div>

                <div class="col-12 col-sm-6 offset-sm-1">
                  <h2>{translate(TranslateKeys.FOLLOWING_YOUR_PLAN)}</h2>
                  {this.renderIconBenefit('business', translate(TranslateKeys.TRACK_MULTI), translate(TranslateKeys.SIMPLY_ADD_ACCOUNTS))}
                  {this.renderIconBenefit('wallet', translate(TranslateKeys.FUND_YOUR_BUDGETS), translate(TranslateKeys.SPLIT_BALANCE))}
                  {this.renderIconBenefit('newspaper', translate(TranslateKeys.TRACK_TRANS), translate(TranslateKeys.SEE_AVAILABLE_AMOUNT))}
                  {this.renderIconBenefit('shuffle', translate(TranslateKeys.SPLIT_TRANSACTION_S, 2), translate(TranslateKeys.CAN_SPLIT_TRANS))}
                  {this.renderIconBenefit('flash', translate(TranslateKeys.FAST_TRACK), translate(TranslateKeys.SET_AUTO_SEND))}
                </div>
              </div>
              {/* @todo: Learn more */}
              {/* <div class="ion-text-right">
                <ion-button
                  fill="clear"
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://intercom.help/one-goal/en/"
                >
                  {translate(TranslateKeys.LEARN_MORE)}
                  <ion-icon name="chevron-forward" slot="end" />
                </ion-button>
              </div> */}
            </div>
          </section>
          <section>
            <div innerHTML={renderWaveDividerSVG} />
            <div style={{ overflow: 'hidden', width: '100%' }}>
              <div class="og-container">
                <h1>{translate(TranslateKeys.TESTIMONIAL_S, 2)}</h1>
                <div class="ion-padding" />
                <ion-slides
                  style={{ overflow: 'visible' }}
                  options={{
                    spaceBetween: 30,
                    // centeredSlides: true,
                    // autoHeight: true,
                    speed: 400,
                    autoplay: {
                      delay: 5000,
                    },
                    pagination: {
                      type: 'bullets',
                      clickable: true,
                      el: '.swiper-pagination',
                    },
                  }}
                >
                  {this.testimonials.map(testomonial => (
                    <ion-slide>
                      <div>
                        <TestimonialCard testimonial={testomonial} />
                      </div>
                    </ion-slide>
                  ))}
                </ion-slides>
                <div class="swiper-pagination" />
                <div class="ion-padding" />
              </div>
            </div>
          </section>
          <section class="light-section">
            <div innerHTML={renderWaveDividerSVG} />
            <div class="og-container og-flex-row og-wrap-reverse">
              <div class="col-12 col-sm-5 text-col">
                <h1>{translate(TranslateKeys.WORKS_ON_ALL)}</h1>
                <p>{translate(TranslateKeys.ONE_GOAL_IS)}</p>
              </div>
              <div class="col-12 col-sm-6 offset-sm-1" innerHTML={renderAllDevicesSVG}>
                <div class="platform-wrapper">
                  <a href="https://onegoal.app/sign-in" target="_blank">
                    <div innerHTML={renderPWASVG} />
                  </a>
                  <a href="https://apps.apple.com/us/app/one-goal-finance/id1572722093" target="_blank">
                    <div class="og-clickable" innerHTML={renderAppStoreSVG} />
                  </a>
                  <a href="https://play.google.com/store/apps/details?id=com.onegoal.onegoal" target="_blank">
                    <div class="og-clickable" innerHTML={renderPlayStoreSVG} />
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div innerHTML={renderWaveDividerSVG} />
            <div class="og-container og-flex-row">
              <div class="col-12 col-sm-5" innerHTML={renderCelebrateSVG} />
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
