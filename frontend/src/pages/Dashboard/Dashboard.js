import React from 'react'
import classes from './dashboard.module.css'
import { useAuth } from '../../hooks/useAuth'
import { Link } from 'react-router-dom';


export default function Dashboard() {
    const { user } = useAuth();

  return (
    <div className={classes.container}>
        <div className={classes.menu}>
            {
                allItems.filter(item => user.isAdmin || !item.forAdmin)
                .map(item=> (
                    <Link
                    key={item.title}
                    to={item.url}
                    style={{
                        backgroundColor: item.bgColor,
                        color: item.color,
                    }}>
                        <img src={item.imageUrl} alt={item.title} />
                        <h2>{item.title}</h2>
                    </Link>
                ))
            }

        </div>

    </div>
  )
}

const allItems = [
    {
        title: 'Filters',
        imageUrl: '/icons/product.png',
        url:'/admin/filters',
        forAdmin: true,
        bgColor : 'red',
        color: 'white',
    }
]
