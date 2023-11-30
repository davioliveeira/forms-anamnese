import { Card, Text, Flex, Input, Textarea, NumberInput, Select } from "@mantine/core";
import classes from './styles.module.css'

const InfosTreinos = {
    pergunta2: "Quantos dia pretende treinar na semana?",
    pergunta3: "Qual seu objetivo com a consultoria?",
    pergunta4: "Quais grupos musculares você você mais gosta de treinar?",
    pergunta5: "Quais grupos musculares você você menos gosta de treinar?",
}
const SelectInfos = {
    pergunta2: "Sente algum desconforto ao realizar esforço no dia-a-dia ? (Subir escadas, sentar-se, levantar-se)",
    pergunta3: "Apresenta algum desvio postural?",
    pergunta4: "Gosta de exercícios de alongamento?",
}

export function InformaçaoDeTreino() {
    return (
        <Card py={"lg"} withBorder shadow="sm" mt={"md"}>
            <Card.Section py={'lg'} inheritPadding>
                <Text size="xl" fw={500} ta={"center"}>
                    Treino
                </Text>
            </Card.Section>
            <Flex direction={"column"} gap={"md"}>
                {Object.keys(InfosTreinos).map((key, index) => (
                    <Input.Wrapper key={index} label={InfosTreinos[key]}>
                        <Input />
                    </Input.Wrapper>
                ))}
                {Object.keys(SelectInfos).map((key, index) => (
                    <Select
                        // mt="md"
                        comboboxProps={{ withinPortal: true }}
                        data={['Sim', 'Não']}
                        placeholder="Escolha uma opção..."
                        label={SelectInfos[key]}
                        classNames={classes}
                    />
                ))}
            </Flex>
        </Card >
    );
}
