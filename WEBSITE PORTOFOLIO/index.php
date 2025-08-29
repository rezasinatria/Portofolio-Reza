<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Reza Sinatria</title>

  <!-- Tailwind CSS -->
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@3.3.2/dist/tailwind.min.css" rel="stylesheet" />

  <!-- Font Awesome -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />

  <!-- Custom CSS -->
  <link rel="stylesheet" href="./CSS/style.css" />
  <link rel="stylesheet" href="./CSS/about.css">
  <link rel="stylesheet" href="./CSS/project.css">
  <link rel="stylesheet" href="./CSS/achievement.css">
  <link rel="stylesheet" href="./CSS/contact.css">

  <!-- AOS CSS -->
  <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
  <script src="https://kit.fontawesome.com/your-fontawesome-key.js" crossorigin="anonymous"></script>

</head>

<body>
  <!-- ===== Navbar Section ===== -->
  <header class="navbar">
    <div class="logo"><i class="fa-solid fa-code"></i> Reza Sinatria</div>
    <nav>
      <ul>
        <li><a href="#home" class="active"><i class="fa-solid fa-house"></i> Home</a></li>
        <li><a href="#about"><i class="fa-solid fa-user"></i> About</a></li>
        <li><a href="#projects"><i class="fa-solid fa-diagram-project"></i> Projects</a></li>
        <li><a href="#achievements"><i class="fa-solid fa-trophy"></i> Achievements</a></li>
        <li><a href="#contact"><i class="fa-solid fa-envelope"></i> Contact</a></li>
      </ul>
    </nav>
  </header>

  <!-- ===== Content Sections (Include) ===== -->
  <main>
    <?php include "PHP/home.php"; ?>
    <?php include "PHP/about.php"; ?>
    <?php include "PHP/project.php"; ?>
    <?php include "PHP/achievements.php"; ?>
    <?php include "PHP/contact.php"; ?>
  </main>

  <!-- ===== Scripts ===== -->
  <script src="./JS/main.js"></script>
  <script src="./JS/achievement.js"></script>
  <script src="./JS/project.js"></script>
</body>

</html>