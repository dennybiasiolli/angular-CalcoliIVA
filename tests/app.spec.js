describe('scorporo IVA', function() {
  beforeEach(function() {
    browser.get('http://www.dennybiasiolli.com/angular-CalcoliIVA/CalcoliIVA.html');
  });

  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('Scorporo IVA gratis online, calcolo importo con IVA, IVA applicata e importi da aliquota IVA');
  });

  it('should calculate "Scorporo dell\'IVA"', function() {
    var elem1 = element(by.model('calcoloImponibile.Totale'));
    var elem2 = element(by.model('calcoloImponibile.IVA'));
    elem1.clear();
    elem2.clear();
    elem1.sendKeys('1440');
    elem2.sendKeys('20');
    expect(element(by.model('calcoloImponibile.Imponibile')).getAttribute('value')).toEqual('1200');
    expect(element(by.model('calcoloImponibile.ImportoIVA')).getAttribute('value')).toEqual('240');
  });

  it('should calculate "Importo con IVA"', function() {
    var elem1 = element(by.model('calcoloImportoIvato.Imponibile'));
    var elem2 = element(by.model('calcoloImportoIvato.IVA'));
    elem1.clear();
    elem2.clear();
    elem1.sendKeys('2000');
    elem2.sendKeys('14');
    expect(element(by.model('calcoloImportoIvato.Totale')).getAttribute('value')).toEqual('2280');
    expect(element(by.model('calcoloImportoIvato.ImportoIVA')).getAttribute('value')).toEqual('280');
  });

  it('should calculate "IVA applicata"', function() {
    var elem1 = element(by.model('calcoloIVA.Imponibile'));
    var elem2 = element(by.model('calcoloIVA.Totale'));
    elem1.clear();
    elem2.clear();
    elem1.sendKeys('1234');
    elem2.sendKeys('1279');
    expect(element(by.model('calcoloIVA.ImportoIVA')).getAttribute('value')).toEqual('45');
    expect(element(by.model('calcoloIVA.IVA')).getAttribute('value')).toEqual('4');
  });

  it('should calculate "IVA applicata"', function() {
    var elem1 = element(by.model('calcoloDaIVA.ImportoIVA'));
    var elem2 = element(by.model('calcoloDaIVA.IVA'));
    elem1.clear();
    elem2.clear();
    elem1.sendKeys('36.9');
    elem2.sendKeys('15');
    expect(element(by.model('calcoloDaIVA.Imponibile')).getAttribute('value')).toEqual('246');
    expect(element(by.model('calcoloDaIVA.Totale')).getAttribute('value')).toEqual('282.9');
  });
});
