import { render, screen, fireEvent } from '@testing-library/react'
import { InputField } from './InputField'

describe('InputField', () => {
  it('renders with label and placeholder', () => {
    render(<InputField label="Username" placeholder="Type here" />)
    expect(screen.getByLabelText('Username')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Type here')).toBeInTheDocument()
  })

  it('can toggle password visibility', () => {
    render(<InputField label="Password" type="password" />)
    const input = screen.getByLabelText('Password')
    expect(input).toHaveAttribute('type', 'password')

    const toggleBtn = screen.getByRole('button')
    fireEvent.click(toggleBtn)
    expect(input).toHaveAttribute('type', 'text')
  })
})
