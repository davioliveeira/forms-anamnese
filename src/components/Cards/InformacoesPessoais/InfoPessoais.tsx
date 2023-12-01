import { Card, Center, Container, Flex, Input, NumberInput, Text } from "@mantine/core";
import { FloatingInput } from "@/components/AutoCompleteInput/AutoCompleteInput";

export function InformaçoesPessoais() {
    return (
        <Card
            // style={(theme) => ({ borderColor: theme.colors.blue[7] })}
            py={"lg"}
            withBorder radius={"lg"}
        >
            <Card.Section
                py={'lg'}
                inheritPadding
            >
                <Text size="xl" fw={500} ta={"center"} c={"blue.9"}>
                    Informações Pessoais
                </Text>
            </Card.Section>
            <Flex px={"lg"} direction={"column"} gap={"md"}>
                <FloatingInput label="Nome Completo" />
                <FloatingInput label="Idade" />
                <FloatingInput label="Qual sua Profissão?" />
                <FloatingInput label="Trabalha quantas horas por dia?" />
                <FloatingInput label="Peso Atual (Kgs)" placeholder="Seu peso com no máximo uma semana de atraso" />
                <Input.Wrapper label="Quantos dias na semana pretende treinar?">
                    <NumberInput
                        min={1}
                        max={7}
                    />
                </Input.Wrapper>
            </Flex>
        </Card>
    );
}
