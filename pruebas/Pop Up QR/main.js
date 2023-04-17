var qrcode = new QRCode(document.getElementById("qrcode"), {
    width : 120,
    height : 120
});
function makeQrcode(e) {
      qrcode.makeCode(e.attr("data-url"));
  }
  jQuery(document).ready(function(){
      jQuery("[data-toggle='popover']").popover(
          options={
              content: jQuery("#qrcode"),
              html: true // important! popover html content (tag: "#qrcode") which contains an image
          }
      );

      jQuery("[data-toggle='popover']").on("show.bs.popover", function(e) {
          makeQrcode(jQuery(this));
          jQuery("#qrcode").show();
      });
  });