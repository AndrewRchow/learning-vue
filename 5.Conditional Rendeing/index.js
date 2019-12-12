var vm = new Vue({
    el: '#example',
    data: {
        awesome: 'AAA',
        something: false,
    },
  })
  
  var vm2 = new Vue({
    el: '#example2',
    data: {
        type: 'B',
    },
  })
  
    
  var vm3 = new Vue({
    el: '#example3',
    data: {
        loginType: 'username',
    },
    methods: {
        swap: function () {
            this.loginType = this.loginType != 'username' ? 'username' : 'email';
            console.log('test');
        }
    }
  })
  