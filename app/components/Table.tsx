export interface IColumn<T> {
    id: number;
    title: string;
    property: keyof T;
}

interface ITableContainer<T> {
    columns: IColumn<T>[];
    data: T[]
    isLoading?: boolean;
}

export const Table = <T,>({ columns, data, isLoading }: ITableContainer<T>) => {
    return (
        <table className="min-w-full bg-slate-50 border border-slate-200 rounded-lg overflow-hidden">
            <thead>
                <tr className="bg-slate-100 border-b">
                {columns.map(column => (
                    <th key={column.id} className="px-6 py-3 text-left text-sm font-medium text-slate-700">{column.title}</th>
                ))}
                </tr>
            </thead>
            <tbody className="flex-grow">
                {data.map((row, rowIndex) => (
                    <tr key={rowIndex} className="border-b hover:bg-slate-50">
                        {columns.map((column) => (
                            <td key={column.id} className="px-6 py-4 text-sm text-slate-900">{String(row[column.property])}</td>        
                        ))}
                    </tr>
                ))}
            </tbody>
            <tfoot>
                {isLoading && (
                    <tr className="bg-slate-100 border-b">
                        <td className="px-6 text-slate-500 " colSpan={columns.length}>
                            <div className="text-slate-500 text-center">Carregando...</div>
                        </td>
                    </tr>
                )}
                {!isLoading && (
                    <tr className="bg-slate-100 border-b">
                        <td className="px-6 text-slate-500 " colSpan={columns.length}>
                            <div className="text-slate-500 text-center">{data.length} registro(s)</div>
                        </td>
                    </tr>
                )}
            </tfoot>
        </table>
    )
}