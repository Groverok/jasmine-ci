describe('calculator.js', function() {
  describe('Calculator', function() {
    let calculator;
    let calculator2;

    beforeEach(function() {
      // execute for ebery spec (it block) inside the describe
      calculator = new Calculator();   // create an instance of Calculator
      calculator2 = new Calculator();
    });
    afterEach(function() {
    });

    it('should initialize the total', function() {
      expect(calculator.total).toBe(0);
      expect(calculator.total).toBeFalsy();
    })

    it('has constructor', function() {
      //expect(calculator).toBe(calculator2);  // will fail
      expect(calculator).toEqual(calculator2); // good
    })

    it('can be instantiated', function() {
      expect(calculator).toBeTruthy();
      expect(calculator2).toBeTruthy();
      expect(calculator).toEqual(calculator2);
      expect(calculator.constructor.name).toContain('Calc');
    })

    it('should instantiate unique object', function() {
      expect(calculator.total).not.toBe(calculator2);
    })

    it('has common operation', function() {
      expect(calculator.add).not.toBeUndefined();
      expect(calculator.subtract).not.toBeUndefined();
      expect(calculator.multiply).toBeDefined();
      expect(calculator.divide).toBeDefined();
    });

    it('can overwrite total', function() {
      calculator.total = null;
      expect(calculator.total).toBeNull();
    });

    describe('add()', function() {
      it('should add numbers to total', function() {
        calculator.add(5);
        expect(calculator.total).toBe(5); // its a passing spec
      });

      it('returns total', function() {
        calculator.total = 50;
        expect(calculator.add(20)).toBe(70);
        expect(calculator.total).toMatch(/-?\d+/); // /-?\d+/ = digits for regular expression - regex 101
        expect(typeof calculator.total).toMatch('number');
      });

      describe('subtract()', function() {
        it('should subtract numbers from total', function() {
          calculator.total = 30;
          calculator.subtract(5);
          expect(calculator.total).toBe(25);
        });
      });

      describe('multiply()', function() {
        it('should multiply total by number', function() {
          calculator.total = 100;
          calculator.multiply(2);
          expect(calculator.total).toBe(200);
        })
      });

      describe('divide()', function() {
        it('should divide total by number', function() {
          calculator.total = 200;
          calculator.divide(5);
          expect(calculator.total).toBe(40);
        });

        // matchers
        it('handles divide by zero', function() {
          // will handle an error - will passed
          expect(function() {
            calculator.divide(0)
          }).toThrow(); // Error = throw new Error('Cannot devide by zero!') in calculator.js
          expect(function() {
            calculator.divide(0)
          }).toThrowError(Error);
          // or
          expect(function() {
            calculator.divide(0)
          }).toThrowError(Error, 'Cannot devide by zero!');
        });
      });
    });

    it('create custom matcher', function() {
      jasmine.addMatchers(customMatchers);
      expect(calculator).toBeCalculator(); // our custom
      expect(2).not.toBeCalculator();
      //expect(calculator).not.toBeCalculator();
    });
  });
});
