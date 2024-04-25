import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import Toast from "react-bootstrap/Toast";

const schema = yup.object({
  name: yup.string().required("Nameiss"),
  email: yup.string().email().required(),
  password: yup.string().required().min(6),
});

const FormRegister = () => {
  const [showToast, setShowToast] = useState(false);
  const toggleToast = () => setShowToast(!showToast);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      console.log("🚀 ~ onSubmit ~ data:", data);

      const response = await axios.post("your_backend_url_here", data);
      console.log("Response:", response.data);
      toggleToast();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
            id="name"
            {...register("name")}
          />
          {errors.name && (
            <div className="invalid-feedback">{errors.name.message}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            id="email"
            {...register("email")}
          />
          {errors.email && (
            <div className="invalid-feedback">{errors.email.message}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
            id="password"
            {...register("password")}
          />
          {errors.password && (
            <div className="invalid-feedback">{errors.password.message}</div>
          )}
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <Toast
        show={showToast}
        onClose={toggleToast}
        style={{
          position: "absolute",
          top: 20,
          right: 20,
          zIndex: 1,
        }}
        delay={3000}
        autohide
      >
        <Toast.Header>
          <strong className="me-auto">Registration Successful</strong>
        </Toast.Header>
        <Toast.Body>Your registration was successful!</Toast.Body>
      </Toast>
    </div>
  );
};

export default FormRegister;
