import * as excelToJson from 'convert-excel-to-json'

const colunas = {
  A: 'sku',
  B: 'descricao',
  C: 'ean',
  D: 'dum',
  E: 'unPerBox',
  F: 'boxPerPallet',
  G: 'boxPerLatro',
  H: 'latroPerPallet',
  I: 'shelf',
  J: 'weightPerBox',
  K: 'boxHeight',
  L: 'boxLength',
  M: 'boxWidth',
  N: 'categoryId',
};

export const xlsxParaJson = (dados: Buffer) => {
  const data = excelToJson({
    source: dados,
    columnToKey: colunas,
  });
  data.base.shift();
  return data.base;
};
