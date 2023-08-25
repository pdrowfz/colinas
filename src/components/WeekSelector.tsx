type WeekSelectorProps = {
  week: number;
  setWeek: (arg0: number) => void;
};

const WeekSelector = ({ week, setWeek }: WeekSelectorProps) => {
  return (
    <div className="align-center flex w-96 flex-row justify-between">
      {week > 1 ? (
        <button onClick={() => setWeek(week - 1)}>Previous week</button>
      ) : null}
      <p>{week}</p>
      {week < 18 ? (
        <button onClick={() => setWeek(week + 1)}>Next week</button>
      ) : null}
    </div>
  );
};

export { WeekSelector };
