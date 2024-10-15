# projetoNOde2

LIB CEP

const cep = require('js-format-cep);
console.log(cpf.formatCEP("68743232"))

Output:
68.743-232

import { formatCEP } from 'js-format-cep'
console.log(formatCEP("68743232"))

Output:
68.743-232


LIB CPF
import * as dochelper from "dochelper";

console.log(dochelper.CPF.validate('761.777.600-05')); 
console.log(dochelper.CPF.generate()); 
console.log(dochelper.CPF.format('76177760005')); 
console.log(dochelper.CPF.unformat('761.777.600-05')); 

LIB CNPJ

console.log(dochelper.CPF.validate('20.777.600/0001-05')); 
console.log(dochelper.CPF.generate()); 
console.log(dochelper.CPF.format('20777600000105')); 
console.log(dochelper.CPF.unformat('20.777.600/0001-05')); 