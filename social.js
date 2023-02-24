$(document).ready(function() {
  all = ["fb", "em", "wa", "git", "li", "ig"];
  for (let i = 0; i < all.length; ++i) {
    const social = `#social-${all[i]}`;
    const message = `#${all[i]}-message`;
    $(social).mouseover(function() {
      $(message).show("fast");
    });
    $(social).mouseout(function() {
      $(message).hide("fast");
    });
  }
});
