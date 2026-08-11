const WHATSAPP_NUMBER = '5493516431504';
const WHATSAPP_DEFAULT_MESSAGE = '¡Hola! Quiero consultar por tus planes de entrenamiento.';

export function getWhatsAppUrl(message: string = WHATSAPP_DEFAULT_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const CONTACTO = {
  WHATSAPP_BASE_URL: `https://wa.me/${WHATSAPP_NUMBER}`,
  FORM_EVALUACION_URL: 'https://forms.gle/Dt3uX4nuirLFQRLb6',
  INSTAGRAM_URL: 'https://www.instagram.com/ludmiiiifit/',
  INSTAGRAM_HIGHLIGHT_URL: 'https://www.instagram.com/stories/highlights/17927137662126047/',
  EMAIL_URL: 'mailto:ludmi.asesoriasvirtuales@gmail.com',
  INSTAGRAM_HANDLE: '@ludmiiiifit',
  // Handle de X/Twitter (con @). Ludmila no tiene cuenta de X/Twitter.
  // El Layout NO emite twitter:site ni twitter:creator cuando está vacío.
  // NO reutilizar el handle de Instagram: los handles de X e IG no son intercambiables.
  TWITTER_HANDLE: '',
};
