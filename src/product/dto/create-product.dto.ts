export interface CreateProductDto {
    sku: string; // Tipo String foi corrigido para string (minúsculo)
    descricao: string; // Tipo String foi corrigido para string (minúsculo)
    ean?: string; // Adicionado ? para tornar o campo opcional
    dum?: string; // Adicionado ? para tornar o campo opcional
    unPerBox?: number; // Tipo Int foi corrigido para number (representa um inteiro)
    boxPerPallet?: number; // Tipo Int foi corrigido para number (representa um inteiro)
    boxPerLatro?: number; // Tipo Int foi corrigido para number (representa um inteiro)
    latroPerPallet?: number; // Tipo Int foi corrigido para number (representa um inteiro)
    shelf?: number; // Tipo Int foi corrigido para number (representa um inteiro)
    weightPerBox?: number; // Tipo Float foi corrigido para number
    weightPerUnit?: number; // Tipo Float foi corrigido para number
    boxHeight?: number; // Tipo Float foi corrigido para number
    boxLength?: number; // Tipo Float foi corrigido para number
    boxWidth?: number; // Tipo Float foi corrigido para number
    categoryId?: number; // Tipo Int foi corrigido para number (representa um inteiro)
}