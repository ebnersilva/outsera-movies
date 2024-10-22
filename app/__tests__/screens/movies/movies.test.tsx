import { it, describe } from 'vitest'
import { render } from '@testing-library/react'
import Movies from '../../../(screens)/movies/page'
 
describe('Movies', () => {
    it('should render Movies screen' , () => {
        render(<Movies  />)
    })
})