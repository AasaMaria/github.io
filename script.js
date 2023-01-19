const dialCount = $('.dial__item').length
const angleSize = 360 / dialCount

for (let i = 0; i < dialCount; i++) {
  const itemAngle = angleSize * i
  const item = $('.dial__item').eq(i)
  if (itemAngle > 90 && itemAngle < 270) {
    item.addClass('left')
  }
  item.css({
    'transform': 'translateX(50%) translateY(-50%) rotate(' + itemAngle + 'deg) translateX(60px)',
    '-moz-transform': 'translateX(50%) translateY(-50%) rotate(' + itemAngle + 'deg) translateX(60px)',
    '-webkit-transform': 'translateX(50%) translateY(-50%) rotate(' + itemAngle + 'deg) translateX(60px)'
  })
}

$('.dial__item').on('click', function () {
  var item = $(this)
  $('.dial__item').toggleClass('hide')
  item.removeClass('hide').toggleClass('active')
  setTimeout(() => {
    item.children('.item__body').toggleClass('hide')  
  }, 100)
})