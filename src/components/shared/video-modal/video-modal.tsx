import { Component, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'og-video-modal',
  styleUrl: 'video-modal.scss',
})
export class VideoModal {
  @Prop() videoURL: string;
  @Prop() modal: HTMLIonModalElement;

  closeModal(e: MouseEvent) {
    e.stopImmediatePropagation();
    e.preventDefault();
    e.stopPropagation();
    this.modal.dismiss();
  }

  render() {
    const isYoutube = this.videoURL && this.videoURL.includes('youtube.com');
    return (
      <Host>
        <ion-button
          class="close-icon"
          fill="clear"
          color="light"
          onClick={e => this.closeModal(e)}
        >
          <ion-icon name="close-circle-outline" slot="icon-only" size="large" />
        </ion-button>
        {isYoutube ? (
          <iframe
            width="100%"
            height="100%"
            src={this.videoURL}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        ) : (
          <video autoplay controls src={this.videoURL} />
        )}
      </Host>
    );
  }
}
