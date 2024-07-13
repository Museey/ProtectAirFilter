import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { deleteById, getAll, search } from "../../services/filterService";
import NotFound from "../../components/NotFound/NotFound";
import classes from "./filtersAdminPage.module.css";
import { toast } from "react-toastify";
import Search from "../../components/Search/Search";

export default function FiltersAdminPage() {
  const [filters, setFilters] = useState();
  const { searchTerm } = useParams();

  useEffect(() => {
    loadFilters();
  }, [searchTerm]);

  const loadFilters = async () => {
    const filters = searchTerm ? await search(searchTerm) : await getAll();
    setFilters(filters);
  };

  const FiltersNotFound = () => {
    if (filters && filters.length > 0) return;

    return searchTerm ? (
      <NotFound linkRoute="/admin/filters" linkText="Show All" />
    ) : (
      <NotFound linkRoute="/dashboard" linkText="Back to dashboard!" />
    );
  };

  const deleteFilter = async filter => {
    const confirmed = window.confirm(`Delete Filter ${filter.p_name}`);
    if(!confirmed) return;
    
    await deleteById(filter.id);
    toast.success(`"${filter.p_name}" Has Been Removed!`);
    setFilters(filters.filter(f => f.id !== filter.id));
  }
  return (
    <div className={classes.container}>
      <div className={classes.list}>
        {/* <Title title="Manage Filters" margin="auto auto" /> */}
        <div className={classes.manage_filters}>Manage Filters</div>
        <Search
          searchRoute="/admin/filters/"
          defaultRoute="/admin/filters"
          margin="1rem 0"
        />
        <Link to="/admin/addFilter" className={classes.add_filter}>
          Add Filter +
        </Link>
        <FiltersNotFound />
        {filters &&
          filters.map((filter) => (
            <div key={filter.id} className={classes.list_item}>
              <img src={filter.imageUrl} alt={filter.p_name} />
              <Link to={"/filter/" + filter.id}>{filter.p_name}</Link>
              <div className={classes.actions}>
                <Link to={"/admin/editFilter/" + filter.id}>Edit</Link>
                <Link onClick={() => deleteFilter(filter)}>Delete</Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
