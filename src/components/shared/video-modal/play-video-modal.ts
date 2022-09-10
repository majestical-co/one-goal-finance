import { ModalOptions, modalController } from '@ionic/core';
export async function playVideoModal(
  videoURL: string,
  orientation: 'portrait' | 'landscape' = 'landscape'
) {
  const modalOptions: ModalOptions = {
    backdropDismiss: true,
    component: 'og-video-modal',
    cssClass: `og-video-modal ${orientation}`,
    componentProps: {
      videoURL,
    },
  };
  const modal = await modalController.create(modalOptions);
  return modal.present();
}
