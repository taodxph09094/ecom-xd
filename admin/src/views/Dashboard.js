import React, { useEffect, useState } from "react";
import ChartistGraph from "react-chartist";
import { BiMoviePlay, BiMovie } from "react-icons/bi";
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { Doughnut, Line } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";

import { formatCurrency } from "../utils/helper";
import { Link } from "react-router-dom";
import Chart from "chart.js/auto";
import { useAlert } from "react-alert";
function Dashboard() {
  const dispatch = useDispatch();
  const alert = useAlert();
  let totalAmount = 0;
  const lineState = {
    labels: ["Doanh thu ban đầu", "Gần nhất"],
    datasets: [
      {
        label: "Tổng",
        backgroundColor: ["tomato"],
        hoverBackgroundColor: ["rgb(197, 72, 49)"],
        data: [0, totalAmount],
      },
    ],
  };
  return (
    <>
      <Container fluid>
        <Row>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      {/* <i className="nc-icon nc-bank text-warning"></i> */}
                      <BiMoviePlay />
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Tổng doanh thu</p>
                      {/* <Card.Title as="h4">{totalAmount}</Card.Title> */}
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-redo mr-1"></i>
                  <Link className="stats" to="/admin/films">
                    Xem danh sách
                  </Link>
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <BiMovie />
                      {/* <i className="nc-icon nc-cart-simple text-success"></i> */}
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Số vé bán ra</p>
                      {/* <Card.Title as="h4">{orders.length}</Card.Title> */}
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-redo mr-1"></i>
                  <Link className="stats" to="/admin/films">
                    Xem danh sách
                  </Link>
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-chart-pie-36 text-danger"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Số lịch chiếu đang có</p>
                      {/* <Card.Title as="h4">{releasedTimes.length}</Card.Title> */}
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-redo mr-1"></i>
                  <Link className="stats" to="/admin/releasedTime">
                    Xem danh sách
                  </Link>
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-circle-09 text-primary"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">
                        Số tài khoản trên hệ thống
                      </p>
                      {/* <Card.Title as="h4"> {users && users.length}</Card.Title> */}
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-redo mr-1"></i>
                  <Link className="stats" to="/admin/users">
                    Xem danh sách
                  </Link>
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
        {/* <Row>
          <Col md="12">
            <Card className="cardCC">
              <Card.Title as="h4">Biểu đồ số vé được bán</Card.Title>
              <Card.Body>
                <div className="ct-chart" id="chartHours">
                  <Line data={lineState} />
                  <p>Doanh thu rạp: </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <Card className="cardLine">
              <Card.Header>
                <Card.Title as="h4">Biểu đồ số vé được bán</Card.Title>
              </Card.Header>
              <Card.Body>
                <div className="ct-chart" id="chartHours">
                  <ChartTable orderList={orders} />
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row> */}
      </Container>
    </>
  );
}

export default Dashboard;
