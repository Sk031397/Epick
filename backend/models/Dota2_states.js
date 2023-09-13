import mongoose,{ Schema } from "mongoose";

const DOTA2_states = new Schema({
        "id": {
          "type": "String"
        },
        "title": {
          "nameShortened": {
            "type": "String"
          }
        },
        "format": {
          "type": "Date"
        },
        "started": {
          "type": "Boolean"
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
const Dota2_Schema = mongoose.model("Dota2_states",DOTA2_states);
export default Dota2_Schema;