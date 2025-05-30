import { z } from "zod";


export const Schema031140 = z.array(z.object({
  "Mapa": z.string().min(1),
  "Veículo": z.string().optional().or(z.literal('')),
  "Placa": z.string().optional().or(z.literal('')),
  "Dt Entrega": z.string().optional().or(z.literal('')),
  "Entregas": z.string().optional().or(z.literal('')),
  "Hora Emis": z.string().optional().or(z.literal('')),
  "Hora Carreg": z.string().optional().or(z.literal('')),
  "Hora Saida": z.string().optional().or(z.literal('')),
  "Hora Chegada": z.string().optional().or(z.literal('')),
  "Hora P.Fis": z.string().optional().or(z.literal('')),
  "Hora P.Fin": z.string().optional().or(z.literal('')),
  "Tempo Rota": z.string().optional().or(z.literal('')),
  "Tempo P.Fis": z.string().optional().or(z.literal('')),
  "Tempo P.Fin": z.string().optional().or(z.literal('')),
  "Tempo Interno": z.string().optional().or(z.literal('')),
  "KM Inicial": z.string().optional().or(z.literal('')),
  "KM Final": z.string().optional().or(z.literal('')),
  "KM Rodado": z.string().optional().or(z.literal(''))
}));
export const Schema030530 = z.array(z.object({
  "Cód. Cliente": z.string().min(1),
  "Descrição": z.string().min(1),
  "Data": z.string().min(1),
  "Mapa": z.string().min(1),
  "Veículo": z.string().min(1),
  "Placa": z.string().min(1),
  "Motorista": z.string().min(1),
  "Cód. Produto": z.string().min(1),
  "Descrição Produto": z.string().min(1),
  "Cód. Cliente 2": z.string().min(1),
  "Descrição Cliente 2": z.string().min(1),
  "Peso": z.string().min(1),
  "% Ocup.": z.string().min(1),
  "Volume": z.string().min(1),
  "% Ocup. 2": z.string().min(1),
  "Vol. Agendado": z.string().min(1),
  "Entregas": z.string().min(1),
  "Pedidos": z.string().min(1),
  "D.Size Agend.": z.string().min(1),
  "D.Size Total": z.string().min(1)
}))
export const Schema030237 = z.array(z.object({
  "Empresa": z.string().min(1),
  "Filial": z.string().min(1),
  "Cliente": z.string().min(1),
  "Mapa": z.string().min(1),
  "Codigo Vei": z.string().min(1),
  "Nome": z.string().min(1),
  "Total Mapa": z.string().min(1),
  "Nr Tit. Bco": z.string().min(1),
  "Nr. Pedido": z.string().min(1),
  "IPI": z.string().min(1),
  "Frete": z.string().min(1),
  "Adic. Escal": z.string().min(1),
  "Trib. PIS Pauta": z.string().min(1),
  "Trib. PIS Alíquota": z.string().min(1),
  "Trib. COFINS Pauta": z.string().min(1),
  "Trib. COFINS Alíquota": z.string().min(1),
  "NF Referencia": z.string().min(1),
  "Série NF Referencia": z.string().min(1),
  "Data NF Referencia": z.string().min(1),
  "Status NF-e": z.string().min(1),
  "Motivo Rejeicao/Denegacao": z.string().min(1),
  "Descricao Motivo": z.string().min(1),
  "Data Contingencia": z.string().min(1),
  "Hora Contingencia": z.string().min(1),
  "Nr Protocolo": z.string().min(1),
  "Chave de Acesso NF-e": z.string().min(1),
  "Indicador NF-e": z.string().min(1),
  "Hora Envio": z.string().min(1),
  "Hora Retorno": z.string().min(1),
  "Indicador de Caneta": z.string().min(1),
  "Indicador Fora Rota Entrega": z.string().min(1),
  "ID. Mensageria": z.string().min(1),
  "Status Sefaz HB.NFeX": z.string().min(1),
  "Data Retorno HB.NFeX": z.string().min(1),
  "Hora Retorno HB.NFeX": z.string().min(1),
  "Data Envio 2V": z.string().min(1),
  "Estoque Atualizado": z.string().min(1),
  "Dt. Emissao Fiscal": z.string().min(1),
  "Nota Fiscal Exportada para Promax Central": z.string().min(1),
  "Prazo": z.string().min(1),
  "NF Retorno Vasilhame": z.string().min(1),
  "NF Venda AG/Produto/Material": z.string().min(1),
  "NF Retorno Remessa Puxada AG": z.string().min(1),
  "NF Recolha Comodato": z.string().min(1),
  "NF Troca Realizada": z.string().min(1),
  "Taxa de Entrega": z.string().min(1),
  "Origem do Pedido": z.string().min(1),
  "Vl. Desconto Algoritmo": z.string().min(1),
  "Meta Algoritmo": z.string().min(1),
  "Desc Disponível Padrão": z.string().min(1),
  "Desc Disponível Ação": z.string().min(1),
  "Vl. Desconto Algoritmo Aut": z.string().min(1),
  "Código Ação Desconto Alg Fix": z.string().min(1),
  "Valor TTV Planejado": z.string().min(1),
  "Valor Sugerido": z.string().min(1),
  "Cod. Setor Atendimento": z.string().min(1),
  "Tipo Setor Atendimento": z.string().min(1),
  "Data Captura Pedido": z.string().min(1),
  "NF Regerada": z.string().min(1),
  "Série NF Regerada": z.string().min(1),
  "Indicador Cancelamento": z.string().min(1),
  "Red Icms Próprio": z.string().min(1),
  "Red Fecop Próprio": z.string().min(1),
  "Red Icms ST": z.string().min(1),
  "Red Fecop ST": z.string().min(1)
}))
export const Schema030237_2 = z.array(z.object({
  "Empresa": z.string().min(1),
  "Filial": z.string().min(1),
  "Operacao": z.string().min(1),
  "Codigo Vei": z.string().min(1),
  "Mapa": z.string().min(1),
  "Dt. Operacao": z.string().min(1),
  "Emissao": z.string().min(1),
  "Nota": z.string().min(1),
  "Serie": z.string().min(1),
  "Status": z.string().min(1),
  "Mot. Cancelamento": z.string().min(1),
  "Transf. Multi-CDD": z.string().min(1),
  "Cliente": z.string().min(1),
  "Nome": z.string().min(1),
  "Indicador CA/Prazo": z.string().min(1),
  "Produto": z.string().min(1),
  "Unidade": z.string().min(1),
  "Descrição": z.string().min(1),
  "Combo Vendas": z.string().min(1),
  "Qtde": z.string().min(1),
  "Valor": z.string().min(1),
  "ICMS": z.string().min(1),
  "ICMS St": z.string().min(1),
  "Adic. Finan": z.string().min(1),
  "Desconto": z.string().min(1),
  "Total": z.string().min(1),
  "Mapa": z.string().min(1),
  "Nr Tit. Bco": z.string().min(1),
  "Nr. Pedido": z.string().min(1),
  "IPI": z.string().min(1),
  "Frete": z.string().min(1),
  "Adic. Escal": z.string().min(1),
  "Trib. PIS Pauta": z.string().min(1),
  "Trib. PIS Alíquota": z.string().min(1),
  "Trib. COFINS Pauta": z.string().min(1),
  "Trib. COFINS Alíquota": z.string().min(1),
  "NF Referencia": z.string().min(1),
  "Série NF Referencia": z.string().min(1),
  "Data NF Referencia": z.string().min(1),
  "Status NF-e": z.string().min(1),
  "Motivo Rejeicao/Denegacao": z.string().min(1),
  "Descricao Motivo": z.string().min(1),
  "Data Contingencia": z.string().min(1),
  "Hora Contingencia": z.string().min(1),
  "Nr Protocolo": z.string().min(1),
  "Chave de Acesso NF-e": z.string().min(1),
  "Indicador NF-e": z.string().min(1),
  "Hora Envio": z.string().min(1),
  "Hora Retorno": z.string().min(1),
  "Indicador de Caneta": z.string().min(1),
  "Indicador Fora Rota Entrega": z.string().min(1),
  "ID. Mensageria": z.string().min(1),
  "Status Sefaz HB.NFeX": z.string().min(1),
  "Data Retorno HB.NFeX": z.string().min(1),
  "Hora Retorno HB.NFeX": z.string().min(1),
  "Data Envio 2V": z.string().min(1),
  "Estoque Atualizado": z.string().min(1),
  "Dt. Emissao Fiscal": z.string().min(1),
  "Nota Fiscal Exportada para Promax Central": z.string().min(1),
  "Prazo": z.string().min(1),
  "NF Retorno Vasilhame": z.string().min(1),
  "NF Venda AG/Produto/Material": z.string().min(1),
  "NF Retorno Remessa Puxada AG": z.string().min(1),
  "NF Recolha Comodato": z.string().min(1),
  "NF Troca Realizada": z.string().min(1),
  "Taxa de Entrega": z.string().min(1),
  "Origem do Pedido": z.string().min(1),
  "Vl. Desconto Algoritmo": z.string().min(1),
  "Meta Algoritmo": z.string().min(1),
  "Desc Disponível Padrão": z.string().min(1),
  "Desc Disponível Ação": z.string().min(1),
  "Vl. Desconto Algoritmo Aut": z.string().min(1),
  "Código Ação Desconto Alg Fix": z.string().min(1),
  "Valor TTV Planejado": z.string().min(1),
  "Valor Sugerido": z.string().min(1),
  "Cod. Setor Atendimento": z.string().min(1),
  "Tipo Setor Atendimento": z.string().min(1),
  "Setor": z.string().min(1),
  "Código da Escalonada do Pedido": z.string().min(1),
  "Tipo Escalonada do Pedido": z.string().min(1),
  "Faixa da Escalonada do Pedido": z.string().min(1),
  "Indicador de Preço Pontual": z.string().min(1),
  "Indicador de Preço Cheio": z.string().min(1),
  "TTV da Escalonada do Pedido": z.string().min(1),
  "Indicador de Unidade": z.string().min(1),
  "Data Captura Pedido": z.string().min(1),
  "NF Regerada": z.string().min(1),
  "Série NF Regerada": z.string().min(1),
  "Indicador Cancelamento": z.string().min(1),
  "Red Icms Próprio": z.string().min(1),
  "Red Fecop Próprio": z.string().min(1),
  "Red Icms ST": z.string().min(1),
  "Red Fecop ST": z.string().min(1),
  "Cód. Situação Tributária": z.string().min(1)
}))
export const Schema030224 = z.array(z.object({
  "Motorista": z.string().min(1),
  "Data": z.string().min(1),
  "Unb Nota": z.string().min(1),
  "Nota": z.string().min(1),
  "Serie": z.string().min(1),
  "Unb Cliente": z.string().min(1),
  "Cod. Cliente": z.string().min(1),
  "Nome Cliente": z.string().min(1),
  "Telefone": z.string().min(1),
  "Area": z.string().min(1),
  "Setor": z.string().min(1),
  "Placa": z.string().min(1),
  "Valor": z.string().min(1),
  "Volume": z.string().min(1),
  "Data Devol.": z.string().min(1),
  "Cod. Motivo": z.string().min(1),
  "Desc. Motivo": z.string().min(1),
  "Orig. Pedido": z.string().min(1),
  "Usuario": z.string().min(1),
  "Hora": z.string().min(1)
}))
export const SchemaWMS = z.array(z.object({
  "Armazém": z.string().min(1),
  "Mapa": z.string().min(1),
  "Palete": z.string().min(1),
  "Entrega": z.string().min(1),
  "Início Palete": z.string().min(1),
  "Fim Palete": z.string().min(1),
  "Execução Palete em Segundos": z.string().min(1),
  "Usuário Finalizou Palete": z.string().min(1),
  "Finalizado Cfe Indicação": z.string().min(1),
  "Endereço Destino": z.string().min(1),
  "RTLS Hab.": z.string().min(1),
  "RTLS Endereço Destino": z.string().min(1),
  "RTLS Itens Ok": z.string().min(1),
  "Peso do Palete OK": z.string().min(1),
  "Peso Palete Esperado": z.string().min(1),
  "Peso Palete Real": z.string().min(1),
  "Balança": z.string().min(1),
  "Codigo do Item": z.string().min(1),
  "Descrição do Item": z.string().min(1),
  "Tipo": z.string().min(1),
  "Peso esperado": z.string().min(1),
  "Peso real": z.string().min(1),
  "Endereços Sugeridos": z.string().min(1),
  "Endereço Selecionado": z.string().min(1),
  "Quantidade": z.string().min(1),
  "Unidade Medida": z.string().min(1),
  "Chapatex": z.string().min(1),
  "Papelão": z.string().min(1),
  "Sequência": z.string().min(1),
  "Usuário Separação": z.string().min(1),
  "Inicio Separação Item": z.string().min(1),
  "Fim Separação Item": z.string().min(1),
  "Esforço(segundos)": z.string().min(1),
  "RTLS Habilitado(Item)": z.string().min(1),
  "Utilizou RTLS(Item)": z.string().min(1),
  "Peso OK(Item)": z.string().min(1),
  "Item Conferido?": z.string().min(1),
  "Histórico de registros": z.string().min(1),
  "Palete Conferido": z.string().min(1),
  "Sorteado Para Blitz": z.string().min(1),
  "Regras de blitz classificadas": z.string().min(1),
  "Utilizou percentual mínimo": z.string().min(1),
  "Palete Iniciado com Produto": z.string().min(1)
}));
export const SchemaClientes = z.array(z.object({
  "Grupo de Perfil": z.string().min(1),
  "Cod. Setor": z.string().min(1),
  "Descricao Setor": z.string().min(1),
  "Codigo Cliente": z.string().min(1),
  "Razao Social": z.string().min(1),
  "Bairro": z.string().min(1),
  "Ordem": z.string().min(1),
  "Status do Cliente": z.string().min(1),
  "Nome Fantasia": z.string().min(1),
  "Frequencia Visita": z.string().min(1),
  "Periodicidade": z.string().min(1),
  "Proxima Visita": z.string().min(1),
  "Visita Original": z.string().min(1),
  "Inicio Visita": z.string().min(1),
  "CNPJ": z.string().min(1),
  "Inscricao Estadual": z.string().min(1),
  "Cod. Estabelecimento": z.string().min(1),
  "Nome Estabelecimento": z.string().min(1),
  "Cod. Pagto": z.string().min(1),
  "Descricao Pagto": z.string().min(1),
  "Serasa": z.string().min(1),
  "Observacao": z.string().min(1),
  "Contato": z.string().min(1),
  "CNPJ Contato": z.string().min(1),
  "Contato CNPJ": z.string().min(1),
  "Ordem por Historico": z.string().min(1),
  "Dias Entrega": z.string().min(1),
  "El Dorado": z.string().min(1),
  "Endereço": z.string().min(1),
  "Cidade": z.string().min(1),
  "Cod. Segmento": z.string().min(1),
  "Segmento": z.string().min(1)
}));
export const SchemaProdutos = z.array(z.object({
  "Código": z.string().min(1),
  "Descrição": z.string().min(1),
  "PGV": z.string().min(1),
  "Empresa": z.string().min(1),
  "Tipo Marca": z.string().min(1),
  "Linha Marca": z.string().min(1),
  "Embalagem": z.string().min(1),
  "Marca": z.string().min(1),
  "Vasilhame": z.string().min(1),
  "Garrrafeira": z.string().min(1),
  "ICMS": z.string().min(1),
  "Tipo Roadshow": z.string().min(1),
  "Peso Bruto Kg": z.string().min(1),
  "Fator": z.string().min(1),
  "Fator Hecto": z.string().min(1),
  "Fator Hecto Comercial": z.string().min(1),
  "Ind Palmtop": z.string().min(1),
  "Grupo": z.string().min(1),
  "Grupo Remuneração": z.string().min(1),
  "EAN": z.string().min(1),
  "Tab ICMS": z.string().min(1),
  "Caixas Pallet": z.string().min(1),
  "Nr Fator Conversão": z.string().min(1),
  "Lastro": z.string().min(1),
  "Fam. Embalagem SIV": z.string().min(1),
  "Pauta PIS Litro": z.string().min(1),
  "Pauta COFINS Litro": z.string().min(1),
  "Caixas Pallet 1": z.string().min(1),
  "Capacidade 1": z.string().min(1),
  "Fat Ajust 1": z.string().min(1),
  "Caixas Pallet 2": z.string().min(1),
  "Capacidade 2": z.string().min(1),
  "Fat Ajust 2": z.string().min(1),
  "Caixas Pallet 3": z.string().min(1),
  "Capacidade 3": z.string().min(1),
  "Fat Ajust 3": z.string().min(1),
  "Ordem de Carga": z.string().min(1),
  "Estoque Minímo Puxada": z.string().min(1),
  "Código Produto SAP": z.string().min(1),
  "Vasilhame Fictício": z.string().min(1),
  "NCM": z.string().min(1),
  "Apura Royalties": z.string().min(1),
  "Tipo Produto Royalties": z.string().min(1),
  "CEST": z.string().min(1),
  "EAN Trib": z.string().min(1),
  "Código Unitário": z.string().min(1),
  "Descrição unitária": z.string().min(1),
  "Subtipo": z.string().min(1)
}));
export const SchemaBees = z.array(z.object({
  "tour_display_id": z.string().min(1),
  "tour_date": z.string().min(1),
  "distribution_center_id": z.string().min(1),
  "driver_name": z.string().min(1),
  "poc_external_id": z.string().min(1),
  "status": z.string().min(1),
  "trip_start_timestamp": z.string().min(1),
  "trip_end_timestamp": z.string().min(1),
  "visit_order": z.string().min(1),
  "within_radius": z.string().min(1),
  "actual_delivery_time": z.string().min(1),
  "arrived_at": z.string().min(1),
  "finished_at": z.string().min(1),
  "last_reason_waiting_modulation": z.string().min(1),
  "last_reason_rescheduled": z.string().min(1),
  "total_delivered_vol": z.string().min(1),
  "total_refused_vol": z.string().min(1),
  "foxtrot_adherence": z.string().min(1),
  "estimated_delivery_time": z.string().min(1),
  "volume_hectoliters_sum": z.string().min(1),
  "bees_poc_id": z.string().min(1),
  "bees_tour_id": z.string().min(1),
  "bees_trip_id": z.string().min(1),
  "bees_created_date": z.string().min(1),
  "bees_last_reason_id_waiting_modulation": z.string().min(1),
  "bees_last_reason_id_waiting_rescheduled": z.string().min(1)
}));
export const csvBufferBasesSchema = z.object({
  id: z.number({
      required_error: "O id é obrigatório.",
      invalid_type_error: "O id deve ser um número.",
    }).int().positive({ message: "O ID deve ser um valor numérico positivo." }),

  baseId: z.string({
      required_error: "O baseId é obrigatório.",
      invalid_type_error: "O baseId deve ser uma string.",
    }).min(1, { message: "O baseId não pode estar vazio." }),

  uploadedAt: z.coerce.date({
    required_error: "A data de upload é obrigatória.",
    invalid_type_error: "A data de upload deve ser uma data válida.",
  }),

  baseMinDate: z.coerce.date({
    required_error: "A menor data da base é obrigatória.",
    invalid_type_error: "A menor data da base deve ser uma data válida.",
  }).optional(),

  baseMaxDate: z.coerce.date({
    required_error: "A maior data da base é obrigatória.",
    invalid_type_error: "A maior data da base deve ser uma data válida.",
  }).optional(),

  fileBuffer: z.instanceof(Buffer, {
    message: "O conteúdo do arquivo deve ser um Buffer.",
  }),

  uploader: z.string({
      invalid_type_error: "O nome do uploader deve ser uma string.",
    }).optional(),
})

export const baseSchemas = {
  '031140': Schema031140,
  '030530': Schema030530,
  '030237': Schema030237,
  '030237_2': Schema030237_2,
  '030224': Schema030224,
  'wms': SchemaWMS,
  'clientes': SchemaClientes,
  'produtos': SchemaProdutos,
  'bees': SchemaBees,
  'csvBuffer': csvBufferBasesSchema
};



export function validateBaseById(baseId, jsonFile, partial = null) {
  const schema = baseSchemas[baseId];
  if (!schema) {
    throw new Error(`Schema não encontrado para baseId: ${baseId}`);
  }
  if (partial && typeof schema.element === 'function') {
    const partialSchema = z.array(schema.element().partial(partial));
    return partialSchema.safeParse(jsonFile);
  }
  return schema.safeParse(jsonFile);
}

