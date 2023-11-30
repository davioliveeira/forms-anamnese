import React, { useState } from 'react';
import { TextInput } from '@mantine/core';
import classes from './style.module.css';
type Props = React.ComponentProps<typeof TextInput>;

export function FloatingInput(props: Props) {
    const [focused, setFocused] = useState(false);
    const [value, setValue] = useState('');
    const floating = value.trim().length !== 0 || focused || undefined;

    return (
        <TextInput
            {...props}
            classNames={classes}
            value={value}
            onChange={(event) => setValue(event.currentTarget.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            mt="md"
            autoComplete="nope"
            data-floating={floating}
            labelProps={{ 'data-floating': floating }}
        />
    );
}