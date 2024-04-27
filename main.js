(function() {
    'use strict';
    function createButton(fontColor = '(235, 101, 0, 1)', backColor = '(228, 229, 229, 0.5)') {
    var button = document.createElement('button');
    button.innerHTML = 'Full?';
    button.style.cssText = `position: fixed; top: 5px; left: 50%; transform: translateX(-50%); padding: 5px 5px; background-color: rgba${backColor}; color: rgba${fontColor}; border: none; border-radius: 10px; cursor: pointer; z-index: 9999; font-family: "Times New Roman", Times, serif; font-size: 16px; `;
    document.body.appendChild(button);
    return button
    }
    let button = createButton();
    let isZeroZeroOne = true;
    button.addEventListener('click', function () {
        if (isZeroZeroOne) {
          document.querySelector("div.sidesheet-container").style.cssText = "display: grid; grid-template-columns: 0fr 1fr;"; 
          document.querySelector("div:nth-child(2) > div > div > div > div > div").style.cssText = 'display: none;';
          document.querySelector("div:nth-child(2) > div > div > div > div > div.aSIvzUFX9dAs4AK6bTj0 > div.sidesheet-container.qrPNrOyVEBA326VHThBn > div.GgZHQbhCPZYqXVil_nkc.yXFrvezYn_4mi6bhSzMN > div.PSi8HVjhxY0hsgUZGaKG.MWPtuVYYnlMYfpAdNbLa").style.cssText = 'display: none;';
        } else {
          document.querySelector("div.sidesheet-container").style.cssText = "display: grid; grid-template-columns: 26fr 14fr;"; 
          document.querySelector("div:nth-child(2) > div > div > div > div > div").style.cssText = 'display: flex;';
          document.querySelector("div:nth-child(2) > div > div > div > div > div.aSIvzUFX9dAs4AK6bTj0 > div.sidesheet-container.qrPNrOyVEBA326VHThBn > div.GgZHQbhCPZYqXVil_nkc.yXFrvezYn_4mi6bhSzMN > div.PSi8HVjhxY0hsgUZGaKG.MWPtuVYYnlMYfpAdNbLa").style.cssText = 'display: flex;';
        }
        isZeroZeroOne = !isZeroZeroOne;
    });
})();
