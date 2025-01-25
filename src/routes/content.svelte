<script lang="ts">
	import AerialAngleOption3 from '$lib/assets/Drone photo/Aerial Angle Option 3.jpg';
	import Dark001 from '$lib/assets/interiors/dark/001.jpg';
	import Dark008 from '$lib/assets/interiors/dark/008.jpg';
	import Dark007 from '$lib/assets/interiors/dark/007.jpg';
	import Light001 from '$lib/assets/interiors/light/001.jpg';
	import Light008 from '$lib/assets/interiors/light/008.jpg';
	import Light009 from '$lib/assets/interiors/light/009.jpg';
	import logo1 from '$lib/assets/logo1.png';
	import logo2 from '$lib/assets/logo2.png';
	import LifeStyle from '$lib/assets/life-style.jpg';
</script>

<div class="relative flex flex-col justify-center overflow-hidden font-thin">
	<div class="flex flex-col px-3">
		<div class="mb-[5em] mt-[5em] text-center text-rose-gold">
			<h2 class="text-3xl font-bold leading-10 md:text-5xl md:leading-[4rem]">
				Live <br />Beautifully<br /> Live<br /> Kamilia
			</h2>
		</div>
		<div class="mx-auto flex max-w-[880px] justify-center gap-2 text-rose-gold">
			<h2 class="avenir rotate-180 text-start text-3xl font-bold [writing-mode:vertical-lr]">
				Location
			</h2>
			<img
				alt="The project logo"
				src={AerialAngleOption3}
				class="mt-1 h-[35rem] max-w-[90%] grow rounded-md object-cover"
			/>
		</div>
		<p class="mx-auto my-10 max-w-[850px] px-2 text-justify text-lg font-light text-rose-gold">
			Kamilia is perfectly situated in the heart of Langley, offering unmatched convenience and
			connectivity. Just steps away from the future SkyTrain station, residents will enjoy
			effortless travel to surrounding areas and beyond. Proximity to a nearby university enhances
			the area’s vibrancy, while premier shopping destinations, dining options, and entertainment
			venues are all within easy reach. This prime location combines urban energy with the charm of
			Langley’s tree- lined streets, making it an address of unparalleled desirability.
		</p>
	</div>
	<div class="relative">
		<div class="mx-auto flex max-w-[900px] justify-center gap-2 px-3 text-white">
			<h2 class="avenir rotate-180 text-start text-3xl font-bold [writing-mode:vertical-lr]">
				lifestyle
			</h2>
			<img
				alt="The project logo"
				src={LifeStyle}
				class="mt-1 h-[35rem] max-w-[90%] grow rounded-md object-cover"
			/>
		</div>
		<div class="absolute bottom-0 -z-10 h-[13.5rem] w-full bg-botanical" />
	</div>
	<div class="bg-botanical px-5 text-white">
		<p class="mx-auto my-10 max-w-[850px] px-2 text-justify text-lg font-light">
			Designed to elevate everyday living, Kamilia offers more than just a home—it’s a gateway to a
			dynamic and fulfilling lifestyle. Surrounded by vibrant city life and serene green spaces,
			residents can seamlessly balance work, leisure, and relaxation. Whether you’re exploring
			nearby parks, savoring local cuisine, or indulging in high-end retail experiences, Kamilia
			places you at the center of it all.
		</p>
	</div>
	<div class="mx-auto mt-10 max-w-[850px] px-3 pt-3">
		<div class="grid grid-cols-3 gap-1">
			<img alt="The project logo" src={Dark001} class="gallery-item1 aspect-square object-cover" />
			<img alt="The project logo" src={Dark007} class="aspect-square rounded-md object-cover" />
			<img alt="The project logo" src={Dark008} class="aspect-square rounded-md object-cover" />
		</div>
		<div class="mt-[0.25rem] grid grid-cols-3 gap-1">
			<img
				alt="The project logo"
				src={Light001}
				class="gallery-item2 aspect-square rounded-md object-cover"
			/>
			<img alt="The project logo" src={Light009} class="aspect-square rounded-md object-cover" />
			<img alt="The project logo" src={Light008} class="aspect-square rounded-md object-cover" />
		</div>
	</div>
	<hr class="mx-auto mt-10 h-[2px] w-full bg-pebble lg:max-w-[850px]" />
	<div class="p-2 px-3">
		<h2 class="mb-10 mt-8 text-center text-3xl font-bold text-botanical">About Us</h2>

		<img
			alt="The project logo"
			src={logo2}
			class="m-auto mb-5 w-[50%] max-w-[20rem] object-cover"
		/>
		<div class="">
			<p class="mx-auto max-w-[50rem] px-2 text-justify">
				Founded in 2015 by Anhui Jin Da Di Group, Kingdom Property Investment Ltd. (KPI) operates
				under the Canadian-based Kingdom Development Ltd. KPI excels in delivering high-quality
				construction management services, ensuring efficient project execution, optimized costs, and
				consistent client satisfaction. With a focus on professionalism and quality, KPI manages
				projects to meet and exceed expectations.
			</p>
			<img
				alt="The project logo"
				src={logo1}
				class="m-auto mb-10 mt-10 w-[50%] max-w-[20rem] object-cover"
			/>
			<p class="mx-auto max-w-[50rem] px-2 text-justify">
				EverProsper Development is a forward-thinking property developer shaping residential and
				commercial spaces across Greater Vancouver. Focused on sustainability, innovation, and
				community, our projects combine exceptional design, quality construction, and prime
				locations to create lasting value. At EverProsper, we don’t just construct buildings; we
				craft environments that enrich lives.
			</p>
			<p class="mx-auto w-full px-2 text-justify"></p>
		</div>
	</div>
	<hr class="mx-auto mt-10 h-[2px] w-full bg-pebble lg:max-w-[850px]" />
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

	.avenir {
		font-family: 'Avenir', sans-serif;
	}
</style>
