import React, { useEffect, useState } from 'react'
import classes from './foodPage.module.css'
import { Link, useParams } from 'react-router-dom';
import { getById } from '../../services/foodService';
export default function FoodPage() {
  const [filter, setFilter] = useState({});
  const {id} = useParams();

  useEffect(() => {
    getById(id).then(setFilter);
  },[id]);
  return (
    <>
    { filter && <div className={classes.container}>
        <img className={classes.image}
        src={`/filters/${filter.imageUrl}`}
        alt={filter.p_name}
        />

        <div className={classes.details}>
          <div className={classes.header}>
            <span className={classes.name}>{filter.p_name}

            </span>
          </div>
          <div className={classes.code}>รหัสสินค้า {filter.p_code}</div>
          <Link to={`/`}>
          <div className={classes.content}>
            Back to Catalog
          </div>
          </Link>
        </div>
      </div>}
    </>
  )
}
