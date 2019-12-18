// request button hover function
document.getElementById('form-send-button').onmouseover = function() {
  TweenMax.to('#form-send-button', 0.3, {backgroundColor: '#FBFBFB', color: '#5E7989'});

  this.onmouseleave = function() {
    TweenMax.to('#form-send-button', 0.3, {backgroundColor: '#5E7989', color: '#B1CAE5'});
  }
}

let formSend = function() {
  alert('!!! I hope you are looking for a front end developer and not a photographer !!! This website is fake and this form does not function. To view a form with simple form validation and a functioning mail server view my other portfolio project - tgmaudio.com');
}