document.addEventListener('DOMContentLoaded', function(){ 
  var botui = new BotUI('my-botui-app') // id of container

  botui.message.bot({ // show first message
    delay: 1000,
    content: 'Hi there 👋',
    className: 'hi-there'
  }).then(() => {
    return botui.message.bot({ // second one
      delay: 1000, // wait 1 sec.
      content: 'My name is Ashish and most of my time is spent designing and developing stuff. Do you wish to know more about me?'
    })
  }).then(function() {
      return botui.action.button({
          human: !0,
          action: [{
              text: "Yes 👍",
              value: 1
          }, {
              text: "Shut up already! 😷",
              value: 2
          }]
      })
  }).then(function(e) {
      return 1 === e.value ? botui.message.add({
          loading: !0,
          delay: 1e3,
          content: "Cool !! 😎"
      }).then(function() {
          return botui.message.add({
              loading: !0,
              delay: 2e3,
              content: "I've always been interested in design and development. I believe for most of the products, both of these go hand in hand."
          })
      }).then(function() {
          return botui.message.add({
              loading: !0,
              delay: 3e3,
              content: "Because of this enthusiasm towards tech & UX I have come across wide variety of technologies and projects, which I try to update here on this website."
          })
      }).then(function() {
          return botui.message.add({
              loading: !0,
              delay: 5e3,
              content: "Crap 😱"
          })
      }).then(function() {
          return botui.message.add({
              loading: !0,
              delay: 3e3,
              content: "Server on fire🔥🔥🔥"
          })
      }).then(function() {
          return botui.message.add({
              loading: !0,
              delay: 500,
              content: "GTG!!"
          })
      }).then(function() {
          return botui.message.add({
              loading: !0,
              delay: 3e3,
              content: "Meanwhile, feel free to explore the website."
          })
      }).then(function() {
          return botui.message.add({
              loading: !0,
              delay: 1e3,
              content: "byee 👋"
          })
      }) : botui.message.add({
          loading: !0,
          delay: 1e3,
          content: "<br>😔 Okay!!<br>"
      }).then(function() {
          return botui.message.add({
              loading: !0,
              delay: 2e3,
              content: "![](https://send.ewebdesign.com/source/59f83dc6cea7e/come.gif?1509453577048) It seems you are in a hurry! <br>Feel free to explore website or drop me a mail at [ashishthakur913@gmail.com](mailto:ashishthakur913@gmail.com)"
          })
      })
  })
}, false);


var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};