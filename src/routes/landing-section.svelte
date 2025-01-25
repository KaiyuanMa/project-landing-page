<script lang="ts">
	import Hero from '$lib/assets/hero.jpg';
	import Logo from '$lib/assets/logo.png';
</script>

<div class="relative flex px-3 pb-10 pt-3">
	<img alt="The project logo" src={Hero} class="z-10 h-[500px] object-cover lg:h-auto" />
	<img
		alt="The project logo"
		src={Logo}
		class="absolute left-0 right-0 top-16 z-20 mx-auto h-[150px] object-cover lg:h-[250px]"
	/>
	<div
		class="absolute bottom-0 left-0 right-0 z-0 mx-auto h-[40%] w-full bg-rose-gold object-cover"
	></div>
</div>
