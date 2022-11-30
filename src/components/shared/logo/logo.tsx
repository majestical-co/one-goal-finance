import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'og-logo',
  styleUrl: 'logo.scss',
})
export class Logo {
  @Prop() animated: boolean;

  render() {
    return (
      <svg
        width="324"
        height="324"
        viewBox="0 0 324 324"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          animation: this.animated ? null : 'none',
        }}
      >
        <title>One Goal Logo</title>
        <path
          id="bolt"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M182.399 140.312L190.651 46L86 169.744L141.252 174.578L133 268.889L237.651 145.145L182.399 140.312Z"
          fill="var(--logo-color)"
          style={{
            animation: this.animated ? null : 'none',
          }}
        />
      </svg>
    );
  }
}
