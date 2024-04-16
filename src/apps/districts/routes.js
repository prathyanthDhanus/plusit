const express = require("express");
const router = express.Router();
const trycatch = require("../../utils/tryCatch");
const district = require("../districts/controller")
router
    .post("/districts",trycatch(district.addDistrict))
    .put("/districts/:districtId",trycatch(district.editDistrict))
    .delete("/districts/:districtId",trycatch(district.deleteDistrict))

    .post("/districts",trycatch(district. addConstituency_Assembly))
    .delete("/districts/:districtId",trycatch(district.deditConstituency_Assembly))







    module.exports = router;