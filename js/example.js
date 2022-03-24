const examples = () => {
  const examplesCard = $(".examples__card");
  const examplesCardInfo = $(".examples__card__info");

  examplesCard.on("mouseover", function () {
    examplesCardInfo.css("opacity", "1");
  });

  examplesCard.on("mouseout", function () {
    examplesCardInfo.css("opacity", "0");
  });
};

examples();
