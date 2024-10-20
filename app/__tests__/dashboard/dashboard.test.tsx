import { it, describe } from 'vitest'
import { render } from '@testing-library/react'
import Dashboard from '../../dashboard/page'
 
describe('Dashboard', () => {
    it('should render Dashboard component' , () => {
        render(<Dashboard  />)
    })
})