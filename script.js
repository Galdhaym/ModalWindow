window.onload = function () {
	var openModalWindowButton = document.querySelector(".popup__open");
	var popup = document.querySelector(".popup__container");
	openModalWindowButton.addEventListener("click", function () {
		openPopUp(popup);
	});

	function openPopUp(popup) {
		if (popup) {
			popup.classList.add("open");

			popup.addEventListener("click", function (e) {
				if (!e.target.closest(".popup__body")) {
					closePopUp(popup);
				}
			});

			var closePopUpButton = popup.querySelector(".popup__close");
			closePopUpButton.addEventListener("click", function (e) {
				closePopUp(popup);
			});
		}
	}

	function closePopUp(popup) {
		popup.classList.remove("open");
	}
};
