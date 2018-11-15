var appTitle = new Vue({
  el: '#appTitle',
  data: {
      title: 'Phone Ruler'
  }
});

document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.dropdown-trigger');
  var options = {};
  var instances = M.Dropdown.init(elems, options);
});

var calc = new Vue({
  el: '#calc',
  data: {
      usrInput: 1,
      deviceModifier: 158,
      deviceName: 'Pixel 3XL',
      unitModifer: 1,
      unit: 'mm'
  },
  methods: {
      isNumber: function (evt) {
          evt = (evt) ? evt : window.event;
          var charCode = (evt.which) ? evt.which : evt.keyCode;
          if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
              evt.preventDefault();;
          } else {
              return true;
          }
      }
  }
});