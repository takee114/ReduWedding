"use client";
import { useEffect } from "react";

export default function TrackingPixels() {
  useEffect(() => {
    // Google Analytics 4
    const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX';
    
    // Load Google Analytics
    const gtagScript = document.createElement('script');
    gtagScript.async = true;
    gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(gtagScript);

    // Initialize Google Analytics
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer.push(arguments);
    }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID, {
      page_title: document.title,
      page_location: window.location.href,
    });

    // Meta Pixel (Facebook Pixel)
    const FACEBOOK_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID || 'YOUR_PIXEL_ID';
    
    // Initialize Facebook Pixel
    !function(f,b,e,v,n,t,s) {
      if(f.fbq) return;
      n=f.fbq=function(){ n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments); };
      if(!f._fbq) f._fbq = n;
      n.push = n; n.loaded = !0; n.version = '2.0';
      n.queue = []; t = b.createElement(e); t.async = !0;
      t.src = v; s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    }(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    
    window.fbq('init', FACEBOOK_PIXEL_ID);
    window.fbq('track', 'PageView');

    // LinkedIn Insight Tag
    const LINKEDIN_PARTNER_ID = process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID || 'YOUR_PARTNER_ID';
    
    window._linkedin_partner_id = LINKEDIN_PARTNER_ID;
    window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
    if (!window._linkedin_data_partner_ids.includes(window._linkedin_partner_id)) {
      window._linkedin_data_partner_ids.push(window._linkedin_partner_id);
    }
    
    const linkedinScript = document.createElement('script');
    linkedinScript.type = 'text/javascript';
    linkedinScript.async = true;
    linkedinScript.src = 'https://snap.licdn.com/li.lms-analytics/insight.min.js';
    document.head.appendChild(linkedinScript);

    // Cleanup function
    return () => {
      const scripts = document.querySelectorAll('script[src*="googletagmanager"], script[src*="fbevents"], script[src*="insight.min.js"]');
      scripts.forEach(script => script.parentNode && script.parentNode.removeChild(script));
    };
  }, []);

  // Track conversion events
  const trackConversion = (eventName, data = {}) => {
    if (window.gtag) {
      window.gtag('event', eventName, data);
    }
    if (window.fbq) {
      window.fbq('trackCustom', eventName, data);
    }
    if (window.lintrk) {
      try {
        window.lintrk('track', { conversion_id: process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID, ...data });
      } catch (e) {}
    }
  };

  useEffect(() => {
    window.trackConversion = trackConversion;
  }, []);

  return (
    <>
      {/* Noscript fallbacks */}
      <noscript>
        <img 
          height="1" 
          width="1" 
          style={{display: 'none'}}
          src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID || 'YOUR_PIXEL_ID'}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
      
      <noscript>
        <img 
          height="1" 
          width="1" 
          style={{display: 'none'}}
          src="https://px.ads.linkedin.com/collect/?pid=YOUR_PARTNER_ID&fmt=gif"
          alt=""
        />
      </noscript>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "DigitalMedia Pro",
            "description": "Professional digital marketing services to help businesses grow their online presence and achieve measurable results.",
            "url": "https://digitalmediapro.com",
            "logo": "https://digitalmediapro.com/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-234-567-8900",
              "contactType": "customer service",
              "availableLanguage": "English"
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 Marketing Street",
              "addressLocality": "Digital City",
              "addressRegion": "DC",
              "postalCode": "12345",
              "addressCountry": "US"
            },
            "sameAs": [
              "https://facebook.com/digitalmediapro",
              "https://twitter.com/digitalmediapro",
              "https://linkedin.com/company/digitalmediapro",
              "https://instagram.com/digitalmediapro"
            ],
            "service": [
              {
                "@type": "Service",
                "name": "Search Engine Optimization",
                "description": "Boost your website's visibility and rank higher on Google with our proven SEO strategies."
              },
              {
                "@type": "Service", 
                "name": "Social Media Marketing",
                "description": "Engage your audience and build your brand presence across all major social media platforms."
              },
              {
                "@type": "Service",
                "name": "Pay-Per-Click Advertising", 
                "description": "Drive immediate traffic and conversions with targeted PPC campaigns."
              }
            ]
          })
        }}
      />
    </>
  );
}