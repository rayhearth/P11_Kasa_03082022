import data from '../../public/api/data.json'

const AllAppart = () => {
    return data.map((d) => {
        return {
            id: data.id,
            title: data.title,
            cover: data.cover
        }
    })
}

const AppartById = (id) => {
    return data.filter((d) => d.id === id)[0]
}

export {
    AllAppart,
    AppartById
}
