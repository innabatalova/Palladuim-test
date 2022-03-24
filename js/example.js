const examples = () => {
  const examplesCard = $(".examples__card");
  const examplesCardInfo = $(".examples__card__info");

  $(document).on("mouseover", function (e) {
    if (examplesCard.is(e.target)) {
      let p = $(e.target.children[1]);
      p.css("opacity", "1");
    }
  });

  $(document).on("mouseout", function (e) {
    if (!examplesCard.is(e.target) && examplesCard.has(e.target).length === 0) {
      examplesCardInfo.css("opacity", "0");
    }
  });
};

examples();
