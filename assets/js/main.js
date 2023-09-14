
$(function(){

  let lastScroll = 0;

  $(window).scroll(function(){
    curr=$(this).scrollTop();
    if (curr > lastScroll) {
      $('.sub').addClass('hide');
    } else {
      $('.sub').removeClass('hide');
    }
    lastScroll = curr;
    
  })

  //header
  $('.header').mouseover(function () { 
    if($('.sub').hasClass('hide')){ //만약에 sub에 hide라는 클래스가 있다면
      $('.sub').addClass('show'); //나와줘
    }
  });

  $('.header-wrapper').mouseleave(function () { 
    $('#menu1').addClass('on').siblings().removeClass('on');//menu1번으로 초기화
    $('.header .menu-area a').removeClass('on2');
    if($('.sub').hasClass('hide')){
      $('.sub').removeClass('show');
    }
  })

  //header 메뉴에 마우스 올리면 맞는 sub메뉴 나오기
  $('.header .menu-area a').mouseover(function(){
    menuName = $(this).data('menu');
    $(this).addClass('on2').siblings().removeClass('on2');
    $(menuName).addClass('on').siblings().removeClass('on')
  })

  //햄버거 버튼
  $('.hamburge-btn').click(function(e){
    e.preventDefault();
    
      $('.mobile-menu').addClass('on')
      $('.mobile-menu-bg').addClass('on')
      $('body').addClass('hidden')
  })

  $(document).click(function(e){
    //console.log(e.target);
    
    if ($(e.target).hasClass('mobile-menu-bg')) {
      $('.mobile-menu').removeClass('on');
      $('.mobile-menu-bg').removeClass('on');
      $('body').removeClass('hidden');
    }
  })



  // 글쓰기 버튼
  $('.header .service-area .btn').click(function(){
    $('.header .service-area .writing-box').toggleClass('on');
  })
 
  $(document).click(function(e){
    // console.log(e.target);
    if($('header').has(e.target).length == 0){
        $('.header .service-area .writing-box').removeClass('on')
        $('body').removeClass('hidden')
    }
  })

  //인기검색어
  $('.top10-area').mouseover(function(){
    $('.group-top10 .top10-box').addClass('on');
  })
  $('.top10-box').mouseleave(function(){
    $('.group-top10 .top10-box').removeClass('on');
  })
 
  //top10 슬라이드
  mainSlide = new Swiper('.top-slide',{
    direction: "vertical",
    autoplay: {     //자동슬라이드 (false-비활성화)
      delay: 2000, // 시간 설정
      disableOnInteraction: false, // false-스와이프 후 자동 재생
    },
  })

  //sc-visual 슬라이드
  mainSlide1 = new Swiper('.main-slide',{
    slidesPerView:'auto',
    navigation:{
        nextEl:".sc-visual .next",
        prevEl:".sc-visual .prev"
    }

  })

  //sc-category 슬라이드
  mainSlide2 = new Swiper('.category-slide',{
    slidesPerView:'auto',
    spaceBetween:20, //사이간격
    navigation: {
      nextEl:".sc-category .next",
      prevEl:".sc-category .prev"
    },
  })

  //sc-sale 슬라이드
  mainSlide3 = new Swiper('.sc-sale-slide',{
    slidesPerView:'2',
    spaceBetween:20,
    navigation: {
      nextEl:".sc-sale .next",
      prevEl:".sc-sale .prev"
    },
    breakpoints: {       
      768: {
        slidesPerView: 2,  //브라우저가 768보다 클 때
      },
      1024: {
        slidesPerView: 4,  //브라우저가 1024보다 클 때
      },
    },
  })

  //sc-recomm 슬라이드
  mainSlide4 = new Swiper('.sc-recomm-slide',{
    slidesPerView:'2.5',
    spaceBetween:10,
    navigation: {
      nextEl:".sc-recomm .next",
      prevEl:".sc-recomm .prev"
    },
    breakpoints: {       
      768: {
        slidesPerView: 4,  //브라우저가 768보다 클 때
        spaceBetween:20,
      },
      1024: {
        slidesPerView: 6,  //브라우저가 1024보다 클 때
        spaceBetween:20,
      },
    },  
  })

  //sc-best 슬라이드
  mainSlide5 = new Swiper('.sc-best-category-slide',{
    slidesPerView:'auto',
    spaceBetween:15,
    navigation: {
      nextEl:".sc-best .next",
      prevEl:".sc-best .prev"
    }
  })





  
//sc-best 데이터 전송
const todayDeliEl = `
<div class="today">
  <img src="https://assets.ohou.se/web/dist/media/assets/icons/ic-departure-today-c4b771c1162afcd9223631b660e19d73.png">
  <span class="desc">평일 12:00까지 결제시</span>
</div>`
const freeDeliEl = `<svg class="icon" aria-label="무료배송" width="47" height="20" viewBox="0 0 47 20" preserveAspectRatio="xMidYMid meet"><g fill="none" fill-rule="evenodd"><rect width="47" height="20" fill="#000" fill-opacity=".07" fill-rule="nonzero" rx="4"></rect><path fill="#757575" d="M12.73 5.38v3.96h-6.6V5.38h6.6zm-2.68 9.43H8.76v-3.25H5v-1.03h8.86v1.03h-3.81v3.25zm1.4-6.49V6.41H7.43v1.91h4.04zm11.08 2.7h-1.42v1.54h2.26v1.02h-8.86v-1.02h2.24v-1.53h-1.1V7.78h5.32V6.65H15.6V5.63h6.66V8.8h-5.33v1.18h5.61v1.04zm-4.53 0v1.54h1.87v-1.53H18zm14.37 3.78h-1.23V9.86h-.8v4.49h-1.2V5.18h1.2v3.66h.8V5h1.23v9.8zm-4.2-2.54h-3.9V6.01h1.27v2.26h1.36V6h1.28v6.26zm-1.27-1.01v-2h-1.36v2h1.36zm14.49 1.71c0 1.13-1.25 1.82-3.41 1.82s-3.42-.7-3.42-1.82 1.25-1.82 3.4-1.82c2.18 0 3.43.7 3.43 1.82zm-3.41-6.05c-.5 1.13-2.1 1.9-3.51 2.1l-.54-1c1.64-.17 3.39-1.06 3.39-2.54V5.2h1.33v.28c0 1.48 1.99 2.47 3.4 2.53l-.55 1.01c-1.31-.18-3.03-.97-3.52-2.1zm4.42 3.78h-8.86V9.66h3.79V8.4h1.29v1.26h3.78v1.03zm-2.33 2.27c0-.5-.83-.8-2.1-.8s-2.08.3-2.08.8c0 .51.81.8 2.08.8s2.1-.29 2.1-.8z"></path></g></svg>`  
const specialPriceEl =`<svg class="icon" aria-label="특가" width="30" height="20" viewBox="0 0 30 20" preserveAspectRatio="xMidYMid meet"><rect width="30" height="20" fill="#F77" rx="4"></rect><path fill="#fff" d="M12.83 7.93v-.97H7.93v-.555h5.228v-.991H6.655v4.063h6.59v-.992H7.928V7.93h4.901zm-6.295 3.747v1.002h5.326v2.037h1.274v-3.04h-6.6zm7.733-.588v-1.024H5.5v1.024h8.768zM23.91 9.782V8.725h-1.405V5H21.24v9.705h1.264V9.782h1.405zm-3.954-3.79h-4.53v1.056h3.147c-.174 1.938-1.623 3.975-3.736 4.945l.773.958c2.974-1.612 4.259-4.03 4.346-6.96z"></path></svg>`


$('.sc-best .categor-item').click(function(e){
  e.preventDefault();

 bestNum = $(this).data('best');
 $(this).addClass('on').siblings().removeClass('on');

 bestList(bestNum);

})

function bestList(num){
fetch('./assets/data/product.json')
.then(res=>res.json())
.then(json=>{

  allData = json.items;

  sortData=allData.filter(function(data){
    if (num) {
      return data.cate.indexOf(num) >= 0;
    } else {
      return data;
    }

  })
    
  let html=``;
  let idx=0;

  sortData.forEach(element => {

    //만약에 idx가 3이라면 리턴해서 개수한정, idx를 0으로 만들고  idx++;증가후 
    if (idx >= 3) {
      return false; //끝 밑에 있는애들은 실행이 안됨
    }

    isFreeDeli =(element.deli.free)?freeDeliEl:'';
    isSpecial =(element.price.special)?specialPriceEl:'';
    isTodayDeli = (element.deli.today)?todayDeliEl:'';

    html+=`
          <li class="list-item">
          <a href="" class="link"></a>

            <div class="img-box">
              <img src="${element.thumb}" alt="">
            </div>
            <div class="content-box">
              <p class="brand">${element.brand}</p>
              <p class="desc">[${element.title})</p>
              <p class="price-box">
                <span class="rate">${element.price.sale}%</span>
                <span class="price">${numFormat(element.price.curr)}</span>
              </p>
              <p class="stats-box">
                <span class="avg">${element.review.rate}</span>
                <span>리뷰${numFormat(element.review.cnt)}</span>
              </p>
              ${isTodayDeli}

              <div class="etc-box">
                ${isFreeDeli}
                ${isSpecial}
              </div>
            </div>
        </li>`;

        idx++;
  });

  $('#bestList').html(html);
})

}
bestList();


//천에자리 - 내가 전달받은 값을 LocaleString해서 바꿔줘
function numFormat(num){
  return num.toLocaleString('ko-KR');
}


})//지우지마세요