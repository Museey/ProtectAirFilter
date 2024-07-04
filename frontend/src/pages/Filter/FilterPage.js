import React, { useEffect, useState } from 'react'
import classes from './filterPage.module.css'
import { Link, useParams } from 'react-router-dom';
import { getById } from '../../services/filterService';
import NotFound from '../../components/NotFound/NotFound';
export default function FoodPage() {
  const [filter, setFilter] = useState({});
  const {id} = useParams();

  useEffect(() => {
    getById(id).then(setFilter);
  },[id]);
  return (
    <>
    { !filter? (
        <NotFound message={'Filter Not Found!'} linkText='Back To Homepage'/>
        ) : ( <div className={classes.container}>
        <img className={classes.image}
        src={`${filter.imageUrl}`}
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
      </div>
      )}
    </>
  )
}
