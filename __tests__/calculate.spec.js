const calculateParkingFee = require("../src/calculate");

// const date = new Date();
// date.setDate(date.getDate() - 1);
// date.setHours(date.getHours() + 1);

// console.log(calculateParkingFee(-1, date));

describe("Calculate Parking Fee in 3 day", () => {
  const date = new Date();
  date.setDate(date.getDate() - 2);
  test("fee gửi xe với width < 0", () => {
    expect(calculateParkingFee(-1, date)).toEqual(0);
  });
  test("fee gửi xe với 2 > width > 0", () => {
    expect(calculateParkingFee(1.4, date)).toEqual(6);
  });
  test("fee gửi xe với width >= 0", () => {
    expect(calculateParkingFee(2, date)).toEqual(30);
  });
});

describe("Calculate Parking Fee in 2 hours", () => {
  const date = new Date();
  // date.setDate(date.getDate() - 2);
  date.getHours(date.getDate() - 2);
  test("fee gửi xe với width < 0", () => {
    expect(calculateParkingFee(-1, date)).toEqual(0);
  });
  test("fee gửi xe với 2 > width > 0", () => {
    expect(calculateParkingFee(1.4, date)).toEqual(2);
  });
  test("fee gửi xe với width >= 0", () => {
    expect(calculateParkingFee(2.3, date)).toEqual(10);
  });
});

describe("Calculate Parking Fee in 3 days 2 minutes", () => {
  const date = new Date();
  date.setDate(date.getDate() - 3);
  date.setMinutes(date.getMinutes() - 2);
  test("fee gửi xe với width < 0", () => {
    expect(calculateParkingFee(-1, date)).toEqual(0);
  });
  test("fee gửi xe với 2 > width > 0", () => {
    expect(calculateParkingFee(1.4, date)).toEqual(8);
  });
  test("fee gửi xe với width >= 0", () => {
    expect(calculateParkingFee(2.3, date)).toEqual(40);
  });
});