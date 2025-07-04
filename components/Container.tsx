import React, { ReactNode } from 'react';

interface ContainerProps {
    children: ReactNode ,
    className?: string
}

const Container:React.FC<ContainerProps> = ({children , className}) => {
    return (
        <div className={` ${className} max-w-[1200px] m-auto`}>
            {children}
        </div>
    );
};

export default Container;