describe("Testes do objeto jasmine.createSpyObj", () => {
  let calculadora;

  beforeAll(() => {
    calculadora = jasmine.createSpyObj("calculadora", ["somar", "subtrair"]);

    calculadora.somar.and.returnValue(5);
  });

  it("deve demonstrar o uso do jasmine.createSpyObj", () => {
    let retorno = calculadora.somar(1, 2);

    expect(calculadora.somar).toHaveBeenCalled();
    expect(calculadora.somar).toHaveBeenCalledWith(1, 2);
    expect(retorno).toEqual(5);
  });
});
