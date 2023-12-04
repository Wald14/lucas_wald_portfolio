import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import emailjs from '@emailjs/browser';
import "../assets/css/contact.css"


export default function Contact() {

  const defaultInfo = { name: "", email: "", question: "" }
  const [contactInfo, setContactInfo] = useState(defaultInfo)

  function handleInputChange(e) {
    const clone = { ...contactInfo, [e.target.name]: e.target.value }
    setContactInfo(clone)
  }

  // Bootstrap Form Validation
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    event.preventDefault();
    if  (form.checkValidity() === true){
      const serviceId = "service_892xwsq";
      const templateId = "template_o1e2sln";
      const publicKey = "RP76CGSB6V7ch8Yvk";
  
      emailjs.sendForm(serviceId, templateId, form, publicKey)
        .then((result) => {
          window.location.reload()
        }, (error) => {
          console.log(error.text)
        })
    }
    setValidated(true);
  }


  return (
    <div className="contact-page">
      <h1>Contact Me:</h1>

      <Form noValidate validated={validated} onSubmit={handleSubmit} style={{ maxWidth: "500px", margin: "25px" }}>

        {/* Name Field*/}
        <Form.Group className="mb-3" controlId="validationCustom01">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type="text"
            name="name"
            value={contactInfo.name}
            onChange={handleInputChange} />
          <Form.Control.Feedback type="invalid">
            Please choose your name.
          </Form.Control.Feedback>
        </Form.Group>

        {/* Email Field*/}
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            required
            type="email"
            name="email"
            value={contactInfo.email}
            onChange={handleInputChange} />
          <Form.Control.Feedback type="invalid">
            Please enter a valid email.
          </Form.Control.Feedback>
        </Form.Group>

        {/* Question Field */}
        <Form.Group className="mb-3" controlId="formQuestion">
          <Form.Label>Question</Form.Label>
          <Form.Control
            required
            as="textarea"
            rows={3}
            name="question"
            value={contactInfo.question}
            onChange={handleInputChange} />
          <Form.Control.Feedback type="invalid">
            Please enter a question.
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="success" type="submit" value="Submit">
          Submit
        </Button>
      </Form>

    </div>
  )
}