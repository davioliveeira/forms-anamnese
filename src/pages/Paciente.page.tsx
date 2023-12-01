import { Alert, Badge, Card, CardSection, Container, Flex, Group, Text } from "@mantine/core";
import { FormHeader } from "../components/Header/Header";
import { useParams } from "react-router-dom"
import { IconInfoCircle } from "@tabler/icons-react";
import { TabelaInfoPaciente } from "@/components/TabelasInformacao/TabelaInformacaoPessoal";
export function PacientePage() {
    const params = useParams();
    const infoPessoal = [
        {
            "Nome Completo": "João Pedro de Oliveira",
            "Idade": "19",
            "Profissão": "Gigolô",
            "Peso Atual (Kgs": "85",
            "Dias de Treino": "6 dias"
        }
    ]
    const infoSaude = [
        {
            "Pergunta 1": "Não",
            "Pergunta 2": "Sim",
            "Pergunta 3": "Não",
            "Pergunta 4": "Sim",
            "Pergunta 5": "Não",
            "Pergunta 6": "Não",
            "Pergunta 7": "Não",
        }
    ]
    const infoTreino = [
        {
            "Dias de Treino": "6 dias",
            "Objetivo Consultoria": "Hipertrofia Muscular",
            "Grupo Muscular +": "Peitoral,Bíceps,Ombro",
            "Grupo Muscular -": "Perna,Panturilha,Abdominal",
            "Desconforto Dia-a-Dia": "Não",
            "Desvio Postural": "Sim",
            "Pratica Alongamentos": "Sim"
        }
    ]
    return (
        <Container>
            <FormHeader title={params.id} />
            <Alert mb={30} variant="outline" color="pink" title="LEIA COM ATENÇÃO" icon={<IconInfoCircle />}>
                Nessa seção você terá acesso a todas as respostas do questionário, individualizada por paciente...
            </Alert>
            <Card padding="lg" radius="md" withBorder>
                <Card.Section>
                    <Flex justify={"space-between"} py={10} align={"center"} >
                        <div />
                        <div>
                            <Text size="xl" fw={500} ta={"center"} c={"blue.9"}>
                                Informações Pessoais
                            </Text>
                        </div>
                        <Group pr={10}>
                            <Badge color="red" variant="light">
                                Não Avaliado
                            </Badge>
                        </Group>
                    </Flex>
                </Card.Section>
                <TabelaInfoPaciente elements={infoPessoal} />
            </Card>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Card.Section>
                    <Flex justify={"space-between"} py={10} align={"center"} >
                        <div />
                        <div>
                            <Text size="xl" fw={500} ta={"center"} c={"blue.9"}>
                                Informações Saúde
                            </Text>
                        </div>
                        <Group pr={10}>
                            <Badge color="red" variant="light">
                                Não Avaliado
                            </Badge>
                        </Group>
                    </Flex>
                </Card.Section>
                <TabelaInfoPaciente elements={infoSaude} />
            </Card>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Card.Section>
                    <Flex justify={"space-between"} py={10} align={"center"} >
                        <div />
                        <div>
                            <Text size="xl" fw={500} ta={"center"} c={"blue.9"}>
                                Informações Treino
                            </Text>
                        </div>
                        <Group pr={10}>
                            <Badge color="red" variant="light">
                                Não Avaliado
                            </Badge>
                        </Group>
                    </Flex>
                </Card.Section>
                <TabelaInfoPaciente elements={infoTreino} />
            </Card>

        </Container>
    );
}
