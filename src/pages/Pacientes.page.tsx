import { Alert, Button, Card, Center, Container, Flex, Input, Text } from "@mantine/core";
import { FormHeader } from "../components/Header/Header";
import { FloatingInput } from "@/components/AutoCompleteInput/AutoCompleteInput";
import { InformationCardio } from "@/components/Cards/Saude/InfoSaude";
import { InformaçoesPessoais } from "@/components/Cards/InformacoesPessoais/InfoPessoais";
import { InformaçaoDeTreino } from "@/components/Cards/Treino/InfoTreinos";
import { IconInfoCircle } from "@tabler/icons-react";
import { TabelaDePacientes } from "@/components/TabelaPacientes/TabelaPacientes";

export function PacientesPage() {
    return (
        <Container>
            <FormHeader title="Tabela de Pacientes" />
            <TabelaDePacientes />
        </Container>
    );
}
