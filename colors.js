
    var Body = {
        setColor: function(color) {
     $('body').css('color', color);
      },
      setBackgroundColor: function(color) {
      $('body').css('backgroundColor', color);
      }
     }
    var Links = {
        setColor: function (color) {
            $('a').css('color', color);
            // var alist = document.querySelectorAll('a');
            // var i = 0;
            // while (i < alist.length) {
            //     alist[i].style.color = color;
            //     i = i + 1;
            // }
        }
    }
    function nightDayHandler(self) {

        if (self.value === 'night') {
            Body.setBackgroundColor('black');
            Body.setColor('white');
            self.value = 'day'
            Links.setColor('powderblue');
        } else {
            Body.setBackgroundColor('white');
            Body.setColor('black');
            self.value = 'night'
            Links.setColor('blue');
        }
    }