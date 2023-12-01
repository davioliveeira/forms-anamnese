import { Table } from '@mantine/core';

export function TabelaInfoPaciente(props: any) {
    const rows = props.elements.map((element: any, index: number
    ) => (
        <Table.Tr key={index}>
            {Object.values(element).map((value) => (
                <Table.Td key={value as string}>{value as string}</Table.Td>
            ))}
        </Table.Tr>
    ));

    return (
        <Table highlightOnHover withTableBorder withColumnBorders>
            <Table.Thead>
                <Table.Tr>
                    {Object.keys(props.elements[0]).map((key) => (
                        <Table.Th key={key}>{key}</Table.Th>

                    ))}
                </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
        </Table>
    );
}