<template>
	<div>
		<div class="w-screen bg-opacity-90 bg-white p-4 lg:px-20 flex justify-between z-50 absolute top-0">
			<!-- Logo start -->
			<nuxt-link to="/" class="h-full flex">
				<img class="h-[50px] mr-2" src="@/assets/logo2.png" alt="" />
				<div class="flex flex-col justify-center">
					<p class="tracking-widest font-semibold text-yellow-400">方生糖</p>
					<p class="tracking-widest font-light">Designer Helper</p>
				</div>
			</nuxt-link>
			<button role="menubar" class="md:hidden" @click="navToggle()">
				<i class="fa-solid fa-bars text-2xl"></i>
			</button>
			<div
				class="absolute left-0 right-0 translate-y-16 bg-opacity-90 bg-white md:bg-none md:bg-opacity-0 shadow hidden md:flex flex-col gap-4 items-center p-4 md:flex-row md:static md:shadow-none md:translate-y-0"
				role="menu" aria-expanded="false">
				<div class="relative" @mouseenter="showDropdown" @mouseleave="hideDropdown">
					<button class="mx-4 cursor-pointer">室內攝影</button>
					<div v-if="isDropdownOpen" class="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">	
							<a href="#services-section" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
								關於
							</a>
							<nuxt-link to="/new-home" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
								新居婚紗
							</nuxt-link>
							<nuxt-link to="/term-of-service" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
								服務問答
							</nuxt-link>
					</div>
				</div>

				<a class="btn" role="menuitem" href="https://mail.google.com/mail/?view=cm&fs=1&to=funsugar8119@gmail.com&body=詢問方生糖:"
					target="_blank">
					攝影預約
				</a>
				<!-- <template v-if="route === '/'" >
					<a href="https://www.youtube.com/playlist?list=PLq6qa78AJYu1EK2Ko56KHSnGIjJwmlg4U" target="_blank" role="menuitem">
						<p class="mx-4">引流獲客</p>
					</a>
				</template> -->
			</div>
			<transition name="fade" mode="out-in">
				<div class="modal-overlay absolute w-[120vw] h-[120vh] z-5" v-if="showModal" @click="showModal = false"></div>
			</transition>
			<transition name="fade" mode="out-in" v-if="showModal">
				<CommissionForm />
			</transition>
		</div>
	</div>
</template>

<script>
import CommissionForm from "@/components/Dialog/CommissionForm";

export default {
	name: "Navbar",
		data() {
		return {
			showModal: false,
			isDropdownOpen: false,
			dropdownTimeout: null,
		};
	},
	components: {
		CommissionForm,
	},
	computed: {
		route() {
			return this.$route.path;
		},
	},
	methods: {
				showDropdown() {
			clearTimeout(this.dropdownTimeout);
			this.isDropdownOpen = true;
		},
		hideDropdown() {
			this.dropdownTimeout = setTimeout(() => {
				this.isDropdownOpen = false;
			}, 200); // 200ms delay before closing
		},
		// Toogle navbar mode 
		navToggle() {
			let menu = document.querySelector("[role='menu']");
			let isExpanded = menu.getAttribute('aria-expanded');
			menu.setAttribute('aria-expanded', !isExpanded);
			menu.classList.toggle('hidden');
			menu.classList.toggle('flex');
		},
	}
}
</script>

<style scoped>
.modal-overlay {
	margin-left: -80px;
	margin-top: -20px;
	background-color: rgba(0, 0, 0, 0.3);
}</style>