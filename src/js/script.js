gsap.registerPlugin(ScrollTrigger)

document.addEventListener('DOMContentLoaded', function (event) {
	//
	// количество скролла для одного слайда.
	// Чем больше - тем больше надо крутить колесом, чтобы проскроллить на следующий слайд
	const slideSpace = 500

	const slidesCount = document.querySelectorAll('.swiper-slide').length
	const pinSpace = slidesCount * slideSpace

	const mainSwiper = new Swiper('.main-swiper', {
		slidesPerView: 1,
		spaceBetween: 0,
	})

	mainSwiper.slideTo(0, 0, false)

	let curSlide = 0

	ScrollTrigger.create({
		trigger: '.swiper-section',
		start: 'top top',
		end: '+=' + pinSpace + 'px',
		pin: true,
		pinSpacing: true,
		onUpdate: (self) => {
			const slide = parseInt(self.progress * slidesCount)
			if (curSlide !== slide) {
				curSlide = slide
				if (slide < slidesCount) {
					mainSwiper.slideTo(slide)
				}
			}
		},
	})
})
