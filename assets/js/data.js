/**
 * Diamond Bay Bowling Club - Data Store
 * Contains all content data for the website
 */

const DBBC_DATA = {
  // Club Information
  club: {
    name: 'Diamond Bay Bowling Club',
    shortName: 'DBBC',
    tagline: 'Where Community Meets the Green',
    description: 'Nestled along the stunning coastline, Diamond Bay Bowling Club has been bringing people together for over 50 years. Whether you\'re a seasoned bowler or just looking for a fun day out, our club offers something for everyone.',
    founded: 1972,
    address: {
      street: '123 Coastal Drive',
      suburb: 'Diamond Bay',
      state: 'NSW',
      postcode: '2000',
      country: 'Australia'
    },
    contact: {
      phone: '(02) 9000 0000',
      email: 'hello@diamondbaybowls.com.au',
      fax: '(02) 9000 0001'
    },
    social: {
      facebook: 'https://facebook.com/diamondbaybowls',
      instagram: 'https://instagram.com/diamondbaybowls',
      youtube: 'https://youtube.com/@diamondbaybowls'
    }
  },

  // Navigation Links
  navigation: [
    { label: 'About', href: '#about' },
    { label: 'Barefoot Bowls', href: '#barefoot-bowls' },
    { label: 'Functions', href: '#functions' },
    { label: 'Café & Bar', href: '#cafe-bar' },
    { label: 'Membership', href: '#membership' },
    { label: 'Contact', href: '#contact' }
  ],

  // Hero Section
  hero: {
    headline: 'Where Community Meets the Green',
    subheadline: 'Experience the joy of lawn bowls at Diamond Bay. Perfect for social gatherings, corporate events, or just a relaxing day by the coast.',
    ctas: [
      { label: 'Book Barefoot Bowls', href: '#barefoot-bowls', style: 'primary' },
      { label: 'Plan Your Event', href: '#functions', style: 'outline' },
      { label: 'Join the Club', href: '#membership', style: 'secondary' }
    ],
    images: [
      '/assets/images/hero/hero1.jpg',
      '/assets/images/hero/hero2.jpg',
      '/assets/images/hero/hero3.jpg'
    ]
  },

  // About Section
  about: {
    title: 'More Than Just Bowls',
    subtitle: 'Our Story',
    description: 'Since 1972, Diamond Bay Bowling Club has been the heart of our coastal community. What started as a small group of bowling enthusiasts has grown into a vibrant hub where friendships are forged, celebrations happen, and everyone is welcome.',
    features: [
      {
        icon: 'lawn',
        title: 'World-Class Greens',
        description: 'Four pristine synthetic greens maintained to competition standards, available year-round.'
      },
      {
        icon: 'community',
        title: 'Vibrant Community',
        description: 'Join over 500 members who call Diamond Bay home for social bowls, competitions, and events.'
      },
      {
        icon: 'location',
        title: 'Stunning Location',
        description: 'Breathtaking ocean views and coastal breezes make every visit a memorable experience.'
      },
      {
        icon: 'inclusive',
        title: 'All Welcome',
        description: 'From beginners to champions, we embrace bowlers of all skill levels and backgrounds.'
      }
    ],
    stats: [
      { value: 500, suffix: '+', label: 'Active Members' },
      { value: 50, suffix: '+', label: 'Years of History' },
      { value: 4, suffix: '', label: 'Bowling Greens' },
      { value: 1000, suffix: '+', label: 'Events per Year' }
    ]
  },

  // Barefoot Bowls
  barefootBowls: {
    title: 'Barefoot Bowls',
    subtitle: 'Fun for Everyone',
    description: 'Kick off your shoes and discover why barefoot bowls is Australia\'s favourite social sport. No experience needed – just good vibes and great company.',
    features: [
      'Equipment provided',
      'Coaching available',
      'BYO food welcome',
      'Licensed bar on-site',
      'Perfect for groups 10-200'
    ],
    pricing: [
      {
        name: 'Casual Session',
        price: '$15',
        duration: 'per person / 2 hours',
        includes: ['Green hire', 'Equipment', 'Basic instruction']
      },
      {
        name: 'Group Package',
        price: '$200',
        duration: 'up to 16 players / 2 hours',
        includes: ['Reserved rink', 'Equipment', 'Dedicated host', 'Scoreboards']
      },
      {
        name: 'Corporate Package',
        price: 'From $35',
        duration: 'per person',
        includes: ['Exclusive area', 'Catering options', 'Event coordinator', 'Custom setup']
      }
    ],
    cta: {
      label: 'Book Your Session',
      href: '#contact'
    }
  },

  // Functions & Events
  functions: {
    title: 'Functions & Events',
    subtitle: 'Celebrate With Us',
    description: 'From intimate gatherings to grand celebrations, our versatile spaces and dedicated team make every event unforgettable.',
    eventTypes: [
      {
        name: 'Corporate Events',
        description: 'Team building, client entertainment, and corporate functions with a unique twist.',
        image: '/assets/images/functions/corporate.jpg',
        capacity: '20-200 guests'
      },
      {
        name: 'Weddings',
        description: 'Say "I do" with stunning coastal views as your backdrop.',
        image: '/assets/images/functions/wedding.jpg',
        capacity: 'Up to 150 guests'
      },
      {
        name: 'Birthday Parties',
        description: 'Celebrate another trip around the sun in style.',
        image: '/assets/images/functions/birthday.jpg',
        capacity: '10-100 guests'
      },
      {
        name: 'Social Clubs',
        description: 'Regular meetups for community groups and social clubs.',
        image: '/assets/images/functions/social.jpg',
        capacity: '10-50 guests'
      }
    ],
    venues: [
      {
        name: 'The Ocean Room',
        capacity: '150 seated / 200 cocktail',
        features: ['Ocean views', 'Full bar', 'AV equipment', 'Dance floor']
      },
      {
        name: 'The Green Room',
        capacity: '80 seated / 100 cocktail',
        features: ['Green views', 'Private bar', 'Natural light', 'Outdoor access']
      },
      {
        name: 'The Terrace',
        capacity: '60 seated / 80 cocktail',
        features: ['Al fresco', 'Heaters', 'Festoon lighting', 'Green access']
      }
    ]
  },

  // Café & Bar
  cafeBar: {
    title: 'The Greens Café & Bar',
    subtitle: 'Eat, Drink, Relax',
    description: 'Whether you\'re celebrating a win on the greens or just catching up with friends, our café and bar serves up delicious food and refreshing drinks with spectacular views.',
    hours: {
      monday: 'Closed',
      tuesday: '11am - 9pm',
      wednesday: '11am - 9pm',
      thursday: '11am - 10pm',
      friday: '11am - 11pm',
      saturday: '10am - 11pm',
      sunday: '10am - 8pm'
    },
    features: [
      {
        icon: 'food',
        title: 'Fresh Local Menu',
        description: 'From light bites to hearty meals, our menu celebrates local produce and coastal flavours.'
      },
      {
        icon: 'drinks',
        title: 'Craft Beverages',
        description: 'Local craft beers, Australian wines, and creative cocktails. Something for every taste.'
      },
      {
        icon: 'view',
        title: 'Ocean Views',
        description: 'Dine with uninterrupted views of Diamond Bay and the Pacific Ocean.'
      },
      {
        icon: 'service',
        title: 'Friendly Service',
        description: 'Our team is passionate about hospitality and making every visit special.'
      }
    ],
    specials: [
      { day: 'Tuesday', name: 'Parmy Night', description: '$18 parmigiana with chips' },
      { day: 'Wednesday', name: 'Burger & Beer', description: '$22 burger and schooner' },
      { day: 'Thursday', name: 'Steak Night', description: '$25 rump steak special' },
      { day: 'Friday', name: 'Seafood Special', description: 'Fresh catch of the day' },
      { day: 'Sunday', name: 'Roast Day', description: 'Traditional Sunday roast' }
    ]
  },

  // Membership
  membership: {
    title: 'Join Our Club',
    subtitle: 'Become a Member',
    description: 'Become part of the Diamond Bay family and enjoy exclusive benefits, social events, and a welcoming community of fellow bowlers.',
    tiers: [
      {
        name: 'Social Member',
        price: '$50',
        period: 'per year',
        features: [
          'Discounted green fees',
          'Member bar prices',
          'Social event invitations',
          'Monthly newsletter',
          'Free equipment hire'
        ],
        popular: false
      },
      {
        name: 'Bowling Member',
        price: '$180',
        period: 'per year',
        features: [
          'Unlimited pennant play',
          'Free green fees',
          'Competition entry rights',
          'Coaching sessions',
          'Member bar prices',
          'Social event invitations',
          'Voting rights at AGM'
        ],
        popular: true
      },
      {
        name: 'Corporate',
        price: '$500',
        period: 'per year',
        features: [
          'Up to 10 staff members',
          'Priority booking',
          'Dedicated account manager',
          '10% function discount',
          'Branded rink signage',
          'Quarterly team events'
        ],
        popular: false
      }
    ],
    cta: {
      label: 'Apply for Membership',
      href: '#contact'
    }
  },

  // Testimonials
  testimonials: [
    {
      quote: 'Diamond Bay has become our second home. The community here is so welcoming, and there\'s always something fun happening.',
      author: 'Margaret T.',
      role: 'Member since 2015',
      image: '/assets/images/testimonials/member1.jpg'
    },
    {
      quote: 'We held our company Christmas party here and it was a huge hit! The team made everything so easy and the barefoot bowls was a blast.',
      author: 'James P.',
      role: 'Corporate Event',
      image: '/assets/images/testimonials/member2.jpg'
    },
    {
      quote: 'The views are incredible, the food is delicious, and the atmosphere is always relaxed. Our Sunday tradition for 10 years now.',
      author: 'Sarah & Mike L.',
      role: 'Regular Visitors',
      image: '/assets/images/testimonials/member3.jpg'
    },
    {
      quote: 'Started as a complete beginner and now I play pennant! The coaching and support here is fantastic.',
      author: 'David H.',
      role: 'Bowling Member',
      image: '/assets/images/testimonials/member4.jpg'
    }
  ],

  // Footer
  footer: {
    quickLinks: [
      { label: 'About Us', href: '#about' },
      { label: 'Barefoot Bowls', href: '#barefoot-bowls' },
      { label: 'Functions', href: '#functions' },
      { label: 'Membership', href: '#membership' },
      { label: 'Contact', href: '#contact' }
    ],
    resources: [
      { label: 'Club Calendar', href: '/calendar' },
      { label: 'Competition Results', href: '/results' },
      { label: 'Club Rules', href: '/rules' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms & Conditions', href: '/terms' }
    ],
    copyright: '© 2024 Diamond Bay Bowling Club. All rights reserved.'
  }
};

// Export for use in modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = DBBC_DATA;
}
