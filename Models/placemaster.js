const mongoose = require("mongoose");
const { Schema } = mongoose;

const placemasterSchema = new Schema({
  place_id: { type: String },
  city: { type: mongoose.Schema.Types.ObjectId, ref: 'city_master' },
  category_name: { type: mongoose.Schema.Types.ObjectId, ref: 'category_master' },
  title: { type: String },
  description: { type: String },
  upload_images: { type: [String] },
  location: { type: String },
  timing: { type: String },
  website_url: { type: String },
  youtube_url: { type: String },
  Distance: { type: String },
  Things_to_Do: { type: String },
  best_time_to_visit: { type: String},
  review:[
    {
      user_login_id: { type: mongoose.Schema.Types.ObjectId, ref: 'user_login' }, // Reference to user_login schema
      rating: { type: Number, min: 1, max: 5 },
      comment: { type: String },
    }
  ]

});

module.exports = mongoose.model("place_master", placemasterSchema);
