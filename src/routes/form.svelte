<script lang="ts">
	import emailjs from '@emailjs/browser';
	import { onMount } from 'svelte';
	let form: HTMLFormElement;
	let submitted = false;

	const sendEmail = (e: { preventDefault: () => void }) => {
		e.preventDefault();

		emailjs
			.sendForm('service_reblkch', 'template_91r705j', form, import.meta.env.VITE_EMAILJSTOKEN)
			.then(
				(result) => {
					console.log(result.text);
					submitted = true;
				},
				(error) => {
					console.log(error);
				}
			);
	};
</script>

<div
	class="flex flex-col items-center justify-center gap-5 bg-rose-gold pb-10 font-extrabold text-white md:gap-10 md:py-20"
>
	<form
		bind:this={form}
		on:submit={sendEmail}
		class="flex w-[80%] flex-col items-center justify-center"
	>
		<div class="z-10 flex w-full flex-col gap-5 md:max-w-[50rem] md:gap-10">
			<h1 class="text-2xl font-medium md:text-center">Register Now</h1>
			<div class="flex w-full flex-col gap-5 md:flex-row md:justify-between md:gap-10">
				<div class="md:w-1/2">
					<label for="guest_first_name">First Name*</label>
					<input class="formInput" type="text" name="guest_first_name" required />
				</div>
				<div class="md:w-1/2">
					<label for="guest_last_name">Last Name*</label>
					<input class="formInput" type="text" name="guest_last_name" required />
				</div>
			</div>
			<div class="flex w-full flex-col gap-5 md:flex-row md:justify-between md:gap-10">
				<div class="md:w-1/2">
					<label for="guest_email">Email*</label>
					<input class="formInput" type="email" name="guest_email" required />
				</div>
				<div class="md:w-1/2">
					<label for="guest_phone_number">Phone Number*</label>
					<input class="formInput" type="text" name="guest_phone_number" required />
				</div>
			</div>
			<div class="flex w-full flex-col gap-5 md:flex-row md:justify-between md:gap-10">
				<div class="md:w-1/2">
					<label for="guest_postal_code">Postal Code</label>
					<input class="formInput" type="text" name="guest_postal_code" />
				</div>
				<div class="md:w-1/2">
					<label for="guest_postal_code">How did you hear about us?</label>
					<select class="formInput" name="hear_about_us">
						<option value="" class="text-gray-200" disabled selected> Please Select </option>
						<option value="Google/Search Engine" class="text-gray-200">
							Google/Search Engine
						</option>
						<option value="Social Media" class="text-gray-200"> Social Media </option>
						<option value="Friend/Family Referral" class="text-gray-200">
							Friend/Family Referral
						</option>
						<option value="Online Ads" class="text-gray-200"> Online Ads </option>
						<option value="Event or Community Outreach" class="text-gray-200">
							Event or Community Outreach
						</option>
						<option value="Other" class="text-gray-200"> Other </option>
					</select>
				</div>
			</div>
			<div class="flex w-full flex-col gap-5 md:flex-row md:justify-between md:gap-10">
				<div class="md:w-1/2">
					<label for="guest_postal_code">Are you a Realtor?</label>
					<select class="formInput" name="is_realtor">
						<option value="" disabled selected>Please Select</option>
						<option value="yes">Yes</option>
						<option value="no">No</option>
					</select>
				</div>
				<div class="md:w-1/2">
					<label for="guest_postal_code">Are you working with a Realtor?</label>
					<select class="formInput" name="is_working_with_realtor">
						<option value="" disabled selected>Please Select</option>
						<option value="yes">Yes</option>
						<option value="no">No</option>
					</select>
				</div>
			</div>
			<button
				type="submit"
				class="mx-auto mt-5 w-fit border-b border-white font-medium uppercase tracking-wider"
				disabled={submitted}
			>
				{submitted ? 'success' : 'submit'}
			</button>
		</div>
	</form>
</div>

<style>
	.formInput {
		padding: 10px;
		background-color: transparent;
		border: 1px solid white;
		outline: none;
		width: 100%;
		height: 2.5rem;
	}
</style>
