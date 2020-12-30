import React, { useState } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import Theme from "../../../vars/ThemeOptions";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .form-wrap {
    // margin: 5vw 20vw;
    .row {
      .input-col {
        padding-left: 5px;
        padding-right: 5px;
        margin: 7px 0;
        input {
          width: 100%;
          border: 2px solid ${Theme.hex("orange")};
          padding: 5px 10px;
        }
      }
      .submit-col {
        display: flex;
        justify-content: center;
        margin-top: .5rem;
        input[type="submit"] {
          width: 10rem;
          background: ${Theme.hex("orange")};
          color: ${Theme.hex("white")};
          font-weight: bold;
          border: none;
          clip-path: polygon(5% 0%, 100% 0%, 100% 60%, 95% 100%, 0% 100%, 0% 40%);
        }
      }
    }
    .ty {
      width: 100%;
      display: flex;
      justify-content: center;
      text-align: center;
      p {
        width: 75%;
        font-size: 2rem;
        color: ${Theme.hex("primary")};
      }
    }
  }

  @media only screen and (min-width: 1450px) {
    .form-copy-wrap {
      width: 39%;
    }
  }
  @media only screen and (max-width: 1100px) {
    .form-copy-wrap {
      width: 43%;
    }
  }
  @media only screen and (max-width: 850px) {
    .form-copy-wrap {
      width: 55%;
      h3 {
        font-size: 2vw;
      }
    }
    .submit-col {
      input[type="submit"] {
        width: 30% !important;
      }
    }
  }
  @media only screen and (max-width: 705px) {
    .form-copy-wrap {
      width: 59%;
    }
    .submit-col {
      input[type="submit"] {
        width: 40% !important;
      }
    }
  }
  @media only screen and (max-width: 590px) {
    .form-copy-wrap {
      width: 60%;
      h3 {
        font-size: 2vw;
        top: -5vw;
      }
    }
  }
`;


const WhatIsTMAContactForm = ({ formSubmit }) => {
  const [formSent, setFormSent] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const data = { ...formData };
    data[e.target.name] = e.target.value;
    setFormData(data);
  };

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "whatIsTMAContactForm", ...formData }),
    })
      .then(() => console.log("Success!"))
      .catch((error) => console.log(error));

    e.preventDefault();
    setFormSent(true);
  };

  return (
    <Wrap id="form-section-wrap">
      <div className="form-wrap">
        {!formSent 
          ? <form netlify="true" onSubmit={handleSubmit} name="whatIsTMAContactForm">
              <input type="hidden" name="form-name" value="whatIsTMAContactForm" />
              <input type="hidden" name="isWhatIsTMAContactForm" value="1" />
              <Container fluid>
                <Row>
                  <Col className="input-col" sm={12} md={6}>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </Col>
                  <Col className="input-col" sm={12} md={6}>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col className="input-col">
                    <input
                      type="text"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col className="input-col">
                    <input
                      type="text"
                      name="company"
                      placeholder="Company"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col className="input-col">
                    <input
                      type="text"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col className="input-col">
                    <input
                      type="textarea"
                      name="message"
                      placeholder="Details (optional)"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col className="input-col submit-col">
                    <input type="submit" value="SUBMIT" />
                  </Col>
                </Row>
              </Container>
            </form>
        : <div className="ty"><p>Thank you for getting in touch with us! We will reach out to you shortly.</p></div>  
        }
      </div>      
    </Wrap>
  )
};

export default WhatIsTMAContactForm;
