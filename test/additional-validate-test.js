(function() {
    function getValidation(methodName) {
      var method = $.validator.methods[methodName];
  
      return function(val, param){
        var html = $(
            '<form>'
          + '<input type="text" value="' + val + '" id="testText">'
          + '</form>');
        var validate = html.validate();
        var el = html.find('#testText')[0];
        return method.call( validate, el.value, el, param );
      } 
    };
  
    describe('javascript/additional-validate.js', function() {
      describe('少数入力のバリデーション', function() {
        var validation = getValidation('testValidate');
        
        it('少数点第２位までの数値なので"0.01"は正しい', function() {
          assert.strictEqual(validation('0.01', 2 ), true);
        });
  
        it('少数点第２位までの数値なので"0"は正しい', function() {
          assert.strictEqual(validation('0', 2 ), true);
        });
      
        it('少数点第２位までの数値なので"0.001"は不正である', function() {
          assert.strictEqual(validation('0.001', 2 ), false);
        });
      
        it('少数点第３位までの数値なので"0.001"は正しい', function() {
          assert.strictEqual(validation('0.001', 3 ), true);
        });
  
        it('"未入力"は正しい', function() {
          assert.strictEqual(validation('', 3 ), true && 'dependency-mismatch');
        });
  
      });
    });
   }).call();