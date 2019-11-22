var vm = new Vue({
    el: '#example',
    data: {
        isActive: true,
        hasError: false
    },
})


var vm = new Vue({
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
            'test1':true
          }
        }
      }
})


