import { FunctionalComponent, h } from '@stencil/core';
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

export const TestimonialCard: FunctionalComponent<{
  testimonial: Partial<TestimonialDocument>;
}> = ({ testimonial }) => (
  <div
    class="ion-padding"
    style={{
      background: 'var(--ion-background-color)',
      borderRadius: '8px',
      padding: '24px',
    }}
  >
    <svg style={{ width: '64px', height: 'auto' }} width="37" height="28" viewBox="0 0 37 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M36.749 4.25391C31.9437 6.61719 29.541 9.39404 29.541 12.5845C31.5892 12.8208 33.2829 13.6676 34.6221 15.125C35.9613 16.543 36.6309 18.1973 36.6309 20.0879C36.6309 22.0967 35.981 23.7904 34.6812 25.1689C33.3813 26.5475 31.7467 27.2368 29.7773 27.2368C27.5716 27.2368 25.6613 26.3506 24.0464 24.5781C22.4315 22.7663 21.624 20.5802 21.624 18.02C21.624 10.3394 25.9173 4.33268 34.5039 0L36.749 4.25391ZM15.125 4.25391C10.2803 6.61719 7.85791 9.39404 7.85791 12.5845C9.94548 12.8208 11.6589 13.6676 12.998 15.125C14.3372 16.543 15.0068 18.1973 15.0068 20.0879C15.0068 22.0967 14.3372 23.7904 12.998 25.1689C11.6982 26.5475 10.0636 27.2368 8.09424 27.2368C5.88851 27.2368 3.97819 26.3506 2.36328 24.5781C0.78776 22.7663 0 20.5802 0 18.02C0 10.3394 4.2736 4.33268 12.8208 0L15.125 4.25391Z"
        fill="var(--budget-color-5-dark)"
      />
    </svg>
    <h4 style={{ lineHeight: '1.4em' }}>{testimonial.testimonial}</h4>
    {testimonial.one_goal ? <p class="ion-no-margin">{testimonial.one_goal}</p> : null}
    <hr style={{ margin: '24px 0px' }} />
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {testimonial.photo ? (
        <ion-avatar style={{ maxWidth: '32px', maxHeight: '32px', marginRight: '12px' }}>
          <img src={testimonial.photo} />
        </ion-avatar>
      ) : null}
      <div>
        <h2 class="ion-no-margin">{testimonial.name}</h2>
        {testimonial.bio ? <p class="ion-no-margin">{testimonial.bio}</p> : null}
      </div>
    </div>
  </div>
);
