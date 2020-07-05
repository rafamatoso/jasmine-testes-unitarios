describe("Testes do objeto jasmine.clock", () => {
  beforeEach(() => {
    jasmine.clock().install();
  });

  afterEach(() => {
    jasmine.clock().uninstall();
  });

  let dobro;

  beforeAll(() => {
    dobro = jasmine.createSpy("dobro");
  });

  it("deve demonstrar o uso com o setTimeout", () => {
    setTimeout(() => {
      dobro(10);
    }, 1000);
    jasmine.clock().tick(1000);
    expect(dobro).toHaveBeenCalled();
  });

  it("deve demonstrar o uso com o setInterval", () => {
    setInterval(() => {
      dobro(2);
    }, 500);
    jasmine.clock().tick(500);
    expect(dobro).toHaveBeenCalled();
  });
});
