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

// Components
import Image from "@/components/Image";
import Loader from "@/components/Loader";
import MovieModal from "../../MovieDashBoard/components/MovieModal";
import { EditMovieBtn, DeleteMovieBtn } from "../Buttons";

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

export { headCells };
