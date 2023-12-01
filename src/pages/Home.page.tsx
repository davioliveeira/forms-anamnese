import { Alert, Button, Card, Center, Container, Flex, Input, Text } from "@mantine/core";
import { FormHeader } from "../components/Header/Header";
import { FloatingInput } from "@/components/AutoCompleteInput/AutoCompleteInput";
import { InformationCardio } from "@/components/Cards/Saude/InfoSaude";
import { InformaçoesPessoais } from "@/components/Cards/InformacoesPessoais/InfoPessoais";
import { InformaçaoDeTreino } from "@/components/Cards/Treino/InfoTreinos";
import { IconInfoCircle } from "@tabler/icons-react";

export function HomePage() {
  return (
    <Container>
      <FormHeader title="Formulário de Anamnese" />
      <Alert mb={30} variant="outline" color="pink" title="LEIA COM ATENÇÃO" icon={<IconInfoCircle />}>
        Preencha o formulário mais detalhadamente possível para obtermos o maior número de informações necessárias para montagem do planejamento de treino.
      </Alert>
      <InformaçoesPessoais />
      <InformationCardio />
      <InformaçaoDeTreino />
      <Flex justify={"center"} m={10} pb={10}>
        <Button size="compact-xl" fullWidth>Enviar</Button>
      </Flex>
    </Container>
  );
}
