import { PaymentFormSchema } from "../zod-schemas/payment-form-schema";

export interface Conference {
  id: number;
  page_header_logo_url: string;
  page_footer_logo_url: string;
  title: string;
  main_heading: string;
  countdown_heading: string | null;
  countdown_desc: string | null;
  event_id: string | null;
  description: string;
  venue: string | null;
  venue_geo_cordinates: string | null;
  venue_section_description: string;
  venue_section_description_sub: string;
  speakers_section_title: string | null;
  speakers_section_description: string;
  sponsors_section_title: string | null;
  sponsors_section_description: string;
  news: string | null;
  twitter_hashtag: string | null;
  contact_description: string | null;
  contact_info: string | null;
  contact_enquiries_nos: string;
  contact_media_nos: string;
  contact_emails: string;
  is_active: string;
  copyright_string: string | null;
  is_deleted: string;
  on_created: string;
  on_modified: string;
  spotlight_awards_description: string;
  spotlight_awards_heading: string | null;
  spotlight_awards_sub_heading: string | null;
  app_group: string;
  brochure_url: string | null;
  cc_to_emails: string;
  countdown_till: string | null;
  venue_logo: string | null;
  venue_accommodation_alternates_description: string;
  event_date: string;
  google_conversion_id: string | null;
  slug: string;
  is_vc: string;
  seo_description: string;
  google_analytics_id: string | null;
  json_fields: string;
  event_end_date: string;
  seo_keywords: string | null;
  enable_delegates_registration: string;
  enable_spotlight_registration: string;
  venue_city_id: string | null;
  venue_country_id: string | null;
  venue_locality: string | null;
  venue_postal_code: string | null;
  venue_region_state: string | null;
}

export interface Country {
    id: number;
    name: string;
    code: string;
    isd_code: string;
}


export interface Subscription {
    id: number;
    techhr_page_id: number;
    amount: number;
    short_description: string;
    currency: string;
    discount: number;
    type: string;
    is_hrsp: string;
    is_live_streaming: string;
    banner_url: string | null;
    available_since: string;
    available_till: string | null;
    on_created: string;
    is_active: string;
    is_deleted: string;
    price_for_days: number;
    std_pricing_parent_id: number | null;
}

export interface PriceResponse {
    amount: string;
    totalParticipants: number;
    finalPayableAmount: string;
    totalTax: string;
    promoDiscount: string;
    discountLabel: string;
    gst: number;
    taxName: string;
    selectedAmt: string;
    workshopAmount: number;
    currency: string;
}


export interface Speaker {
    id: number;
    face: string;
    full_name: string;
    job_title: string;
    desc: string;
    sequence: number;
    fb: string | null;
    tw: string | null; 
    gp: string | null;
    in: string | null;
    is_keynote: string;
    is_jury: string;
    is_think_tank: string;
    company: string;
    yt_url: string | null;
    category: string | null;
    firstName: string;
    lastName: string;
}


export interface CreatePaymentBody extends PaymentFormSchema {
    techhr_page_id: number;
    app_group: string;
    gst: number;
    passes: number;
    subscription_id: number;
    promoCode: string;
    successUrl: string;
    cancelUrl: string;
    trackers: Record<string, string>;
    subscription_type: string;
}