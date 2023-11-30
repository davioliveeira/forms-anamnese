import { Card, Text, Flex, Input, Textarea, NumberInput, Select } from "@mantine/core";
import classes from './styles.module.css'
interface InfoType {
    pergunta2: string;
    pergunta3: string;
    pergunta4: string;
    pergunta5: string;
}
const InfoCardio = {
    pergunta2: "Sente dor, aperto ou ardência no torax quando realiza exercício físico?",
    pergunta3: "No último mês, teve dor torácica quando estava realizando algum exercício físico?",
    pergunta4: "Sofre de algum problema ósseo, articular, ou de ligamentos?",
    pergunta5: "Seu médico está lhe receitando atualmente medicamentos para pressão arterial ou alguma condição cardíaca?",
}
const SelectInfos = {
    pergunta2: "É fumante?",
    pergunta3: "Apresenta algum desvio postural?",
    pergunta4: "Possui Diabetes?",
}

export function InformationCardio() {
    return (
        <Card py={"lg"} withBorder shadow="sm" mt={"md"}>
            <Card.Section py={'lg'} inheritPadding>
                <Text size="xl" fw={500} ta={"center"}>
                    Informações sobre sua Saúde
                </Text>
            </Card.Section>
            <Flex direction={"column"} gap={"md"}>
                {Object.keys(InfoCardio).map((key, index) => (
                    <Input.Wrapper key={index} label={InfoCardio[key]}>
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
