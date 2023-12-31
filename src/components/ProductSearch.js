import { useDispatch, useSelector } from "react-redux";
import { addProductSearch } from "../store/action";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import styled from "styled-components";

export default function ProductSearch() {
  const dispatch = useDispatch();
  const { searchTerm } = useSelector((state) => state);

  const handleSearchTerm = (e) => {
    dispatch(addProductSearch(e.target.value));
  };
  return (
    <SearchContent>
      <TextField
        size="small"
        fullWidth
        label="Search Products..."
        onChange={handleSearchTerm}
        value={searchTerm}
      />
    </SearchContent>
  );
}

const SearchContent = styled(Box)`
  background-color: white;
  width: 30%;
  align-self: center;
  position: absolute;
  left: 35%;
`;