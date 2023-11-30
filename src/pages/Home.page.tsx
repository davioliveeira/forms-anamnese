import { Card, Center, Container, Flex, Input, Text } from "@mantine/core";
import { FormHeader } from "../components/Header/Header";
import { FloatingInput } from "@/components/AutoCompleteInput/AutoCompleteInput";
import { InformationCardio } from "@/components/Cards/Saude/InfoSaude";
import { InformaçoesPessoais, PersonalInformations } from "@/components/Cards/InformacoesPessoais/InfoPessoais";
import { InformaçaoDeTreino } from "@/components/Cards/Treino/InfoTreinos";

export function HomePage() {
  return (
    <Container>
      <FormHeader />
      <InformaçoesPessoais />
      <InformationCardio />
      <InformaçaoDeTreino />
      {/* <FloatingInput label="Quantos dias na semana pretende treinar?" />
      <FloatingInput label="Quanto tempo você tem disponivel para treino/aeróbico?" />
      <FloatingInput label="Qual o seu objetivo com a consultoria?" />
      <FloatingInput label="Tem/Teve alguma Lesão?" />
      <FloatingInput label="Sente alguma dor em alguma parte do corpo?" />
      <FloatingInput label="Já fez alguma cirurgia?" />
      <FloatingInput label="Quais exercícios/grupo muscular você mais gosta de treinar?" />
      <FloatingInput label="Quais exercícios/grupo muscular você não gosta de treinar?" />
      <FloatingInput label="Você costuma alongar-se antes dos treinos?" />
      <FloatingInput label="Está fazendo dieta?" /> */}
    </Container>
  );
}
