async function task(x) {
    let result = await x.name;
    result = String(result) + '465778';
    return Promise.resolve(result);
}
