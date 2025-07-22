import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest' // not needed if globals:true
import App from '../App'

test('renders title', () => {
  render(<App />)
  expect(screen.getByText('Tik-Tac-Toe!')).toBeInTheDocument()
})