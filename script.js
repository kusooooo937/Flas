document.addEventListener("DOMContentLoaded", () => {
  const ruffle = window.RufflePlayer.newest();
  const player = ruffle.createPlayer();
  document.getElementById("flash-container").appendChild(player);

  // --------------------------------------------------
  // ① デフォルトSWFを起動
  // --------------------------------------------------
  

  // --------------------------------------------------
  // ② サイト内SWFを選んで起動
  // --------------------------------------------------
  document.getElementById("swfSelect").addEventListener("change", (e) => {
    const swfPath = e.target.value;
    player.load(swfPath);
  });

  // --------------------------------------------------
  // ③ 自分のファイルを読み込む
  // --------------------------------------------------
  document.getElementById("fileInput").addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file && file.name.endsWith(".swf")) {
      const url = URL.createObjectURL(file);
      player.load(url);
    }
  });

  // --------------------------------------------------
  // ④ ドラッグ＆ドロップ
  // --------------------------------------------------
  document.addEventListener("dragover", (e) => e.preventDefault());
  document.addEventListener("drop", (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.name.endsWith(".swf")) {
      const url = URL.createObjectURL(file);
      player.load(url);
    }
  });
});
