const FishingController = require("../contollers/controller")
module.exports = (app)=>{

    app.get("/api/fish",FishingController.findall)
    app.post("/api/new",FishingController.createdFishing)
    app.get("/api/fish/:id",FishingController.findOne)
    app.put("/api/fish/:id",FishingController.update)
    app.delete("/api/fish/:id",FishingController.deletePost)
}