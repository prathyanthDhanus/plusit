// const districtSchema = require("./models/districtSchema");
const {
  addDistrictDb,
  editDistrictDb,
  deleteDistrictDb,
  addConstituency_AssemblyDb,
  editConstituency_AssemblyDb,
} = require("./services/db");

module.exports = {
  //add district
  addDistrict: async (req, res) => {
    const { districtName } = req.body;
    const districtData = await addDistrictDb(districtName);

    return res.status(200).json({
      status: "success",
      message: "District created successfully",
      data: districtData,
    });
  },

  //edit district
  editDistrict: async (req, res) => {
    const { districtId } = req.params;
    const data = req.body;
    const districtData = await editDistrictDb(districtId, data);

    return res.status(200).json({
      status: "success",
      message: "District updated successfully",
      data: districtData,
    });
  },

  //delete district
  deleteDistrict: async (req, res) => {
    const { districtId } = req.params;
    const districtData = await deleteDistrictDb(districtId);

    return res.status(200).json({
      status: "success",
      message: "District Deleted successfully",
      data: districtData,
    });
  },

  //addConstituency_Assembly
  addConstituency_Assembly: async (req, res) => {
    const { districtId } = req.body;
    const { constituency, assembly } = req.query;
    const districtData = await addConstituency_AssemblyDb(
      districtId,
      constituency,
      assembly
    );

    return res.status(200).json({
      status: "success",
      message: "constituency/assembly added successfully",
      data: districtData,
    });
  },

  //edit addConstituency_Assembly
  editConstituency_Assembly: async (req, res) => {
    const { districtId, constituency, assembly } = req.body;
    const districtData = await editConstituency_AssemblyDb(
      districtId,
      constituency,
      assembly
    );

    return res.status(200).json({
      status: "success",
      message: "constituency/assembly added successfully",
      data: districtData,
    });
  },

};
