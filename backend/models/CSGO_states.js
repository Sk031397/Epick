import mongoose, { Schema } from "mongoose";

const CSGOKPI_states = new Schema({
    "id": {
      "type": "String"
    },
    "title": {
      "nameShortened": {
        "type": "String"
      }
    },
    "format": {
      "type": "String"
    },
    "started": {
      "type": "Boolean"
    },
    "startedAt": {
      "type": "Date"
    },
    "finished": {
      "type": "Boolean"
    },
    "valid": {
      "type": "Boolean"
    },
    "teams": {
      "type": [
        "Mixed"
      ]
    },
    "games": {
      "type": [
        "Mixed"
      ]
    },
    "draftActions": {
      "type": "Array"
    }
  });
const CSGOKPI_Schema = mongoose.model("CSGOKPI_states",CSGOKPI_states);
export default CSGOKPI_Schema;