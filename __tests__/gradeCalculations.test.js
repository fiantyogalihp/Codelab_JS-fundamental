// import { detectTriangle, validateNumberInput } from "../try_catch.js";

const { averageExams, isStudentPassExam } = require("../gradeCalculations");

describe("grade calculations", () => {
  test("it should return exact average", () => {
    const listValueOfExams = [80, 100, 100, 80];
    expect(averageExams(listValueOfExams)).toEqual(90);
  });

  /**
   // *  Integration testing
   */
  test("it should return exam passed status", () => {
    const listValueOfExams = [80, 100, 100, 80];
    expect(isStudentPassExam(listValueOfExams, "Budi")).toEqual(true);
  });

  test("it should return exam failed status", () => {
    const listValueOfExams = [50, 40, 70, 80];
    expect(isStudentPassExam(listValueOfExams, "Budi")).toEqual(false);
  });
});

// * untuk melakukan grouping menggunakan 'describe'
// describe("mendeteksi algoritma segitiga", () => {
//   test("fungsi validasi input number harus menghasilkan output number", () => {
//     expect(validateNumberInput()).toEqual(Number);
//   });

//   test("fungsi deteksi segitiga harus menghasilkan output string", () => {
//     expect(detectTriangle()).toEqual(String);
//   });
// });
