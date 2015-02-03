class Injectable {

    static set $inject(val) {
        this._$inject = this.prototype.$inject = val;
    }

    static get $inject() {
        return this._$inject || [];
    }

    constructor(...args) {
        this.$inject.forEach((dep, idx) => {
          if (args.length < idx - 1) {
            throw new Error(`could not read ${dep} - no more arguments passed`);
          }
          // Fat arrow modifies the context of 'this' to match the lexical scope.
          this[dep] = args[idx];
        });
    }
}

export default Injectable;
