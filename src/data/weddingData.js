// Central configuration for Rishav & Eshani's engagement invitation.
// Update event details here without changing the React components.
export const weddingData = {
  couple: {
    groom: {
      name: 'Rishav',
      nameBn: 'ঋষভ',
      parents: ['Partha Pratim Ghosh', 'Chumki Ghosh'],
    },
    bride: {
      name: 'Eshani',
      nameBn: 'ঈশানী',
      parents: ['Late Dinesh Kumar Das', 'Tapasi Das'],
    },
  },

  invitationMessage: {
    invocation: 'শ্রী শ্রী গণেশায় নমঃ',
    heading: 'শুভ বাগদান',
    intro: 'দুই পরিবারের আশীর্বাদে\nএকটি সুন্দর নতুন অধ্যায়ের সূচনা...',
    inviteLine: 'সস্নেহ আমন্ত্রণ',
  },

  events: [
    {
      id: 'engagement',
      type: 'engagement',
      title: 'Our Engagement',
      subtitle: 'আশীর্বাদ ও বাগদান',
      date: '2026-12-13',
      time: '10:00',
      venue: 'ABS River View Tower, Terrace',
      address: 'G.T. Road, Uttarpara, Hooghly 712258, West Bengal',
      description: 'আপনাদের ভালোবাসা ও আশীর্বাদে আমাদের এই বিশেষ দিনটি আরও স্মরণীয় হয়ে উঠুক।',
      theme: 'engagement',
    },
  ],

  venue: {
    name: 'ABS River View Tower, Terrace 2',
    address: 'G.T. Road, Uttarpara, Hooghly 712258, West Bengal',
    city: 'Uttarpara, Hooghly',
    mapUrl: 'https://share.google/s8dJR7XsL6So63Mrg',
    parkingInfo: 'অনুগ্রহ করে প্রয়োজনে পার্কিংয়ের বিষয়ে আয়োজকদের সঙ্গে যোগাযোগ করুন।',
    nearbyLandmark: 'G.T. Road, Uttarpara',
  },

  wedding: {
    date: '2026-12-13',
    time: '10:00',
  },

  music: {
    title: 'অনুষ্ঠানের আবহসঙ্গীত',
    src: '/music/wedding-ambience.mp3',
  },

  rsvp: {
    enabled: false,
    options: [
      { id: 'yes', label: 'অবশ্যই আসব', icon: 'heart' },
      { id: 'maybe', label: 'আসার চেষ্টা করব', icon: 'flower' },
      { id: 'no', label: 'দুঃখিত, উপস্থিত থাকতে পারব না', icon: 'pray' },
    ],
  },

  share: {
    title: 'Rishav & Eshani — Engagement Invitation',
    message: 'আমাদের বাগদানের অনুষ্ঠানে আপনাকে সাদর আমন্ত্রণ।\nRishav ❤️ Eshani | 13 December 2026',
    url: typeof window !== 'undefined' ? window.location.href : '',
  },

  blessing: {
    body: 'আপনাদের উপস্থিতি ও আশীর্বাদ আমাদের আনন্দকে পূর্ণতা দেবে।\nএই বিশেষ দিনে আপনাদের সঙ্গে পেতে চাই।',
    closing: 'শুভ বাগদান · শুভ হোক নতুন পথচলা',
  },
};
