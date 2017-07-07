import React from 'react';
import NativeFlag from 'react-native-flags';

const Flag = ({nation}) => {
    return (
        <NativeFlag
            code={nation}
            size={16}
        />
    );
};

export {Flag};