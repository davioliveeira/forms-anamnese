import { Card, Text, Flex, Input, Textarea, NumberInput, Select, MultiSelect, Radio, Group } from "@mantine/core";
import classes from './styles.module.css'

const InfosTreinos = {
    pergunta2: "Quantos dia pretende treinar na semana?",
    pergunta3: "Qual seu objetivo com a consultoria?",
}
const SelectInfos = [
    {
        pergunta: "Quais grupos musculares você você mais gosta de treinar?",
        options: [
            { group: 'Superiores', items: ['Peitoral', 'Deltoides', 'Bíceps', 'Tríceps', 'Costas'] },
            { group: 'Inferiores', items: ['Quadríceps', 'Isquiotibiais', 'Glúteos', 'Panturrilhas'] },
            { group: 'Core', items: ['Abdômen', 'Lombar', 'Eretores Espinhais'] }
        ]
    },
    {
        pergunta: "Quais grupos musculares você você menos gosta de treinar?",
        options: [
            { group: 'Superiores', items: ['Peitoral', 'Deltoides', 'Bíceps', 'Tríceps', 'Costas'] },
            { group: 'Inferiores', items: ['Quadríceps', 'Isquiotibiais', 'Glúteos', 'Panturrilhas'] },
            { group: 'Core', items: ['Abdômen', 'Lombar', 'Eretores Espinhais'] }
        ]
    },
    {
        pergunta: "Sente algum desconforto ao realizar esforço no dia-a-dia ? (Subir escadas, sentar-se, levantar-se)",
    },
    {
        pergunta: "Apresenta algum desvio postural?",
    },
    {
        pergunta: "Gosta/Costuma realizar alongamentos antes dos treinos?",
    },
]

export function InformaçaoDeTreino() {
    return (
        <Card py={"lg"} withBorder radius={"lg"} mt={"md"}>
            <Card.Section py={'lg'} inheritPadding>
                <Text size="xl" fw={500} ta={"center"} c={"blue.9"}>
                    Informações sobre seu Treino
                </Text>
            </Card.Section>
            <Flex px={"lg"} direction={"column"} gap={"md"}>
                {Object.keys(InfosTreinos).map((key, index) => (
                    <Input.Wrapper key={key} label={InfosTreinos[key]}>
                        <Input />
                    </Input.Wrapper>
                ))}
                {SelectInfos.map((info, index) => {
                    if (info.options) {
                        return (
                            <MultiSelect
                                label={info.pergunta}
                                placeholder="Escolha as opções..."
                                data={info.options}
                                clearable
                            />
                        )
                    }
                    return (
                        <Radio.Group

                            key={index}
                            label={info.pergunta}
                            withAsterisk
                        >
                            <Group mt="xs">
                                <Radio value="sim" label="Sim" />
                                <Radio value="nao" label="Não" />
                            </Group>
                        </Radio.Group>
                    )
                })}
            </Flex>
        </Card >
    );
}
