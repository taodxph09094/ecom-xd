import React, { useState, useEffect, Fragment } from "react";
import { useAlert } from "react-alert";
import { DataGrid } from "@material-ui/data-grid";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import {
  clearErrors,
  deleteOrder,
  getAllOrders,
  getOrderDetails,
} from "../../actions/orderAction";
import { DELETE_ORDER_RESET } from "../../constants/orderConstants";
import { formatDateTimeToString } from "../../utils/helper";

const OrderList = ({ history }) => {
  const dispatch = useDispatch();

  const alert = useAlert();
  const [saveId, setSaveId] = useState([]);
  const { error, orders } = useSelector((state) => state.allOrders);
  const { error: deleteError, isDeleted } = useSelector((state) => state.order);

  const deleteOrderHandler = (id) => {
    dispatch(deleteOrder(id));
  };

  useEffect(() => {
    setSaveId(orders);
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (deleteError) {
      alert.error(deleteError);
      dispatch(clearErrors());
    }

    if (isDeleted) {
      alert.success("Xóa thành công");
      history.push("/admin/ticket-orders");
      dispatch({ type: DELETE_ORDER_RESET });
    }

    dispatch(getAllOrders());
  }, [dispatch, alert, error, deleteError, history, isDeleted]);

  const columns = [
    { field: "id", headerName: " ID", minWidth: 50, flex: 0.5 },
    {
      field: "cusName",
      headerName: "Tên khách hàng",
      minWidth: 150,
      flex: 0.5,
    },
    {
      field: "nameFilm",
      headerName: "Tên phim",
      minWidth: 150,
      flex: 0.5,
    },
    {
      field: "nameCinema",
      headerName: "Tên rạp",
      minWidth: 150,
      flex: 0.5,
    },
    {
      field: "amount",
      headerName: "Giá  ",
      type: "number",
      minWidth: 150,
      flex: 0.5,
    },
    {
      field: "status",
      headerName: "Trạng thái",
      minWidth: 150,
      flex: 0.5,
      cellClassName: (params) => {
        return params.getValue(params.id, "status") === "Đã xong"
          ? "greenColor"
          : "redColor";
      },
    },
    {
      field: "date",
      headerName: "Ngày đặt",
      minWidth: 150,
      flex: 0.5,
    },
  ];

  const rows = [];

  console.log(orders);
  orders &&
    orders.forEach((item) => {
      // setSaveId(item._id);
      rows.push({
        id: item._id,
        cusName: item.userName,
        nameFilm: item.nameFilm,
        nameCinema: item.nameCinema,
        amount: item.totalPrice,
        status: item.orderStatus,
        date: formatDateTimeToString(item.createdAt),
      });
    });

  return (
    <>
      <h1 id="productListHeading">Danh sách khách hàng đặt vé</h1>

      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        disableSelectionOnClick
        className="productList"
        autoHeight
      />
    </>
  );
};

export default OrderList;
