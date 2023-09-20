<template>
    <div>
        <div>
            <img alt="" class=" object-cover w-full" src="https://beta.ugesports.xyz/assets/banner-01.f88e9bb5.jpg">
        </div>
            <div class="slider-item__intro">
                <div class="slider-item__intro__inner container text-left sm:ml-8">
                    <h3 class="uppercase flex flex-col sm:max-w-[70%]">
                        <span class="uppercase">Nền tảng </span>
                        <strong class="uppercase">dành riêng cho các giải đấu Esports.</strong>
                    </h3>
                    <p class="text-neutral-40 font-thin xs:my-4 sm:max-w-[60%] sm:my-8"
                        style="font-family: Inter; font-size: 20px;">
                        Tìm kiếm giải đấu cho game yêu thích của bạn, thi đấu, gia nhập cộng đồng game thủ. Tất cả sẽ được
                        tích hợp trên nền tảng Underground Esports
                    </p>
                </div>
            </div>
    </div>
    
</template>

<script setup>
definePageMeta({
    layout: 'default'
})
</script>
    
<style scoped>
h2 {
    margin-top: 20px;
    font-size: 36px;
}

p {
    margin: 20px 0;
}

header {
    display: flex
}

.slider-item__intro {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: cover;
    color: white;
    text-align: left;
    padding: 2rem;
}


.slider-item__intro h3 {
    font-weight: 800;
    font-size: 40px;
    line-height: 48px;

}


.slider-item__intro strong {
    font-weight: bold;
    background: linear-gradient(96.46deg, #ff006b 0%, #885fff 101.5%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
}


.slider-item__intro p {
    font-family: Inter, sans-serif;
    font-size: 20px;
    font-weight: 300;
    margin-top: 20px;
    max-width: 60%;

}

@media (max-width: 640px) {
    .slider-item__intro {
        padding: 1rem;
    }

    .slider-item__intro h3 {
        font-size: 20px;
    }

    .slider-item__intro p {
        max-width: 70%;
    }
}
</style>