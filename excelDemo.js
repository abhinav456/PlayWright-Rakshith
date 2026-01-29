const excelJs = require('exceljs');

async function excelData(){
const workbook  = await new excelJs.Workbook();
await workbook.xlsx.readFile("C:/Users/user/Downloads/file_example_XLS_10 (1).xlsx");
const worksheet  = workbook.getWorksheet('Sheet1');
worksheet.eachRow((row,rowNumber)=>{
    row.eachCell((cell, colValue)=>{
     
        if(cell.value=="Dulce"){
           console.log(colValue);
           console.log(rowNumber);
        }
    
    })
})
}excelData();
