import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ProductList } from '../../components/ProductList'

describe('Displays No products if list is empty', () => {
  it("renders 'No products to display'", () => {
    render(<ProductList />)
    expect(screen.getByText(/No products to display/i).textContent).toMatch(
      /No products to display/i
    )
  })
})
