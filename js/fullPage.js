var $header_top = $ ('.header-top');

$header_top.find ('a').on ('click', function () {
  $ (this).parent ().toggleClass ('open-menu');
});

$ ('#fullpage').fullpage ({
  sectionsColor: ['#3dcfa1', '#348899', '#ff8b20', '#ff5757', '#ffd03c'],
  sectionSelector: '.vertical-scrolling',

  afterLoad: function (anchorLink, index) {},
});
