document.addEventListener("DOMContentLoaded", function () {
  prepModal();
});

var totalPages;

function prepModal() {
  var modals = document.querySelectorAll(".modal");

  modals.forEach(function (modal) {
    var pages = modal.querySelectorAll(".modal-split");
    var buttons = modal.querySelectorAll(".button");

    if (pages.length !== 0 && buttons.length !== 0) {
      pages.forEach(function (page, index) {
        if (index !== 0) {
          page.style.display = "none";
        }
      });

      totalPages = pages.length;

      buttons.forEach(function (button, index) {
        var nextButton = button.querySelector(".nextBtn");
        nextButton.addEventListener("click", function () {
          var pageTrack = parseInt(button.querySelector("p").textContent) - 1;

          if (pageTrack === totalPages - 2) {
            nextButton.innerHTML = `<button type="button" class="close btn btn-primary" data-dismiss="modal">Close</button>`;
          }

          if (pageTrack === totalPages - 1) {
            modal.querySelector("form").submit();
          }

          if (pageTrack < totalPages - 1) {
            pageTrack++;

            updateButtonText(button, pageTrack);

            pages.forEach(function (page, pageIndex) {
              if (pageIndex === pageTrack) {
                page.style.display = "block";
              } else {
                page.style.display = "none";
              }
            });
          }
        });
      });
    }

    modal.addEventListener("shown.bs.modal", function () {
      document.getElementById("overlay").style.display = "block";
      var pageTrack = 0;

      updateButtonText(buttons[0], pageTrack);

      pages.forEach(function (page, pageIndex) {
        if (pageIndex === pageTrack) {
          page.style.display = "block";
        } else {
          page.style.display = "none";
        }
      });
    });

    modal.addEventListener("hidden.bs.modal", function () {
      document.getElementById("overlay").style.display = "none"; // Hide the overlay
      pages.forEach(function (page, pageIndex) {
        if (pageIndex !== 0) {
          page.style.display = "none";
        }
      });
    });
  });
}
// for blurring on
function updateButtonText(button, pageTrack) {
  var pageNumberContainer = button.querySelector("p");
  pageNumberContainer.textContent = pageTrack + 1 + "/" + totalPages;
}

let blurOn = document.getElementById("overlay");
function backgroundBlur() {
  blurOn.style.display = "block";
}
document.getElementById("modal-open").addEventListener("click", function () {
  setTimeout(backgroundBlur, 100);
});

//for blurring off
let blurOff = document.getElementById("overlay");
function backgroundBlurOff() {
  blurOff.style.display = "none";
}

document.getElementById("close-btn").addEventListener("click", function () {
  setTimeout(backgroundBlurOff, 100);
});
document.querySelector(".close").addEventListener("click", () => {
  setTimeout(backgroundBlurOff, 100);
});
