import { useState } from 'react';
import { Container, Group, Burger, Text, Alert, Image } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './Header.module.css';
import { IconInfoCircle } from '@tabler/icons-react';

const links = [
    { link: '/about', label: 'Features' },
    { link: '/pricing', label: 'Pricing' },
    { link: '/learn', label: 'Learn' },
    { link: '/community', label: 'Community' },
];

export function FormHeader(props: any) {

    return (
        <header className={classes.header}>
            <Container size="md" className={classes.inner}>
                <Image src={"/logo.webp"} width={45} height={45} />
                <Group gap={5} >
                    <Text fw={500}>{props.title}</Text>
                </Group>


            </Container>

        </header>
    );
}