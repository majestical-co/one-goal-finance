/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { MatchResults } from "@stencil-community/router";
import { LocaleString } from "./global/translate/translate";
export namespace Components {
    interface AppHome {
    }
    interface AppProfile {
        "match": MatchResults;
    }
    interface AppRoot {
        "locale": LocaleString;
    }
    interface OgLandingPage {
    }
    interface OgLogo {
        "animated": boolean;
    }
    interface OgVideoModal {
        "modal": HTMLIonModalElement;
        "videoURL": string;
    }
}
declare global {
    interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {
    }
    var HTMLAppHomeElement: {
        prototype: HTMLAppHomeElement;
        new (): HTMLAppHomeElement;
    };
    interface HTMLAppProfileElement extends Components.AppProfile, HTMLStencilElement {
    }
    var HTMLAppProfileElement: {
        prototype: HTMLAppProfileElement;
        new (): HTMLAppProfileElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLOgLandingPageElement extends Components.OgLandingPage, HTMLStencilElement {
    }
    var HTMLOgLandingPageElement: {
        prototype: HTMLOgLandingPageElement;
        new (): HTMLOgLandingPageElement;
    };
    interface HTMLOgLogoElement extends Components.OgLogo, HTMLStencilElement {
    }
    var HTMLOgLogoElement: {
        prototype: HTMLOgLogoElement;
        new (): HTMLOgLogoElement;
    };
    interface HTMLOgVideoModalElement extends Components.OgVideoModal, HTMLStencilElement {
    }
    var HTMLOgVideoModalElement: {
        prototype: HTMLOgVideoModalElement;
        new (): HTMLOgVideoModalElement;
    };
    interface HTMLElementTagNameMap {
        "app-home": HTMLAppHomeElement;
        "app-profile": HTMLAppProfileElement;
        "app-root": HTMLAppRootElement;
        "og-landing-page": HTMLOgLandingPageElement;
        "og-logo": HTMLOgLogoElement;
        "og-video-modal": HTMLOgVideoModalElement;
    }
}
declare namespace LocalJSX {
    interface AppHome {
    }
    interface AppProfile {
        "match"?: MatchResults;
    }
    interface AppRoot {
        "locale"?: LocaleString;
    }
    interface OgLandingPage {
    }
    interface OgLogo {
        "animated"?: boolean;
    }
    interface OgVideoModal {
        "modal"?: HTMLIonModalElement;
        "videoURL"?: string;
    }
    interface IntrinsicElements {
        "app-home": AppHome;
        "app-profile": AppProfile;
        "app-root": AppRoot;
        "og-landing-page": OgLandingPage;
        "og-logo": OgLogo;
        "og-video-modal": OgVideoModal;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-home": LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
            "app-profile": LocalJSX.AppProfile & JSXBase.HTMLAttributes<HTMLAppProfileElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "og-landing-page": LocalJSX.OgLandingPage & JSXBase.HTMLAttributes<HTMLOgLandingPageElement>;
            "og-logo": LocalJSX.OgLogo & JSXBase.HTMLAttributes<HTMLOgLogoElement>;
            "og-video-modal": LocalJSX.OgVideoModal & JSXBase.HTMLAttributes<HTMLOgVideoModalElement>;
        }
    }
}