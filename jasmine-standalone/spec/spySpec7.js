describe("Testes do objeto jasmine.any", () => {
  let dobro;

  beforeAll(() => {
    dobro = jasmine.createSpy("dobro");
  });

  it("deve demonstrar o uso do jasmine.any", () => {
    dobro(10);

    expect(dobro).toHaveBeenCalledWith(jasmine.any(Number));
  });
});

describe("Testes do objeto jasmine.anything", () => {
  let dobro;

  beforeAll(() => {
    dobro = jasmine.createSpy("dobro");
  });

  it("deve demonstrar o uso do jasmine.anything", () => {
    dobro(10);

    // interessa saber se o valor passado é diferente de null ou undefined
    expect(dobro).toHaveBeenCalledWith(jasmine.anything());

    expect({}).toEqual(jasmine.anything());
  });
});

describe("Testes do objeto jasmine.objectContaining", () => {
  let carro;

  beforeAll(() => {
    carro = { ano: 2017 };
  });

  it("deve demonstrar o uso do jasmine.objectContaining", () => {
    expect(carro).toEqual(jasmine.objectContaining({ ano: 2017 }));
    expect(carro).not.toEqual(jasmine.objectContaining({ ano: 2016 }));
  });
});
