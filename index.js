let target1 = -1, target2 = -1, clickCount = 0;
let nums = new Array(
  -1987, -1978, -1963,  -1951,  -1936,  -1915, -1897, -1879,-1852,  -1825, -1798, -1789,  -1753,  -1741,  -1735, -1714, -1693, -1654,  -1645, -1639, -1591,  -1582,  -1573,  -1564, -1546, -1537, -1528,  -1519, -1471, -1465,  -1456,  -1417,  -1396, -1375, -1369, -1357,  -1321, -1312, -1285,  -1258,  -1231,  -1213, -1195, -1174, -1159,  -1147, -1132, -1123
);

const cell = document.querySelectorAll(".cell");
let result = document.querySelector("h2");

for (let i = 0; i < cell.length; i++) {
  cell[i].addEventListener("click", () => {
    clickCount++;
        if(clickCount % 2 != 0){
            //firstplayer turn
            target1 += cell[i].innerText;
            cell[i].classList.add("firstPlayer");
            if(hasWon(target1)){
                output(1);
            }else if(clickCount == 9){
                output(0);
            }
        }else{
            //secondplayer turn
            target2 += cell[i].innerText;
            cell[i].classList.add("secondPlayer");
            if(hasWon(target2)){
                output(2);
            }
        }
  });
}

function hasWon(x){
    if(binarySearch(nums, x) == -1){
        return false;
    }
    return true;
}
function output(x) {
  if (x == 1) {
    result.textContent = "RESULT : PLAYER1 WON";
  }else if(x == 2){
    result.textContent = "RESULT : PLAYER2 WON";
  }else{
    result.textContent = "RESULT : TIE";
  }
  reset();
}
function reset() {
  target1 = -1;
  target2 = -1;
  clickCount = 0;
  setTimeout(() => {
    result.textContent = "RESULT: ";
    for(let i = 0; i < cell.length; i++){
        cell[i].classList.remove("firstPlayer");
        cell[i].classList.remove("secondPlayer");
      }
  }, 1000);
}

function binarySearch(x, target) {
  let left = 0,right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    if (nums[mid] == target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}
