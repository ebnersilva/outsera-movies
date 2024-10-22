import { it, describe, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import {IColumn, Table} from '../../components/Table'

interface IFirstTableTest {
    id: number;
    title: string;
    value: number
}
 
describe('Table', () => {
    it('should render Table' , () => {        
        const wrapper = render(<Table columns={[]} data={[]}  />)

        expect(wrapper).toBeTruthy();
    })

    it('should render Table with correct values' , () => {
        const columns: IColumn<IFirstTableTest>[] = [
            {
                id: 1,
                title: 'Id',
                property: 'id'
            },
            {
                id: 2,
                title: 'Title',
                property: 'title'
            },
            {
                id: 3,
                title: 'Value',
                property: 'value'
            }
        ]

        const data: IFirstTableTest[] = [
            {
                id: 1000,
                title: 'Title 1',
                value: 1
            },
            {
                id: 1001,
                title: 'Title 2',
                value: 2
            },
            {
                id: 1002,
                title: 'Title 3',
                value: 3
            }
        ]

        render(<Table columns={columns} data={data}  />)
        
        // Check columns headers
        columns.forEach((column) => {
            expect(screen.getByText(column.title)).toBeInTheDocument();
        });
    
        // Check table content
        data.forEach((row) => {
            expect(screen.getByText(row.id.toString())).toBeInTheDocument();
            expect(screen.getByText(row.title)).toBeInTheDocument();
            expect(screen.getByText(row.value.toString())).toBeInTheDocument();
        });

    })
})