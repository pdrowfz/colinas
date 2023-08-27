import * as React from 'react';
import { type VariantProps, cva } from 'class-variance-authority';
import { cn } from '~/lib/utils';

const teamButtonVariants = cva(
  'flex h-full w-full items-center justify-center rounded-sm bg-cover bg-center bg-no-repeat ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 disabled:pointer-events-none',
  {
    variants: {
      team: {
        pickedARI: 'bg-[url("/assets/images/team_bgs/ARI_bg.webp")]',
        pickedATL: 'bg-[url("/assets/images/team_bgs/ATL_bg.webp")]',
        pickedBAL: 'bg-[url("/assets/images/team_bgs/BAL_bg.webp")]',
        pickedBUF: 'bg-[url("/assets/images/team_bgs/BUF_bg.webp")]',
        pickedCAR: 'bg-[url("/assets/images/team_bgs/CAR_bg.webp")]',
        pickedCHI: 'bg-[url("/assets/images/team_bgs/CHI_bg.webp")]',
        pickedCIN: 'bg-[url("/assets/images/team_bgs/CIN_bg.webp")]',
        pickedCLE: 'bg-[url("/assets/images/team_bgs/CLE_bg.webp")]',
        pickedDAL: 'bg-[url("/assets/images/team_bgs/DAL_bg.webp")]',
        pickedDEN: 'bg-[url("/assets/images/team_bgs/DEN_bg.webp")]',
        pickedDET: 'bg-[url("/assets/images/team_bgs/DET_bg.webp")]',
        pickedGB: 'bg-[url("/assets/images/team_bgs/GB_bg.webp")]',
        pickedHOU: 'bg-[url("/assets/images/team_bgs/HOU_bg.webp")]',
        pickedIND: 'bg-[url("/assets/images/team_bgs/IND_bg.webp")]',
        pickedJAX: 'bg-[url("/assets/images/team_bgs/JAX_bg.webp")]',
        pickedKC: 'bg-[url("/assets/images/team_bgs/KC_bg.webp")]',
        pickedLAC: 'bg-[url("/assets/images/team_bgs/LAC_bg.webp")]',
        pickedLAR: 'bg-[url("/assets/images/team_bgs/LAR_bg.webp")]',
        pickedLV: 'bg-[url("/assets/images/team_bgs/LV_bg.webp")]',
        pickedMIA: 'bg-[url("/assets/images/team_bgs/MIA_bg.webp")]',
        pickedMIN: 'bg-[url("/assets/images/team_bgs/MIN_bg.webp")]',
        pickedNE: 'bg-[url("/assets/images/team_bgs/NE_bg.webp")]',
        pickedNO: 'bg-[url("/assets/images/team_bgs/NO_bg.webp")]',
        pickedNYG: 'bg-[url("/assets/images/team_bgs/NYG_bg.webp")]',
        pickedNYJ: 'bg-[url("/assets/images/team_bgs/NYJ_bg.webp")]',
        pickedPHI: 'bg-[url("/assets/images/team_bgs/PHI_bg.webp")]',
        pickedPIT: 'bg-[url("/assets/images/team_bgs/PIT_bg.webp")]',
        pickedSEA: 'bg-[url("/assets/images/team_bgs/SEA_bg.webp")]',
        pickedSF: 'bg-[url("/assets/images/team_bgs/SF_bg.webp")]',
        pickedTB: 'bg-[url("/assets/images/team_bgs/TB_bg.webp")]',
        pickedTEN: 'bg-[url("/assets/images/team_bgs/TEN_bg.webp")]',
        pickedWAS: 'bg-[url("/assets/images/team_bgs/WAS_bg.webp")]',
        ARI: 'hover:bg-ARI border',
        ATL: 'hover:bg-ATL border',
        BAL: 'hover:bg-BAL border',
        BUF: 'hover:bg-BUF border',
        CAR: 'hover:bg-CAR border',
        CHI: 'hover:bg-CHI border',
        CIN: 'hover:bg-CIN border',
        CLE: 'hover:bg-CLE border',
        DAL: 'hover:bg-DAL border',
        DEN: 'hover:bg-DEN border',
        DET: 'hover:bg-DET border',
        GB: 'hover:bg-GB border',
        HOU: 'hover:bg-HOU border',
        IND: 'hover:bg-IND border',
        JAX: 'hover:bg-JAX border',
        KC: 'hover:bg-KC border',
        LAC: 'hover:bg-LAC border',
        LAR: 'hover:bg-LAR border',
        LV: 'hover:bg-LV border',
        MIA: 'hover:bg-MIA border',
        MIN: 'hover:bg-MIN border',
        NE: 'hover:bg-NE border',
        NO: 'hover:bg-NO border',
        NYG: 'hover:bg-NYG border',
        NYJ: 'hover:bg-NYJ border',
        PHI: 'hover:bg-PHI border',
        PIT: 'hover:bg-PIT border',
        SEA: 'hover:bg-SEA border',
        SF: 'hover:bg-SF border',
        TB: 'hover:bg-TB border',
        TEN: 'hover:bg-TEN border',
        WAS: 'hover:bg-WAS border',
      },
    },
  },
);

interface TeamButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof teamButtonVariants> {}

const TeamButton = React.forwardRef<HTMLButtonElement, TeamButtonProps>(
  ({ className, team, ...props }, ref) => {
    return (
      <button
        className={cn(teamButtonVariants({ team, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
TeamButton.displayName = 'TeamButton';

export { TeamButton };
