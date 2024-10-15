import CEL from "../lib/CEL";

describe("CEL", () => {
    test("Testa CEL valido", () => {
        expect(CEL.validate("(91)98282-8282"));
      });
      
    
      test("Testa retirada da máscara de uma string fora do formato de CEL", () => {
        expect(CEL.unformat("(91)98282-8282")).toBe(null);
      })
    });