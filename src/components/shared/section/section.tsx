import { FunctionalComponent, h } from '@stencil/core';
import renderWaveDividerSVG from '../../pages/landing-page/wave-divider.svg';

type OgSectionProps = {
  lightSection?: boolean;
  wrapReverse?: boolean;
  includeWave?: boolean;
};

export const OgSection: FunctionalComponent<OgSectionProps> = ({ lightSection = true, wrapReverse = false, includeWave = true }, children) => {
  return (
    <section class={lightSection ? 'light-section' : ''}>
      {includeWave && <div innerHTML={renderWaveDividerSVG} />}
      <div class={`og-container og-flex-row ${wrapReverse ? 'og-reverse' : ''}`} style={{ paddingBottom: '0', zIndex: '0' }}>
        {children}
      </div>
    </section>
  );
};
