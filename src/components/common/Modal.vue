<template>
     <transition name="modal">
 <div class="row">
        <div class="modal" id="modal1" tabindex="1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">포트폴리오
                        <button class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="modal-body" style="text-align: center;">
                    <img src="img/port.png" style="width: 256px; height: 256px;">
                  <a href="instructor.html">  <button class="link">소개페이지로 이동</button></a></div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="modal" id="modal" tabindex="1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        로그인폼이동 모달
                        <button class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="modal-body" style="text-align: center;">
                    <img src="./images/1.png" style="width: 256px; height: 256px;">
                  <a href="loginForm.html">  <button class="link">로그인폼으로 이동</button></a></div>
                </div>
            </div>
        </div>
    </div>
  </transition>
</template>


<style scoped>


</style>