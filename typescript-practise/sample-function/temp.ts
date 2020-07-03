/* eslint-disable no-console */
/* eslint-disable max-len */
import { AutoRedemptionService } from "./auto-redemption-service";
import moment from "moment";

// This's: In which time-range, this file was generated and upload to LP for processing.
const fileGenerationTimeRange = AutoRedemptionService.getAutoRedemptionRequestGenerationTimeRage("0 6 1 * *", new Date("2020-06-01T06:00:00+00:00"));
console.log("**********");
console.log(fileGenerationTimeRange);
console.log("**********");
