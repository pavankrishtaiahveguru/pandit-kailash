const sharedGuidanceVideo = "/images/services/astro-video.mp4";

export const readingServices = {
  "psychic-reading": {
    slug: "psychic-reading",
    title: "Psychic Reading",
    eyebrow: "INTUITIVE GUIDANCE",
    shortDescription:
      "A calm, private psychic consultation focused on the questions, choices and personal circumstances you would like to explore.",
    image: "/images/services/psychic-reading.jpg",
    imageAlt: "Private psychic consultation",
    icon: "Sparkles",
    category: "Personal Guidance",
    detailHeading: "What Your Psychic Reading Can Cover",
    detailDescription:
      "Your consultation is shaped around the questions that matter to you. You do not need to understand astrology before booking.",
    topics: [
      "Relationships and emotions",
      "Career and decisions",
      "Family questions",
      "Personal direction",
    ],
    videoTitle: "Astrology & Life Guidance",
    videoDescription:
      "Explore how spiritual guidance can offer a perspective on personal choices and relationships.",
    video: sharedGuidanceVideo,
  },

  "love-relationships": {
    slug: "love-relationships",
    title: "Love & Relationship Psychic Reading",
    eyebrow: "RELATIONSHIP GUIDANCE",
    shortDescription:
      "A private, personal consultation exploring questions about relationships, emotions and compatibility through astrology and intuitive guidance.",
    image: "/images/services/love-relationship.jpg",
    imageAlt: "Couple discussing relationship questions",
    icon: "Heart",
    category: "Love & Relationships",
    detailHeading: "What Your Love & Relationships Reading Can Cover",
    detailDescription:
      "Discuss the relationship questions that matter to you in a respectful and private consultation.",
    topics: [
      "Relationship questions",
      "Compatibility and communication",
      "Emotional patterns",
      "Important personal decisions",
    ],
    videoTitle: "Astrology & Relationship Guidance",
    videoDescription:
      "Explore perspectives on relationships, communication and personal direction.",
    video: sharedGuidanceVideo,
  },

  "palm-reading": {
    slug: "palm-reading",
    title: "Palm Reading",
    eyebrow: "TRADITIONAL PALM ANALYSIS",
    shortDescription:
      "A personal palm reading that considers the major lines and patterns of your hand in the context of the questions you bring.",
    image: "/images/services/palm-reading.jpeg",
    imageAlt: "Palm reading consultation",
    icon: "Hand",
    category: "Palmistry",
    detailHeading: "What Your Palm Reading Can Cover",
    detailDescription:
      "Explore traditional palmistry and discuss the personal questions you would like to bring to your consultation.",
    topics: [
      "Major palm lines",
      "Personal patterns",
      "Life direction",
      "Your individual questions",
    ],
    videoTitle: "Understanding Personal Guidance",
    videoDescription:
      "Discover how a personal consultation can create space to reflect on your questions.",
    video: sharedGuidanceVideo,
  },

  "horoscope-birth-chart": {
    slug: "horoscope-birth-chart",
    title: "Horoscope / Birth Chart Reading",
    eyebrow: "PERSONAL VEDIC CHART",
    shortDescription:
      "A personalised reading of your Vedic horoscope or birth chart, explained in clear language and related to the questions you want to discuss.",
    image: "/images/services/horoscope-birth-chart.jpeg",
    imageAlt: "Traditional Vedic birth chart consultation",
    icon: "Stars",
    category: "Astrology",
    detailHeading: "What Your Birth Chart Reading Can Cover",
    detailDescription:
      "Explore traditional astrological interpretations in relation to your interests and personal questions.",
    topics: [
      "Vedic birth chart",
      "Planetary placements",
      "Life themes",
      "Specific personal questions",
    ],
    videoTitle: "Astrology & Life Guidance",
    videoDescription:
      "Explore how astrology can offer a perspective on important choices and personal direction.",
    video: sharedGuidanceVideo,
  },

  "marriage-compatibility": {
    slug: "marriage-compatibility",
    title: "Marriage & Compatibility",
    eyebrow: "MARRIAGE ASTROLOGY",
    shortDescription:
      "A considered Vedic astrology reading for people seeking guidance around marriage, long-term compatibility and partnership decisions.",
    image: "/images/services/marriage-compatibility.jpeg",
    imageAlt: "Couple discussing marriage and compatibility",
    icon: "Gem",
    category: "Relationships",
    detailHeading: "What Your Marriage & Compatibility Reading Can Cover",
    detailDescription:
      "Discuss marriage-related questions and explore traditional compatibility perspectives in a personalised consultation.",
    topics: [
      "Marriage questions",
      "Long-term compatibility",
      "Partnership decisions",
      "Communication and shared direction",
    ],
    videoTitle: "Marriage & Relationship Guidance",
    videoDescription:
      "Explore relationship questions and traditional astrology perspectives before making personal decisions.",
    video: sharedGuidanceVideo,
  },

  "career-life": {
    slug: "career-life",
    title: "Career Astrology",
    eyebrow: "CAREER GUIDANCE",
    shortDescription:
      "Explore career direction, changing roles, professional choices and the questions that matter to your working life.",
    image: "/images/services/career-life.jpg",
    imageAlt: "Professional reflecting on career decisions",
    icon: "BriefcaseBusiness",
    category: "Career & Life",
    detailHeading: "What Your Career & Work Reading Can Cover",
    detailDescription:
      "Use your consultation to discuss career-related questions, professional transitions and the choices you are considering.",
    topics: [
      "Career direction",
      "Changing roles",
      "Professional decisions",
      "Workplace questions",
    ],
    videoTitle: "Astrology & Career Guidance",
    videoDescription:
      "Explore astrology perspectives on professional choices, life transitions and personal direction.",
    video: sharedGuidanceVideo,
  },
};

export const readingServiceList = Object.values(readingServices);
