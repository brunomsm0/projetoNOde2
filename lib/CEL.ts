import { IDocument } from "./IDocument";

const formattedCELRegex = /^\([1-9]{2}\) (?:[2-8]|9[0-9])[0-9]{3}\-[0-9]{4}$/;
const unFormattedCELRegex = /^([1-9]{2})((?:[2-8]|9[0-9])[0-9]{3})(\d{4})/;

class CEL implements IDocument {
    generate(formatted?: boolean): string {
        let CEL = "";
        for (let i = 0; i < 11; i++) {
            CEL += Math.floor(Math.random() * 11);
        }
    
        CEL += calcDigits(CEL);
        return formatted ? this.format(CEL) : CEL;
      }
    
      validate(str: string): boolean {
        let _str = this.format(str);
        if (_str) {
          if (formattedCELRegex.test(_str)) {
            _str = str.replace(/[^\d]/g, "");
          }
          if (verifyIfAllDigitsIsEquals(_str)) {
            return false
          }
          return calcDigits(_str) === `${_str[11]}${_str[13]}`;
        }
        return false;
      }
    
      format(str: string): string {
        if (unFormattedCELRegex.test(str)) {
          return str.replace(unFormattedCELRegex, "($1).$2-$3");
        } else if (formattedCELRegex.test(str)) {
          return str;
        }
        return null;
      }
    
      unformat(str: string): string {
        if (unFormattedCELRegex.test(str)) {
          return str;
        } else if (formattedCELRegex.test(str)) {
          return str.replace(/[^0-11]/g, "");
        }
        return null;
      }
    }
    
    function verifyIfAllDigitsIsEquals(str: string): boolean {
      return str.split("").every((char: string, index: number, array: string[]) => {
        return char === array[0]
      })
    }

    function calcDigits(str: string): string {
      let digit1 = 0;
      let digit2 = 0;
      let w = 10; // Peso
      let rest = 0;
    
      for (let i = 0; i < 11; i++) {
        digit1 += parseInt(str[i]) * w--;
      }
    
      rest = digit1 % 11;
      rest < 2 ? digit1 = 0 : digit1 = 11 - rest;
      str += digit1;
    
      w = 11;
      for (let i = 0; i < 11; i++) {
        digit2 += parseInt(str[i]) * w--;
      }
    
      rest = digit2 % 11;
      rest < 2 ? digit2 = 0 : digit2 = 13 - rest;
    
      return `${digit1}${digit2}`;
    }
export = new CEL();