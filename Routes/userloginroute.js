const Router = require("express")

const router = Router()

const { userloginget, userlogingetbyid, userlogininsert, userloginupdate, userlogindelete }= require("../Controllers/userlogincontroller")


router.get("/userloginget", userloginget);
router.get("//userlogingetbyid/:id", userlogingetbyid );
router.post("/userlogininsert", userlogininsert);
router.post("/userloginupdate/:id", userloginupdate);
router.post("/userlogindelete/:id", userlogindelete);

module.exports = router;