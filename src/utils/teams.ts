import { type Team } from '@prisma/client';

type TeamsData = {
  [key in Team]: {
    city: string;
    name: string;
    logoPath: string;
  };
};

const logoFolder = '/assets/images/team_logos/';

const teams: TeamsData = {
  ARI: {
    city: 'Arizona',
    name: 'Cardinals',
    logoPath: `${logoFolder}ARI.svg`,
  },
  ATL: {
    city: 'Atlanta',
    name: 'Falcons',
    logoPath: `${logoFolder}ATL.svg`,
  },
  BAL: {
    city: 'Baltimore',
    name: 'Ravens',
    logoPath: `${logoFolder}BAL.svg`,
  },
  BUF: {
    city: 'Buffalo',
    name: 'Bills',
    logoPath: `${logoFolder}BUF.svg`,
  },
  CAR: {
    city: 'Carolina',
    name: 'Panthers',
    logoPath: `${logoFolder}CAR.svg`,
  },
  CHI: {
    city: 'Chicago',
    name: 'Bears',
    logoPath: `${logoFolder}CHI.svg`,
  },
  CIN: {
    city: 'Cincinnati',
    name: 'Bengals',
    logoPath: `${logoFolder}CIN.svg`,
  },
  CLE: {
    city: 'Cleveland',
    name: 'Browns',
    logoPath: `${logoFolder}CLE.svg`,
  },
  DAL: {
    city: 'Dallas',
    name: 'Cowboys',
    logoPath: `${logoFolder}DAL.svg`,
  },
  DEN: {
    city: 'Denver',
    name: 'Broncos',
    logoPath: `${logoFolder}DEN.svg`,
  },
  DET: {
    city: 'Detroit',
    name: 'Lions',
    logoPath: `${logoFolder}DET.svg`,
  },
  GB: {
    city: 'Green Bay',
    name: 'Packers',
    logoPath: `${logoFolder}GB.svg`,
  },
  HOU: {
    city: 'Houston',
    name: 'Texans',
    logoPath: `${logoFolder}HOU.svg`,
  },
  IND: {
    city: 'Indianapolis',
    name: 'Colts',
    logoPath: `${logoFolder}IND.svg`,
  },
  JAX: {
    city: 'Jacksonville',
    name: 'Jaguars',
    logoPath: `${logoFolder}JAX.svg`,
  },
  KC: {
    city: 'Kansas City',
    name: 'Chiefs',
    logoPath: `${logoFolder}KC.svg`,
  },
  LAC: {
    city: 'Los Angeles',
    name: 'Chargers',
    logoPath: `${logoFolder}LAC.svg`,
  },
  LAR: {
    city: 'Los Angeles',
    name: 'Rams',
    logoPath: `${logoFolder}LAR.svg`,
  },
  LV: {
    city: 'Las Vegas',
    name: 'Raiders',
    logoPath: `${logoFolder}LV.svg`,
  },
  MIA: {
    city: 'Miami',
    name: 'Dolphins',
    logoPath: `${logoFolder}MIA.svg`,
  },
  MIN: {
    city: 'Minnesota',
    name: 'Vikings',
    logoPath: `${logoFolder}MIN.svg`,
  },
  NE: {
    city: 'New England',
    name: 'Patriots',
    logoPath: `${logoFolder}NE.svg`,
  },
  NO: {
    city: 'New Orleans',
    name: 'Saints',
    logoPath: `${logoFolder}NO.svg`,
  },
  NYG: {
    city: 'New York',
    name: 'Giants',
    logoPath: `${logoFolder}NYG.svg`,
  },
  NYJ: {
    city: 'New York',
    name: 'Jets',
    logoPath: `${logoFolder}NYJ.svg`,
  },
  PHI: {
    city: 'Philadelphia',
    name: 'Eagles',
    logoPath: `${logoFolder}PHI.svg`,
  },
  PIT: {
    city: 'Pittsburgh',
    name: 'Steelers',
    logoPath: `${logoFolder}PIT.svg`,
  },
  SEA: {
    city: 'Seattle',
    name: 'Seahawks',
    logoPath: `${logoFolder}SEA.svg`,
  },
  SF: {
    city: 'San Francisco',
    name: '49ers',
    logoPath: `${logoFolder}SF.svg`,
  },
  TB: {
    city: 'Tampa Bay',
    name: 'Buccaneers',
    logoPath: `${logoFolder}TB.svg`,
  },
  TEN: {
    city: 'Tennessee',
    name: 'Titans',
    logoPath: `${logoFolder}TEN.svg`,
  },
  WAS: {
    city: 'Washington',
    name: 'Commanders',
    logoPath: `${logoFolder}WAS.svg`,
  },
};

export { teams };
