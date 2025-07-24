import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest' // not needed if globals:true
import userEvent from '@testing-library/user-event' 
import App from '../App'
import { redirect } from 'happy-dom/lib/PropertySymbol.js'

test('renders title', () => {
  render(<App />)
  expect(screen.getByText('Tik-Tac-Toe!')).toBeInTheDocument()
})

test('Initial game state has X as first player', () =>{
  render(<App />)
  expect(screen.getByText('Next player turn: X')).toBeInTheDocument()
  const cells = screen.getAllByRole('button', {name: ''})
  expect(cells).toHaveLength(9)
})

test('The cell turns into X when clicked on first turn, and can not be clicked again', async()=>{
  render(<App />)
  const cells = screen.getAllByRole('button')
  const firstCell = cells[0]
  
  await userEvent.click(firstCell)
  expect(firstCell).toHaveTextContent('X')
  expect(screen.getByText('Next player turn: O')).toBeInTheDocument();
  await userEvent.click(firstCell)
  expect(firstCell).toHaveTextContent('X')
  expect(screen.getByText('Next player turn: O')).toBeInTheDocument();

})