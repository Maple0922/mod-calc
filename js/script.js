const app = new Vue({
  el: '#app',
  data: {
    num1: 3,
    num2: 5,
    mod: 13,
    res: 9
  },
  methods: {
    calc: function(){
      this.res = Math.pow(this.num1, this.num2) % this.mod;
      console.log('calc');
    }
  }
});
