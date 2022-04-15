export type LevelType = {
  title: string;
  color: string;
  icon?: 'FaThumbsDown' | 'FaThumbsUp';
  imc: number[];
  yourImc?: number;
};

export type LevelItemType = {
  level: LevelType;
};
