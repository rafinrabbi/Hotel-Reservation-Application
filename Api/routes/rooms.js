import express from "express"

const router = express.Router();

router.get("/", (req, res)=> {
    res.send("endpoint of Auth")
})

export default router