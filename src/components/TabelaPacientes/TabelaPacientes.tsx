import cx from 'clsx';
import { useState } from 'react';
import { Table, Checkbox, ScrollArea, Group, Avatar, Text, rem } from '@mantine/core';
import classes from './style.module.css';

const data = [
    {
        id: '1',
        avatar:
            'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png',
        DataEnvio: '20/12/2023',
        Nome: 'Lucivânio da Silva',
        Idade: "19",
        Profissão: 'Gigolô',
        HorasTrabalhasDia: "10",
        PesoAtual: "90kgs",
        QuantidadeTreinos: "6",

    },

];

export function TabelaDePacientes() {
    const [selection, setSelection] = useState(['1']);
    const toggleRow = (id: string) =>
        setSelection((current) =>
            current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
        );
    const toggleAll = () =>
        setSelection((current) => (current.length === data.length ? [] : data.map((item) => item.id)));

    const rows = data.map((item) => {
        const selected = selection.includes(item.id);
        return (
            <Table.Tr key={item.id} className={cx({ [classes.rowSelected]: selected })}>
                <Table.Td>
                    <Group gap="sm">
                        <Text size="sm" fw={500}>
                            {item.Nome}
                        </Text>
                    </Group>
                </Table.Td>
                <Table.Td>{item.DataEnvio}</Table.Td>
            </Table.Tr>
        );
    });

    return (
        <ScrollArea>
            <Table miw={800} verticalSpacing="sm" highlightOnHover withTableBorder withColumnBorders>
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th>Paciente</Table.Th>
                        <Table.Th>Data de Envio</Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>{rows}</Table.Tbody>
            </Table>
        </ScrollArea>
    );
}