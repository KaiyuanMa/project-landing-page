<script lang="ts">
	// import Hero from '$lib/assets/hero.jpg';
	import Hero_Low from '$lib/assets/hero_low.jpg';
	import Logo from '$lib/assets/logo.png';

	let imageLoaded = false;
</script>

<div class="relative flex px-3 pb-10 pt-3">
	<img
		alt="The project hero placeholder"
		src={Hero_Low}
		class={`z-10 h-[500px] object-cover transition-opacity duration-500 lg:h-auto`}
	/>

	<!-- Logo -->
	<img
		alt="The project logo"
		src={Logo}
		class="absolute left-0 right-0 top-16 z-20 mx-auto h-[150px] object-cover lg:h-[250px]"
	/>

	<!-- Background color at the bottom -->
	<div
		class="absolute bottom-0 left-0 right-0 z-0 mx-auto h-[40%] w-full bg-rose-gold object-cover"
	></div>
</div>
