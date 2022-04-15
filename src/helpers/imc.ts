import { LevelType } from 'types/LevelType';

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
  // const result = levels
  //   .filter(level => imc >= level.imc[0] && imc < level.imc[1])
  //   .filter(level => (level.yourImc = imc))
  //   .map(level => level);

  // return result;

  for (const i in levels) {
    if (imc >= levels[i].imc[0] && imc < levels[i].imc[1]) {
      const levelCopy: LevelType = { ...levels[i] };
      levelCopy.yourImc = parseFloat(imc.toFixed(2));
      return levelCopy;
    }
  }
  return null;
};
