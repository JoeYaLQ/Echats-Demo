
// utils.js
function loadHeader() {
  $("#headerContent").load("../../header.html");
}

function loadFooter() {
  $("#footerContent").load("/index/common/footer.html");
}

function init (idArray = []) {
  loadHeader();
  loadFooter();
  if(idArray && idArray.length > 0){
    for (let i = 0; i < idArray.length; i++) {
      $(idArray[i].id).load(idArray[i].url);
    }
  }
}
// 延迟加载视频
function lazyLoadVideo(srcArray = []) {
  $(document).ready(function() {
    if(srcArray && srcArray.length > 0){
      for (let i = 0; i < srcArray.length; i++) {
        $(srcArray[i].id).attr('src', '/static/video/' + srcArray[i].src);// 设置视频源
      }
    }
  })
}