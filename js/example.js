const examples = () => {
  const examplesCard = $(".examples__card");
  const examplesCardInfo = $(".examples__card__info");

  $(document).on("mouseover", function (e) {
    if (examplesCard.is(e.target)) {
      let p = $(e.target.children[1]);
      p.css("opacity", "1");
    }
  });

  examplesCard.on("mouseout", function () {
    examplesCardInfo.css("opacity", "0");
  });
};

examples();
