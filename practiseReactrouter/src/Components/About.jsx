import React from 'react'

const About = () => {
    return (
        <>
            <div className='container flex gap-5 h-80 justify-evenly m-10'>
                <div className="img h-full w-full">
                    <img src="https://images.pexels.com/photos/19934342/pexels-photo-19934342/free-photo-of-quietly-confident.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="randomimage" className='h-full w-full' />
                </div>
                <div className="img_info">
                    <h1 className='text-xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, voluptatem!</h1>
                    <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, voluptatem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quidem, sit molestias delectus optio totam quae corrupti consequuntur soluta atque?</p>
                </div>
            </div>
        </>
    )
}

export default About
