var XLSX = require('xlsx');
class ExcelUtil {

constructor(sheetName){
    this.workbook = XLSX.readFile(sheetName+'.xlsx');
    this.sheet_name_list = this.workbook.SheetNames;
    this.worksheet=this.workbook.Sheets[this.sheet_name_list[0]];

}

getCellData(celladdress){
    
    var cellData=this.worksheet[celladdress];
    var result=(cellData?cellData.v:undefined);
    return result;
}

}

module.exports = ExcelUtil;