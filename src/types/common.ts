export type Headers = {
  headers: {
    [key: string]: string;
  };
}

export type FuncaoGenerica = {
  <T>(): T;
}

export type ObjetoGenerico = {
  [key: string]: string;
}
