describe("Suite externa", () => {
  let contadorExterno = 0;

  beforeEach(() => {
    contadorExterno++;
  });

  it("deve conter 1 para contadorExterno", () => {
    expect(contadorExterno).toEqual(1);
  });

  describe("Suite interna", () => {
    let contadorInterno = 0;

    beforeEach(() => {
      contadorInterno++;
    });

    it("deve validar os valores dos contadores", () => {
      expect(contadorInterno).toEqual(1);
      expect(contadorExterno).toEqual(2);
    });
  });
});
