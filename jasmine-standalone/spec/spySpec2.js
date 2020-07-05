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
    // spyOn(calculadora, "somar").and.returnValue(10);
    // spyOn(calculadora, "somar").and.returnValues(1, 5);

    // Para testar o and.callFake, transformaremos o retorno do método fake somar numa subtração
    spyOn(calculadora, "somar").and.callFake((n1, n2) => {
      return n1 - n2;
    });

    spyOn(calculadora, "subtrair").and.throwError("erro");
  });

  it("deve retornar 10 para o método somar", () => {
    pending("desabilitado para testar outros métodos nesta suite");
    expect(calculadora.somar(1, 2)).toEqual(1);
  });

  it("deve retornar valores distintos para cada chamada do método somar", () => {
    pending("desabilitado para testar outros métodos nesta suite");
    expect(calculadora.somar(3, 4)).toEqual(1);
    expect(calculadora.somar(1, 2)).toEqual(5);
    expect(calculadora.somar(4, 4)).toBeUndefined();
  });

  it("deve transformar o método somar numa subtração do callFake", () => {
    expect(calculadora.somar(5, 2)).toEqual(3);
  });

  it("deve lançar um erro ao chamar o método subtrair", () => {
    expect(() => calculadora.subtrair(1, 1)).toThrowError("erro");
  });
});
