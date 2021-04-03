import moment, { Moment } from 'moment';
import yaml from 'js-yaml';
import fs from 'fs';
import { v4 } from "uuid";

// let temp1 = moment(new Date()).format();
// let temp2 = moment(temp1).add(1, "month").startOf("month").format()
// let currentTime: Moment;
// let sourceTimestamp: string;
// let expireTimestamp: string;
// let healthPoints = [];
// let tempHealthPoints: number = 50;

// const healthPointsRawData = yaml.safeLoad(
//   fs.readFileSync(`./health-points-temp.yml`, 'utf8')
// );

// // console.log(healthPointsRawData);
// currentTime = moment(new Date());
// // console.log(sourceTimestamp1);
// for (let month = 0; month < 7; month++) {
//   currentTime = moment(new Date());
//   currentTime = currentTime.add(month, "month");
//   for (let day = 0; day < 2; day++) {
//     currentTime = currentTime.add(day, "day");
//     sourceTimestamp = currentTime.format();
//     expireTimestamp = moment(new Date(sourceTimestamp))
//       .add(7, "month")
//       .startOf("month")
//       .format();

//     healthPoints.push({
//       userId: '7faf23e1-a93e-4765-9202-2838b9acbd11',
//       origin: 'h365',
//       sourceId: v4(),
//       healthPoints: 50,
//       reason: 'health point from H365 Manual Testing',
//       status: 'credited',
//       remainingPoints: 50,
//       createdAt: sourceTimestamp,
//       updatedAt: sourceTimestamp,
//       sourceTimestamp: sourceTimestamp,
//       expiresAt: expireTimestamp,
//       remainingHealthPoint: tempHealthPoints
//     });
//     tempHealthPoints += 50;
//   }
// }

// console.log("healthPoints");
// console.log(healthPoints);

// const startTimestamp = moment("2019-12-01T08:00:00+08:00").subtract(89, "days").startOf("day").format("YYYY-MM-DDTHH:mm:ssZ");

let currentTime = moment("2019-12-01T08:00:00+08:00");
let expiresAtTime = currentTime.clone().add(7, "month").startOf("month").toDate();
// console.log(currentTime.clone().add(7,"month").toDate());
console.log(currentTime.toDate());
console.log(expiresAtTime);
