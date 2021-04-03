wimport cronParser from "cron-parser";
import moment from "moment";

export interface TimeRange {
  from: Date | null;
  until: Date | null;
}
const getRedemptionReconciliationTimeRage = (
  cronExpression: string, requestGeneratedAt: Date
): TimeRange => {
  const cronDates = cronParser.parseExpression(cronExpression, {
    currentDate: moment(requestGeneratedAt).startOf("second").add(1, "second").toDate()
  }).iterate(-2);
  const expireRangeStartAt = cronDates[1].toDate();
  const expireRangeEndAt = cronDates[0].toDate();
  return {
    from: expireRangeStartAt,
    until: expireRangeEndAt
  };
};

const cronExpression = "0 2 * * *"; // every day 2am

console.log("should return correct range, if it's iteration-start");

const current = "2020-06-29T09:30:00.000+08:00";

const result = getRedemptionReconciliationTimeRage(
  cronExpression, new Date(current)
);
console.log("new Date(current)");
console.log(new Date(current));
console.log("result.from")
console.log(result.from)
console.log("result.until")
console.log(result.until)