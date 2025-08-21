import { render, screen, fireEvent } from '@testing-library/react'
import { DataTable, Column } from './DataTable'

type Person = { id: number; name: string; age: number }
const rows: Person[] = [
  { id: 1, name: 'Asha', age: 24 },
  { id: 2, name: 'Vikram', age: 29 },
]

const cols: Column<Person>[] = [
  { key: 'name', title: 'Name', dataIndex: 'name', sortable: true },
  { key: 'age', title: 'Age', dataIndex: 'age', sortable: true },
]

describe('DataTable', () => {
  it('renders rows and columns', () => {
    render(<DataTable data={rows} columns={cols} />)
    expect(screen.getByText('Asha')).toBeInTheDocument()
    expect(screen.getByText('Vikram')).toBeInTheDocument()
  })

  it('sorts by age when header clicked', () => {
    render(<DataTable data={rows} columns={cols} />)
    const header = screen.getByText('Age')
    fireEvent.click(header)
    expect(screen.getAllByRole('row')[1]).toHaveTextContent('Asha')
  })
})
