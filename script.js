document.addEventListener('DOMContentLoaded', function() {
  window.addEventListener('scroll', function(event) {
      var s = window.pageYOffset || document.documentElement.scrollTop;
      var w = window.innerWidth || document.documentElement.clientWidth;
      var h = document.querySelector('.content').offsetHeight;
      var h_b = document.querySelector('.parallax').offsetHeight;
      var p = (s / h) * 100;
      var p_b = (s / h_b) * 100;
      var o = 1 - (1 / 100) * p_b;

      var z_1 = 1 + (w / 100000) * p_b;
      document.querySelector('.planet3').style.transform = 'scale(' + z_1 + ')';
      document.querySelector('.planet3').style.opacity = o;

      var z_2 = 1 + (w / 5000000) * p;
      document.querySelector('.galaxy').style.transform = 'scale(' + z_2 + ')';

      var hr = (w / 2000) * p_b;
      var z_3 = 1 + w * 0.000005 * p_b;
      document.querySelector('.planet1').style.transform = 'translate3d(' + hr + 'px, 0, 0) scale(' + z_3 + ')';

      var hr_2 = (w / 2000) * p_b;
      var z_4 = 1 + w * 0.000005 * p_b;
      document.querySelector('.planet2').style.transform = 'translate3d(' + hr_2 + 'px, 0, 0) scale(' + z_4 + ')';
  });
});
