import catchAsyncError from "../../../../helpers/catchAsyncError.js";
import utility from "../../../../utils/utility.js";

const getLocationInfoFromIp = catchAsyncError(async (req, res, next) => {
    const ip = utility.getIp(req);

    const locationInfo = await utility.getLocationDetailsFromIp(ip);

    const xForwardedFor = req.headers["x-forwarded-for"];
    const remoteAddress = req.socket.remoteAddress;

    res.status(201).json({
        success: true,
        ip,
        xForwardedFor,
        remoteAddress,
        locationInfo,
    });
});

export default getLocationInfoFromIp;
