import React from 'react'
import classes from './thumbnails.module.css'
import { Link } from 'react-router-dom'

export default function Thumbnails({ filters }) {
  return (
    <ul className={classes.list}>
        {filters.map(filter => (
            <li key={filter.id}>
                <Link to={`/filter/${filter.id}`}>
                <img 
                    className={classes.image}
                    src={`${filter.imageUrl}`}
                    alt={filter.p_name}
                />
                
                <div className={classes.content}>
                    <div className={classes.name}>{filter.p_name}</div>
                    {/* <div className={classes.line}>─────────────────────────</div> */}
                    <div className={classes.codeText}>รหัสสินค้า</div>
                    <div className={classes.code}>{filter.p_code}</div>
                </div>
                </Link>
            </li>
        ))}

    </ul>
  )
}
