document.addEventListener("DOMContentLoaded", () => {
  const ruffle = window.RufflePlayer.newest();
  const player = ruffle.createPlayer();
  document.getElementById("flash-container").appendChild(player);

  // 直接URL指定でSWFを読み込む場合
  // player.load("swf/mygame.swf");

  // ドラッグ&ドロップ対応
  document.addEventListener("dragover", (e) => e.preventDefault());
  document.addEventListener("drop", (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if(file && file.name.endsWith(".swf")) {
      const url = URL.createObjectURL(file);
      player.load(url);
    } else {
      alert("SWFファイルをドロップしてください");
    }
  });

  // ファイル選択で読み込む
  document.getElementById("fileInput").addEventListener("change", (e) => {
    const file = e.target.files[0];
    if(file && file.name.endsWith(".swf")) {
      const url = URL.createObjectURL(file);
      player.load(url);
    }
  });
});
