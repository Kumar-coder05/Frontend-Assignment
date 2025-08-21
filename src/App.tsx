import React, { useState } from 'react'
import { InputField } from './components/InputField/InputField'
import { DataTable, Column } from './components/DataTable/DataTable'

type Person = { id: number; name: string; age: number; role: string }

const rows: Person[] = [
  { id: 1, name: 'Asha', age: 24, role: 'Developer' },
  { id: 2, name: 'Vikram', age: 29, role: 'Designer' },
  { id: 3, name: 'Neha', age: 22, role: 'QA' }
]

const cols: Column<Person>[] = [
  { key: 'name', title: 'Name', dataIndex: 'name', sortable: true },
  { key: 'age', title: 'Age', dataIndex: 'age', sortable: true },
  { key: 'role', title: 'Role', dataIndex: 'role' }
]

export default function App() {
  const [value, setValue] = useState('')
  const [selected, setSelected] = useState<Person[]>([])

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold">Frontend Assignment Demo</h1>

      <div className="grid gap-4">
        <InputField
          label="Username"
          placeholder="Type something…"
          helperText="This field supports variants, sizes, and states."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          variant="outlined"
          size="md"
          clearable
        />
        <InputField
          label="Password"
          placeholder="••••••"
          type="password"
          helperText="Click the eye to toggle visibility."
          variant="filled"
          size="md"
        />
        <InputField
          label="Invalid Example"
          placeholder="Wrong input"
          invalid
          errorMessage="This value is invalid"
          variant="ghost"
          size="sm"
        />
      </div>

      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Team</h2>
        <DataTable<Person>
          data={rows}
          columns={cols}
          selectable
          onRowSelect={setSelected}
        />
        <div className="text-sm opacity-80">Selected rows: {selected.length}</div>
      </div>
    </div>
  )
}
