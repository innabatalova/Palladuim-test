const main = () => {
  //переменные
  const repairServiceItem = $(".repair-services__item");
  const repairService = $(".repair-services");
  const typesOfJobsItem = $(".types-of-jobs__item");
  const typesOfJobs = $(".types-of-jobs");
  const interiorDesignItem = $(".interior-design__item");
  const interiorDesign = $(".interior-design");
  const renovationOfPremisesItem = $(".renovation-of-premises__item");
  const renovationOfPremises = $(".renovation-of-premises");
  const hovers = document.querySelectorAll(".hover");
  const basicWorksItem = document.querySelectorAll(".basic__works__item");
  const basicWorks = $(".basic__works");
  const basic = $(".basic");
  const navigationListItem = $(".navigation__list__item");
  const navigationIcon = $(".navigation__icon");

  //функции
  const toogleTheme = () => {
    navigationListItem.addClass("dark-theme").removeClass("primary-theme"); //смена темы шапки
    navigationIcon.addClass("dark-theme");
    basicWorks.css({
      background: "none",
    });
  };

  const closeBlocks = () => {
    hovers.forEach((item) => {
      item.style.display = "none";
    });
  };

  const openNameBlocks = () => {
    basicWorksItem.forEach((item) => {
      item.style.opacity = "1";
    });
  };

  //события
  repairServiceItem.on("mouseover", function () {
    toogleTheme();
    closeBlocks();
    repairService.show();
    openNameBlocks();
    repairServiceItem.css({
      opacity: "0",
    });
  });

  typesOfJobsItem.on("mouseover", function () {
    toogleTheme();
    closeBlocks();
    typesOfJobs.show();
    openNameBlocks();
    typesOfJobsItem.css({
      opacity: "0",
    });
  });

  interiorDesignItem.on("mouseover", function () {
    toogleTheme();
    closeBlocks();
    interiorDesign.show();
    openNameBlocks();
    interiorDesignItem.css({
      opacity: "0",
    });
  });

  renovationOfPremisesItem.on("mouseover", function () {
    toogleTheme();
    closeBlocks();
    renovationOfPremises.show();
    openNameBlocks();
    renovationOfPremisesItem.css({
      opacity: "0",
    });
  });

  //скрытие элементов
  $(document).mouseout(function (e) {
    if (!basic.is(e.target) && basic.has(e.target).length === 0) {
      navigationListItem.addClass("primary-theme").removeClass("dark-theme"); //смена темы шапки
      navigationIcon.removeClass("dark-theme");
      basicWorks.css({
        background: "url(/image/BG-start.png)",
      });

      closeBlocks();

      openNameBlocks();
    }
  });
};

main();
