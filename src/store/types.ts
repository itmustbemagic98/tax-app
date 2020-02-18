export interface IButtonColor {
  color: string
}

export interface ISetButtonColor {
  type: string
  color: string
}

export interface IData {
  _id: string
  article: string
  value: number
}

export interface ISetTableData {
  type: string,
  data: ReadonlyArray<IData>
}
