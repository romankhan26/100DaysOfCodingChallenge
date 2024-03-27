"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*Question 50: Multiline Template Literals: Use template literals to create a multiline
string that describes your ideal day. Include at least three different activities.

Explain & TIP: Template literals support multiline strings, making it easier to create
 readable text blocks that incorporate variables and expressions.*/
const chalk_1 = __importDefault(require("chalk"));
let myIdealDay = `My ideal day would involve:
 1. Wake up early , start my day with prayer and recitation of Quran.
 2. Learning atleast 5 chapters of a subject and giving 5 to 6 hours to study.
 3. Giving 4 to 5 hours to coding
 4. Offering all the obligatory prayers on time
 5. Giving time to family members.`;
console.log(chalk_1.default.yellow.bgBlue.bold.italic(myIdealDay));
