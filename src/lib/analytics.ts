type AnalyticsEventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    clarity?: (...args: unknown[]) => void;
  }
}

export const trackGAEvent = (eventName: string, params: AnalyticsEventParams = {}) => {
  if (typeof window === 'undefined') return;

  const eventPayload = {
    ...params,
    page_path: window.location.pathname,
  };

  if (window.gtag) {
    window.gtag('event', eventName, eventPayload);
  }

  if (window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...eventPayload,
    });
  }
};

export const tagClaritySession = (key: string, value: string) => {
  if (typeof window !== 'undefined' && window.clarity) {
    window.clarity('set', key, value);
  }
};
