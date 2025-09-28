# Brizo Stay - API Contracts & Integration Guide

## Overview
This document outlines the API contracts and integration plans for converting the Brizo Stay frontend from mock data to real backend functionality.

## Current Mock Data Structure

### Brand Data
```javascript
brandData = {
  name, logo, brandImage, brandColor, accentColor, textColor, 
  tagline, description, supportWhatsapp, supportNumber, supportEmail
}
```

### Statistics
```javascript
stats = [
  { title: "Properties", value: "100+", imgUrl },
  { title: "Happy Tenants", value: "6500+", imgUrl },
  { title: "Beds", value: "1000+", imgUrl },
  { title: "Locations", value: "20+", imgUrl }
]
```

### Properties
```javascript
properties = [
  {
    id, name, location, rentFrom, images[], 
    sharingTypes[], amenities[]
  }
]
```

### Features
```javascript
features = [
  { title, body, imgUrl }
]
```

### Gallery Images
```javascript
galleryImages = [
  { id, title, category, url }
]
```

## Required API Endpoints

### 1. Brand Configuration
**GET /api/brand**
```json
{
  "brand_data": {
    "name": "Brizo Stay",
    "logo": "url",
    "brand_color": "#000000",
    "support_whatsapp": "8097734490",
    "support_email": "info.brizostay@gmail.com"
  }
}
```

### 2. Statistics Dashboard
**GET /api/stats**
```json
{
  "stats": [
    { "title": "Properties", "value": "100+", "img_url": "url" }
  ]
}
```

### 3. Properties Management
**GET /api/properties**
- Query params: ?city=, ?rent_min=, ?rent_max=, ?sharing_type=
```json
{
  "properties": [
    {
      "id": "uuid",
      "name": "Property Name",
      "location": "Area, Mumbai", 
      "rent_from": 15000,
      "images": ["url1", "url2"],
      "sharing_types": ["2 Sharing", "3 Sharing"],
      "amenities": ["wifi", "security"]
    }
  ]
}
```

**GET /api/properties/{property_id}**
```json
{
  "property": { detailed property info }
}
```

### 4. Features List
**GET /api/features**
```json
{
  "features": [
    {
      "title": "Smart KYC",
      "body": "Description",
      "img_url": "url"
    }
  ]
}
```

### 5. Gallery Images
**GET /api/gallery**
- Query params: ?category=
```json
{
  "images": [
    {
      "id": "uuid",
      "title": "Image Title",
      "category": "Bedroom", 
      "url": "image_url"
    }
  ]
}
```

### 6. Location Search
**GET /api/cities**
```json
{
  "cities": ["Mumbai", "Kurla", "Ghatkopar", "Vikhroli"]
}
```

**GET /api/search**
- Query params: ?location=, ?property_type=
```json
{
  "results": [
    { property objects matching search }
  ]
}
```

### 7. Contact & Inquiries
**POST /api/inquiries**
```json
{
  "name": "John Doe",
  "email": "john@example.com", 
  "phone": "9876543210",
  "property_interest": "kurla",
  "message": "Interested in 2-sharing room"
}
```

**POST /api/whatsapp-leads**
```json
{
  "name": "John Doe",
  "phone": "9876543210",
  "source": "chatbot"
}
```

## Database Models

### Brand
```python
class Brand(BaseModel):
    name: str
    logo: str
    brand_color: str
    support_whatsapp: str
    support_email: str
```

### Property
```python
class Property(BaseModel):
    id: str
    name: str
    location: str
    city: str
    rent_from: int
    images: List[str]
    sharing_types: List[str]
    amenities: List[str]
    available_for: str
    tenants_preferred: str
```

### Inquiry
```python
class Inquiry(BaseModel):
    id: str
    name: str
    email: str
    phone: str
    property_interest: Optional[str]
    message: str
    created_at: datetime
```

### Feature
```python
class Feature(BaseModel):
    title: str
    body: str
    img_url: str
    order: int
```

### GalleryImage
```python
class GalleryImage(BaseModel):
    id: str
    title: str
    category: str
    url: str
```

## Frontend Integration Points

### Components to Update

1. **HeroSection.jsx**
   - Replace `cities` from mock with API call to `/api/cities`
   - Connect search functionality to `/api/search`

2. **StatsSection.jsx**
   - Replace `stats` from mock with API call to `/api/stats`

3. **FeaturesSection.jsx**
   - Replace `features` from mock with API call to `/api/features`

4. **PropertiesSection.jsx**
   - Replace `properties` from mock with API call to `/api/properties`
   - Add property filtering and pagination

5. **ImageGallery.jsx**
   - Replace `galleryImages` from mock with API call to `/api/gallery`
   - Add category filtering via API

6. **ContactSection.jsx**
   - Connect form submission to `/api/inquiries`
   - Add success/error handling

7. **WhatsAppChatbot.jsx**
   - Connect lead submission to `/api/whatsapp-leads`
   - Add form validation

### API Service Layer
Create `src/services/api.js`:
```javascript
const API_BASE = process.env.REACT_APP_BACKEND_URL + '/api';

export const apiService = {
  getBrandData: () => fetch(`${API_BASE}/brand`),
  getStats: () => fetch(`${API_BASE}/stats`),
  getProperties: (filters) => fetch(`${API_BASE}/properties?${new URLSearchParams(filters)}`),
  getFeatures: () => fetch(`${API_BASE}/features`),
  getGallery: (category) => fetch(`${API_BASE}/gallery?category=${category}`),
  getCities: () => fetch(`${API_BASE}/cities`),
  searchProperties: (query) => fetch(`${API_BASE}/search?${new URLSearchParams(query)}`),
  submitInquiry: (data) => fetch(`${API_BASE}/inquiries`, { method: 'POST', body: JSON.stringify(data) }),
  submitWhatsAppLead: (data) => fetch(`${API_BASE}/whatsapp-leads`, { method: 'POST', body: JSON.stringify(data) })
};
```

## Implementation Priority

1. **Phase 1**: Basic CRUD endpoints for properties, brand data, features
2. **Phase 2**: Search and filtering functionality
3. **Phase 3**: Contact forms and WhatsApp integration
4. **Phase 4**: Gallery management and image optimization

## Error Handling

- Implement proper HTTP status codes
- Add loading states for all API calls
- Fallback to mock data if API fails
- User-friendly error messages

## Security Considerations

- Input validation for all forms
- Rate limiting for search and contact endpoints
- CORS configuration for frontend domain
- Sanitize user inputs before database storage

## Performance Optimizations

- Image optimization and CDN integration
- Pagination for properties listing
- Caching for frequently accessed data (brand info, features)
- Lazy loading for gallery images