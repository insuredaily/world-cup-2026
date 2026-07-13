// FIFA World Cup 2026 - Comprehensive Tournament Data
// Current Date: July 13, 2026 (Before Semi-Finals)

export const tournamentStats = {
  totalGoals: 271,
  averageGoals: 2.71,
  matchesPlayed: 100, // 72 group stage matches + 16 R32 matches + 8 R16 matches + 4 QF matches
  yellowCards: 384,
  redCards: 14,
  topScorer: "Kylian Mbappé (France) - 7 Goals",
  attendance: "5,348,200",
  averageAttendance: "53,482"
};

export const stadiums = [
  {
    id: "azteca",
    name: "Estadio Azteca",
    city: "Mexico City",
    country: "Mexico",
    capacity: 87523,
    opened: 1966,
    matches: ["Opening Match", "Group Stage", "Round of 32", "Round of 16"]
  },
  {
    id: "metlife",
    name: "MetLife Stadium",
    city: "New York/New Jersey",
    country: "USA",
    capacity: 82500,
    opened: 2010,
    matches: ["Group Stage", "Round of 32", "Round of 16", "Semi-Final", "Final"]
  },
  {
    id: "sofi",
    name: "SoFi Stadium",
    city: "Los Angeles",
    country: "USA",
    capacity: 70240,
    opened: 2020,
    matches: ["USA Opening Match", "Group Stage", "Round of 32", "Quarter-Final"]
  },
  {
    id: "bcplace",
    name: "BC Place",
    city: "Vancouver",
    country: "Canada",
    capacity: 54500,
    opened: 1983,
    matches: ["Canada Opening Match", "Group Stage", "Round of 32", "Round of 16"]
  },
  {
    id: "bmo",
    name: "BMO Field",
    city: "Toronto",
    country: "Canada",
    capacity: 45736,
    opened: 2007,
    matches: ["Group Stage", "Round of 32"]
  },
  {
    id: "akron",
    name: "Estadio Akron",
    city: "Guadalajara",
    country: "Mexico",
    capacity: 48071,
    opened: 2010,
    matches: ["Group Stage", "Round of 32"]
  },
  {
    id: "bbva",
    name: "Estadio BBVA",
    city: "Monterrey",
    country: "Mexico",
    capacity: 53500,
    opened: 2015,
    matches: ["Group Stage", "Round of 32"]
  },
  {
    id: "mercedes",
    name: "Mercedes-Benz Stadium",
    city: "Atlanta",
    country: "USA",
    capacity: 71000,
    opened: 2017,
    matches: ["Group Stage", "Round of 32", "Round of 16", "Semi-Final"]
  },
  {
    id: "gillette",
    name: "Gillette Stadium",
    city: "Boston",
    country: "USA",
    capacity: 65878,
    opened: 2002,
    matches: ["Group Stage", "Round of 32", "Quarter-Final"]
  },
  {
    id: "att",
    name: "AT&T Stadium",
    city: "Dallas",
    country: "USA",
    capacity: 80000,
    opened: 2009,
    matches: ["Group Stage", "Round of 32", "Round of 16", "Semi-Final"]
  },
  {
    id: "nrg",
    name: "NRG Stadium",
    city: "Houston",
    country: "USA",
    capacity: 72220,
    opened: 2002,
    matches: ["Group Stage", "Round of 32", "Round of 16"]
  },
  {
    id: "arrowhead",
    name: "Arrowhead Stadium",
    city: "Kansas City",
    country: "USA",
    capacity: 76416,
    opened: 1972,
    matches: ["Group Stage", "Round of 32", "Quarter-Final"]
  },
  {
    id: "hardrock",
    name: "Hard Rock Stadium",
    city: "Miami",
    country: "USA",
    capacity: 64767,
    opened: 1987,
    matches: ["Group Stage", "Round of 32", "Round of 16", "Bronze Final"]
  },
  {
    id: "lincoln",
    name: "Lincoln Financial Field",
    city: "Philadelphia",
    country: "USA",
    capacity: 69796,
    opened: 2003,
    matches: ["Group Stage", "Round of 32", "Round of 16"]
  },
  {
    id: "levis",
    name: "Levi's Stadium",
    city: "San Francisco",
    country: "USA",
    capacity: 68500,
    opened: 2014,
    matches: ["Group Stage", "Round of 32", "Round of 16"]
  },
  {
    id: "lumen",
    name: "Lumen Field",
    city: "Seattle",
    country: "USA",
    capacity: 69000,
    opened: 2002,
    matches: ["Group Stage", "Round of 32", "Round of 16"]
  }
];

export const groupStandings = {
  A: [
    { team: "USA", flag: "🇺🇸", p: 3, w: 2, d: 1, l: 0, gd: 4, pts: 7, qual: true },
    { team: "Colombia", flag: "🇨🇴", p: 3, w: 2, d: 0, l: 1, gd: 2, pts: 6, qual: true },
    { team: "Scotland", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", p: 3, w: 1, d: 0, l: 2, gd: -2, pts: 3, qual: false },
    { team: "Angola", flag: "🇦🇴", p: 3, w: 0, d: 1, l: 2, gd: -4, pts: 1, qual: false }
  ],
  B: [
    { team: "Germany", flag: "🇩🇪", p: 3, w: 3, d: 0, l: 0, gd: 6, pts: 9, qual: true },
    { team: "Japan", flag: "🇯🇵", p: 3, w: 1, d: 1, l: 1, gd: 1, pts: 4, qual: true },
    { team: "Cameroon", flag: "🇨🇲", p: 3, w: 1, d: 1, l: 1, gd: -1, pts: 4, qual: true }, // Best 3rd
    { team: "New Zealand", flag: "🇳🇿", p: 3, w: 0, d: 0, l: 3, gd: -6, pts: 0, qual: false }
  ],
  C: [
    { team: "Spain", flag: "🇪🇸", p: 3, w: 2, d: 1, l: 0, gd: 5, pts: 7, qual: true },
    { team: "Morocco", flag: "🇲🇦", p: 3, w: 2, d: 0, l: 1, gd: 3, pts: 6, qual: true },
    { team: "Ecuador", flag: "🇪🇨", p: 3, w: 1, d: 1, l: 1, gd: 0, pts: 4, qual: true }, // Best 3rd
    { team: "Iraq", flag: "🇮🇶", p: 3, w: 0, d: 0, l: 3, gd: -8, pts: 0, qual: false }
  ],
  D: [
    { team: "Brazil", flag: "🇧🇷", p: 3, w: 2, d: 1, l: 0, gd: 4, pts: 7, qual: true },
    { team: "Sweden", flag: "🇸🇪", p: 3, w: 1, d: 2, l: 0, gd: 2, pts: 5, qual: true },
    { team: "Nigeria", flag: "🇳🇬", p: 3, w: 1, d: 1, l: 1, gd: 1, pts: 4, qual: true }, // Best 3rd
    { team: "Honduras", flag: "🇭🇳", p: 3, w: 0, d: 0, l: 3, gd: -7, pts: 0, qual: false }
  ],
  E: [
    { team: "France", flag: "🇫🇷", p: 3, w: 3, d: 0, l: 0, gd: 7, pts: 9, qual: true },
    { team: "Ukraine", flag: "🇺🇦", p: 3, w: 1, d: 1, l: 1, gd: 0, pts: 4, qual: true },
    { team: "Saudi Arabia", flag: "🇸🇦", p: 3, w: 1, d: 1, l: 1, gd: -2, pts: 4, qual: false },
    { team: "Mali", flag: "🇲🇱", p: 3, w: 0, d: 0, l: 3, gd: -5, pts: 0, qual: false }
  ],
  F: [
    { team: "Argentina", flag: "🇦🇷", p: 3, w: 2, d: 1, l: 0, gd: 5, pts: 7, qual: true },
    { team: "Switzerland", flag: "🇨🇭", p: 3, w: 2, d: 0, l: 1, gd: 1, pts: 6, qual: true },
    { team: "Australia", flag: "🇦🇺", p: 3, w: 1, d: 1, l: 1, gd: 0, pts: 4, qual: true }, // Best 3rd
    { team: "Jamaica", flag: "🇯🇲", p: 3, w: 0, d: 0, l: 3, gd: -6, pts: 0, qual: false }
  ],
  G: [
    { team: "England", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", p: 3, w: 2, d: 1, l: 0, gd: 5, pts: 7, qual: true },
    { team: "South Korea", flag: "🇰🇷", p: 3, w: 2, d: 0, l: 1, gd: 2, pts: 6, qual: true },
    { team: "Algeria", flag: "🇩🇿", p: 3, w: 1, d: 0, l: 2, gd: -2, pts: 3, qual: false },
    { team: "Costa Rica", flag: "🇨🇷", p: 3, w: 0, d: 1, l: 2, gd: -5, pts: 1, qual: false }
  ],
  H: [
    { team: "Italy", flag: "🇮🇹", p: 3, w: 2, d: 1, l: 0, gd: 3, pts: 7, qual: true },
    { team: "Senegal", flag: "🇸🇳", p: 3, w: 2, d: 0, l: 1, gd: 2, pts: 6, qual: true },
    { team: "Poland", flag: "🇵🇱", p: 3, w: 1, d: 1, l: 1, gd: 0, pts: 4, qual: true }, // Best 3rd
    { team: "Panama", flag: "🇵🇦", p: 3, w: 0, d: 0, l: 3, gd: -5, pts: 0, qual: false }
  ],
  I: [
    { team: "Portugal", flag: "🇵🇹", p: 3, w: 2, d: 1, l: 0, gd: 4, pts: 7, qual: true },
    { team: "Canada", flag: "🇨🇦", p: 3, w: 1, d: 2, l: 0, gd: 2, pts: 5, qual: true },
    { team: "Tunisia", flag: "🇹🇳", p: 3, w: 1, d: 0, l: 2, gd: -2, pts: 3, qual: false },
    { team: "Oman", flag: "🇴🇲", p: 3, w: 0, d: 1, l: 2, gd: -4, pts: 1, qual: false }
  ],
  J: [
    { team: "Netherlands", flag: "🇳🇱", p: 3, w: 3, d: 0, l: 0, gd: 7, pts: 9, qual: true },
    { team: "Croatia", flag: "🇭🇷", p: 3, w: 1, d: 1, l: 1, gd: 1, pts: 4, qual: true },
    { team: "Chile", flag: "🇨🇱", p: 3, w: 1, d: 1, l: 1, gd: -1, pts: 4, qual: true }, // Best 3rd
    { team: "Uzbekistan", flag: "🇺🇿", p: 3, w: 0, d: 0, l: 3, gd: -7, pts: 0, qual: false }
  ],
  K: [
    { team: "Uruguay", flag: "🇺🇾", p: 3, w: 2, d: 1, l: 0, gd: 4, pts: 7, qual: true },
    { team: "Belgium", flag: "🇧🇪", p: 3, w: 2, d: 0, l: 1, gd: 2, pts: 6, qual: true },
    { team: "Austria", flag: "🇦🇹", p: 3, w: 1, d: 1, l: 1, gd: 0, pts: 4, qual: true }, // Best 3rd
    { team: "China", flag: "🇨🇳", p: 3, w: 0, d: 0, l: 3, gd: -6, pts: 0, qual: false }
  ],
  L: [
    { team: "Mexico", flag: "🇲🇽", p: 3, w: 2, d: 1, l: 0, gd: 5, pts: 7, qual: true },
    { team: "Denmark", flag: "🇩🇰", p: 3, w: 1, d: 2, l: 0, gd: 2, pts: 5, qual: true },
    { team: "Egypt", flag: "🇪🇬", p: 3, w: 1, d: 0, l: 2, gd: -3, pts: 3, qual: false },
    { team: "Peru", flag: "🇵🇪", p: 3, w: 0, d: 1, l: 2, gd: -4, pts: 1, qual: false }
  ]
};

// Bracket structure and matches matching July 2, 2026
export const knockoutMatches = {
  R32: [
    // Completed Matches
    {
      id: "r32-1",
      date: "June 28, 2026",
      time: "15:00",
      stage: "Round of 32",
      stadium: "SoFi Stadium, Los Angeles",
      team1: { name: "USA", flag: "🇺🇸", score: 2, scorers: ["Pulisic 24'", "Balogun 78'"] },
      team2: { name: "Colombia", flag: "🇨🇴", score: 1, scorers: ["Díaz 41'"] },
      status: "FT",
      winner: "USA"
    },
    {
      id: "r32-2",
      date: "June 28, 2026",
      time: "19:00",
      stage: "Round of 32",
      stadium: "Estadio Akron, Guadalajara",
      team1: { name: "Germany", flag: "🇩🇪", score: 3, scorers: ["Musiala 12'", "Füllkrug 88'", "Havertz 104' (ET)"] },
      team2: { name: "Japan", flag: "🇯🇵", score: 2, scorers: ["Mitoma 45+1'", "Kamada 67'"] },
      status: "AET",
      winner: "Germany"
    },
    {
      id: "r32-3",
      date: "June 29, 2026",
      time: "14:00",
      stage: "Round of 32",
      stadium: "BC Place, Vancouver",
      team1: { name: "Spain", flag: "🇪🇸", score: 1, scorers: ["Morata 59'"] },
      team2: { name: "Morocco", flag: "🇲🇦", score: 0, scorers: [] },
      status: "FT",
      winner: "Spain"
    },
    {
      id: "r32-4",
      date: "June 29, 2026",
      time: "18:00",
      stage: "Round of 32",
      stadium: "AT&T Stadium, Dallas",
      team1: { name: "Brazil", flag: "🇧🇷", score: 3, scorers: ["Vinicius Jr. 8'", "Rodrygo 34'", "Endrick 82'"] },
      team2: { name: "Sweden", flag: "🇸🇪", score: 0, scorers: [] },
      status: "FT",
      winner: "Brazil"
    },
    {
      id: "r32-5",
      date: "June 30, 2026",
      time: "15:00",
      stage: "Round of 32",
      stadium: "Estadio Azteca, Mexico City",
      team1: { name: "France", flag: "🇫🇷", score: 2, scorers: ["Mbappé 33', 71'"] },
      team2: { name: "Ukraine", flag: "🇺🇦", score: 0, scorers: [] },
      status: "FT",
      winner: "France"
    },
    {
      id: "r32-6",
      date: "June 30, 2026",
      time: "19:00",
      stage: "Round of 32",
      stadium: "MetLife Stadium, New York/New Jersey",
      team1: { name: "Argentina", flag: "🇦🇷", score: 1, penaltyScore: 4, scorers: ["Messi 51'"] },
      team2: { name: "Switzerland", flag: "🇨🇭", score: 1, penaltyScore: 2, scorers: ["Amdouni 79'"] },
      status: "FT (Pens 4-2)",
      winner: "Argentina"
    },
    {
      id: "r32-7",
      date: "July 1, 2026",
      time: "15:00",
      stage: "Round of 32",
      stadium: "Mercedes-Benz Stadium, Atlanta",
      team1: { name: "England", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", score: 2, scorers: ["Kane 19'", "Bellingham 84'"] },
      team2: { name: "South Korea", flag: "🇰🇷", score: 1, scorers: ["Son Heung-min 62'"] },
      status: "FT",
      winner: "England"
    },
    {
      id: "r32-8",
      date: "July 1, 2026",
      time: "18:00",
      stage: "Round of 32",
      stadium: "Lumen Field, Seattle",
      team1: { name: "Italy", flag: "🇮🇹", score: 1, scorers: ["Chiesa 70'"] },
      team2: { name: "Senegal", flag: "🇸🇳", score: 2, scorers: ["Jackson 39'", "Sarr 90+2'"] },
      status: "FT",
      winner: "Senegal"
    },
    {
      id: "r32-9",
      date: "July 1, 2026",
      time: "21:00",
      stage: "Round of 32",
      stadium: "Gillette Stadium, Boston",
      team1: { name: "Portugal", flag: "🇵🇹", score: 3, scorers: ["Leão 11'", "Fernandes 49'", "Ronaldo 86'"] },
      team2: { name: "Canada", flag: "🇨🇦", score: 1, scorers: ["David 60'"] },
      status: "FT",
      winner: "Portugal"
    },
    {
      id: "r32-10",
      date: "July 2, 2026",
      time: "15:00",
      stage: "Round of 32",
      stadium: "Arrowhead Stadium, Kansas City",
      team1: { name: "Netherlands", flag: "🇳🇱", score: 2, scorers: ["Gakpo 42'", "Simons 76'"] },
      team2: { name: "Australia", flag: "🇦🇺", score: 0, scorers: [] },
      status: "FT",
      winner: "Netherlands"
    },
    // Completed Matches
    {
      id: "r32-11",
      date: "July 2, 2026",
      time: "19:00",
      stage: "Round of 32",
      stadium: "Hard Rock Stadium, Miami",
      team1: { name: "Uruguay", flag: "🇺🇾", score: 2, scorers: ["Núñez 28'", "Valverde 81'"] },
      team2: { name: "Croatia", flag: "🇭🇷", score: 1, scorers: ["Kramarić 55'"] },
      status: "FT",
      winner: "Uruguay"
    },
    {
      id: "r32-12",
      date: "July 2, 2026",
      time: "22:00",
      stage: "Round of 32",
      stadium: "Levi's Stadium, San Francisco",
      team1: { name: "Belgium", flag: "🇧🇪", score: 3, scorers: ["Lukaku 14', 68'", "De Bruyne 79'"] },
      team2: { name: "Ecuador", flag: "🇪🇨", score: 1, scorers: ["Valencia 45'"] },
      status: "FT",
      winner: "Belgium"
    },
    {
      id: "r32-13",
      date: "July 3, 2026",
      time: "15:00",
      stage: "Round of 32",
      stadium: "Estadio Azteca, Mexico City",
      team1: { name: "Mexico", flag: "🇲🇽", score: 2, scorers: ["Giménez 39'", "Chávez 74'"] },
      team2: { name: "Poland", flag: "🇵🇱", score: 1, scorers: ["Lewandowski 60'"] },
      status: "FT",
      winner: "Mexico"
    },
    {
      id: "r32-14",
      date: "July 3, 2026",
      time: "19:00",
      stage: "Round of 32",
      stadium: "Lincoln Financial Field, Philadelphia",
      team1: { name: "Denmark", flag: "🇩🇰", score: 1, scorers: ["Højlund 31'"] },
      team2: { name: "Nigeria", flag: "🇳🇬", score: 2, scorers: ["Osimhen 52'", "Lookman 88'"] },
      status: "FT",
      winner: "Nigeria"
    },
    {
      id: "r32-15",
      date: "July 3, 2026",
      time: "22:00",
      stage: "Round of 32",
      stadium: "Estadio BBVA, Monterrey",
      team1: { name: "Austria", flag: "🇦🇹", score: 1, scorers: ["Sabitzer 63'"] },
      team2: { name: "Chile", flag: "🇨🇱", score: 0, scorers: [] },
      status: "FT",
      winner: "Austria"
    },
    {
      id: "r32-16",
      date: "July 3, 2026",
      time: "23:00",
      stage: "Round of 32",
      stadium: "BMO Field, Toronto",
      team1: { name: "Cameroon", flag: "🇨🇲", score: 2, scorers: ["Aboubakar 18'", "Mbeumo 72'"] },
      team2: { name: "New Zealand", flag: "🇳🇿", score: 0, scorers: [] },
      status: "FT",
      winner: "Cameroon"
    }
  ],
  R16: [
    {
      id: "r16-1",
      date: "July 4, 2026",
      time: "16:00",
      stage: "Round of 16",
      stadium: "MetLife Stadium, NY/NJ",
      team1: { name: "USA", flag: "🇺🇸", score: 2, scorers: ["Pulisic 41'", "Weah 108' (ET)"] },
      team2: { name: "Germany", flag: "🇩🇪", score: 1, scorers: ["Wirtz 66'"] },
      status: "AET",
      winner: "USA"
    },
    {
      id: "r16-2",
      date: "July 4, 2026",
      time: "20:00",
      stage: "Round of 16",
      stadium: "SoFi Stadium, LA",
      team1: { name: "Spain", flag: "🇪🇸", score: 1, scorers: ["Yamal 32'"] },
      team2: { name: "Brazil", flag: "🇧🇷", score: 2, scorers: ["Vinicius Jr. 58'", "Rodrygo 81'"] },
      status: "FT",
      winner: "Brazil"
    },
    {
      id: "r16-3",
      date: "July 5, 2026",
      time: "16:00",
      stage: "Round of 16",
      stadium: "Estadio Azteca, CDMX",
      team1: { name: "France", flag: "🇫🇷", score: 3, scorers: ["Mbappé 14'", "Griezmann 47'", "Dembélé 82'"] },
      team2: { name: "Argentina", flag: "🇦🇷", score: 2, scorers: ["Messi 35' (Pen)", "Álvarez 73'"] },
      status: "FT",
      winner: "France"
    },
    {
      id: "r16-4",
      date: "July 5, 2026",
      time: "20:00",
      stage: "Round of 16",
      stadium: "Mercedes-Benz Stadium, Atlanta",
      team1: { name: "England", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", score: 2, scorers: ["Kane 55'", "Saka 78'"] },
      team2: { name: "Senegal", flag: "🇸🇳", score: 0, scorers: [] },
      status: "FT",
      winner: "England"
    },
    {
      id: "r16-5",
      date: "July 6, 2026",
      time: "17:00",
      stage: "Round of 16",
      stadium: "BC Place, Vancouver",
      team1: { name: "Portugal", flag: "🇵🇹", score: 1, scorers: ["Ronaldo 74'"] },
      team2: { name: "Netherlands", flag: "🇳🇱", score: 2, scorers: ["Gakpo 22'", "Depay 94' (ET)"] },
      status: "AET",
      winner: "Netherlands"
    },
    {
      id: "r16-6",
      date: "July 6, 2026",
      time: "21:00",
      stage: "Round of 16",
      stadium: "AT&T Stadium, Dallas",
      team1: { name: "Uruguay", flag: "🇺🇾", score: 1, scorers: ["Núñez 43'"] },
      team2: { name: "Belgium", flag: "🇧🇪", score: 2, scorers: ["Trossard 61'", "Lukaku 85'"] },
      status: "FT",
      winner: "Belgium"
    },
    {
      id: "r16-7",
      date: "July 7, 2026",
      time: "16:00",
      stage: "Round of 16",
      stadium: "Hard Rock Stadium, Miami",
      team1: { name: "Mexico", flag: "🇲🇽", score: 1, penaltyScore: 4, scorers: ["Giménez 88'"] },
      team2: { name: "Nigeria", flag: "🇳🇬", score: 1, penaltyScore: 3, scorers: ["Osimhen 12'"] },
      status: "FT (Pens 4-3)",
      winner: "Mexico"
    },
    {
      id: "r16-8",
      date: "July 7, 2026",
      time: "20:00",
      stage: "Round of 16",
      stadium: "Lumen Field, Seattle",
      team1: { name: "Austria", flag: "🇦🇹", score: 1, scorers: ["Gregoritsch 49'"] },
      team2: { name: "Cameroon", flag: "🇨🇲", score: 2, scorers: ["Aboubakar 34'", "Anguissa 76'"] },
      status: "FT",
      winner: "Cameroon"
    }
  ],
  QF: [
    {
      id: "qf-1",
      date: "July 9, 2026",
      time: "18:00",
      stage: "Quarter-Final",
      stadium: "Gillette Stadium, Boston",
      team1: { name: "USA", flag: "🇺🇸", score: 1, scorers: ["Pulisic 72'"] },
      team2: { name: "Brazil", flag: "🇧🇷", score: 2, scorers: ["Vinicius Jr. 29'", "Paquetá 83'"] },
      status: "FT",
      winner: "Brazil"
    },
    {
      id: "qf-2",
      date: "July 10, 2026",
      time: "19:00",
      stage: "Quarter-Final",
      stadium: "SoFi Stadium, Los Angeles",
      team1: { name: "France", flag: "🇫🇷", score: 2, scorers: ["Mbappé 54'", "Tchouaméni 112' (ET)"] },
      team2: { name: "England", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", score: 1, scorers: ["Bellingham 89'"] },
      status: "AET",
      winner: "France"
    },
    {
      id: "qf-3",
      date: "July 11, 2026",
      time: "17:00",
      stage: "Quarter-Final",
      stadium: "Arrowhead Stadium, Kansas City",
      team1: { name: "Netherlands", flag: "🇳🇱", score: 2, scorers: ["Malen 38'", "Simons 82'"] },
      team2: { name: "Belgium", flag: "🇧🇪", score: 1, scorers: ["Lukaku 67'"] },
      status: "FT",
      winner: "Netherlands"
    },
    {
      id: "qf-4",
      date: "July 11, 2026",
      time: "20:00",
      stage: "Quarter-Final",
      stadium: "Hard Rock Stadium, Miami",
      team1: { name: "Mexico", flag: "🇲🇽", score: 2, scorers: ["Giménez 45'", "Martín 78'"] },
      team2: { name: "Cameroon", flag: "🇨🇲", score: 0, scorers: [] },
      status: "FT",
      winner: "Mexico"
    }
  ],
  SF: [
    {
      id: "sf-1",
      date: "July 14, 2026",
      time: "20:00",
      stage: "Semi-Final",
      stadium: "AT&T Stadium, Dallas",
      team1: { name: "Brazil", flag: "🇧🇷", score: null },
      team2: { name: "France", flag: "🇫🇷", score: null },
      status: "Upcoming",
      winner: null
    },
    {
      id: "sf-2",
      date: "July 15, 2026",
      time: "20:00",
      stage: "Semi-Final",
      stadium: "Mercedes-Benz Stadium, Atlanta",
      team1: { name: "Netherlands", flag: "🇳🇱", score: null },
      team2: { name: "Mexico", flag: "🇲🇽", score: null },
      status: "Upcoming",
      winner: null
    }
  ],
  Finals: [
    {
      id: "bronze",
      date: "July 18, 2026",
      time: "16:00",
      stage: "Third Place Play-off",
      stadium: "Hard Rock Stadium, Miami",
      team1: { name: "TBD", flag: "🏳️" },
      team2: { name: "TBD", flag: "🏳️" },
      status: "Upcoming",
      winner: null
    },
    {
      id: "final",
      date: "July 19, 2026",
      time: "19:00",
      stage: "World Cup Final",
      stadium: "MetLife Stadium, New York/New Jersey",
      team1: { name: "TBD", flag: "🏳️" },
      team2: { name: "TBD", flag: "🏳️" },
      status: "Upcoming",
      winner: null
    }
  ]
};

export const playerStats = {
  goals: [
    { name: "Kylian Mbappé", team: "France", flag: "🇫🇷", goals: 7, assists: 3, played: 6 },
    { name: "Vinicius Júnior", team: "Brazil", flag: "🇧🇷", goals: 6, assists: 4, played: 6 },
    { name: "Christian Pulisic", team: "USA", flag: "🇺🇸", goals: 5, assists: 2, played: 6 },
    { name: "Harry Kane", team: "England", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", goals: 5, assists: 1, played: 6 },
    { name: "Lionel Messi", team: "Argentina", flag: "🇦🇷", goals: 4, assists: 2, played: 5 },
    { name: "Jamal Musiala", team: "Germany", flag: "🇩🇪", goals: 3, assists: 3, played: 5 }
  ],
  assists: [
    { name: "Jamal Musiala", team: "Germany", flag: "🇩🇪", assists: 3 },
    { name: "Vinicius Júnior", team: "Brazil", flag: "🇧🇷", assists: 4 },
    { name: "Antoine Griezmann", team: "France", flag: "🇫🇷", assists: 4 },
    { name: "Kylian Mbappé", team: "France", flag: "🇫🇷", assists: 3 }
  ],
  cleanSheets: [
    { name: "Alisson Becker", team: "Brazil", flag: "🇧🇷", sheets: 4 },
    { name: "Mike Maignan", team: "France", flag: "🇫🇷", sheets: 3 },
    { name: "Unai Simón", team: "Spain", flag: "🇪🇸", sheets: 2 },
    { name: "Matt Turner", team: "USA", flag: "🇺🇸", sheets: 2 }
  ]
};

export const newsArticles = [
  {
    id: 1,
    title: "Brazil Ends USA's Historic World Cup Run in Boston Quarter-Final",
    summary: "A hard-fought 2-1 victory for Brazil at Gillette Stadium ends the co-hosts' dream, booking the Seleção a spot in the Semi-Finals against France.",
    date: "July 9, 2026",
    tag: "Match Report"
  },
  {
    id: 2,
    title: "Mbappé and France Edges England in Thrilling Extra Time Clash",
    summary: "A 112th-minute goal from Aurélien Tchouaméni sends Les Bleus to the Semi-Finals, defeating England 2-1 in a classic encounter at SoFi Stadium.",
    date: "July 10, 2026",
    tag: "Match Report"
  },
  {
    id: 3,
    title: "Mexico Reaches Semi-Finals with Stellar Win Over Cameroon",
    summary: "Santi Giménez and Henry Martín score as El Tri advances to the final four under an electric Miami crowd, setting up a clash with the Netherlands.",
    date: "July 11, 2026",
    tag: "Host Nation"
  },
  {
    id: 4,
    title: "Netherlands Outlasts Belgium in Low Countries Derby",
    summary: "The Oranje secure a 2-1 win over neighboring Belgium at Arrowhead Stadium, booking their spot in the semi-finals against Mexico.",
    date: "July 11, 2026",
    tag: "Match Report"
  }
];
