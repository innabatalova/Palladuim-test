const headerContacts = () => {
  const navigationIconMap = $(".navigation__icon__map");
  const navigationAddress = $(".navigation__address");
  const navigationIconCall = $(".navigation__icon__call");
  const navigationCall = $(".navigation__call");

  navigationIconMap.on("mouseover", function () {
    navigationAddress.addClass("flex");
    navigationAddress.show();
  });

  $(document).mouseout(function (e) {
    if (
      !navigationIconMap.is(e.target) &&
      !navigationAddress.is(e.target) &&
      navigationAddress.has(e.target).length === 0
    ) {
      navigationAddress.removeClass("flex");
      navigationAddress.hide();
    }
  });

  navigationIconCall.on("mouseover", function () {
    navigationCall.addClass("flex");
    navigationCall.show();
  });

  $(document).mouseout(function (e) {
    if (
      !navigationIconCall.is(e.target) &&
      !navigationCall.is(e.target) &&
      navigationCall.has(e.target).length === 0
    ) {
      navigationCall.removeClass("flex");
      navigationCall.hide();
    }
  });
};

headerContacts();
