// const repairServiceItem = $(".repair-services__item");
// const repairService = $(".repair-services");
// const basicWorks = $(".basic__works");
// const basic = $(".basic");
// const basicTitle = $(".basic__title");
// const basicWrapper = $(".basic__wrapper");
// const navigationListItem = $(".navigation__list__item");
// const navigationIcon = $(".navigation__icon");

// repairServiceItem.on("mouseover", function () {
//   navigationListItem.addClass("dark-theme").removeClass("primary-theme");
//   //basicTitle.addClass("dark-title").removeClass("primary-title");
//   navigationIcon.addClass("dark-theme");

//   basicWrapper.css({
//     opacity: "0",
//   });

//   setTimeout(function () {
//     repairService.show();
//   }, 500);

//   setTimeout(function () {
//     basicWorks.css({
//       background: "none",
//     });
//     repairServiceItem.css({
//       opacity: "0",
//     });
//   }, 550);
// });

// $(document).mouseout(function (e) {
//   if (!basic.is(e.target) && basic.has(e.target).length === 0) {
//     navigationListItem.addClass("primary-theme").removeClass("dark-theme");
//     //basicTitle.addClass("primary-title").removeClass("dark-title");
//     navigationIcon.removeClass("dark-theme");
//     repairService.hide();
//     basicWorks.css({
//       background: "url(/image/BG-start.png)",
//     });
//     repairServiceItem.css({
//       opacity: "1",
//     });
//   }
// });
