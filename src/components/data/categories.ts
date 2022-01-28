export type ValueType = OptionType | OptionsType | null | void

export type OptionsType = Array<OptionType>

export type OptionType = {
  value: string;
  label: string;
};

export const categories: OptionType[] = [
    { value: 'geografia', label: 'Geografia' },
    { value: 'espanha', label: 'Espanha' },
    { value: 'carnaval', label: 'Carnaval' },
    { value: 'maconha', label: 'Maconha' },
    { value: 'imigrantes', label: 'Imigrantes' },
    { value: 'corinthians', label: 'Corinthians' },
    { value: 'animais', label: 'Animais' },
    { value: 'historiabr', label: 'Historia do Brasil' },
    { value: 'bigode', label: 'Bigode' },
    { value: 'pokemon', label: 'Pokemon' },
    { value: 'vasco', label: 'Vasco' },
    { value: 'memes', label: 'Memes' },
    { value: 'moda', label: 'Moda' },
  ]
