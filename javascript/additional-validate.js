$.validator.addMethod(
    'testValidate',
    function(val, el, arg){
      reg = new RegExp('^([1-9]\\d*|0)(\\.\\d{1,' + arg + '})?$');
      return this.optional(el) || reg.test(val);
    },
    '少数点第[0]位までの数値を入力してください。'
  );