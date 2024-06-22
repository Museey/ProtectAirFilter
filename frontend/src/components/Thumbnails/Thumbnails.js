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
                    {/* <div className={classes.line}>─────────────────────────</div> */}
                    <div className={classes.codeText}>รหัสสินค้า</div>
                    <div className={classes.code}>{filter.product_id}</div>
                </div>
                </Link>
            </li>
        ))}

    </ul>
  )
}
