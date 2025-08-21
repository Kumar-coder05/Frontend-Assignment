import type { Meta, StoryObj } from '@storybook/react'
import { DataTable, Column } from './DataTable'

type Person = { id: number; name: string; age: number; role: string }

const data: Person[] = [
  { id: 1, name: 'Asha', age: 24, role: 'Developer' },
  { id: 2, name: 'Vikram', age: 29, role: 'Designer' },
  { id: 3, name: 'Neha', age: 22, role: 'QA' },
]

const columns: Column<Person>[] = [
  { key: 'name', title: 'Name', dataIndex: 'name', sortable: true },
  { key: 'age', title: 'Age', dataIndex: 'age', sortable: true },
  { key: 'role', title: 'Role', dataIndex: 'role' },
]

const meta: Meta<typeof DataTable<Person>> = {
  title: 'Components/DataTable',
  component: DataTable,
}
export default meta

type Story = StoryObj<typeof DataTable<Person>>

export const Default: Story = {
  args: {
    data,
    columns,
    selectable: true,
  },
}
