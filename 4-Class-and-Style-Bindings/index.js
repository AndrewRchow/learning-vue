var vm = new Vue({
  el: '#example',
  data: {
    isActive: true,
    hasError: false
  },
})


var vm2 = new Vue({
  el: '#example2',
  data: {
    isActive: true,
    error: null
  },
  computed: {
    classObject: function () {
      return {
        active: this.isActive && !this.error,
        'text-danger': this.error && this.error.type === 'fatal',
        test: true,
        'test1': true
      }
    }
  }
})

var vm3 = new Vue({
  el: '#example3',
  data: {
    activeClass: 'active',
    errorClass: 'text-danger',
    isTest:true
  },
})


