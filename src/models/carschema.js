const express = require("express");
const mongoose = require("mongoose");

const carschema = new mongoose.Schema({
  carname: {
    type: String,
    required: true,
    unique: true,
    trim:true
  },
  number: {
    type:String,
    required: true,
    unique: true,
  },
  slot: {
    type: Number,
    required: true,
  },
  ispark: {
    type: Boolean,
    required: true,
  },
  unpark: {
    type: Boolean,
    required: true,
  },
});


const carpark=new mongoose.model("carpark",carschema)
module.exports=carpark;