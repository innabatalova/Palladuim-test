const main = () => {
  //ключевые элементы
  const repairServiceItem = $(".repair-services__item");
  const repairService = $(".repair-services");

  const typesOfJobsItem = $(".types-of-jobs__item");
  const typesOfJobs = $(".types-of-jobs");

  const interiorDesignItem = $(".interior-design__item");
  const interiorDesign = $(".interior-design");

  const renovationOfPremisesItem = $(".renovation-of-premises__item");
  const renovationOfPremises = $(".renovation-of-premises");

  const basicWorks = $(".basic__works");
  const basic = $(".basic");

  const navigationListItem = $(".navigation__list__item");
  const navigationIcon = $(".navigation__icon");

  repairServiceItem.on("mouseover", function () {
    navigationListItem.addClass("dark-theme").removeClass("primary-theme"); //смена темы шапки
    navigationIcon.addClass("dark-theme");

    //скрытие других блоков
    setTimeout(function () {
      typesOfJobs.hide();
      interiorDesign.hide();
      renovationOfPremises.hide();
      repairService.show();
    }, 500);

    setTimeout(function () {
      //возврат видимости имен блоков
      typesOfJobsItem.css({
        opacity: "1",
      });
      interiorDesignItem.css({
        opacity: "1",
      });
      renovationOfPremisesItem.css({
        opacity: "1",
      });

      basicWorks.css({
        background: "none",
      });

      //скрытие имени текущего блока
      repairServiceItem.css({
        opacity: "0",
      });
    }, 550);
  });

  typesOfJobsItem.on("mouseover", function () {
    navigationListItem.addClass("dark-theme").removeClass("primary-theme"); //смена темы шапки
    navigationIcon.addClass("dark-theme");

    //скрытие других блоков
    setTimeout(function () {
      interiorDesign.hide();
      renovationOfPremises.hide();
      repairService.hide();
      typesOfJobs.show();
    }, 500);

    setTimeout(function () {
      //возврат видимости имен блоков
      repairServiceItem.css({
        opacity: "1",
      });
      interiorDesignItem.css({
        opacity: "1",
      });
      renovationOfPremisesItem.css({
        opacity: "1",
      });

      basicWorks.css({
        background: "none",
      });

      //скрытие имени текущего блока
      typesOfJobsItem.css({
        opacity: "0",
      });
    }, 550);
  });

  interiorDesignItem.on("mouseover", function () {
    navigationListItem.addClass("dark-theme").removeClass("primary-theme"); //смена темы шапки
    navigationIcon.addClass("dark-theme");

    //скрытие других блоков
    setTimeout(function () {
      typesOfJobs.hide();
      renovationOfPremises.hide();
      repairService.hide();
      interiorDesign.show();
    }, 500);

    setTimeout(function () {
      //возврат видимости имен блоков
      repairServiceItem.css({
        opacity: "1",
      });
      typesOfJobsItem.css({
        opacity: "1",
      });
      renovationOfPremisesItem.css({
        opacity: "1",
      });

      basicWorks.css({
        background: "none",
      });

      //скрытие имени текущего блока
      interiorDesignItem.css({
        opacity: "0",
      });
    }, 550);
  });

  renovationOfPremisesItem.on("mouseover", function () {
    navigationListItem.addClass("dark-theme").removeClass("primary-theme"); //смена темы шапки
    navigationIcon.addClass("dark-theme");

    //скрытие других блоков
    setTimeout(function () {
      typesOfJobs.hide();

      repairService.hide();
      interiorDesign.hide();
      renovationOfPremises.show();
    }, 500);

    setTimeout(function () {
      //возврат видимости имен блоков
      repairServiceItem.css({
        opacity: "1",
      });
      typesOfJobsItem.css({
        opacity: "1",
      });
      interiorDesignItem.css({
        opacity: "1",
      });

      basicWorks.css({
        background: "none",
      });

      //скрытие имени текущего блока
      renovationOfPremisesItem.css({
        opacity: "0",
      });
    }, 550);
  });

  //скрытие элементов
  $(document).mouseout(function (e) {
    if (!basic.is(e.target) && basic.has(e.target).length === 0) {
      navigationIcon.removeClass("dark-theme");
      repairService.hide();
      typesOfJobs.hide();
      basicWorks.css({
        background: "url(/image/BG-start.png)",
      });
      repairServiceItem.css({
        opacity: "1",
      });
      typesOfJobsItem.css({
        opacity: "1",
      });
    }
  });
};

main();
