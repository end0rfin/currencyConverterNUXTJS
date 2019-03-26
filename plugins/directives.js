import Vue from 'vue'

// Vue.directive('demo', {
// 			bind (el, binding, vnode, oldVnode) {
// 				console.log('bind    demo');
// 				console.log(this);
// 				el.style.color = "red";
// 			}
// 	});


// Vue.directives = {
// 	demo: {
// 		inserted() {
// 			alert('inserted');
// 		},
// 		bind (el, binding, vnode, oldVnode) {
// 			console.log('bind    demo');
// 			console.log(this);
// 			el.style.color = "red";
// 		}
// 	}
// };

Vue.mixin({
	directives: {
		demo: {
			inserted() {
				console.log('inserted');
			},
			bind (el, binding, vnode, oldVnode) {
				console.log('bind    demo');
				let input = el.getElementsByTagName('input')[0];
				// console.log(vnode);
				input.style.color = "red";
				binding.value = '11111';
			},
			update(e) {
				let input = e.getElementsByTagName('input')[0];
				input.value = '9000000';
				console.log('update');
				// console.log(input.value);
				
				return '999999';
			}
		}
	},
	methods: {
		demo(v) {
			console.log('CALLING metohods')
		}
	}
})