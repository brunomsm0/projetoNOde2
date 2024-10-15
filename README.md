# projetoNOde2
import * as dochelper from "dochelper";


LIB CEP

console.log(CEP.validate("68743-232"));
console.log(CEP.format("68743232"));

LIB CPF

console.log(dochelper.CPF.validate('761.777.600-05')); 
console.log(dochelper.CPF.generate()); 
console.log(dochelper.CPF.format('76177760005')); 
console.log(dochelper.CPF.unformat('761.777.600-05')); 

LIB CNPJ

console.log(dochelper.CPF.validate('20.777.600/0001-05')); 
console.log(dochelper.CPF.generate()); 
console.log(dochelper.CPF.format('20777600000105')); 
console.log(dochelper.CPF.unformat('20.777.600/0001-05')); 