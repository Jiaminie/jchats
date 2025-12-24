class Analytics {
  private initialized: boolean;

  constructor() {
    this.initialized = false;
    this.init();
  }

  init() {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      this.initialized = true;
    }
  }

  // Track page views
  trackPageView(url: string, title: string) {
    if (!this.initialized) return;

    (window as any).gtag('event', 'page_view', {
      page_path: url,
      page_title: title,
    });
  }

  // Track custom events
  trackEvent(eventName: string, eventParams = {}) {
    if (!this.initialized) return;

    (window as any).gtag('event', eventName, eventParams);
  }

  // Track form submissions
  trackFormSubmission(formName: string) {
    this.trackEvent('form_submission', {
      form_name: formName,
    });
  }

  // Track CTA clicks
  trackCTAClick(ctaName: string, ctaLocation: string) {
    this.trackEvent('cta_click', {
      cta_name: ctaName,
      cta_location: ctaLocation,
    });
  }

  // Track demo bookings
  trackDemoBooking(businessType: string) {
    this.trackEvent('demo_booking', {
      business_type: businessType,
    });
  }

  // Track pricing plan selection
  trackPlanSelection(planName: string) {
    this.trackEvent('plan_selection', {
      plan_name: planName,
    });
  }

  // Track video plays
  trackVideoPlay(videoTitle: string) {
    this.trackEvent('video_play', {
      video_title: videoTitle,
    });
  }

  // Track downloads
  trackDownload(resourceName: string) {
    this.trackEvent('resource_download', {
      resource_name: resourceName,
    });
  }
}

export default new Analytics();
