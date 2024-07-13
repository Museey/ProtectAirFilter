import { useParams } from "react-router-dom";
import classes from "./filterEdit.module.css";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { add, getById, update } from "../../services/filterService";
import Title from "../../components/Title/Title";
import InputContainer from "../../components/InputContainer/InputContainer";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { uploadImage } from "../../services/uploadService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


export default function FilterEditPage() {
  const { filterID } = useParams();
  const [imageUrl, setImageUrl] = useState();
  const isEditMode = !!filterID;
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    if (!isEditMode) return;

    getById(filterID).then(filter => {
      if (!filter) return;
      reset(filter);
      setImageUrl(filter.imageUrl);
    });
  }, [filterID]);

  const submit = async (filterData) => {
    const filter = { ...filterData, imageUrl };

    if (isEditMode) {
      await update(filter);
      toast.success(`Filter "${filter.p_name}" updated successfully!!`);
      return;
    }

    const newFilter = await add(filter);
    toast.success(`Filter "${filter.p_name}" added successfully!!`);
    navigate("/admin/editFilter/" + newFilter.id, { replace: true });
  };

  const upload = async (event) => {
    setImageUrl(null);
    const imageUrl = await uploadImage(event);
    setImageUrl(imageUrl);
  };

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <Title title={isEditMode ? "Edit Filter" : "Add Filter"} />
        <form onSubmit={handleSubmit(submit)} noValidate>
          <InputContainer label="Select Image">
            <input type="file" onChange={upload} accept="image/jpeg" />
            {/* what jek what can be change to png */}
          </InputContainer>

          {imageUrl && (
            <a href={imageUrl} className={classes.image_link} target="blank">
              <img src={imageUrl} alt="Uploaded" />
            </a>
          )}

          <Input
            type="text"
            label="Name"
            {...register("p_name", { required: true, minLength: 5 })}
            error={errors.p_name}
          />

          <Input
            type="text"
            label="Filter ID"
            {...register("p_code", { required: true, minLength: 3 })}
            error={errors.p_code}
          />

          <Button type="submit" text={isEditMode ? "Update" : "Create"} />
        </form>
      </div>
    </div>
  );
}
