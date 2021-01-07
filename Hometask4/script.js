/*2*/
let timeout = null;

let input = document.createElement('input');
input.addEventListener('keyup', function (e) {
	timeout = setTimeout(() => console.log(e), 300);
});

/*1*/


class MyPromise {
	constructor(executor) {				
		this.status = "pending";
		// This array is used to store all the onResolve functions in the chaining call
		this.resolveArr = [];
		// This array is used to store all onReject functions in the call chain
		this.rejectArr = [];
		// Since the decision function and the rejection function have a lot of code logic in common
		//general logic is written as a separate change function
		let change = (status, value) => {
			if (this.status !== "pending") return;
			this.status = status;
			this.value = value;
			// Handlers are selected based on the current state of the Promise
			let fnArr = status === "resolved" ? this.resolveArr : this.rejectArr;
			fnArr.forEach(item => {
				if (typeof item !== "function") return;
				item(this.value);
			})
		}
		let resolve = result => {
			change("resolved", result)
		}
		let reject = reason => {
			change("rejected", reason);
		}
		try {
			executor(resolve, reject)
		} catch (err) {
			reject(err)
		}
	}
	catch(rejectFn) {
		return this.then(null, rejectFn)
	}
	then(resolveFn, rejectFn) {
		//If the two passed arguments are not functions, the result is returned directly

		if (typeof resolveFn !== "function") {
			resolveFn = result => {
				return result;
			}
		}
		if (typeof rejectFn !== "function") {
			rejectFn = reason => {
				return MyPromise.reject(reason);
			}
		}
		return new MyPromise((resolve, reject) => {
			this.resolveArr.push(result => {
				try {
					// Get the result after successfully fulfilling the promise
					let x = resolveFn(result);
					// If x is a promise instance, the call to the `.then` method continues
					if (x instanceof MyPromise) {
						x.then(resolve, reject)
						return;
					}
					resolve(x);
				} catch (err) {
					reject(err)
				}
			})
			this.rejectArr.push(reason => {
				try {
					let x = rejectFn(reason);
					if (x instanceof MyPromise) {
						x.then(resolve, reject)
						return;
					}
					resolve(x);
				} catch (err) {
					reject(err)
				}
			})
		})
	}
	finally(finallyFn) {
		let P = this.constructor;
		return this.then(
			value => P.resolve(finallyFn()).then(() => value),
			reason => P.reject(finallyFn()).then(() => reason)
		)
	}
	static resolve(result) {
		return new MyPromise(resolve => {
			resolve(result)
		})
	}
	static reject(reason) {
		return new MyPromise((_, reject) => {
			reject(reason);
		})
	}
}