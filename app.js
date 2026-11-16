// 창구 대기 계산기: M/M/1 대기행렬 공식
const button = document.getElementById("calc");
const result = document.getElementById("result");

button.addEventListener("click", () => {
  const arrival = Number(document.getElementById("arrival").value);
  const service = Number(document.getElementById("service").value);

  const lambda = 1 / arrival; // 1분에 도착하는 손님 수
  const mu = 1 / service;     // 1분에 처리하는 손님 수
  const rho = lambda / mu;    // 창구가 바쁜 비율 (가동률)

  if (rho >= 1) {
    result.textContent = "처리 시간이 도착 간격보다 길어 줄이 끝없이 늘어나는 상태";
    return;
  }

  const wait = rho / (mu - lambda); // 평균 대기 시간 (분)

  result.innerHTML =
    "가동률: " + (rho * 100).toFixed(1) + "%<br>" +
    "평균 대기 시간: " + wait.toFixed(1) + "분";
});
