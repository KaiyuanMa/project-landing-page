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
</script>

<div class="flex flex-col gap-3 font-thin">
	<hr class="mx-auto mt-10 h-[2px] w-full bg-neutral-900" />
	<div class="p-2">
		<h2 class="mb-10 mt-8 text-center text-base font-medium">01. Title One</h2>
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
		<img alt="The project logo" src={AerialAngleOption2} class="mt-10 h-[full] object-cover" />
		<img alt="The project logo" src={AerialAngleOption3} class="mt-1 h-[full] object-cover" />
	</div>
	<hr class="mx-auto mt-10 h-[2px] w-full bg-neutral-900" />
	<div class="p-2">
		<h2 class="mb-10 mt-8 text-center text-base font-medium">02. Title Two</h2>
		<p>
			Just steps away from the future SkyTrain station, residents will enjoy effortless travel to
			surrounding areas and beyond. Proximity to a nearby university enhances the area’s vibrancy,
			while premier shopping destinations, dining options, and entertainment venues are all within
			easy reach. This prime location combines urban energy with the charm of Langley’s tree-lined
			streets, making it an address of unparalleled desirability. Elevated LifestyleDesigned to
			elevate everyday living, Kamilia offers more than just a home—it’s a gateway to a dynamic and
			fulfilling lifestyle.
		</p>
		<div class="grid grid-cols-3 gap-1">
			<img alt="The project logo" src={Dark001} class="gallery-item1 aspect-square object-cover" />
			<img alt="The project logo" src={Light002} class="aspect-square object-cover" />
			<img alt="The project logo" src={Dark003} class="aspect-square object-cover" />
		</div>
		<div class="mt-[0.25rem] grid grid-cols-3 gap-1">
			<img alt="The project logo" src={Light001} class="gallery-item2 aspect-square object-cover" />
			<img alt="The project logo" src={Dark002} class="aspect-square object-cover" />
			<img alt="The project logo" src={Light003} class="aspect-square object-cover" />
		</div>
	</div>
	<hr class="mx-auto mt-10 h-[2px] w-full bg-neutral-900" />
	<div class="p-2">
		<h2 class="mb-10 mt-8 text-center text-base font-medium">03. Title Three</h2>
		<p>
			Surrounded by vibrant city life and serene green spaces, residents can seamlessly balance
			work, leisure, and relaxation. Whether you’re exploring nearby parks, savoring local cuisine,
			or indulging in high-end retail experiences, Kamilia places you at the center of it all.
			Contemporary DesignKamilia embodies modern elegance with its refined architectural lines and
			sophisticated interiors. Each home is thoughtfully designed with a focus on natural light,
			clean aesthetics, and functional layouts. High-quality finishes and meticulous craftsmanship
			create a timeless yet contemporary living environment that blends comfort and style
			effortlessly.
		</p>
		<div class="mt-5">
			<div class="flex items-center justify-center gap-1 overflow-hidden">
				<img alt="The project logo" src={AerialAngleOption2} class="h-[150px] object-cover" />
				<img alt="The project logo" src={AerialAngleOption3} class="h-[150px] object-cover" />
			</div>
			<img
				alt="The project logo"
				src={AerialAngleOption1}
				class="mt-[0.25rem] h-[150px] object-cover"
			/>
		</div>
	</div>
	<hr class="mx-auto mt-10 h-[2px] w-full bg-neutral-900" />
	<div class="p-2">
		<h2 class="mb-10 mt-8 text-center text-base font-medium">About Us</h2>

		<img alt="The project logo" src={logo2} class="m-auto mb-5 w-[50%] object-cover" />
		<p>
			Founded in 2015 by Anhui Jin Da Di Group, Kingdom Property Investment Ltd. (KPI) operates
			under the Canadian-based Kingdom Development Ltd. KPI excels in delivering high-quality
			construction management services, ensuring efficient project execution, optimized costs, and
			consistent client satisfaction. With a focus on professionalism and quality, KPI manages
			projects to meet and exceed expectations.
		</p>
		<img alt="The project logo" src={logo1} class="m-auto mb-10 mt-10 w-[50%] object-cover" />
		<p>
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
