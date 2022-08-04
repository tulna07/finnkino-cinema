import {
  alpha,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Toolbar,
  Typography,
  Paper,
  IconButton,
  Tooltip,
  FormControlLabel,
  Switch,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

// Components
import Image from "@/components/Image";
import Loader from "@/components/Loader";
import MovieModal from "../../MovieDashBoard/components/MovieModal";
import { EditMovieBtn, DeleteMovieBtn } from "../Buttons";

//Others
import { movieApi, userApi } from "@/api";
import actGetUserDetails from "@/store/actions/userDetails";

const headCells = [
  {
    id: "maPhim",
    numeric: true,
    disablePadding: true,
    label: "Mã phim",
    sortFunction: true,
  },
  {
    id: "hinhAnh",
    numeric: false,
    disablePadding: false,
    label: "Hình ảnh",
    sortFunction: false,
  },
  {
    id: "tenPhim",
    numeric: false,
    disablePadding: false,
    label: "Tên phim",
    sortFunction: true,
  },
  {
    id: "moTa",
    numeric: false,
    disablePadding: false,
    label: "Mô tả phim",
    sortFunction: true,
  },
  {
    id: "hanhDong",
    numeric: false,
    disablePadding: false,
    label: "Hành động",
    sortFunction: false,
  },
];

const fetchUserDelete = async (userAccount) => {
  try {
    await userApi.deleteUser(userAccount);
  } catch (error) {
    alert(error);
  }
};

const fetchMovieDelete = async (movieId) => {
  try {
    await movieApi.deleteMovie(movieId);
  } catch (error) {
    alert(error);
  }
};

export { headCells, fetchUserDelete, fetchMovieDelete };
