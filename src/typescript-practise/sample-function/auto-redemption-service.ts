/* eslint-disable no-console */
import cronParser from "cron-parser";
import moment from "moment";

const AUTO_REDEMPTION_PREFIX = "PPHTP_AutoRedemption_";

/**
 * This's to get the time-range, that system used to query the expired healthpoints, to generate the request-file.
 *
 * @uploadCronExpression The cron-expression of the upload auto-redemption request job.
 * @requestGeneratedAt The timestamp that actually generated the auto-redemption request-file. It must be
 * after the target-iteration.
 *
 * For example, if the `Target-iteration` is between 2020-05-01T06:00:00 ~ 2020-06-01T06:00:00, then
 * the `requestGeneratedAt` must be after "2020-06-01T06:00:00", could be 2020-06-01T01:30:00.
 *
 * And according to requirement, just despite the target-iteration time-range, we will just return
 * the target-iteration month's start to end time-range.
 * */

export interface TimeRange {
  from: Date | null;
  until: Date | null;
}

const getAutoRedemptionRequestGenerationTimeRage = (
  uploadCronExpression: string, requestGeneratedAt: Date
): TimeRange => {
  // [Why use 1 seconds future date?]: to make sure that we just get the correct previous iteration.
  // Otherwise, there'll be bug is Date.now() is right on the scheduled seconds. EG.: "2020-07-01T06:00:00+08:00"

  console.log("requestGeneratedAt");
  console.log(requestGeneratedAt);

  console.log("moment(requestGeneratedAt)");
  console.log(moment().startOf("second").add(1, "second").toDate());
  
  
  const cronDates = cronParser.parseExpression(uploadCronExpression, {
    currentDate: moment(requestGeneratedAt).startOf("second").add(1, "second").toDate()
  }).iterate(-2);
  // console.log(cronDates);
  // console.log(cronDates[0]);
  // console.log(cronDates[1]);
  const expireRangeStartAt = cronDates[1].toDate();
  const expireRangeEndAt = cronDates[0].toDate();
  console.log("expireRangeStartAt");
  console.log(expireRangeStartAt);
  console.log("expireRangeEndAt");
  console.log(expireRangeEndAt);
  
  const isGeneratedWithInCurrentIterationButInNextMonth =
    moment(requestGeneratedAt).month() > moment(expireRangeEndAt).month();
  console.log("isGeneratedWithInCurrentIterationButInNextMonth")
  console.log(isGeneratedWithInCurrentIterationButInNextMonth)
  const baselineTimestamp = isGeneratedWithInCurrentIterationButInNextMonth
    ? moment(expireRangeStartAt)
    : moment(requestGeneratedAt).add(-1, "month");
  return {
    from: baselineTimestamp.startOf("month").toDate(),
    until: baselineTimestamp.endOf("month").startOf("second").add(1, "second").toDate()
  };
};



export const AutoRedemptionService = {
  getAutoRedemptionRequestGenerationTimeRage,
};
