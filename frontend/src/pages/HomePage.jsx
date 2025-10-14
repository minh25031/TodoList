import React from 'react';
import Header from '../components/Header';
import AddTask from '@/components/AddTask';
import TaskList from '@/components/TaskList';
import StatsAndFillters from '@/components/StatsAndFillters';
import TaskListAndPagination from '@/components/TaskListAndPagination';
import DateTimeFilter from '@/components/DateTimeFilter';
import Footer from '@/components/Footer';


const HomePage = () => {
    return (
        <div className="min-h-screen w-full bg-white relative">
            {/* Amber Glow Background */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `
        radial-gradient(125% 125% at 50% 90%, #ffffff 40%, #f59e0b 100%)
      `,
                    backgroundSize: "100% 100%",
                }}
            />
            <div className='container pt-8 mx-auto relative z-10'>
                <div className='w-full max-w-2xl mx-auto p-6 space-y-6'>

                    {/* Đầu Trang */}
                    <Header />

                    {/* Tạo nhiệm vụ */}
                    <AddTask />

                    {/* Thống kê và bộ lọc */}
                    <StatsAndFillters />

                    {/* Danh sách nhiệm vụ */}
                    <TaskList />

                    {/* Phân trang và lọc theo ngày */}
                    <div className='flex flex-col items-center justify-between gap-6 sm:flex-row'>
                        <TaskListAndPagination />
                        <DateTimeFilter />
                    </div>

                    {/* Chân trang */}
                    <Footer />

                </div>
            </div></div>


    );
};

export default HomePage;