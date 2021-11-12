export interface purchaseType {
  cod_proveedor: number,
  created_at: string,
  deleted_at: string,
  difcosto: number,
  empresa: string,
  factura: string,
  fecha: string,
  idCompra: number,
  montopago: number,
  pagada: number,
  saldo: number,
  status: number,
  tipofactura: string,
  total: number,
  updated_at: string,
  userId: number,
}

export interface inputDataType {
  [key: string]: any,
}

export interface sortFilterType {
  SORT_BY: string,
  SORT_DIR: boolean,
}

export interface paginationFilterType {
  FROM: number,
  TO: number,
  MAX: number,
}
