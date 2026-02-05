// constants/config.js

// Application Configuration Constants
export const TENANT_ID = null;
export const PROPERTY_ID = null;

// API Endpoints
export const API_ENDPOINTS = {
  LOGIN: "HotelUser/login",
  BOOKING_GUEST_DETAILS: "HotelGuestRead/booking_guest_details",
  GUEST_AADHAAR_IMAGE: "HotelGuestRead/aadhar/image",
  PROPERTY_BY_ID: "/HotelPropertyRead/property_by_id",
};

// Storage Keys
export const STORAGE_DATA_KEYS = {
  AUTH: "onepass_auth_Law",
  ACCESS_DATA_TOKEN: "onepass_ACCESS_DATA_TOKEN_Law",
  REFRESH_DATA_TOKEN: "onepass_REFRESH_DATA_TOKEN_Law",
  TOKEN_EXPIRES_AT: "onepass_token_expires_at_Law",
  USER_DATA: "onepass_user_data_Law",
};

// Gender Mapping (API code to UI label)
export const GENDER_MAP = {
  M: "Male",
  F: "Female",
  O: "Other",
};
