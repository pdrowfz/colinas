const teams = {
  ARI: {
    city: 'Arizona',
    name: 'Cardinals',
  },
  ATL: {
    city: 'Atlanta',
    name: 'Falcons',
  },
  CAR: {
    city: 'Carolina',
    name: 'Panthers',
  },
  CHI: {
    city: 'Chicago',
    name: 'Bears',
  },
  DAL: {
    city: 'Dallas',
    name: 'Cowboys',
  },
  DET: {
    city: 'Detroit',
    name: 'Lions',
  },
  GB: {
    city: 'Green Bay',
    name: 'Packers',
  },
  LAR: {
    city: 'Los Angeles',
    name: 'Rams',
  },
  MIN: {
    city: 'Minnesota',
    name: 'Vikings',
  },
  NO: {
    city: 'New Orleans',
    name: 'Saints',
  },
  NYG: {
    city: 'New York',
    name: 'Giants',
  },
  PHI: {
    city: 'Philadelphia',
    name: 'Eagles',
  },
  SF: {
    city: 'San Francisco',
    name: '49ers',
  },
  SEA: {
    city: 'Seattle',
    name: 'Seahawks',
  },
  TB: {
    city: 'Tampa Bay',
    name: 'Buccaneers',
  },
  WAS: {
    city: 'Washington',
    name: 'Commanders',
  },
  BAL: {
    city: 'Baltimore',
    name: 'Ravens',
  },
  BUF: {
    city: 'Buffalo',
    name: 'Bills',
  },
  CIN: {
    city: 'Cincinnati',
    name: 'Bengals',
  },
  CLE: {
    city: 'Cleveland',
    name: 'Browns',
  },
  DEN: {
    city: 'Denver',
    name: 'Broncos',
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
  LV: {
    city: 'Las Vegas',
    name: 'Raiders',
  },
  LAC: {
    city: 'Los Angeles',
    name: 'Chargers',
  },
  MIA: {
    city: 'Miami',
    name: 'Dolphins',
  },
  NE: {
    city: 'New England',
    name: 'Patriots',
  },
  NYJ: {
    city: 'New York',
    name: 'Jets',
  },
  PIT: {
    city: 'Pittsburgh',
    name: 'Steelers',
  },
  TEN: {
    city: 'Tennessee',
    name: 'Titans',
  },
};

type TeamAbbreviation =
  | 'ARI'
  | 'ATL'
  | 'CAR'
  | 'CHI'
  | 'DAL'
  | 'DET'
  | 'GB'
  | 'LAR'
  | 'MIN'
  | 'NO'
  | 'NYG'
  | 'PHI'
  | 'SF'
  | 'SEA'
  | 'TB'
  | 'WAS'
  | 'BAL'
  | 'BUF'
  | 'CIN'
  | 'CLE'
  | 'DEN'
  | 'HOU'
  | 'IND'
  | 'JAX'
  | 'KC'
  | 'LV'
  | 'LAC'
  | 'MIA'
  | 'NE'
  | 'NYJ'
  | 'PIT'
  | 'TEN';

const getTeamName = (teamAbbreviation: TeamAbbreviation) =>
  teams[teamAbbreviation]?.name ?? null;

export { getTeamName };
export type { TeamAbbreviation };
