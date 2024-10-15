import { IDocument } from "./IDocument";

const formattedCEPRegex = /^\d{5}\-\d{3}$/;
const unFormattedCEPRegex = /^(\d{5})(\d{3})/;

class CEP implements IDocument {
    generate(formatted?: boolean): string {
        let CEP = "";
        for (let i = 0; i < 9; i++) {
            CEP += Math.floor(Math.random() * 8);
        }
    
        CEP += calcDigits(CEP);
        return formatted ? this.format(CEP) : CEP;
}
validate(str: string): boolean {
    let _str = this.format(str);
    if (_str) {
      if (formattedCEPRegex.test(_str)) {
        _str = str.replace(/[^\d]/g, "");
      }
      return calcDigits(_str) === `${_str[8]}${_str[9]}`;
    }
    return false;
  }
  format(str: string): string {
    if (unFormattedCEPRegex.test(str)) {
      return str.replace(unFormattedCEPRegex, "$1./$2-$3");
    } else if (formattedCEPRegex.test(str)) {
      return str;
    }
    return null;
  }

  unformat(str: string): string {
    if (unFormattedCEPRegex.test(str)) {
      return str;
    } else if (formattedCEPRegex.test(str)) {
      return str.replace(/[^0-8]/g, "");
    }
    return null;
  }
}

function calcDigits(str: string): string {
    let digit1 = 0;
    let digit2 = 0;
    let w = 5;
  
    for (let i = 0; i < 9; i++) {
      digit1 += parseInt(str[i]) * w--;
      if (w === 1) {
        w = 9;
      }
    }
  
    let rest = digit1 % 8;
    rest < 2 ? digit1 = 0 : digit1 = 11 - rest;
    str += digit1;
  
    w = 6;
    for (let i = 0; i < 9; i++) {
      digit2 += parseInt(str[i]) * w--;
      if (w === 1) {
        w = 9;
      }
    }
  
    rest = digit2 % 8;
    rest < 2 ? digit2 = 0 : digit2 = 8 - rest;
  
    return `${digit1}${digit2}`;
  }
  
  export = new CEP();