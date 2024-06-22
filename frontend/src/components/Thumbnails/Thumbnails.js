import React from 'react'
import classes from './thumbnails.module.css'
import { Link } from 'react-router-dom'

export default function Thumbnails({ filters }) {
  return (
    <ul className={classes.list}>
        {filters.map(filter => (
            <li key={filter.product_id}>
                <Link to={`/filter/${filter.num}`}>
                <img 
                    className={classes.image}
                    src={`/filters/${filter.imageUrl}`}
                    alt={filter.product_name}
                />
                
                <div className={classes.content}>
                    <div className={classes.name}>{filter.product_name}</div>
                    {/* <span 
                        className={`${classes.favorite} ${
                        filter.favorite ? '' : classes.not
                        }`}
                        >
                            33
                    </span> */}

                </div>
                </Link>
            </li>
        ))}

    </ul>
  )
}
