'use client';

import { useEffect } from 'react';
import { trackGAEvent } from '@/lib/analytics';

const cleanText = (value: string | null | undefined) =>
  (value ?? '').replace(/\s+/g, ' ').trim().slice(0, 120);

const getLeadEventName = (url: URL, linkText: string) => {
  const href = url.href.toLowerCase();
  const text = linkText.toLowerCase();

  if (href.includes('wa.me') || href.includes('api.whatsapp.com')) return 'lead_whatsapp_click';
  if (href.startsWith('tel:')) return 'lead_phone_click';
  if (href.startsWith('mailto:')) return 'lead_email_click';
  if (href.includes('app.animalcare360.com/register')) return 'lead_free_trial_click';
  if (href.includes('app.animalcare360.com/login')) return 'portal_login_click';
  if (href.includes('drive.google.com') || href.includes('.apk')) return 'apk_download_click';
  if (url.pathname === '/pricing' || text.includes('pricing')) return 'buyer_pricing_click';
  if (text.includes('demo') || text.includes('expert') || text.includes('quote')) return 'buyer_demo_click';

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
      const eventName = getLeadEventName(url, linkText);
      if (!eventName) return;

      trackGAEvent(eventName, {
        event_category: eventName.startsWith('lead_') ? 'conversion' : 'engagement',
        event_label: linkText || url.pathname || url.hostname,
        link_url: url.href,
        link_domain: url.hostname,
        cta_location: anchor.closest('nav')
          ? 'navigation'
          : anchor.closest('footer')
            ? 'footer'
            : anchor.closest('section')?.querySelector('h1,h2,h3')?.textContent
              ? cleanText(anchor.closest('section')?.querySelector('h1,h2,h3')?.textContent)
              : 'page_body',
      });
    };

    document.addEventListener('click', handleClick, true);
    return () => document.removeEventListener('click', handleClick, true);
  }, []);

  return null;
}
