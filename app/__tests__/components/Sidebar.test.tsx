import { it, describe, expect, vi } from 'vitest'
import { render, screen} from '@testing-library/react'
import {Sidebar} from '../../components/Sidebar'

// Mock do Next.js Link e Router
vi.mock('next/link', () => ({
    __esModule: true,
    default: ({ href, children }: { href: string; children: React.ReactNode }) => (
        <a href={href}>{children}</a>
    ),
}))

describe('Sidebar', () => {
    it('should render the Dashboard link', () => {
        render(<Sidebar />)
        const dashboardLink = screen.getByRole('link', { name: /dashboard/i })
        expect(dashboardLink).toBeInTheDocument()
        expect(dashboardLink).toHaveAttribute('href', '/dashboard')
    })

    it('should render the Movies link', () => {
        render(<Sidebar />)
        const moviesLink = screen.getByRole('link', { name: /movies/i })
        expect(moviesLink).toBeInTheDocument()
        expect(moviesLink).toHaveAttribute('href', '/movies')
    })

    it('should render the sidebar container with the correct class names', () => {
        render(<Sidebar />)
        const sidebarContainer = screen.getByLabelText('Sidebar')
        expect(sidebarContainer).toHaveClass('flex flex-col w-40 bg-slate-400 p-10')
    })
})