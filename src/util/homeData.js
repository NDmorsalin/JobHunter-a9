const fetchData = async (url) => {
    const req = await fetch(url);
    const data = await req.json()

    return data
}

const homeData = async () => {
    const jobsData = await fetchData('/jobs.json')
    const categories = await fetchData('/category.json')

    return { jobsData, categories }
}


export { homeData }