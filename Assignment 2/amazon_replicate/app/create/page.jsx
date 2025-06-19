'use client'
import React, { useState } from 'react'
import Navbar from "@/Component/Navbar"
import { useForm } from 'react-hook-form'
import '../page.css'
import { createProduct } from './action'

export default function App() {
  const [prod,setProd]=useState("")
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

    const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("img", data.img);
    formData.append("price", data.price);

    try {
      await createProduct(formData);   // writes to Prisma on the server
      reset();                         // clear the inputs
      alert("Product added successfully!");   // toast/alert of your choice
    } catch (err) {
      console.error(err);
      alert("Something went wrong – check the console.");
    }
  };

  return (
    <div>
      <Navbar />
      <h1 className="heading">Add A Product</h1>
    <div className="Forms">    
      <form className="form-card" onSubmit={handleSubmit(onSubmit)}>
      
    <div className="fields">
      <h3>Product Name</h3>
      <label className="form-label">

        <input
          className="form-input"
          {...register("name", { required: true })}
          placeholder="Cosmetic,Clothing,Food etc."
        />
      </label>
      <br></br>
      <h3>Enter Product Description</h3>
      <label className="form-label">
        <input
          className="form-input"
          {...register("description", { required: true })}
          placeholder="Description"
        />
      </label>
      <br></br>
      <h3>Image URL</h3>
      <label className="form-label">
        <input
          className="form-input"
          {...register("img", {required:true})}
          placeholder="Product Image URL"
        />
        <br></br>
        <h3>Price of the Product</h3>
        <label className="form-label">
        <input
          className="form-input"
          {...register("price",{required:true})}
          placeholder="Price"
        />
      </label>
        
      </label>
        <br></br>
        <div className="submitbutton">
      <button type="submit">
        Add Product
      </button>
      </div>
      </div>
    </form>
    </div>

    </div>
  )
}
