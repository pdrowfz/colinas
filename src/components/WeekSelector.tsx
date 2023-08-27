import { weeks } from '~/utils/weeks';
import { Button } from './ui/button';

type WeekSelectorProps = {
  week: number;
  setWeek: (arg0: number) => void;
};

const WeekSelector = ({ week, setWeek }: WeekSelectorProps) => {
  return (
    <div className="mb-8 flex flex-col items-center">
      <h3 className="text-2xl font-semibold text-slate-900">Week {week}</h3>
      <div className="mt-8 flex flex-row items-center gap-2">
        {weeks.map((weekObj) => (
          <Button
            key={weekObj.week}
            variant={weekObj.week == week ? 'default' : 'secondary'}
            onClick={() => setWeek(weekObj.week)}
          >
            {weekObj.week}
          </Button>
        ))}
      </div>
    </div>
  );
};

export { WeekSelector };
