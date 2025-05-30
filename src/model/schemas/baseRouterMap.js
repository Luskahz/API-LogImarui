import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();



export const baseModelMap = {
  "031140": prisma.base031140,
  "030530": prisma.base030530,
  "030237": prisma.base030237,
  "030237_2": prisma.base030237Itens,
  bees: prisma.baseBees,
  wms: prisma.baseWMS,
  clientes: prisma.baseClientes,
  produtos: prisma.baseProdutos,
  csvBuffer: prisma.csvBufferBases, 
}
export const baseFieldsMap = {
  "031140": [
    "csvBufferId", "Mapa", "Veículo", "Placa", "DtEntrega", "Entregas", "HoraEmis", "HoraCarreg", "HoraSaida", "HoraChegada", "HoraPFis", "HoraPFin", "TempoRota", "TempoPFis", "TempoPFin", "TempoInterno", "KMInicial", "KMFinal", "KMRodado"
  ],
  "030530": [
    "csvBufferId", "CodCliente", "Descricao", "Data", "Mapa", "Veiculo", "Placa", "Motorista", "CodProduto", "DescricaoProduto", "CodCliente2", "DescricaoCliente2", "Peso", "Ocup", "Volume", "Ocup2", "VolAgendado", "Entregas", "Pedidos", "DSizeAgend", "DSizeTotal"
  ],
  "030237": [
    "csvBufferId", "Empresa", "Filial", "Cliente", "Mapa", "CodigoVei", "Nome", "TotalMapa", "NrTitBco", "NrPedido", "IPI", "Frete", "AdicEscal", "TribPISPauta", "TribPISAliquota", "TribCOFINSPauta", "TribCOFINSAliquota", "NFReferencia", "SerieNFReferencia", "DataNFReferencia", "StatusNFe", "MotivoRejeicaoDenegacao", "DescricaoMotivo", "DataContingencia", "HoraContingencia", "NrProtocolo", "ChaveAcessoNFe", "IndicadorNFe", "HoraEnvio", "HoraRetorno", "IndicadorCaneta", "IndicadorForaRotaEntrega", "IDMensageria", "StatusSefazHBNFeX", "DataRetornoHBNFeX", "HoraRetornoHBNFeX", "DataEnvio2V", "EstoqueAtualizado", "DtEmissaoFiscal", "NotaFiscalExportadaPromax", "Prazo", "NFRetornoVasilhame", "NFVendaAGProdutoMaterial", "NFRetornoRemessaPuxadaAG", "NFRecolhaComodato", "NFTrocaRealizada", "TaxaEntrega", "OrigemPedido", "VlDescontoAlgoritmo", "MetaAlgoritmo", "DescDisponivelPadrao", "DescDisponivelAcao", "VlDescontoAlgoritmoAut", "CodigoAcaoDescontoAlgFix", "ValorTTVPlanejado", "ValorSugerido", "CodSetorAtendimento", "TipoSetorAtendimento", "DataCapturaPedido", "NFRegerada", "SerieNFRegerada", "IndicadorCancelamento", "RedIcmsProprio", "RedFecopProprio", "RedIcmsST", "RedFecopST"
  ],
  "030237_2": [
    "csvBufferId", "Empresa", "Filial", "Operacao", "CodigoVei", "Mapa", "DtOperacao", "Emissao", "Nota", "Serie", "Status", "MotCancelamento", "TransfMultiCDD", "Cliente", "Nome", "IndicadorCAPrazo", "Produto", "Unidade", "Descricao", "ComboVendas", "Qtde", "Valor", "ICMS", "ICMSSt", "AdicFinan", "Desconto", "Total", "NrTitBco", "NrPedido", "IPI", "Frete", "AdicEscal", "TribPISPauta", "TribPISAliquota", "TribCOFINSPauta", "TribCOFINSAliquota", "NFReferencia", "SerieNFReferencia", "DataNFReferencia", "StatusNFe", "MotivoRejeicaoDenegacao", "DescricaoMotivo", "DataContingencia", "HoraContingencia", "NrProtocolo", "ChaveAcessoNFe", "IndicadorNFe", "HoraEnvio", "HoraRetorno", "IndicadorCaneta", "IndicadorForaRotaEntrega", "IDMensageria", "StatusSefazHBNFeX", "DataRetornoHBNFeX", "HoraRetornoHBNFeX", "DataEnvio2V", "EstoqueAtualizado", "DtEmissaoFiscal", "NotaFiscalExportadaPromax", "Prazo", "NFRetornoVasilhame", "NFVendaAGProdutoMaterial", "NFRetornoRemessaPuxadaAG", "NFRecolhaComodato", "NFTrocaRealizada", "TaxaEntrega", "OrigemPedido", "VlDescontoAlgoritmo", "MetaAlgoritmo", "DescDisponivelPadrao", "DescDisponivelAcao", "VlDescontoAlgoritmoAut", "CodigoAcaoDescontoAlgFix", "ValorTTVPlanejado", "ValorSugerido", "CodSetorAtendimento", "TipoSetorAtendimento", "Setor", "CodigoEscalonadaPedido", "TipoEscalonadaPedido", "FaixaEscalonadaPedido", "IndicadorPrecoPontual", "IndicadorPrecoCheio", "TTVDaEscalonadaPedido", "IndicadorUnidade", "DataCapturaPedido", "NFRegerada", "SerieNFRegerada", "IndicadorCancelamento", "RedIcmsProprio", "RedFecopProprio", "RedIcmsST", "RedFecopST", "CodSituacaoTributaria"
  ],
  bees: [
    "csvBufferId", "tour_display_id", "tour_date", "distribution_center_id", "driver_name", "poc_external_id", "status", "trip_start_timestamp", "trip_end_timestamp", "visit_order", "within_radius", "actual_delivery_time", "arrived_at", "finished_at", "last_reason_waiting_modulation", "last_reason_rescheduled", "total_delivered_vol", "total_refused_vol", "foxtrot_adherence", "estimated_delivery_time", "volume_hectoliters_sum", "bees_poc_id", "bees_tour_id", "bees_trip_id", "bees_created_date", "bees_last_reason_id_waiting_modulation", "bees_last_reason_id_waiting_rescheduled"
  ],
  wms: [
    "csvBufferId", "Armazem", "Mapa", "Palete", "Entrega", "InicioPalete", "FimPalete", "ExecucaoPaleteSegundos", "UsuarioFinalizouPalete", "FinalizadoCfeIndicacao", "EnderecoDestino", "RTLSHab", "RTLSEnderecoDestino", "RTLSItensOk", "PesoPaleteOk", "PesoPaleteEsperado", "PesoPaleteReal", "Balanca", "CodigoItem", "DescricaoItem", "Tipo", "PesoEsperado", "PesoReal", "EnderecosSugeridos", "EnderecoSelecionado", "Quantidade", "UnidadeMedida", "Chapatex", "Papelao", "Sequencia", "UsuarioSeparacao", "InicioSeparacaoItem", "FimSeparacaoItem", "EsforcoSegundos", "RTLSHabilitadoItem", "UtilizouRTLSItem", "PesoOKItem", "ItemConferido", "HistoricoRegistros", "PaleteConferido", "SorteadoParaBlitz", "RegrasBlitzClassificadas", "UtilizouPercentualMinimo", "PaleteIniciadoComProduto"
  ],
  clientes: [
    "csvBufferId", "GrupoPerfil", "CodSetor", "DescricaoSetor", "CodigoCliente", "RazaoSocial", "Bairro", "Ordem", "StatusCliente", "NomeFantasia", "FrequenciaVisita", "Periodicidade", "ProximaVisita", "VisitaOriginal", "InicioVisita", "CNPJ", "InscricaoEstadual", "CodEstabelecimento", "NomeEstabelecimento", "CodPagto", "DescricaoPagto", "Serasa", "Observacao", "Contato", "CNPJContato", "ContatoCNPJ", "OrdemPorHistorico", "DiasEntrega", "ElDorado", "Endereco", "Cidade", "CodSegmento", "Segmento"
  ],
  produtos: [
    "csvBufferId", "Codigo", "Descricao", "PGV", "Empresa", "TipoMarca", "LinhaMarca", "Embalagem", "Marca", "Vasilhame", "Garrrafeira", "ICMS", "TipoRoadshow", "PesoBrutoKg", "Fator", "FatorHecto", "FatorHectoComercial", "IndPalmtop", "Grupo", "GrupoRemuneracao", "EAN", "TabICMS", "CaixasPallet", "NrFatorConversao", "Lastro", "FamEmbalagemSIV", "PautaPISLitro", "PautaCOFINSLitro", "CaixasPallet1", "Capacidade1", "FatAjust1", "CaixasPallet2", "Capacidade2", "FatAjust2", "CaixasPallet3", "Capacidade3", "FatAjust3", "OrdemDeCarga", "EstoqueMinimoPuxada", "CodigoProdutoSAP", "VasilhameFicticio", "NCM", "ApuraRoyalties", "TipoProdutoRoyalties", "CEST", "EANTrib", "CodigoUnitario", "DescricaoUnitaria", "Subtipo"
  ],
  csvBuffer: [
    "baseId", "uploadedAt", "baseMinDate", "baseMaxDate", "fileBuffer", "uploader"
  ]
}

export { prisma };
