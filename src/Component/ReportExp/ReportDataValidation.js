   export const ReportDataValidation = {
    numberDataValid : {
        type : 'decimal',
        showErrorMessage: true,
        error : 'The value for this column must be number',
    },

    dateDataValid : {
        type : 'date',
        showErrorMessage: true,  
        error : 'the value for this cell must be Date',
    }
   }
   
   
   
//    export const dataValidationNumber = {
//       type: 'decimal',
//       showErrorMessage: true,
//       showInputMessage: true,
//       error : 'The value for this column must be number',
//       promptTitle: 'Decimal',
//       prompt : 'The value for this column must be number'
//     }
//     export const dataValidationDate = {
//       type: 'date',
//       showErrorMessage: true,  
//       showInputMessage: true,
//       error : 'the value for this cell must be Date',
//       promptTitle: 'Decimal',
//       prompt :'the value for this cell must be Date'
//       }

//       export const dataValidationNumRange = {
//         type: 'decimal',
//         operator: 'between',
//         allowBlank: true,
//         showErrorMessage: true,  
//         showInputMessage: true,
//         formulae: [1.5, 7],
//         promptTitle: 'Decimal',
//         prompt: 'The value must between 1.5 and 7',
//         error : 'the value for this cell must be number',
//       };

//       export const dataValidationTextRang = {
//         type: 'textLength',
//         operator: 'lessThan',
//         showErrorMessage: true,
//         allowBlank: true,
//         formulae: [15]
//       };

//       export const dataValidationDateRange = {
//         type: 'date',
//         operator: 'lessThan',
//         showErrorMessage: true,
//         allowBlank: true,
//         formulae: [new Date(2016,0,1)]
//       };