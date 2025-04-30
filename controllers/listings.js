const Listing = require("../models/listing.js");


module.exports.index = async (req,res)=>{
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
}

module.exports.renderNewForm = async (req,res)=>{
    res.render("listings/new.ejs");
}

module.exports.showListing = async (req,res)=>{
    let { id } = req.params;
    const listing = await Listing.findById(id)
    .populate({
        path: "reviews",
        populate: {
            path:"author",
        }
    })
    .populate("owner");
    if (!listing) {
        req.flash("success", "Listing you requested for does not exist");
        res.redirect("/listings");
    }
    res.render("listings/show.ejs",{ listing });
}

module.exports.createListing = async(req,res,next)=>{
    const newlisting = new Listing(req.body.listing);
    newlisting.owner = req.user._id;
    await newlisting.save();
    req.flash("success","New Listing Created");// flash msg
    res.redirect("/listings");

}

module.exports.renderEditForm = async(req,res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
        req.flash("error","Listing you requested for does not exist");
        return res.redirect("/listings");//return is used to avoid sending mutltiple response
    }
    res.render("listings/edit.ejs", {listing});
}

module.exports.updateListing = async (req, res) => {
    if(!req.body.listing) {
        throw new ExpressError(400, "Send Valid Data for Listing")
    }
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id , {...req.body.listing});
    req.flash("success","List Updated Successfully");
    res.redirect(`/listings/${id}`);
}

module.exports.destroyListing = async(req, res)=>{
    const {id} = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success","List deleted Successfully");
    res.redirect("/listings");
}