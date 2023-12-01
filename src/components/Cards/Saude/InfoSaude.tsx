import { Card, Text, Flex, Input, Textarea, NumberInput, Select, Radio, Group } from "@mantine/core";
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
        <Card py={"lg"} withBorder radius={"lg"} mt={"md"}>
            <Card.Section py={'lg'} inheritPadding>
                <Text size="xl" fw={500} ta={"center"} c={"blue.9"}>
                    Informações sobre sua Saúde
                </Text>
            </Card.Section>
            <Flex px={"lg"} direction={"column"} gap={"md"}>
                {Object.keys(InfoCardio).map((key, index) => (
                    <Input.Wrapper key={index} label={InfoCardio[key]}>
                        <Input />
                    </Input.Wrapper>
                ))}
                {Object.keys(SelectInfos).map((key, index) => (
                    <Radio.Group

                        key={key}
                        label={SelectInfos[key]}
                        withAsterisk
                    >
                        <Group mt="xs">
                            <Radio value="sim" label="Sim" />
                            <Radio value="nao" label="Não" />
                        </Group>
                    </Radio.Group>
                ))}
            </Flex>
        </Card >
    );
}
