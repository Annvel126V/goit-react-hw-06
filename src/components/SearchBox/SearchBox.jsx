import s from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getStatusFilter, getFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleFilterchange = (e) => {
    dispatch(getStatusFilter(e.target.value));
  };
  return (
    <div className={s.search}>
      <label className={s.title}>Find contacts by name</label>
      <input
        className={s.input}
        type="text"
        value={filter}
        onChange={handleFilterchange}
      />
    </div>
  );
};

export default SearchBox;
