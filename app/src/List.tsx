export const List = () => {
  return (
    <div className="container mx-auto grow flex flex-col grow" id="root">
      {teams.map((players) => (
        <div className='flex flex-col grow'>
          {players.map((player) => (
            <PlayerCard player={player} />
          ))}
        </div>
      ))}
    </div>
  );
};

const createPlayers = () =>
  Array.from({ length: 5 }).map((_, k) => ({
    name: "Booba",
    WR: 50,
    WRC: 100,
    WRM: 0,
    rank: "IRON III",
  }));

const teams = [createPlayers(), createPlayers()];

const PlayerCard = ({
  player,
}: {
  player: ReturnType<typeof createPlayers>[number];
}) => {
  return (
    <div className="flex flex-col">
      <div>
        {player.rank} {player.name}
      </div>
      <div className="flex flex-row">
        <div>{player.WR}</div>
        <div>{player.WRC}</div>
        <div>{player.WRM}</div>
      </div>
    </div>
  );
};
