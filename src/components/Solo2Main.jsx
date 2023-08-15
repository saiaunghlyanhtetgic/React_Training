import React from 'react'
import Solo2Card from './Solo2Card'

const cityInfo = [
    {
        img : "https://cdn.britannica.com/47/80547-050-8B316D38/Field-green-tea-Mount-Fuji-Shizuoka-prefecture.jpg",
        city : "Japan",
        place : "Mount Fji",
        date : "2017-October-23",
        description : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo ratione molestias harum, magni ipsum doloremque explicabo exercitationem reiciendis aut impedit quaerat dolor, maiores quos veritatis iure deleniti nesciunt deserunt nam!"
    }, 
    {
        img : "https://cdn.britannica.com/47/80547-050-8B316D38/Field-green-tea-Mount-Fuji-Shizuoka-prefecture.jpg",
        city : "France",
        place : "Eiffel Tower",
        date : "2017-October-23",
        description : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo ratione molestias harum, magni ipsum doloremque explicabo exercitationem reiciendis aut impedit quaerat dolor, maiores quos veritatis iure deleniti nesciunt deserunt nam!"
    }, 
    {
        img : "https://cdn.britannica.com/47/80547-050-8B316D38/Field-green-tea-Mount-Fuji-Shizuoka-prefecture.jpg",
        city : "Italy",
        place : "Olympic",
        date : "2017-October-23",
        description : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo ratione molestias harum, magni ipsum doloremque explicabo exercitationem reiciendis aut impedit quaerat dolor, maiores quos veritatis iure deleniti nesciunt deserunt nam!"
    }, 

]

const Solo2Main = () => {
    
  return (
    <div>
        <div className='bg-orange-600 text-center'>
            <p className='text-black p-2'>my travel journal</p>
        </div>

        <div>
        {cityInfo.map((city, index) => (
          <Solo2Card
            key={index} // Use a unique key for each card
            img={city.img}
            country={city.city} // Change 'country' to 'city' according to your data
            place={city.place}
            date={city.date}
            description={city.description}
          />
          
        ))}
      </div>
        
    </div>
  )
}

export default Solo2Main

