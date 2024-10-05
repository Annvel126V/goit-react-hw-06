import s from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter, gchangeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(gchangeFilter);

  const handleFilterchange = (e) => {
    dispatch(selectNameFilter(e.target.value));
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
