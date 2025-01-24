<script lang="ts">
	import AerialAngleOption1 from '$lib/assets/Drone photo/Aerial Angle Option 1.jpg';
	import AerialAngleOption2 from '$lib/assets/Drone photo/Aerial Angle Option 2.jpg';
	import AerialAngleOption3 from '$lib/assets/Drone photo/Aerial Angle Option 3.jpg';
	import Dark001 from '$lib/assets/interiors/dark/001.jpg';
	import Dark002 from '$lib/assets/interiors/dark/002.jpg';
	import Dark003 from '$lib/assets/interiors/dark/003.jpg';
	import Light001 from '$lib/assets/interiors/light/001.jpg';
	import Light002 from '$lib/assets/interiors/light/002.jpg';
	import Light003 from '$lib/assets/interiors/light/003.jpg';
	import logo1 from '$lib/assets/logo1.png';
	import logo2 from '$lib/assets/logo2.png';
	import NE60 from '$lib/assets/Drone photo/NE 60 ft.jpg';
</script>

<div class="relative flex flex-col font-thin">
	<div class="flex flex-col px-2">
		<div
			class="absolute bottom-0 left-0 right-0 top-0 z-0 mx-auto h-[5rem] w-full bg-rose-gold"
		></div>
		<img alt="The project logo" src={AerialAngleOption2} class="z-10 h-[full] object-cover" />
		<div class="mb-[5em] mt-[8em] text-center text-rose-gold">
			<h2 class="text-3xl font-bold">
				"Live Beautifully, <br /> Live Kamilia."
			</h2>
			<p class="mt-2 text-xs font-thin">The Avenue At The Heart Of It All</p>
		</div>
		<div class="mx-auto flex gap-2 text-rose-gold">
			<h2 class="rotate-180 text-start text-3xl font-bold [writing-mode:vertical-lr]">Location</h2>
			<img
				alt="The project logo"
				src={AerialAngleOption3}
				class="mt-1 h-[35rem] w-[50%] grow object-cover"
			/>
		</div>
		<p class="my-10 text-center text-base font-light text-rose-gold">
			20675 Eastleigh Crescent Langley <br /> BC V3A 4C3 Canada
		</p>
	</div>
	<div class="relative flex">
		<img alt="The project logo" src={AerialAngleOption2} class="z-10 h-[full] object-cover px-3" />
		<div class="absolute bottom-0 h-[5rem] w-full bg-botanical" />
	</div>

	<div class="text-w color flex flex-col bg-botanical px-3 py-10 text-center text-white">
		<h2 class="mb-10 mt-4 text-center text-base font-medium">LIFESTYLE</h2>
		<p class="font-thin">
			Kamilia by Kingdom Property is an elegant new condominium nestled in the heart of Langley,
			offering a harmonious blend of modern design and timeless sophistication. Perfectly situated
			within moments of a future SkyTrain station, a prestigious university, and premier shopping
			destinations, Kamilia embodies effortless urban living. With its refined architecture and
			meticulously designed interiors, this exclusive residence invites you to experience a
			lifestyle of unparalleled convenience, style, and enduring value in Langley’s vibrant core.
			Prime LocationKamilia by Kingdom Property is perfectly situated in the heart of Langley,
			offering unmatched convenience and connectivity.
		</p>
	</div>
	<div class="px-3 pt-3">
		<div class="grid grid-cols-3 gap-1">
			<img alt="The project logo" src={Dark001} class="gallery-item1 aspect-square object-cover" />
			<img alt="The project logo" src={Dark002} class="aspect-square object-cover" />
			<img alt="The project logo" src={Dark003} class="aspect-square object-cover" />
		</div>
		<div class="mt-[0.25rem] grid grid-cols-3 gap-1">
			<img alt="The project logo" src={Light001} class="gallery-item2 aspect-square object-cover" />
			<img alt="The project logo" src={Light002} class="aspect-square object-cover" />
			<img alt="The project logo" src={Light003} class="aspect-square object-cover" />
		</div>
	</div>
	<hr class="mx-auto mt-10 h-[2px] w-full bg-neutral-900" />
	<div class="p-2 px-3">
		<h2 class="mb-10 mt-8 text-center text-base font-medium">About Us</h2>

		<img alt="The project logo" src={logo2} class="m-auto mb-5 w-[50%] object-cover" />
		<p class="text-center">
			Founded in 2015 by Anhui Jin Da Di Group, Kingdom Property Investment Ltd. (KPI) operates
			under the Canadian-based Kingdom Development Ltd. KPI excels in delivering high-quality
			construction management services, ensuring efficient project execution, optimized costs, and
			consistent client satisfaction. With a focus on professionalism and quality, KPI manages
			projects to meet and exceed expectations.
		</p>
		<img alt="The project logo" src={logo1} class="m-auto mb-10 mt-10 w-[50%] object-cover" />
		<p class="text-center">
			EverProsper Development is a forward-thinking property developer shaping residential and
			commercial spaces across Greater Vancouver. Focused on sustainability, innovation, and
			community, our projects combine exceptional design, quality construction, and prime locations
			to create lasting value. At EverProsper, we don’t just construct buildings; we craft
			environments that enrich lives.
		</p>
	</div>
	<hr class="mx-auto mt-10 h-[2px] w-full bg-neutral-900" />
</div>

<style>
	.gallery-item1 {
		grid-column: 2 / span 2;
		grid-row: 1 / span 2;
	}

	.gallery-item2 {
		grid-column: 1 / span 2;
		grid-row: 1 / span 2;
	}
</style>
