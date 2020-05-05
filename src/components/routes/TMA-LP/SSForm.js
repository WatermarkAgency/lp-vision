import React, { useState } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { INLINES } from '@contentful/rich-text-types';
import Theme from "../../../vars/ThemeOptions";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .form-wrap {
    margin: 5vw 20vw;
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
        margin-top: 1.5rem;
        input[type="submit"] {
          width: 20%;
          background: ${Theme.hex("orange")};
          color: ${Theme.hex("white")};
          font-weight: bold;
          border: none;
          transform: ${Theme.transform.angle};
        }
      }
    }
  }
  .form-copy-angle {
    width: 110%;
    display: flex;
    justify-content: center;
    border-bottom: 2px solid ${Theme.hex("orange")};
    transform: ${Theme.transform.angle};
  }
  .form-copy-wrap {
    width: 41%;
    text-align: center;
    position: relative;
    h3 {
      font-size: 1.5vw;
      font-weight: bold;
      text-transform: uppercase;
      background: ${Theme.hex("white")};
      padding: 10px;
      position: absolute;
      top: -3vw;
    }
  }
  .thank-you-wrap {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
      margin: 10vw 15vw;
      text-align: center;
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


const SSForm = ({ formCopy, download, formSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    address: "",
    city: "",
    state: "",
    zip: "",
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
    // fetch("/", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //   body: encode({ "form-name": "tangible", ...formData }),
    // })
    //   .then(() => console.log("Success!"))
    //   .catch((error) => console.log(error));

    e.preventDefault();
    formSubmit(); // not the actual form submission (that's the fetch above) - this function just tells node/pageAngled.js that it now needs to display the thank you page and auto-download the pdf
  };

  return (
    <Wrap id="form-section-wrap">
      <div className="form-copy-angle" />
      <div className="form-copy-wrap">
        <h3>{formCopy}</h3>
      </div>
      <div className="form-wrap">
        <form netlify="true" onSubmit={handleSubmit} name="tangible">
          <input type="hidden" name="form-name" value="tangible" />
          <input type="hidden" name="isTangible" value="1" />
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
                  name="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </Col>
            </Row>
            <Row>
              <Col className="input-col" sm={12} md={4}>
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                />
              </Col>
              <Col className="input-col" sm={12} md={4}>
                <input
                  type="text"
                  name="state"
                  placeholder="State"
                  value={formData.state}
                  onChange={handleChange}
                />
              </Col>
              <Col className="input-col" sm={12} md={4}>
                <input
                  type="text"
                  name="zip"
                  placeholder="Zip"
                  value={formData.zip}
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
      </div>      
    </Wrap>
  )
};

export default SSForm;
