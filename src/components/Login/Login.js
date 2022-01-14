import React from "react";
import { Container } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useState } from "react";
import "../Login/Login.css";
import axios from "axios";
import swal from "sweetalert";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit() {
    const userData = {
      email: email,
      password: password,
    };

    console.log(userData);
    const response = await axios.post("https://login-backend-form.herokuapp.com/login", userData);
    console.log(response);
    if (response.data.token) {
      let credentials = [
        response.data.token,
        response.data.userDetails.firstName,
        response.data.userDetails.lastName,
        response.data.userDetails.email,
        response.data.userDetails.phoneNo,
        response.data.userDetails.address,
      ];
      localStorage.setItem("userData", JSON.stringify(credentials));
    }

    swal({
      title: `Welcome, ${response.data.userDetails.firstName} ${response.data.userDetails.lastName}`,
      icon: `success`,
      button: "Okay!",
    }).then(() => {
      // window.location = "";
    });
    setEmail("");
    setPassword("");
  }

  return (
    <Container fluid className="bg-dark w-100">
      <div className="login">
        <div className="loginForm">
          <div className="icon">
            <i className="fa fa-user-circle regLogo" aria-hidden="true"></i>
          </div>
          <Container className="formContainer">
            <Form>
              <Row>
                <Col>
                  <Form.Label style={{ marginLeft: "45px" }}>
                    Email address
                  </Form.Label>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={{
                        width: "80%",
                        border: "1.5px solid black",
                        height: "45px",
                        borderRadius: "5px",
                      }}
                    />
                  </div>
                </Col>
              </Row>

              <Row className="mt-3">
                <Col>
                  <Form.Label style={{ marginLeft: "45px" }}>
                    Password
                  </Form.Label>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <Form.Control
                      type="password"
                      placeholder="Enter Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      style={{
                        width: "80%",
                        border: "1.5px solid black",
                        height: "45px",
                        borderRadius: "5px",
                      }}
                    />
                  </div>
                </Col>
              </Row>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Button
                  variant="dark"
                  className="mt-4 p-2"
                  style={{
                    borderRadius: "10px",
                    width: "25%",
                    fontSize: "20px",
                  }}
                  onClick={submit}
                >
                  Login
                </Button>
              </div>
            </Form>

            <hr />

            <h5 style={{ color: "black", textAlign: "center" }}>
              Didn't have an account?
              <a
                href="/"
                style={{
                  textDecoration: "none",
                  color: "yellow",
                  marginLeft: "5px",
                }}
              >
                REGISTER
              </a>
            </h5>
          </Container>
        </div>
      </div>
    </Container>
  );
}

export default Login;
