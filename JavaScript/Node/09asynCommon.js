async function p1() {
    return "p1 is here"
}

p1().then((r1) => {
        console.log(r1);
    }

)

async function p2() {
    return "p2"
}

async function p3() {
    return 'p3'
}

async function run() {
    let t1 = await p1();
    let t2 = await p2();
    let t3 = await p3();
    console.log(t1);
    console.log(t2);
    console.log(t3);
}

run();