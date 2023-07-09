"use client";
import { ErrorMessage } from "formik";
import React, { useState } from "react";

function TextFormField({
  label,
  name,
  type,
  onChange,
  disabled = false,
  placeholder,
  value,
  errorMessage,
  onBlur,
}) {
  return (
    <>
      <div className="flex flex-col">
        <label>{label}</label>
        <input
          name={name}
          type={type}
          disabled={disabled}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className="mt-1 px-4 py-2 rounded-xl caret-blue-500 focus:outline-blue-500 disabled:bg-slate-50 disabled:border-slate-200 disabled:text-slate-200 disabled:hover:cursor-not-allowed"
        />
      </div>
      <h2>{errorMessage}</h2>
    </>
  );
}

export default TextFormField;
