import CEP from "../lib/CEP";

describe("CEP", () => {
    test("Testa CEP valido", () => {
        expect(CEP.validate("68745-435"));
      });
    
      test("Testa CEP inválido", () => {
        expect(CEP.validate("13171-779")).toBeFalsy();
      });
    
      test("Testa CEP inválido quanto todos números estão iguais", () => {
        expect(CEP.validate("11111-111")).toBeFalsy();
      })
    
      test("Gera CEP valido", () => {
        expect(CEP.validate(CEP.generate()));
      });
    
      test("Gera CEP formatado", () => {
        expect(/^(\d{5})(\d{3})/.test(CEP.generate(true)));
      });
    
      test("Gera CEP não formatado", () => {
        expect(/^\d{8}/.test(CEP.generate()));
      });
    
      test("Retira a pontuação de CEP formatado", () => {
        expect(CEP.unformat("14447-735")).toBe("14447735");
      });
    
      test("Testa retirada da máscara de uma string fora do formato de CEP", () => {
        expect(CEP.unformat("44777-7356")).toBe(null);
      })
    });