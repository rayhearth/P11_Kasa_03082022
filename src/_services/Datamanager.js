import data from '@/api/data.json'

const AllAppart = () => {
    return data.map((lgt) => {
        return {
            id: lgt.id,
            title: lgt.title,
            cover: lgt.cover
        }
    })
}

const AppartById = (id) => {
    return data.filter((lgt) => lgt.id === id)[0]
}

export {
    AllAppart,
    AppartById
}
