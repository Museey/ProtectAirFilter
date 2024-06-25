import React, { useEffect, useState } from 'react'
//import classes from './foodPage.moudule.css'
import { useParams } from 'react-router-dom';
import { getById } from '../../services/foodService';
export default function FoodPage() {
  const [filter, setFilter] = useState({});
  const {id} = useParams();

  useEffect(() => {
    getById(id).then(setFilter);
  },[id]);
  return (
    <div>FoodPage</div>
  )
}
