class SGTree {
    constructor(n) {
        this.seg = new Array(4 * n + 1);
    }

    build(ind, low, high, arr) {
        if (low === high) {
            this.seg[ind] = arr[low];
            return;
        }
        let mid = low + Math.floor((high - low) / 2);
        this.build(2 * ind + 1, low, mid, arr);
        this.build(2 * ind + 2, mid + 1, high, arr);
        this.seg[ind] = Math.min(this.seg[2 * ind + 1], this.seg[2 * ind + 2]);
    }

    query(ind, low, high, l, r) {
        if (high < l || r < low) return Infinity;
        if (low >= l && high <= r) return this.seg[ind];
        let mid = low + Math.floor((high - low) / 2);
        let left = this.query(2 * ind + 1, low, mid, l, r);
        let right = this.query(2 * ind + 2, mid + 1, high, l, r);
        return Math.min(left, right);
    }

    update(ind, low, high, i, val) {
        if (low === high) {
            this.seg[ind] = val;
            return;
        }
        let mid = low + Math.floor((high - low) / 2);
        if (i <= mid) this.update(2 * ind + 1, low, mid, i, val);
        else this.update(2 * ind + 2, mid + 1, high, i, val);
        this.seg[ind] = Math.min(this.seg[2 * ind + 1], this.seg[2 * ind + 2]);
    }
}

function solve() {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Enter n1: ', n1 => {
        n1 = parseInt(n1);
        rl.question('Enter array 1: ', arr1_input => {
            let arr1 = arr1_input.split(' ').map(Number);
            const sg1 = new SGTree(n1);
            sg1.build(0, 0, n1 - 1, arr1);

            rl.question('Enter n2: ', n2 => {
                n2 = parseInt(n2);
                rl.question('Enter array 2: ', arr2_input => {
                    let arr2 = arr2_input.split(' ').map(Number);
                    const sg2 = new SGTree(n2);
                    sg2.build(0, 0, n2 - 1, arr2);

                    rl.question('Enter q: ', q => {
                        q = parseInt(q);
                        (function askQueries(q) {
                            if (q === 0) {
                                rl.close();
                                return;
                            }

                            rl.question('Enter type: ', type => {
                                type = parseInt(type);
                                if (type === 1) {
                                    rl.question('Enter l1, r1, l2, r2: ', params => {
                                        let [l1, r1, l2, r2] = params.split(' ').map(Number);
                                        let mini1 = sg1.query(0, 0, n1 - 1, l1, r1);
                                        let mini2 = sg2.query(0, 0, n2 - 1, l2, r2);
                                        console.log(Math.min(mini1, mini2));
                                        askQueries(q - 1);
                                    });
                                } else {
                                    rl.question('Enter no, i, val: ', params => {
                                        let [no, i, val] = params.split(' ').map(Number);
                                        if (no === 1) {
                                            sg1.update(0, 0, n1 - 1, i, val);
                                            arr1[i] = val;
                                        } else {
                                            sg2.update(0, 0, n2 - 1, i, val);
                                            arr2[i] = val;
                                        }
                                        askQueries(q - 1);
                                    });
                                }
                            });
                        })(q);
                    });
                });
            });
        });
    });
}

export{
    solve,
}
