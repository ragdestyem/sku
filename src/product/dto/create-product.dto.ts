import { ApiProperty } from "@nestjs/swagger";

export class CreateProductDto {
    @ApiProperty()
    sku: string; // Tipo String foi corrigido para string (minúsculo)
    @ApiProperty()
    descricao: string; // Tipo String foi corrigido para string (minúsculo)
    @ApiProperty()
    ean?: string; // Adicionado ? para tornar o campo opcional
    @ApiProperty()
    dum?: string; // Adicionado ? para tornar o campo opcional
    @ApiProperty()
    unPerBox?: number; // Tipo Int foi corrigido para number (representa um inteiro)
    @ApiProperty()
    boxPerPallet?: number; // Tipo Int foi corrigido para number (representa um inteiro)
    @ApiProperty()
    boxPerLatro?: number; // Tipo Int foi corrigido para number (representa um inteiro)
    @ApiProperty()
    latroPerPallet?: number; // Tipo Int foi corrigido para number (representa um inteiro)
    @ApiProperty()
    
    shelf?: number; // Tipo Int foi corrigido para number (representa um inteiro)
    @ApiProperty()
    weightPerBox?: number; // Tipo Float foi corrigido para number
    @ApiProperty()
    weightPerUnit?: number; // Tipo Float foi corrigido para number
    @ApiProperty()
    boxHeight?: number; // Tipo Float foi corrigido para number
    @ApiProperty()
    boxLength?: number; // Tipo Float foi corrigido para number
    @ApiProperty()
    boxWidth?: number; // Tipo Float foi corrigido para number
    @ApiProperty()
    categoryId?: number; // Tipo Int foi corrigido para number (representa um inteiro)
}