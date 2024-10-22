import { it, describe, expect } from 'vitest'
import { render } from '@testing-library/react'
import Dashboard from '../../../(screens)/dashboard/page'
 
describe('Dashboard', () => {
    it('should render Dashboard component' , () => {
        const wrapper = render(<Dashboard  />)

        const title = wrapper.getByText('Dashboard')

        expect(title).toBeInTheDocument()
    })
})