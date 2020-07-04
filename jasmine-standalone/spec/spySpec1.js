describe("Testes do objeto Spy", () => {
  let calculadora = {
    somar: (n1, n2) => {
      return n1 + n2;
    },

    subtrair: (n1, n2) => {
      return n1 - n2;
    },
  };

  beforeAll(() => {
    // Cria um objeto spy de calculadora e um spy do método do objeto
    spyOn(calculadora, "somar").and.callThrough();
    spyOn(calculadora, "subtrair");
  });

  /* caso o objeto spy não seja instanciado, o expect testaria
  a instância do objeto definido no início da suite */
  //   xit("deve possuir o método somar como não definido", () => {
  //     expect(calculadora.somar(1, 1)).toBeUndefined();
  //   });

  //   it("método somar não foi chamado", () => {
  //     expect(calculadora.somar).not.toHaveBeenCalled();
  //   });

  //   it("deve chamar o método somar ao menos uma vez", () => {
  //     calculadora.somar(1, 1);
  //     expect(calculadora.somar).toHaveBeenCalled();
  //   });

  //   it("deve chamar o método somar três vezes (agrega a chamada do teste anterior)", () => {
  //     calculadora.somar(1, 1);
  //     calculadora.somar(1, 2);
  //     expect(calculadora.somar).toHaveBeenCalledTimes(3);
  //   });

  //   it("deve chamar com os parâmetros validados", () => {
  //     calculadora.somar(1, 1);
  //     calculadora.somar(1, 2);
  //     expect(calculadora.somar).toHaveBeenCalledWith(1, 1);
  //     expect(calculadora.somar).toHaveBeenCalledWith(1, 2);
  //   });

  it("deve executar o método somar original e executar o método subtrair do spy", () => {
    expect(calculadora.somar(1, 1)).toEqual(2);
    expect(calculadora.subtrair(2, 1)).toBeUndefined();
  });
});
