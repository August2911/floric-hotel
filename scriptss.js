<script>
		// JavaScript to toggle class on scroll
		window.addEventListener("scroll", function () {
			const navbar = document.querySelector(".navbar");
			if (window.scrollY > 50) { // Adjust scroll threshold as needed
				navbar.classList.add("scrolled");
			} else {
				navbar.classList.remove("scrolled");
			}
		});
	</script>

<script>
    // JavaScript to toggle sticky class on scroll
    window.addEventListener("scroll", function() {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > 600) { // Adjust this value to the desired scroll point
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    });
  </script>