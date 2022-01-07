import React from "react";
import { Container } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useState } from "react";
import "../Register/Register.css";
import axios from "axios";
import swal from "sweetalert";

function Register() {
  const [firstName, setfirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [houseNo, setHouseNo] = useState("");
  const [streetName, setStreetName] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [password, setPassword] = useState("");
  const [cnfPassword, setcnfPassword] = useState("");

  async function submit() {
    const userData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNo: phoneNo,
      address: houseNo + " " + streetName + " " + city + " " + pincode,
      password: password,
    };

    // console.log(userData);
    if (password !== cnfPassword) {
      alert("Password and confirm password should be same");
    } else {
      const response = await axios.post(
        "https://login-backend-form.herokuapp.com/register",
        userData
      );
      // console.log(response.data.message);
      swal({
        title: `${response.data.message}`,
        icon: `success`,
        button: "Okay!!",
      }).then(function () {
        window.location = "/login";
      });
    }
  }

  return (
    <Container fluid className="bg-dark w-100">
      <div className="registration">
        <div className="registrationForm">
          <div className="icon">
            <i className="fa fa-user-circle regLogo" aria-hidden="true"></i>
          </div>
          <Container className="formContainer">
            <Form>
              <Row>
                <Col>
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter first name"
                    value={firstName}
                    onChange={(e) => setfirstName(e.target.value)}
                    style={{ border: "1.5px solid black" }}
                  />
                </Col>
                <Col>
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    style={{ border: "1.5px solid black" }}
                  />
                </Col>
              </Row>
              <Row className="mt-3">
                <Col>
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={mailId}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ border: "1.5px solid black" }}
                  />
                </Col>

                <Col>
                  <Form.Label>Phone No.</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter phone no."
                    value={phoneNo}
                    onChange={(e) => setPhoneNo(e.target.value)}
                    style={{ border: "1.5px solid black" }}
                  />
                </Col>
              </Row>

              <Row className="mt-3">
                <Col>
                  <Form.Label>HouseNo.</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter HouseNo."
                    value={houseNo}
                    onChange={(e) => setHouseNo(e.target.value)}
                    style={{ border: "1.5px solid black" }}
                  />
                </Col>

                <Col>
                  <Form.Label>Locality/Street Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Street Name"
                    value={streetName}
                    onChange={(e) => setStreetName(e.target.value)}
                    style={{ border: "1.5px solid black" }}
                  />
                </Col>
              </Row>

              <Row className="mt-3">
                <Col>
                  <Form.Label>State/City</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    style={{ border: "1.5px solid black" }}
                  />
                </Col>

                <Col>
                  <Form.Label>Pincode</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter Pincode"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    style={{ border: "1.5px solid black" }}
                  />
                </Col>
              </Row>

              <Row className="mt-3">
                <Col>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ border: "1.5px solid black" }}
                  />
                </Col>

                <Col>
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Confirm Password"
                    value={cnfPassword}
                    onChange={(e) => setcnfPassword(e.target.value)}
                    style={{ border: "1.5px solid black" }}
                  />
                </Col>
              </Row>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Button
                  variant="dark"
                  className="mt-4 p-2"
                  style={{
                    borderRadius: "10px",
                    width: "20%",
                    fontSize: "18px",
                  }}
                    onClick={submit}
                >
                  Sign Up
                </Button>
              </div>
            </Form>
            <hr />

            <h5 style={{ color: "black", textAlign: "center" }}>
              Already a user?
              <a
                href="/login"
                style={{
                  textDecoration: "none",
                  color: "yellow",
                  marginLeft: "5px",
                }}
              >
                LOGIN NOW
              </a>
            </h5>
          </Container>
        </div>
      </div>
    </Container>
  );
}

export default Register;
