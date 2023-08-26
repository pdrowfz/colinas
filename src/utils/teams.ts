import { type Team } from '@prisma/client';

type TeamsData = {
  [key in Team]: {
    city: string;
    name: string;
  };
};

const teams: TeamsData = {
  ARI: {
    city: 'Arizona',
    name: 'Cardinals',
  },
  ATL: {
    city: 'Atlanta',
    name: 'Falcons',
  },
  BAL: {
    city: 'Baltimore',
    name: 'Ravens',
  },
  BUF: {
    city: 'Buffalo',
    name: 'Bills',
  },
  CAR: {
    city: 'Carolina',
    name: 'Panthers',
  },
  CHI: {
    city: 'Chicago',
    name: 'Bears',
  },
  CIN: {
    city: 'Cincinnati',
    name: 'Bengals',
  },
  CLE: {
    city: 'Cleveland',
    name: 'Browns',
  },
  DAL: {
    city: 'Dallas',
    name: 'Cowboys',
  },
  DEN: {
    city: 'Denver',
    name: 'Broncos',
  },
  DET: {
    city: 'Detroit',
    name: 'Lions',
  },
  GB: {
    city: 'Green Bay',
    name: 'Packers',
  },
  HOU: {
    city: 'Houston',
    name: 'Texans',
  },
  IND: {
    city: 'Indianapolis',
    name: 'Colts',
  },
  JAX: {
    city: 'Jacksonville',
    name: 'Jaguars',
  },
  KC: {
    city: 'Kansas City',
    name: 'Chiefs',
  },
  LAC: {
    city: 'Los Angeles',
    name: 'Chargers',
  },
  LAR: {
    city: 'Los Angeles',
    name: 'Rams',
  },
  LV: {
    city: 'Las Vegas',
    name: 'Raiders',
  },
  MIA: {
    city: 'Miami',
    name: 'Dolphins',
  },
  MIN: {
    city: 'Minnesota',
    name: 'Vikings',
  },
  NE: {
    city: 'New England',
    name: 'Patriots',
  },
  NO: {
    city: 'New Orleans',
    name: 'Saints',
  },
  NYG: {
    city: 'New York',
    name: 'Giants',
  },
  NYJ: {
    city: 'New York',
    name: 'Jets',
  },
  PHI: {
    city: 'Philadelphia',
    name: 'Eagles',
  },
  PIT: {
    city: 'Pittsburgh',
    name: 'Steelers',
  },
  SEA: {
    city: 'Seattle',
    name: 'Seahawks',
  },
  SF: {
    city: 'San Francisco',
    name: '49ers',
  },
  TB: {
    city: 'Tampa Bay',
    name: 'Buccaneers',
  },
  TEN: {
    city: 'Tennessee',
    name: 'Titans',
  },
  WAS: {
    city: 'Washington',
    name: 'Commanders',
  },
};

export { teams };
