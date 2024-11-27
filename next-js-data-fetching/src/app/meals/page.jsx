import React from 'react'
import SearchMeals from '@/components/meal_page/SearchMeals'

export const metadata = {
  title: {
    absolute: 'Search your Meals',
  },
  description: 'Find your required meals. View descriptions'
};

const page = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-5'>
      <h1 className='text-lime-400 font-semibold text-lg'>Find Your <span className='text-yellow-500 font-bold'>Meal</span> now!</h1>
      <SearchMeals />
    </div>
  )
}

export default page