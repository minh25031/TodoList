import React from 'react';
import Headers from '@/components/Headers';

const HomePage = () => {
    return (
        <div className='container pt-8 mx-auto'>
            <div className='w-full max-w-2xl mx-auto space-y-6'>

                {/* Đầu Trang */}
                <Headers />
            </div>
        </div>
    );
};

export default HomePage;