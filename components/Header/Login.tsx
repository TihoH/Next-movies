import { User } from 'lucide-react';
import React from 'react';

const Login = () => {
    return (
        <div className='flex items-center gap-1  bg-[#1F1B2E] p-2  rounded-lg border border-green-900'>
            <User size={20} color='white' className='bg-[#312B45] h-8 w-8 p-1 rounded-lg'/>
            <span className='text-sm text-white px-2'>Войти</span>
        </div>
    );
};

export default Login;