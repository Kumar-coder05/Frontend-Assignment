import React, { useMemo, useState } from 'react'

export interface Column<T> {
  key: string
  title: string
  dataIndex: keyof T
  sortable?: boolean
  render?: (value: T[keyof T], record: T) => React.ReactNode
}

export interface DataTableProps<T> {
  data: T[]
  columns: Column<T>[]
  loading?: boolean
  selectable?: boolean
  onRowSelect?: (selectedRows: T[]) => void
}

export function DataTable<T>({
  data,
  columns,
  loading = false,
  selectable = false,
  onRowSelect
}: DataTableProps<T>) {
  const [sortKey, setSortKey] = useState<string | null>(null)
  const [asc, setAsc] = useState(true)
  const [selected, setSelected] = useState<Set<number>>(new Set())

  const colByKey = useMemo(
    () => new Map(columns.map((c) => [c.key, c])),
    [columns]
  )

  const sortedData = useMemo(() => {
    if (!sortKey) return data
    const col = colByKey.get(sortKey)
    if (!col) return data
    const idx = col.dataIndex
    return [...data].sort((a: any, b: any) => {
      const A = a[idx]
      const B = b[idx]
      if (A == null && B == null) return 0
      if (A == null) return asc ? -1 : 1
      if (B == null) return asc ? 1 : -1
      if (A < B) return asc ? -1 : 1
      if (A > B) return asc ? 1 : -1
      return 0
    })
  }, [data, sortKey, asc, colByKey])

  const toggleSort = (key: string, sortable?: boolean) => {
    if (!sortable) return
    if (sortKey === key) setAsc((p) => !p)
    else {
      setSortKey(key)
      setAsc(true)
    }
  }

  const toggleSelect = (rowIndex: number) => {
    if (!selectable) return
    const copy = new Set(selected)
    if (copy.has(rowIndex)) copy.delete(rowIndex)
    else copy.add(rowIndex)
    setSelected(copy)
    onRowSelect?.(Array.from(copy).map((i) => sortedData[i] as T))
  }

  if (loading) return <div className="p-4 text-center">Loading...</div>
  if (!data.length) return <div className="p-4 text-center">No data available</div>

  return (
    <table className="min-w-full border rounded-lg shadow-sm">
      <thead>
        <tr>
          {selectable && <th className="p-2 w-10" />}
          {columns.map((c) => (
            <th
              key={c.key}
              className="p-2 text-left select-none"
              onClick={() => toggleSort(c.key, c.sortable)}
              aria-sort={
                sortKey === c.key ? (asc ? 'ascending' : 'descending') : 'none'
              }
              style={{ cursor: c.sortable ? 'pointer' : 'default' }}
            >
              {c.title}
              {c.sortable && sortKey === c.key && (asc ? ' 🔼' : ' 🔽')}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedData.map((row, i) => (
          <tr key={i} className="border-t hover:bg-gray-50">
            {selectable && (
              <td className="p-2">
                <input
                  type="checkbox"
                  checked={selected.has(i)}
                  onChange={() => toggleSelect(i)}
                  aria-label={`Select row ${i + 1}`}
                />
              </td>
            )}
            {columns.map((c) => (
              <td key={c.key} className="p-2">
                {c.render ? c.render(row[c.dataIndex], row) : String(row[c.dataIndex])}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
