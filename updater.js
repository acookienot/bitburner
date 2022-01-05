const baseUrl = 'https://raw.githubusercontent.com/acookienot/bitburner/main/';
const url = path => `${baseUrl}${path}`;

async function getFile(ns, file) {
    await ns.wget(url(file), file);
}

export async function main(ns) {
    let files = [
        'test.js',
        /*'utils.js',
        'Inject.js',
        'Server.js',
        'Crack.js',
        'grow.js',
        'hack.js',
        'weaken.js',*/
        'updater.js'
    ];

    for (let file of files) {
        await getFile(ns, file);
    }
}