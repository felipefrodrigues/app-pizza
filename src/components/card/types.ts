/* eslint-disable @typescript-eslint/no-explicit-any */
export type CardProps = {
  datas: Array<{
    id: number;
    image: string;
    name: string;
    price: number;
    description: string;
  }>
  steps: Array<string>,
  currentStep: number,
  prev: () => void,
  next: () => void,
}
