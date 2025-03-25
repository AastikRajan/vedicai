// Zodiac sign data with elements, ruling planets, and characteristics
export const zodiacData = {
  aries: {
    element: 'Fire',
    planet: 'Mars',
    quality: 'Cardinal',
    symbol: '♈',
    traits: ['Energetic', 'Courageous', 'Enthusiastic', 'Impulsive'],
    color: '#FF4136'
  },
  taurus: {
    element: 'Earth',
    planet: 'Venus',
    quality: 'Fixed',
    symbol: '♉',
    traits: ['Patient', 'Reliable', 'Persistent', 'Sensual'],
    color: '#2ECC40'
  },
  gemini: {
    element: 'Air',
    planet: 'Mercury',
    quality: 'Mutable',
    symbol: '♊',
    traits: ['Versatile', 'Curious', 'Communicative', 'Witty'],
    color: '#7FDBFF'
  },
  cancer: {
    element: 'Water',
    planet: 'Moon',
    quality: 'Cardinal',
    symbol: '♋',
    traits: ['Nurturing', 'Protective', 'Intuitive', 'Emotional'],
    color: '#B10DC9'
  },
  leo: {
    element: 'Fire',
    planet: 'Sun',
    quality: 'Fixed',
    symbol: '♌',
    traits: ['Confident', 'Creative', 'Generous', 'Dramatic'],
    color: '#FF851B'
  },
  virgo: {
    element: 'Earth',
    planet: 'Mercury',
    quality: 'Mutable',
    symbol: '♍',
    traits: ['Analytical', 'Practical', 'Diligent', 'Modest'],
    color: '#39CCCC'
  },
  libra: {
    element: 'Air',
    planet: 'Venus',
    quality: 'Cardinal',
    symbol: '♎',
    traits: ['Diplomatic', 'Harmonious', 'Fair', 'Social'],
    color: '#01FF70'
  },
  scorpio: {
    element: 'Water',
    planet: 'Mars/Pluto',
    quality: 'Fixed',
    symbol: '♏',
    traits: ['Intense', 'Passionate', 'Resourceful', 'Mysterious'],
    color: '#85144b'
  },
  sagittarius: {
    element: 'Fire',
    planet: 'Jupiter',
    quality: 'Mutable',
    symbol: '♐',
    traits: ['Optimistic', 'Adventurous', 'Philosophical', 'Direct'],
    color: '#F012BE'
  },
  capricorn: {
    element: 'Earth',
    planet: 'Saturn',
    quality: 'Cardinal',
    symbol: '♑',
    traits: ['Ambitious', 'Disciplined', 'Patient', 'Practical'],
    color: '#111111'
  },
  aquarius: {
    element: 'Air',
    planet: 'Saturn/Uranus',
    quality: 'Fixed',
    symbol: '♒',
    traits: ['Progressive', 'Original', 'Independent', 'Humanitarian'],
    color: '#AAAAAA'
  },
  pisces: {
    element: 'Water',
    planet: 'Jupiter/Neptune',
    quality: 'Mutable',
    symbol: '♓',
    traits: ['Compassionate', 'Artistic', 'Intuitive', 'Dreamy'],
    color: '#001f3f'
  }
};

export const elements = {
  fire: {
    name: 'Fire',
    traits: ['Passionate', 'Dynamic', 'Temperamental'],
    color: '#FF4136'
  },
  earth: {
    name: 'Earth',
    traits: ['Practical', 'Loyal', 'Stable'],
    color: '#2ECC40'
  },
  air: {
    name: 'Air',
    traits: ['Intellectual', 'Communicative', 'Social'],
    color: '#7FDBFF'
  },
  water: {
    name: 'Water',
    traits: ['Emotional', 'Intuitive', 'Nurturing'],
    color: '#B10DC9'
  }
};

export const qualities = {
  cardinal: {
    name: 'Cardinal',
    description: 'Initiating, active, ambitious',
    signs: ['Aries', 'Cancer', 'Libra', 'Capricorn']
  },
  fixed: {
    name: 'Fixed',
    description: 'Stable, determined, persistent',
    signs: ['Taurus', 'Leo', 'Scorpio', 'Aquarius']
  },
  mutable: {
    name: 'Mutable',
    description: 'Flexible, adaptable, versatile',
    signs: ['Gemini', 'Virgo', 'Sagittarius', 'Pisces']
  }
};

export const getZodiacInfo = (sign: string) => {
  const normalizedSign = sign.toLowerCase().trim();
  return zodiacData[normalizedSign as keyof typeof zodiacData];
};

export const getElementInfo = (element: string) => {
  const normalizedElement = element.toLowerCase().trim();
  return elements[normalizedElement as keyof typeof elements];
};

export const getQualityInfo = (quality: string) => {
  const normalizedQuality = quality.toLowerCase().trim();
  return qualities[normalizedQuality as keyof typeof qualities];
};