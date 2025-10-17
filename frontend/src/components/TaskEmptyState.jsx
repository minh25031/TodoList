import React, { act } from 'react'
import { Card } from './ui/card'
import { Circle } from 'lucide-react'

const TaskEmptyState = (filter = { filter }) => {
    return (
        <Card className="p - 8 text-center border-0 bg-gradiend-card shadow-md" >
            <div className='space-y-3'>
                <Circle className='size-12 mx-auto text-gray-400' />
                <h3 className='font-medium text-foreground'>
                    {filter === 'active' ? 'No tasks yet. Create your first task!' :
                        filter === 'completed' ? 'No completed tasks yet.' :
                            'No tasks available. Create your first task!'}
                </h3>
                <p className='text-sm text-muted-foreground'>
                    {filter === 'all' && 'Tasks you create will appear here.'}
                    {filter === 'active' && 'Active tasks you create will appear here.'}
                    {filter === 'completed' && 'Completed tasks will appear here.'}
                </p>
            </div>
        </Card>
    )
}

export default TaskEmptyState