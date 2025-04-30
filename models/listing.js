const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js")

const listingSchema = new Schema({
    title : {
        type : String,
        required : true,
    },
    description : String,
    image : {
        type : Object,
        default :
        "https://unsplash.com/photos/a-desert-landscape-with-rocks-and-plants-in-the-foreground-yQAuEZ6q2yo",
        set : (v) => 
            v === ""
                ?"https://unsplash.com/photos/a-desert-landscape-with-rocks-and-plants-in-the-foreground-yQAuEZ6q2yo"
                : v,
    },
    price : Number,
    location : String,
    country : String,
    reviews: [  // 1 x many (few) relationship between listing and reviews
        {
        type : Schema.Types.ObjectId,
        ref: Review,
        }
    ],
    owner: {
        type: Schema.Types.ObjectId,
        ref:"User",
    }
});

listingSchema.post("findOneAndDelete", async (listing) => {
    if (listing) {
        await Review.deleteMany({_id: {$in: listing.reviews}})
    }
});

const Listing = new mongoose.model("Listing",listingSchema);
module.exports = Listing;

