const districtSchema = require("../models/districtSchema");
const AppError = require("../../../utils/appError");

module.exports = {

  addDistrictDb: async (districtName) => {
    const findDistrict = await districtSchema.findOne({ districtName });

    if (findDistrict) {
      throw new AppError(
        "Field validation error:District already exist",
        "District already exist",
        409
      );
    }
    const districtData = new districtSchema({ districtName: districtName });
    await districtData.save();
    return districtData;
  },

  editDistrictDb: async (districtId, data) => {
    const findDistrict = await districtSchema.findByIdAndUpdate(
      districtId,
      data,
      { new: true }
    );
    if (!findDistrict) {
      throw new AppError(
        "Field validation error:Something went wrong",
        "Something went wrong",
        500
      );
    }
    return findDistrict;
  },

  deleteDistrictDb: async (districtId) => {
    const findDistrict = await districtSchema.findByIdAndDelete(districtId);

    if (!findDistrict) {
      throw new AppError(
        "Field validation error:District not exist",
        "District not exist",
        404
      );
    }
    return findDistrict;
  },

  addConstituency_AssemblyDb: async (districtId, constituency, assembly) => {
    const findDistrict = await districtSchema.findById(districtId);
    if (!findDistrict) {
      throw new AppError(
        "Field validation error:District not exist",
        "District not exist",
        404
      );
    }
    if (constituency) {
        findDistrict.constituency = constituency;
    }

    if (assembly) {
        findDistrict.assembly = assembly;
    }

    await findDistrict.save();

    return findDistrict;
  },
  EditConstituency_AssemblyDb : ()=>{

  },

  editConstituency_AssemblyDb : async(districtId, constituency, assembly)=>{
    const findDistrict = await districtSchema.findById(districtId);
    if (!findDistrict) {
        throw new AppError(
          "Field validation error:District not exist",
          "District not exist",
          404
        );
      }
      if (constituency) {
        findDistrict.constituency = constituency;
    } else if (assembly) {
        findDistrict.assembly = assembly;
    } else {
       
        throw new AppError(
            "Field validation error: Either constituency or assembly data must be provided.",
            "Invalid data",
            400
        );
    }
    await findDistrict.save();

    return findDistrict;
  }
};
