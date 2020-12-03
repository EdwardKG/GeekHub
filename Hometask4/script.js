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
		this.value = undefined;
		// Этот массив используется для хранения всех функций onResolve в вызове цепочки
		this.resolveArr = [];
		// Этот массив используется для хранения всех функций onReject в цепочке вызовов
		this.rejectArr = [];
		// Поскольку функция решения и функция отклонения имеют много общего логики кода
		//общая логика записана как отдельная функция изменения
		let change = (status, value) => {
			if (this.status !== "pending") return;
			this.status = status;
			this.value = value;
			// Обработчики выбираются на основе текущего состояния Promise
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
		//Если два переданных аргумента не являются функциями, результат возвращается напрямую

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
					// Получите результат после успешного выполнения promise
					let x = resolveFn(result);
					// Если x является экземпляром promise, продолжается вызов метода `.then`
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