const express = require("express");
const {
  userOnboarding,
} = require("../../../controllers/onboarding/user.onboarding");
const { getUserProfile } = require("../../../controllers/user-auth/getProfile");
const { uploads } = require("../../../utils/multer");
const verify = require("../../../utils/auth");
const onBoardingRouter = express.Router();
onBoardingRouter.post(
  "/onboarding",
  verify,
  uploads.fields([
    { name: "companyLogo", maxCount: 1 },
    { name: "companySignature", maxCount: 1 },
    { name: "companyStamp", maxCount: 1 },
  ]),
  userOnboarding,
);
onBoardingRouter.get("/profile", verify, getUserProfile);
module.exports = onBoardingRouter;
