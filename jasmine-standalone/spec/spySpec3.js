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
    spyOn(calculadora, "somar").and.returnValue(10);
    spyOn(calculadora, "subtrair");
  });

  it("deve demonstrar o uso do calls.any", () => {
    pending("desabilitado para testar outros métodos nesta suite");

    calculadora.somar(1, 1);
    expect(calculadora.somar.calls.any()).toBeTruthy();
  });

  it("deve demonstrar o uso do calls.count", () => {
    pending("desabilitado para testar outros métodos nesta suite");

    calculadora.somar(1, 2);
    calculadora.somar(2, 2);
    // calls.count se assemelha ao toHaveBeenCalled
    expect(calculadora.somar.calls.count()).toEqual(2);
  });

  it("deve demonstrar o uso do calls.argsFor", () => {
    pending("desabilitado para testar outros métodos nesta suite");

    calculadora.somar(1, 2);
    calculadora.somar(3, 1);
    expect(calculadora.somar.calls.argsFor(0)).toEqual([1, 2]);
    expect(calculadora.somar.calls.argsFor(1)).toEqual([3, 1]);
  });

  it("deve demonstrar o uso do calls.allArgs", () => {
    pending("desabilitado para testar outros métodos nesta suite");

    calculadora.somar(0, 1);
    calculadora.somar(5, 2);
    expect(calculadora.somar.calls.allArgs()).toEqual([
      [0, 1],
      [5, 2],
    ]);
  });

  it("deve demonstrar o uso do calls.all", () => {
    pending("desabilitado para testar outros métodos nesta suite");

    calculadora.somar(1, 2);
    calculadora.somar(3, 1);

    let retorno = calculadora.somar.calls.all();

    expect(retorno[1].object).toEqual(calculadora);
    expect(retorno[1].args).toEqual([3, 1]);
    expect(retorno[1].returnValue).toEqual(10);
  });

  it("deve demonstrar o uso do calls.mostRecent", () => {
    pending("desabilitado para testar outros métodos nesta suite");

    calculadora.somar(0, 2);
    calculadora.somar(4, 1);

    let retorno = calculadora.somar.calls.mostRecent();

    expect(retorno.object).toEqual(calculadora);
    expect(retorno.args).toEqual([4, 1]);
    expect(retorno.returnValue).toEqual(10);
  });

  it("deve demonstrar o uso do calls.first", () => {
    calculadora.somar(0, 0);
    calculadora.somar(8, 3);

    let retorno = calculadora.somar.calls.first();

    expect(retorno.object).toEqual(calculadora);
    expect(retorno.args).toEqual([0, 0]);
    expect(retorno.returnValue).toEqual(10);
  });
});
