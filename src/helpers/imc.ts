export type LevelType = {
  title: string;
  color: string;
  icon: 'FaThumbsDown' | 'FaThumbsUp';
  imc: number[];
  yourImc?: number;
};

export const levels: LevelType[] = [
  {
    title: 'Magreza',
    color: 'bg-secondary',
    icon: 'FaThumbsDown',
    imc: [0, 18.5],
  },
  {
    title: 'Normal',
    color: 'bg-success',
    icon: 'FaThumbsUp',
    imc: [18.6, 24.9],
  },
  {
    title: 'Sobrepeso',
    color: 'bg-warning',
    icon: 'FaThumbsDown',
    imc: [25, 30],
  },
  {
    title: 'Obesidade',
    color: 'bg-danger',
    icon: 'FaThumbsDown',
    imc: [30.1, 99],
  },
];

export const calculateImc = (height: number, weight: number) => {
  const imc = weight / (height * height);

  for (const i in levels) {
    if (imc >= levels[i].imc[0] && imc < levels[i].imc[1]) {
      levels[i].yourImc = imc;
      return levels[i];
    }

    return null;
  }
};
