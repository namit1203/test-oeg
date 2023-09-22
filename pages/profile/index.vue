<template>
    <div class="min-h-screen bg-black-5">
        <div class="bg-black-5" style="background: transparent;" id="wrapper">
            <div class="general-info-container relative justify-end flex flex-col xs:px-4 xs:py-10 md:px-56 bg-cover bg-no-repeat w-full bg-black-5 xs:h-fit xs:min-h-[400px] xs:max-h-[440px] sm:min-h-[400px] sm:max-h-[440px]"
                style="background-image: url(https://beta.ugesports.xyz/assets/banner-01.f88e9bb5.jpg);">
                <div class="avt-name">
                    <div>
                        <img src="https://beta.ugesports.xyz/assets/avatar-host.a189d152.svg" alt="avt"
                            style="width: 120px; height: 120px; line-height: 120px; font-size: 18px;">
                    </div>
                    <div class="">
                        <div class="flex flex-row items-center">
                            <p
                                class="font-extrabold text-2xl mr-2 mb-1 whitespace-nowrap text-ellipsis overflow-hidden max-w-[300px] text-white">
                                ducanh2103
                            </p>
                        </div>
                        <p class="text-neutral-30 text-white">Thay đổi tiểu sử của bạn trong phần cài đặt</p>
                    </div>
                    <div class="btn-setting">
                        <button type="button" class="btn-primary">
                            <div>
                                <img class="setting-img"
                                    src="https://beta.ugesports.xyz/assets/settings-03.d0077e00.svg">
                                </div>
                                    <span>Cài đặt</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
export default {

}
</script>

<style>
.btn-primary {
    background-color: #007bff; 
    color: white;
    border: none; 
    
    display: flex; 
    align-items: center; 
    align-items: center;
  background-image: linear-gradient(135deg, #f34079 40%, #fc894d);
  border: 0;
  border-radius: 10px;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  font-family: "Codec cold",sans-serif;
  font-size: 16px;
  font-weight: 700;
  height: 54px;
  justify-content: center;
  letter-spacing: .4px;
  line-height: 1;
  max-width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 3px;
  text-decoration: none;
  text-transform: uppercase;
  user-select: none;

  touch-action: manipulation;
}

.btn-primary img {
    width: 20px; 
    height: 20px; 
    margin-right: 5px; 
}


.btn-primary span {
    white-space: nowrap; 
}

.btn-setting{
    display: grid;
    grid-template-columns: 120px auto;
}

.avt-name {
    padding-bottom: 90px;
    display: grid;
    grid-template-columns: 120px auto;
    grid-column-gap: 20px;
    align-items: center;

}



</style>