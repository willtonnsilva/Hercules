/* eslint-disable no-undef */
$(document).ready(function () {
  // Lift card and show stats on Mouseover
  $('#product-card').hover(
    function () {
      $(this).addClass('animate')
      $('div.carouselNext, div.carouselPrev').addClass('visible')
    },
    function () {
      $(this).removeClass('animate')
      $('div.carouselNext, div.carouselPrev').removeClass('visible')
    }
  )

  // Flip card to the back side
  $('#view_details').click(function () {
    $('#btn_view_details').click()
  })

  $('#flip-back').click(function () {
    $('#product-card')
      .removeClass('flip180')
      .addClass('flip190')
    setTimeout(function () {
      $('#product-card')
        .removeClass('flip190')
        .addClass('flip90')

      $('#product-back div.shadow')
        .css('opacity', 0)
        .fadeTo(100, 1, function () {
          $('#product-back, #product-back div.shadow').hide()
          $('#product-front, #product-front div.shadow').show()
        })
    }, 50)

    setTimeout(function () {
      $('#product-card')
        .removeClass('flip90')
        .addClass('flip-10')
      $('#product-front div.shadow')
        .show()
        .fadeTo(100, 0)
      setTimeout(function () {
        $('#product-front div.shadow').hide()
        $('#product-card')
          .removeClass('flip-10')
          .css('transition', '100ms ease-out')
        $('#cx, #cy').removeClass('s1 s2 s3')
      }, 100)
    }, 150)
  })
})
