import { CreateProductDto } from '../dto/create-product.dto';



export const validarTipo = (obj: any): string[] => {
  const atributo = [];


  if (typeof obj.sku !== 'string') {
    atributo.push('sku');
  }
  
  if (typeof obj.descricao !== 'string') {
    atributo.push('descricao');
  }
  

  if (obj.ean) {
    if (typeof obj.ean !== 'string') {
      atributo.push('ean');
    }
  }

  if (obj.dum) {
    if (typeof obj.dum !== 'string') {
      atributo.push('dum');
    }
  }
  if (obj.unPerBox) {
    if (!Number.isInteger(obj.unPerBox)) {
      atributo.push('unPerBox');
    }
  }
  if (obj.boxPerPallet) {
    if (!Number.isInteger(obj.boxPerPallet)) {
      atributo.push('boxPerPallet');
    }
  }

  if (obj.boxPerLatro) {
    if (!Number.isInteger(obj.boxPerLatro)) {
      atributo.push('boxPerLatro');
    }
  }
  if (obj.latroPerPallet) {
    if (!Number.isInteger(obj.latroPerPallet)) {
      atributo.push('latroPerPallet');
    }
  }
  if (obj.shelf) {
    if (!Number.isInteger(obj.shelf)) {
      atributo.push('shelf');
    }
  }
  if (obj.weightPerBox) {
    if (typeof obj.weightPerBox !== 'number') {
      atributo.push('weightPerBox');
    }
  }
  if (obj.weightPerUnit) {
    if (typeof obj.weightPerUnit !== 'number') {
      atributo.push('weightPerUnit');
    }
  }
  if (obj.boxHeight) {
    if (typeof obj.boxHeight !== 'number') {
      atributo.push('boxHeight');
    }
  }
  if (obj.boxLength) {
    if (typeof obj.boxLength !== 'number') {
      atributo.push('boxLength');
    }
  }
  if (obj.boxWidth) {
    if (typeof obj.boxWidth !== 'number') {
      atributo.push('boxWidth');
    }
  }
  if (obj.categoryId) {
    if (!Number.isInteger(obj.categoryId)) {
      atributo.push('categoryId');
    }
  }

  return atributo;
};
