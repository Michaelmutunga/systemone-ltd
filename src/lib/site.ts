export const SITE = {
  name: 'System One Ltd',
  url: 'https://systemoneltd.com',
  description:
    'System One Ltd provides professional RFID solutions for institutions and businesses, supported by software, ERP, ICT implementation, training, and technical support.',
  email: 'info@systemoneltd.com',
  phone: '+254716003953',
  phoneDisplay: '+254 716 003 953',
  emergencyPhone: '+254 718 375 717',
  address: {
    streetAddress: 'Greatwall Apartments, Beijing Road',
    locality: 'Nairobi',
    region: 'Nairobi County',
    postalCode: '',
    country: 'KE',
  },
  geo: {
    latitude: -1.3835403058632503,
    longitude: 36.93942379891467,
  },
  googleMapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Greatwall%20Apartments%2C%20Beijing%20Road%2C%20Nairobi%2C%20Kenya',
  hours: [
    'Mo-Fr 08:00-17:00',
    'Sa 09:00-14:00',
  ],
  social: [] as string[],
};

export const absoluteUrl = (path = '/') => new URL(path, SITE.url).toString();
