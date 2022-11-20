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

import { FunctionalComponent, h } from '@stencil/core';
import { exhaustiveCheck } from '../../../global/utils';

export type TestimonialDocument = {
  bio?: string;
  name: string;
  photo?: string;
  testimonial: string;
  uid: string;
  one_goal?: string;
  visible_to: 'everyone' | 'one-goal-only' | 'invites-only';
  location?: string;
};

type SVGProps = {
  svg: SVGType;
  class?: string;
};

type SVGType =
  | 'iphone-with-budgets'
  | 'frustrated'
  | 'spending-plan'
  | 'budget-weekly'
  | 'celebrate'
  | 'wave-divider'
  | 'look-back'
  | 'invite-family'
  | 'pwa'
  | 'all-devices'
  | 'app-store'
  | 'play-store';

const getSVG = (svg: SVGType) => {
  switch (svg) {
    case 'iphone-with-budgets':
      return renderIPhoneWithBudgets;
    case 'frustrated':
      return renderFrustratedSVG;
    case 'spending-plan':
      return renderSpendingPlanSVG;
    case 'budget-weekly':
      return renderBudgetWeeklySVG;
    case 'celebrate':
      return renderCelebrateSVG;
    case 'wave-divider':
      return renderWaveDividerSVG;
    case 'look-back':
      return renderLookBackSVG;
    case 'invite-family':
      return renderInviteFamilySVG;
    case 'pwa':
      return renderPWASVG;
    case 'all-devices':
      return renderAllDevicesSVG;
    case 'app-store':
      return renderAppStoreSVG;
    case 'play-store':
      return renderPlayStoreSVG;

    default:
      return exhaustiveCheck(svg);
  }
};

export const OgSVG: FunctionalComponent<SVGProps> = ({ svg, class: className }) => <div class={className} innerHTML={getSVG(svg)} />;
