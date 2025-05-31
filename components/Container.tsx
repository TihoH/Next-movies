import React, { ReactNode } from 'react';

interface ContainerProps {
    children: ReactNode
}

const Container:React.FC<ContainerProps> = ({children}) => {
    return (
        <div className='max-w-[1200px] m-auto'>
            {children}
        </div>
    );
};

export default Container;