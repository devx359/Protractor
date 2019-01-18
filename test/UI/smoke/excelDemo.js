var ExcelUt= require('../../utilities/ExcelUtil.js');
var excel = new ExcelUt('./resources/data/testdata');

console.log(excel.getCellData('A1'));
