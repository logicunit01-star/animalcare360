'use client';

import { useEffect } from 'react';
import { trackGAEvent } from '@/lib/analytics';

const cleanText = (value: string | null | undefined) =>
  (value ?? '').replace(/\s+/g, ' ').trim().slice(0, 120);

const getInteractionType = (url: URL, linkText: string) => {
  const href = url.href.toLowerCase();
  const text = linkText.toLowerCase();

  if (href.includes('wa.me') || href.includes('api.whatsapp.com')) return 'whatsapp';
  if (href.startsWith('tel:')) return 'phone';
  if (href.startsWith('mailto:')) return 'email';
  if (href.includes('app.animalcare360.com/register')) return 'trial';
  if (href.includes('app.animalcare360.com/login')) return 'login';
  if (href.includes('drive.google.com') || href.includes('.apk')) return 'download';
  if (url.pathname === '/pricing' || text.includes('pricing')) return 'pricing';
  if (text.includes('demo') || text.includes('expert') || text.includes('quote')) return 'demo';

  return null;
};

export default function LeadInteractionTracker() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest('a');
      if (!anchor || anchor.dataset.analyticsManual === 'true') return;

      const rawHref = anchor.getAttribute('href');
      if (!rawHref) return;

      let url: URL;
      try {
        url = new URL(rawHref, window.location.origin);
      } catch {
        return;
      }

      const linkText = cleanText(anchor.textContent || anchor.getAttribute('aria-label') || anchor.title);
      const interactionType = getInteractionType(url, linkText);
      if (!interactionType) return;

      const safeLinkTarget = url.protocol === 'http:' || url.protocol === 'https:'
        ? `${url.hostname}${url.pathname}`
        : url.protocol.replace(':', '');

      trackGAEvent('cta_clicked', {
        event_category: 'engagement',
        event_label: linkText || url.pathname || url.hostname,
        interaction_type: interactionType,
        link_target: safeLinkTarget,
        link_domain: url.hostname,
        cta_location: anchor.closest('nav')
          ? 'navigation'
          : anchor.closest('footer')
            ? 'footer'
            : anchor.closest('section')?.querySelector('h1,h2,h3')?.textContent
              ? cleanText(anchor.closest('section')?.querySelector('h1,h2,h3')?.textContent)
              : 'page_body',
      });

      if (interactionType === 'whatsapp') {
        trackGAEvent('whatsapp_clicked', {
          event_category: 'conversion',
          event_label: linkText || 'WhatsApp',
          cta_location: anchor.closest('nav') ? 'navigation' : anchor.closest('footer') ? 'footer' : 'page_body',
        });
      }
    };

    document.addEventListener('click', handleClick, true);
    return () => document.removeEventListener('click', handleClick, true);
  }, []);

  return null;
}
