<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Storm Trainer Oficial V2</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #181818;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
    .container {
      display: flex;
      background-color: #202020;
      border-radius: 10px;
      overflow: hidden;
      width: 600px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
    }
    .title {
      text-align: center;
      padding: 10px;
      background-color: #333;
      width: 100%;
    }
    .sidebar {
      width: 150px;
      background-color: #333;
      padding: 10px;
      display: flex;
      flex-direction: column;
    }
    .menu-btn {
      background: #444;
      border: none;
      color: white;
      padding: 10px;
      margin: 5px 0;
      border-radius: 5px;
      text-align: left;
      cursor: pointer;
      font-size: 14px;
    }
    .menu-btn:hover {
      background: #555;
    }
    .main {
      flex-grow: 1;
      padding: 20px;
    }
    label {
      display: block;
      margin-top: 10px;
      font-size: 14px;
    }
    select {
      width: 100%;
      padding: 8px;
      margin-top: 5px;
      border: 1px solid #555;
      border-radius: 5px;
      background: #444;
      color: white;
    }
    .refresh-btn {
      margin-top: 15px;
      padding: 10px;
      background: #444;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    .refresh-btn:hover {
      background: #555;
    }
    .checkbox-group {
      margin-top: 20px;
    }
    .checkbox-group label {
      display: block;
      margin-bottom: 10px;
    }
    input[type="checkbox"] {
      margin-right: 10px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="sidebar">
      <button class="menu-btn">PVP</button>
      <button class="menu-btn">Potência</button>
      <button class="menu-btn">Trolls</button>
      <button class="menu-btn">Crashs</button>
      <button class="menu-btn">XP</button>
      <button class="menu-btn">Construções</button>
      <button class="menu-btn">Bazookas</button>
      <button class="menu-btn">Setting</button>
    </div>
    <div class="main">
      <h3>Main</h3>
      <label for="weapon-select">Selecionar Arma</label>
      <select id="weapon-select">
        <option>Impulse Gun</option>
        <option>Rail Gun</option>
        <option>Bazookas</option>
      </select>

      <div class="checkbox-group">
        <label><input type="checkbox"> Tiro = Kick</label>
        <label><input type="checkbox"> Voar com armas</label>
        <label><input type="checkbox"> Auto Equip</label>
      </div>

      <button class="refresh-btn">Reiniciar Arma</button>
    </div>
  </div>
</body>
</html>
