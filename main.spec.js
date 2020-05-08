describe('main.js', function() {
  describe('calculate()', function() {

    it('validates expression when the first number is invalid', function(){
    spyOn(window, 'updateResult').and.stub();
    calculate('a + 3');
    expect(window.updateResult).toHaveBeenCalled();
    expect(window.updateResult).toHaveBeenCalledWith('Operation not recognized!');
    });

    it('validates expression when the second number is invalid', function(){
    spyOn(window, 'updateResult').and.stub();
    calculate('3 + a');
    expect(window.updateResult).toHaveBeenCalled();
    expect(window.updateResult).toHaveBeenCalledWith('Operation not recognized!');
    });

    it('validates expression when operation is invalid', function(){
    spyOn(window, 'updateResult').and.stub();
    calculate('3_4');
    expect(window.updateResult).toHaveBeenCalled();
    expect(window.updateResult).toHaveBeenCalledWith('Operation not recognized!');
    expect(window.updateResult).toHaveBeenCalledTimes(1);
    });

    // for Spy methods - it was not interesting for me
    xit('calls add');
    xit('calls subtract');
    xit('calls multiply');
    xit('calls divide');
    xit('validates operatiton');
    xit('calls updateResult');

  });

  describe('updateResult()', function () {
    let element;
    // paste 5 on page
    beforeAll(function() {
      // executed once before all specs
      const element = document.createElement('div');
      element.setAttribute('id', 'result');
      document.body.appendChild(element);
      this.element = element;
    });
      // delete 5 after all
      afterAll(function() {
        element = document.getElementById('result');
        document.body.removeChild(this.element);
      });

    it('adds result to DOM element', function() {
      updateResult('5');
      expect(this.element.innerText).toBe('5');
    });
  });
});
